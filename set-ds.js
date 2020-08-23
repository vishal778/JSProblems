class myset{
    constructor() {
        this.store=[]
    }
    
    add(item){
        if(!this.store.includes(item)){
            this.store.push(item)
        }
    }
    
    addArray(item){
        item.forEach((value)=>{
            this.add(value)
        })
    }
    
    print(){
        return this.store;
    }
}

var set = new myset();
set.add(3);
set.add(4);
set.add(3);
set.addArray([2,3,4])
set.add({1:1,2:2,3:3})
set.add({1:1,2:2,3:3})
console.log(set.print());






