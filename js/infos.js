import { allStatus, allWeakness } from "./database/database.js";
console.log(allWeakness);
const NatureTable = document.getElementById("NatureTable");
const WeaknessTable = document.getElementById("WeaknessTable");
let WeaknessFirstRow = document.getElementById("WeaknessFirstRow");
let NatureFirstRow = document.getElementById("NatureFirstRow");
for (let i = 0; i < allWeakness.length; i++) {
  let TableRows = document.createElement("tr");
  let TableLeftName = document.createElement("td");
  let TableHeaderName = document.createElement("th");
  TableHeaderName.innerText = allWeakness[i].name;
  TableLeftName.innerText = allWeakness[i].name;
  TableLeftName.style.background = `rgba(var(--${allWeakness[i].name}))`;
  TableHeaderName.style.background = `rgba(var(--${allWeakness[i].name}))`;
  TableRows.appendChild(TableLeftName);
  WeaknessFirstRow.appendChild(TableHeaderName);
  for (let ii = 0; ii < allWeakness[i].Weakness.length; ii++) {
    let tableData = document.createElement("td");
    tableData.innerText = allWeakness[i].Weakness[ii] + "x";
    if (allWeakness[i].Weakness[ii] > 1) {
      tableData.style.background = `rgba(var(--grass))`;
    } else if (allWeakness[i].Weakness[ii] < 1) {
      tableData.style.background = `rgba(var(--fire))`;
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
