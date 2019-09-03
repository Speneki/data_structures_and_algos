function sayHello(num) {
    if (num === 0) return num;
    console.log(num);
    sayHello(num - 1)
}

sayHello(10);