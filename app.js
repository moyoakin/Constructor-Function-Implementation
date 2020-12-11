
 /**
  * 
  * @param {*} obj 
  * @returns all  members of the object
  */



function printMembers(obj){
    let result = [];
    for(const key in obj){
        result.push(key);
    }
    return result;
}

console.log(printMembers({name:'moyo',age:5}));


/**
 * below is a constructor function test that prin type inherit from @ New Test can return all members of both functions
 */

function Test(){
    this.name = null,
    this.age = null
}
Test.prototype.printTest = function(){
    console.log(`testing`);
}

const newTest = new Test();
console.log(printMembers(newTest));



/**
 * write a function that prints out members of an {}
 * Pass in an obj as arg
 * create an empty array
 * use the for..in to loop through the object
 * push each key into the array
 * function returns the array
 * 
 */