var a = [1,2,3,3,2];
var b = [0,2,1,0,3];

var c=[];

var res_a={};
var res_b={};

for(let i=0;i<a.length;i++){
    if(res_a[a[i]]){
        res_a[a[i]]++
    }else{
        res_a[a[i]]=1
    }
}
console.log(res_a);

for(let i=0;i<b.length;i++){
    if(res_b[b[i]]){
        res_b[b[i]]++
    }else{
        res_b[b[i]]=1
    }
}

for (let key in res_a){
    if(res_b[key]){
        c.push(key)
    }
}
console.log(c);


//complexity = O(n)