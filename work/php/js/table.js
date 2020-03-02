document.getElementById("clickMe").onclick = function hejData() {
    'use strict';

    fetch('edited1283.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            CreateTableFromJSON(myJson);
            console.log("hej hej hse1j§");
        });

};

function CreateTableFromJSON(myJson) {


    // EXTRACT VALUE FOR HTML HEADER. 
    var col = [];
    for (var i = 0; i < myJson.Skolenheter.Skolenhet.length; i++) {
        for (var key in myJson.Skolenheter.Skolenhet[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    var tr = table.insertRow(-1); // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myJson.Skolenheter.Skolenhet.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myJson.Skolenheter.Skolenhet[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
};