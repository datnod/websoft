/**
 * A function to wrap it all in.
 */
(function () {
    'use strict';

    //Fetch
    fetch('1283.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });

    console.log('Sandbox MEGA is ready!');



}());
