//checking whether both value are of object data type or not
function isObject(obj,obj1){
    if(typeof obj === 'object' && obj.constructor===Object && typeof obj1 ==='object' && obj1.constructor===Object){
        return true;
    }
    return false;
}

//checking whether both value are of array data type or not
function isArray(arr,arr1){
    if(typeof arr === 'object' && arr.constructor===Array && typeof arr1 ==='object' && arr1.constructor===Array){
        return true;
    }
    return false;
}

//if value is Array
function CompareArray(arr,arr1){
    var flag=true;
    if(arr.length !== arr1.length){
        return false;
    }
    for(let i=0;i<arr.length;i++){
        if(isArray(arr[i],arr1[i])){
            let res=CompareArray(arr[i],arr1[i]) //recursive calling
            if(res===false){
                return res;
            }
        }else if(isObject(arr[i],arr1[i])){
            let res=CompareObject(arr[i],arr1[i])
            return res;
        }else{
            if(arr[i] === arr1[i]){
                flag=true;
            }else{
                return false;
            }
        }
    }
    
    return flag;
} 

//if value is object
function CompareObject(obj,obj1){
    var flag=true;
    for(let key in obj){
        if(obj1[key] && isObject(obj[key],obj1[key])){
            let res=CompareObject(obj[key],obj1[key])  //recursive calling
            if(res===false){
                return res
            }
        }else if(obj1[key] && isArray(obj[key],obj1[key])){
            let res=CompareArray(obj[key],obj1[key])
            return res;
        }
        else{
            if(obj[key]===obj1[key]){
                flag=true;
            }else{
                return false;
            }
        }
    }
    
    return flag;
}

var obj={
    name:"Maruti",
    Car:{
        ty:{
            name:"hira"
        },
        Type:"Alto",
        Type1:"Dzire"
    },
    arraytest:[1,[1,2,3],{1:2,3:4},2,3]
}

var obj1={
    name:"Maruti",
    Car:{
        ty:{
            name:"hira"
        },
        Type:"Alto",
        Type1:"Dzire"
    },
    arraytest:[1,[1,2,3],{1:2,3:4},2,3]
}
var result=CompareObject(obj,obj1);
console.log(result);
