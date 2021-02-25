// from data.js
var tableData = data;

// Eric Dowd's CODE HERE!

//referencing the table in the html
var ttable = d3.select("table");


// confirming data with a console.log
console.log(data);

// using an arrow function to populate the imbeded table
data.forEach((ufoSighting) => {
  var row = ttable.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

