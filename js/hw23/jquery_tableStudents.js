jQuery()
function jqueryStud() {
    let userID = $('[name="jqSurname"]');
    let faculty = $('[name="jqFaculty"]');
    let age = $('[name="jqAge"]');
    let course = $('[name="jqCourse"]');
    let phoneNum = $('[name="jqPhoneNum"]');
    let table = $('#studentsTable');
    let saveButton = $('[name="jqSaveButton"]');
    let cancelButton = $('[name="jqCancelButton"]');
    let form = $('#jqStudentsForm');
    let triggerObj = {};
    let id = 1;
    let localStudents = localStorage.getItem('studentsTable');
    let localJSON;

    $('#jqStudentsTable thead').after('<tbody> </tbody>');
    $('#jqStudentsTable tbody').after('<tfoot> </tfoot>');

    if (localStudents) {
        JSON.parse(localStudents).forEach(function(item, i) {
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
        let deleteIcon = $('<td/>', {
            title: 'Delete',
            delNumber: id
        });
        let editeIcon = $('<td/>', {
            title: 'Edit',
            editNumber: id
        });
        let storageObj = {};
        $('#jqStudentsTable tbody').append('<tr><td>'+ id++ +'</td> </tr>');
        for (var i = 0; i < form.children().length; i++) {
            storageObj[form.children()[i].name] = form.children()[i].value;
            $('#jqStudentsTable tbody tr:last').append('<td>' + form.children()[i].value + '</td>')
        }
        
        localJSON = JSON.parse(localStorage.getItem('studentsTable'));
        localJSON.push(storageObj);
        localStorage.setItem('studentsTable', JSON.stringify(localJSON))
    }

    // cancelButton.on('click', removeText);
    form.on('input', validate)
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