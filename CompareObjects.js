function ComapreObjects(obj,obj1) {
    var flag=true;
    
    for(let key in obj){
        if(obj1[key]){
            if(obj1[key]===obj[key]){
                flag=true
            }else{
                flag=false // if value of the key in first object doesn't matched with the vale of that same key in second object;
                break;  
            }
        }else{
            flag=false //if key of first object is not present in second object
            break;   
        }
    }
    
    return flag;
}


var obj = {1:1,2:2}
var obj1 = {1:1,2:2}

console.log(ComapreObjects(obj,obj1));

