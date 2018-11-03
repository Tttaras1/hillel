function asd() {
    let trow = document.getElementById("row");
    let tdata = document.getElementById("data");
    let table = document.getElementById("table");
    table.innerHTML = ''
    table.style = "display: inline-block"
    for (let n = 0; n < tdata.value; n++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for (let i = 0; i < trow.value; i++) {
            let td = document.createElement("td");
            tr.appendChild(td);
            tr.getElementsByTagName("td")[i].title = `${i + 1} : ${n + 1}`;
        }
    }
}

document.getElementById("make").addEventListener("click", asd)