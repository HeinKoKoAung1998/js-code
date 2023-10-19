let name="Alice";//Class variable

function welcome(){
    console.log(`Welcome ${name}`);
}

function hello(){
    let name="May";//Local variable
    console.log(`Hello ${name}`);
}

welcome()
hello()