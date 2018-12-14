jQuery()
function jqueryStud() {
    let userID = $('[name="jqSurname"]');
    let faculty = $('[name="jqFaculty"]');
    let age = $('[name="jqAge"]');
    let course = $('[name="jqCourse"]');
    let phoneNum = $('[name="jqPhoneNum"]');
    let table = $('#jqStudentsTable');
    let saveButton = $('[name="jqSaveButton"]');
    let cancelButton = $('[name="jqCancelButton"]');
    let form = $('#jqStudentsForm');
    let triggerObj = {};
    let id = 1;
    let localJSON;

    $('#jqStudentsTable thead').after('<tbody> </tbody>');
    $('#jqStudentsTable tbody').after('<tfoot> </tfoot>');
    if (localStorage.getItem('studentsTable')) {
        JSON.parse(localStorage.getItem('studentsTable')).forEach(function(item, i) {
            $('#jqStudentsTable tbody').append('<tr><td>'+ id++ +'</td> </tr>');
            for (key in item) {
                $('#jqStudentsTable tbody tr:last').append('<td>' + item[key] + '</td>');
            }
        })
    } else {
        localStorage.setItem('studentsTable', '[]');
    }
    
    saveButton.on('click', buildTable);
    function buildTable() {
        let storageObj = {};
        $('#jqStudentsTable tbody').append('<tr><td>'+ id++ +'</td> </tr>');
        for (var i = 0; i < form.children().length; i++) {
            storageObj[form.children()[i].name] = form.children()[i].value;
            $('#jqStudentsTable tbody tr:last').append('<td>' + form.children()[i].value + '</td>');
        }
        
        localJSON = JSON.parse(localStorage.getItem('studentsTable'));
        localJSON.push(storageObj);
        localStorage.setItem('studentsTable', JSON.stringify(localJSON));
    }
    cancelButton.click(() => {
        form.find('input').val('');
    })

    $('#jqStudentsTable tr:eq(0)').click((event) => {
        let method = event.target.getAttribute('typeOfSort');
        let newarr = JSON.parse(localStorage.getItem('studentsTable'));
        newarr.sort((a, b) => {
            if(a[method] < b[method]) { return -1; };
            if(a[method] > b[method]) { return 1; };
            return 0;
        })
        $('#jqStudentsTable tbody').html('')
        id = 1;
        newarr.forEach(function(item, i) {
            $('#jqStudentsTable tbody').append('<tr><td>'+ id++ +'</td> </tr>');
            for (key in item) {
                $('#jqStudentsTable tbody tr:last').append('<td>' + item[key] + '</td>');
            }
        })
    })

    form.on('input', validate);
    function validate() {
        for (var i = 0; i < form.children().length; i++) {
            if (form.children()[i].value) {
                triggerObj[form.children()[i].name] = true;
            } else {
                triggerObj[form.children()[i].name] = false;
            }
        }

        event.target.value.length > 0 && event.target.value.length < 15
            ? triggerObj[event.target.name] = true
            : triggerObj[event.target.name] = false;
        
        +course.val() >= 0 && +course.val() <= 6
            ? triggerObj[course.attr('name')] = true
            : triggerObj[course.attr('name')] = false;

        age.val() > 17 && age.val() < 100
            ? triggerObj[age.attr('name')] = true
            : triggerObj[age.attr('name')] = false;
        for (key in triggerObj) {
            if (triggerObj[key]) {
                saveButton.removeAttr('disabled');
            } else {
                saveButton.attr('disabled', 'disabled');
                break;
            }
        }

        
    }
    function removeText() {
        
    }
}
$( document ).ready(() => {
    jqueryStud()
});