var intervals = [
    {start:0, end:1},
    {start:3, end:5},
    {start:4, end:8},
    {start:10, end:12},
    {start:9, end:10},
]

var startsort=[];
var endsort=[];

for(let i=0;i<intervals.length;i++){
    startsort.push(intervals[i].start);
}

for(let i=0;i<intervals.length;i++){
    endsort.push(intervals[i].end);
}

var pos;
var pos1;
var temp;
var temp1;

for(let i=0;i<startsort.length-1;i++){
    pos=i;
    pos1=i;
    for(let j=i+1;j<startsort.length;j++){
        if(startsort[j]<startsort[pos]){
            pos=j
        }
        if(endsort[j]<endsort[pos1]){
            pos1=j
        }
    }
    temp=startsort[i];
    startsort[i]=startsort[pos];
    startsort[pos]=temp;
    
    temp1=endsort[i];
    endsort[i]=endsort[pos1];
    endsort[pos1]=temp1;
}

console.log(startsort)
console.log(endsort)

var result=[];
var i=1;
var j=1;

result.push({start:startsort[0], end:endsort[0]});

while(i<startsort.length){
    if(startsort[i]>endsort[j-1]){
        result.push({start:startsort[i], end:endsort[j]})
        i++;
        j++;
    }else{
        if(endsort[j]>endsort[j-1]){
            result[result.length-1].end=endsort[j];
        }
        i++;
        j++;
    }
}

console.log(result);



















