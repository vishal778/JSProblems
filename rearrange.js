function rearrange(str){
    var store={};

    var no;
    var p;
    var pos;
    var temp;
    var result=[];

    if((str.length==1 && str[0]==" ") || str.length==0){
        return "";
    }

    for(let i=0;i<str.length;i++){
        p=i;
        while(str[p]!=" " && p<=str.length){
            if(str.charCodeAt(p)>=48 && str.charCodeAt(p)<=57){
                no=str.charCodeAt(p);
                pos=p;
            }
            p++;
        }
        temp=str.slice(i,pos)+str.slice(pos+1,p);
        no=String.fromCharCode(no);
        store[no-1]=temp;
        i=p;
    }
    for(let i=0;i<Object.keys(store).length;i++){
        result.push(store[i]);
    }
    var res1=result.join(' ');
    return res1;
}

console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2"));
