function receiveCommand(){
    console.log('Command Received!');
    var command = document.getElementById('interpreter').value;
    Input.parseCommand(command);
    Output.display(sum);
}

var Input = {
    parseCommand: function(string) {
        console.log(string);
        console.log('Parsing Command..');
        var r = /\d+/g; //g = global/greedy; find all rather than stopping at first match
        var inputs = [];
        var myArray;
        
        while ((myArray = r.exec(string)) !== null) {
            inputs.push(Number(myArray[0]));
        }
        
        var a = inputs[0];
        var b = inputs[1];
        
        //Parses the add function
        if (string.search("add") != -1) {
            console.log('Adding two numbers together..');
            sum = Input.add(a,b);
            return(sum);
        }
        if (string.search("subtract") != -1 ) {
            console.log("Subtracting one number from the other..");
            sum = Input.subtract(a,b);
        }
        else {
        console.log('feature not yet supported')
        }
    },
    
    add: function(a, b) {
        console.log('Adder being called..');
        var sum = a + b;
        return sum;
    },
    
    subtract: function(a, b) {
        console.log('Subtractor being called..');
        var sum = (b - a);
        return sum;
    }
}

var Output = {
    display: function(ans) {
        console.log('Answer obtained:' + sum);
        document.getElementById('answer').innerHTML = 'The answer is: ' + ans;
    }
}