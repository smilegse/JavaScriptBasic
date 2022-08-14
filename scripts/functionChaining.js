
var obj = function(){

    this.i = 0;

    this.add = function(i){
        this.i += i;
        return this;
    };

    this.subtract = function(i){
        this.i -= i;
        return this;
    };

    this.print = function(){
        return this.i;
    }
}

// this is function chaining
var x = new obj();
var y = x.add(5).subtract(2).print();

document.getElementById('pDemo').innerHTML = "Value comes from before caling function: " + y;
    
