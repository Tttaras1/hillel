function asd() {
    let trow = document.getElementById("row");
    let tdata = document.getElementById("data");
    let table = document.getElementById("table");
    table.innerHTML = ''

    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let n = 0; n < tdata.value; n++) {
        let td = document.createElement("td");
        tr.appendChild(td);
    }
    for (let i = 1; i < trow.value; i++) {
        let trClone = document.getElementsByTagName("tr")[0].cloneNode(true);
        table.appendChild(trClone);
    }

    for (let i = 0; i < trow.value; i++) {
        let trTitle = document.getElementsByTagName("tr")[i]
        for (let n = 0; n < tdata.value; n++) {
            trTitle.getElementsByTagName("td")[n].title = `${i+1} : ${n+1}`;
            
        }
    }
}

document.getElementById("make").addEventListener("click", asd)