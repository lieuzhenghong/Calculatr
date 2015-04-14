 function sendOff(){
    var command = document.getElementById('interpreter').value;
    commandParser(command);
}

function commandParser(string) {
    console.log('Took in a command');
    
    //add a function
    if (string.search("add") != -1 && string.search("and") != -1) {
        
        var sum = adder(string.charAt(4), string.charAt(10));
        console.log(sum);
        console.log(sum);
        document.getElementById('answer').innerHTML = 'The answer is: ' + sum;   
    }
    if (string.search("subtract") != -1 && string.search("from") != -1) {
        alert("Syntax error!");
    }
}

function adder(a,b) { //Only adds 2 single digit numbers
    var sum = Number(a) + Number(b);
    return sum;
}
    