//by includes
var a = ["Rice","Rice","Rice","Wheat","Flour","Wheat","Milk"];
var b=[];

for(let i=0;i<a.length;i++){
    if(b.includes(a[i])){
        continue;
    }
    b.push(a[i])
}
console.log(b)

//by indexof
var c=[]

for(let i=0;i<a.length;i++){
    if(c.indexOf(a[i])==-1){
        c.push(a[i])
    }
}

console.log(c);


