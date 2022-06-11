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


// search function

function handleClick() {

    d3.selectAll("#filter-btn").on("click", handleClick);


    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

// check to see if the date was entered and filter data using the date

if (date) { 

    // apply filter to the table to only keep the rows where the datetime value matches the filter value 
    filteredData = filteredData.filter(row => row.datetime === date);
};

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);



}


// Attach an event to listen for the form button

d3.selectAll("#filter-btn").on("click", handleClick);


// Build the table when the page loads

buildTable(tableData);

