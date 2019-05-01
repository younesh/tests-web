"use strict";

const V = 'global';
(function main() {
    let V = 'in main';
    console.log("main : V =  " + V);
    // test01(); // test porté var  

    // test02(); // boocle

    // test03(); // local storage
    // console.log("test03 : monChat :  " + localStorage.getItem("monChat"));

    //  test04();

    // 
    //let arr = [2, 4, 6, 8, 10, 12];
    //console.log(isExisiteIn(arr, 10));

    //let arr = [2, 4, 6, 8, 10, 12];
    console.log(oddNumbers(0,10));

})();


function test01() {
    let V = 'in test01';
    console.log("test01 : porté des var ...  ");
    console.log("test01 : V = " + V);
}


function test02() {
    let fruits = ['banane', 'orange', 'kiwi', 'pommes']
    console.log("test02 : boocle es6  ");
    console.log("ds le tab fruits : ");
    for (let f of fruits) {
        console.log("   on a le fruit :  " + f);
    }
}


function test03() {
    console.log("test03 : localstorage  ");
    //  localStorage.setItem('monChat', 'jezzy main ');

}


function test04() {
    $("input").bind("click", () => {
        alert("you click input!!");
    });
}



function isExisiteIn(ARR, K) {
    for (let i = 0; i < ARR.length; i++) {
        if (ARR[i] === K) {
            return "YES";
        }
    }
    return "NO";
}

function oddNumbers(l, r) {
    let odds = [];
    for (let i = l; i < r; i++) {
        if (i % 2 !== 0) {
            odds.push(i);
        }
    }
    return odds;
}