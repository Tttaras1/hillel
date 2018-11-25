function students() {
    let container = document.getElementById('studentsForm');
    let firstName = document.querySelector('[name="firstName"]');
    let secondName = document.querySelector('[name="secondName"]');
    let enter = document.querySelector('[name="enter"]');
    let graduating = document.querySelector('[name="graduating"]');
    let table = document.getElementById('studentsTable');
    let saveButton = document.querySelector('[name="saveButton"]');
    let cancelButton = document.querySelector('[name="cancelButton"]');
    let counter = 1;
    let obj = {
        enter: false,
        firstName: false,
        graduating: false,
        secondName: false,
    };

    cancelButton.addEventListener('click', removeText);
    function removeText() {
        firstName.value = '';
        secondName.value = '';
        enter.value = '';
        graduating.value = '';
    }

    container.addEventListener('input', () => validate(event));
    function validate() {
        if (event.target.value.length > 1 && event.target.value.length < 10) {
            obj[event.target.getAttribute('name')] = true;
        } else {
            obj[event.target.getAttribute('name')] = false;
        }
        if (+enter.value <= +graduating.value && +graduating.value > 0 && +enter.value > 0) {
            obj.graduating = true;
            obj.enter = true;
        } else {
            obj.graduating = false;
            obj.enter = false;
        }
        for (key in obj) {
            if (obj[key]) {
                saveButton.removeAttribute('disabled');
            } else {
                saveButton.setAttribute('disabled', 'disabled');
                break;
            }
        }
    }

    saveButton.addEventListener('click', buildTable);
    function buildTable() {
        let tr = document.createElement('tr');
        let id = document.createElement('td');
        let deleteIcon = document.createElement('td');
        let editIcon = document.createElement('td');
        id.textContent = counter;
        tr.id = counter;
        table.appendChild(tr);
        tr.appendChild(id);
        for (let i = 0; i < Object.keys(obj).length; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = container.querySelectorAll('*')[i].value;
        }
        editIcon.innerHTML = '&#9999;';
        editIcon.setAttribute('editNum', counter)
        tr.appendChild(editIcon);
        deleteIcon.innerHTML = '&#10006;';
        deleteIcon.setAttribute('removeNum', counter)
        tr.appendChild(deleteIcon);
        counter++;
        removeText();
        saveButton.setAttribute('disabled', 'disabled');
    }

    table.addEventListener('click',() => editTable(event))
    function editTable(event) {
        if (event.target.hasAttribute('editNum')) {
            function editElem(event) {
                editElements[1].textContent = firstName.value;
                editElements[2].textContent = secondName.value;
                editElements[3].textContent = enter.value;
                editElements[4].textContent = graduating.value;
                saveButton.addEventListener('click', buildTable);
                saveButton.removeEventListener('click', editElem);
                removeText();
            }
            let editId = event.target.getAttribute('editNum');
            let editContainer = document.getElementById(editId);
            let editElements = editContainer.childNodes;

            firstName.value = editElements[1].textContent;
            secondName.value = editElements[2].textContent;
            enter.value = editElements[3].textContent;
            graduating.value = editElements[4].textContent;
            saveButton.removeEventListener('click', buildTable);
            saveButton.addEventListener('click', editElem);

        } else if (event.target.hasAttribute('removeNum')) {
            let removeId = event.target.getAttribute('removeNum');
            let removableItem = document.getElementById(removeId);

            table.removeChild(removableItem);
        } else {
            return;
        }
    }
    
}
students();