var Object = {
    foo:"bar",
    func: function(){
        var self = this;  //this points to current object
        console.log(this.foo);
        console.log(self.foo);
        (function(){
            console.log(this.foo);  //this points to window object
            console.log(self.foo);
            
            (function(){
                console.log("inside 2nd iife ",this); //this points to window object
            }());
        })();
    }
}

Object.func();

function sum(x,y){
    if(y){
        return x+y;
    }
    return function(y){
        return x+y;
    }
}

console.log(sum(2)(3));