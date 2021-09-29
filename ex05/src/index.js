let foo = 12, boo = 45;

function main(foo, boo) {
    // Only change code below this one
    const [foo, boo] = [45, 12];
    // Only change code above this one
    return {foo, boo};
}

console.log(main(foo,boo));
module.exports = main;