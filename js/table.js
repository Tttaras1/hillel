
let tBuild = document.getElementById("make");
function asd() {
    let trow = document.getElementById("row");
    let tdata = document.getElementById("data");
    let table = document.getElementById("table");
    table.innerHTML = ''
    for (let i = 0; i < trow.value; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr)
        trLastChild = document.getElementsByTagName("tr")


        for (let n = 0; n < tdata.value; n++) {
            let td = document.createElement("td");
            trLastChild[i].appendChild(td)
            td.innerHTML = `empty`
            td.title = `tableRow:${i + 1} tableData:${n + 1}`
        }
    }

}

tBuild.addEventListener("click", asd)