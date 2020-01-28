/**
 * A function to wrap it all in.
 */
(function () {
    'use strict';

    //Fetch
    fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1283')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });

    console.log('Sandbox MEGA is ready!');



}());
