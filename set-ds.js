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
        this.store.push(item);
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
console.log(set.print());




