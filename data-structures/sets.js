class mySet {
    constructor() {
        this.collection = [];
    };
    // checks for the presence of an element
    has (element) {
        return (this.collection.indexOf(element) !== -1);
    };
    // returns all the values
    values () {
        return this.collection;
    };
    // adds an element to the set if it doesn't exist
    add (element) {
        if(!this.has(element)){
            this.collection.push(element);
            return true
        }
        return false;
    };
    // checks if its in collection, if it is then it is removed
    remove(element) {
        if(this.has(element)){
            index = this.collection.indexOf(element);
            this.collection.splice(index,1);
            return true; 
        }
        return false; 
    };
    // checks size of collection
    size() {
        return this.collection.length
    }
    // Return the union of two sets
    union(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
}

var setA = new mySet();
var setB = new mySet(); 
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.has("a"));
console.log(setB.values());
console.log(setB.union(setA));
