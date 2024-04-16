"use strict";
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let obj_1 = [{
        make: "HP",
        model: "Pavilion",
        year: 2020
    },
    {
        make: "Dell",
        model: "Inspiron",
        year: 2019
    }];
let [first] = [obj_1];
console.log(first);
