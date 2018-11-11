function students() {
    let container = document.getElementById('sutdentsForm');
    let childrens = container.querySelectorAll('*');
    let table = document.getElementById('studentsTable');
    let counter = 1;
    document.querySelector('#studentsSubmit').addEventListener('click', build)
    function build() {
        let tableRow= document.createElement('tr');
        let checker = false;
        for (let i = 0; i < childrens.length; i++) {
            if (childrens[i].value) {
                checker = true;
            } else {
                checker = false;
                break;
            }
        }
        if (checker) {
            let deleteButton = document.createElement('div');
            deleteButton.style.width = '16px';
            deleteButton.style.height = '16px';
            deleteButton.style.backgroundImage = 'url(./img/favicon.ico)';
            deleteButton.id = counter;
            tableRow.appendChild(deleteButton);
            deleteButton.addEventListener('click', deleteBlock);
            tableRow.id = 'tableRow' + counter;
            counter++;
            for (let i = 0; i < childrens.length; i++) {
                tableRow.appendChild(document.createElement('td')).textContent = childrens[i].value;
                table.appendChild(tableRow);
            }
        }
    }
    function deleteBlock() {
        this.removeEventListener('click', deleteBlock);
        table.removeChild(document.getElementById('tableRow' + this.id));
    }
}
students()