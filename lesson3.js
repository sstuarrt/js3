function devide() {
    console.log('-------------------------------------------------------------');
}

//1

function show(products){
    console.log(products);
}

let products = ['Pear', 'Apple', 'Milk', 'Bread', 'Cucumber', 'Banana'];

const indexProductEnd = products.length - 1;

show(products[indexProductEnd]);

devide();

//2

let styles = ['Jazz', 'Blues'];

const rock = 'Rock-n-Roll';

styles.push(rock);
show(styles);

styles[1] = 'Classic';
show(styles);

show(styles.shift());

styles.unshift('Rap', 'Reggy');
show(styles);

function find(arr, value) {
    if(styles.values(value)) {
        console.log(styles.indexOf(value))
    } else {
        console.log(-1)
    }
}

find(styles, 'Reggy');
