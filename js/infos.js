import { allWeakness } from "./database/database.js";
console.log(allWeakness);
const natureTable = document.getElementById("natureTable");
const weaknessTable = document.getElementById("weaknessTable");
let firstRow = document.getElementById("firstRow");
allWeakness.forEach((weak) => {
  let tableRow = document.createElement("tr");
  let firstData = document.createElement("td");
  let tableHeader = document.createElement("th");
  tableHeader.innerText = weak.name;
  firstData.innerText = weak.name;
  firstData.style.background = `rgba(var(--${weak.name}))`;
  tableHeader.style.background = `rgba(var(--${weak.name}))`;
  tableRow.appendChild(firstData);
  firstRow.appendChild(tableHeader);
  for (let i = 0; i < weak.Weakness.length; i++) {
    let tableData = document.createElement("td");
    tableData.innerText = weak.Weakness[i] + "x";
    if (weak.Weakness[i] > 1) {
      tableData.style.background = `rgba(var(--grass))`;
    } else if (weak.Weakness[i] < 1) {
      tableData.style.background = `rgba(var(--fire))`;
    }
    tableRow.appendChild(tableData);
  }
  weaknessTable.appendChild(tableRow);
});
