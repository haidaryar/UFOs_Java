// import the data from data.js

const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {

    // clear out existing data 
    tbody.html("");
  }
// loop and append a row for each value


  data.forEach((dataRow) => {
// append a row to the table body with code below 
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {

        let cell = row.append("td");
        cell.text(val);
    

    });

});


