'use strict'

// The first javaScript question
function condition(a, b) {
    let c = (a===1 ? (b===10 ? 'X':'Y') : (b===5 ? 'Z': 'W'));
    return c;
}

console.log(condition(1, 10));
console.log(condition(1, 11));
console.log(condition(5, 5));
console.log(condition(5, 10));

// the second question of the js
function isOdd(element) {
    if (element % 2 !== 0) {
        console.log(element);
        return true;
    } else {
        return false;
    }
}

function logItems(loopType, arr) {
    switch(loopType) {
        case 'for':
            for (let i = 0; i < arr.length; i++) {
                isOdd(arr[i])
            }
        break;

        case 'foIn':
            console.log('for in is not good for arr types');
        break;

        case 'forOf':
            for (let value of arr) {
                console.log('******' + arr[value]);
                isOdd(arr[value]);
            }
        break;

        case 'while':
            var i = 0;
            while( i < arr.length) {
                isOdd(arr[i]);
                i++;
            }
        break;

        case 'doWhile':
            var j = 0;
            do {
                isOdd(arr[j]);
                j++;
            } while(i < arr.length);
        break;
    }
}

let arr = [1,2,3,4,5];
logItems('for', arr);
logItems('foIn', arr);
logItems('forOf', arr);
logItems('while', arr);
logItems('doWhile', arr);


// The third question of javaScript
function createProduct(type, price, img) {
    class Product {
        constructor(type, price, img) {
            this.type = type;
            this.price = price;
            this.img = img;
        }

        static logDetails() {
            for (let [key, value] of Object.entries.call(this)) {
                console.log(`${key}: ${value}`);
            }
        }
    }

    let product = new Product(type, price, img);
    Object.defineProperties(product, {
        price: {
            writable: false,
            enumerable: true,
            configurable: true
        },
        img: {
            writable: true,
            enumerable: true, 
            configurable: false
        }
    })
    
    return product;
}

let obj = createProduct('a', 'b', 'c');
console.log(obj);

// the forth question of the javascript
function createArrayTemplate(arrLength) {
    let arr = [];
    let randomNumber;
    for (let i = 0; i < arrLength; i++) {
        randomNumber = Math.floor(Math.random * 21);
        arr.push(randomNumber);
    }
    return arr;
}

let f = createArrayTemplate(5);
console.log(f);

//