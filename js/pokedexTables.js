import { allStatus, allWeakness } from "./database/database.js";
const NatureTable = document.getElementById("NatureTable");
const WeaknessTable = document.getElementById("WeaknessTable");
const WeaknessFirstRow = document.getElementById("WeaknessFirstRow");
const NatureFirstRow = document.getElementById("NatureFirstRow");
for (let i = 0; i < allWeakness.length; i++) {
  let TableRows = document.createElement("tr");
  let TableLeftName = document.createElement("td");
  let TableHeaderName = document.createElement("th");
  TableHeaderName.innerText = allWeakness[i].name;
  TableLeftName.innerText = allWeakness[i].name;
  TableLeftName.style.background = `rgba(var(--${allWeakness[i].name}))`;
  TableHeaderName.style.background = `rgba(var(--${allWeakness[i].name}))`;
  TableHeaderName.classList.add("vertical");
  TableRows.appendChild(TableLeftName);
  WeaknessFirstRow.appendChild(TableHeaderName);
  for (let ii = 0; ii < allWeakness[i].Weakness.length; ii++) {
    let tableData = document.createElement("td");
    tableData.innerText = allWeakness[i].Weakness[ii].weak;
    if (allWeakness[i].Weakness[ii].weak > 1) {
      tableData.style.background = "#89e94c";
    } else if (allWeakness[i].Weakness[ii].weak == 0.5) {
      tableData.style.background = "#f72d2d";
    } else if (allWeakness[i].Weakness[ii].weak == 0) {
      tableData.style.background = "#b3b3b3";
    }
    TableRows.appendChild(tableData);
  }
  WeaknessTable.appendChild(TableRows);
}
for (let i = 0; i < allStatus.length; i++) {
  let TableRows = document.createElement("tr");
  let TableLeftName = document.createElement("td");
  let TableHeaderName = document.createElement("th");
  TableHeaderName.innerHTML =
    allStatus[i].name + "</br>" + allStatus[i].preferency;
  TableHeaderName.style.background = allStatus[i].color;
  TableLeftName.innerHTML =
    allStatus[i].name + "</br>" + allStatus[i].preferency;
  TableLeftName.style.background = allStatus[i].color;
  TableRows.appendChild(TableLeftName);
  NatureFirstRow.appendChild(TableHeaderName);
  for (let ii = 0; ii < allStatus[i].natures.length; ii++) {
    let tableData = document.createElement("td");
    tableData.innerText = allStatus[i].natures[ii];
    if (i == ii) {
      tableData.style.background = "#dddddd";
    }
    TableRows.appendChild(tableData);
  }
  NatureTable.appendChild(TableRows);
}
document.body.style.setProperty(
  "--weakness-top-table-width",
  `calc(100% - 78px - 50px)`
);
document.body.style.setProperty(
  "--weakness-left-table-height",
  `calc(100% - 86.43px - 50px)`
);
document.body.style.setProperty(
  "--nature-top-table-width",
  `calc(100% - 57.27px - 50px)`
);
document.body.style.setProperty(
  "--nature-left-table-height",
  `calc(83.333% - 55px)`
);
