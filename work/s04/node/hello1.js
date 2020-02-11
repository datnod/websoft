"use strict";

function main() {
    let a = 1;
    let b;
    let range = "";

    b = a + 1;

    for (let i = 0; i < 9; i++) {
        range += i + ", ";
    }

    let i2 = 0;
    while (i2 < 9) {
        console.info(i2)
        i2++;
    }

    if (i2 = 9) {
        console.info("i2 = 9");
    }

    console.info("Hello World");
    console.info(range.substring(0, range.length - 2));
    console.info(a, b);
}

main();