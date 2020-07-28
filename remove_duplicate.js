var a = ["Rice","Rice","Rice","Wheat","Flour","Wheat","Milk"];
var b=[];

for(let i=0;i<a.length;i++){
    if(b.includes(a[i])){
        continue;
    }
    b.push(a[i])
}
console.log(b)

var c=[]

for(let i=0;i<a.length;i++){
    if(c.indexOf(a[i])==-1){
        c.push(a[i])
    }
}

console.log(c);

var d="hello my name";
console.log(d.split(" "));

var test=["lion","tiger","cat"]
test.splice(2,1,"dog")
console.log(test)
