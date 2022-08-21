
function hello() {
    return 'Hello , Welcome ';
}

function name(func , user)
{

    // accessing passed function
    const message = func();

    console.log(`${message} ${user}`);
    document.getElementById("demo").innerHTML = (`${message} ${user}`);    
}

name(hello ,'Ravi');