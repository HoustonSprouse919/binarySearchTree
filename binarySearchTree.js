let numbers = [1,2,3,4,5,6,7];
function node(storedData,storedLeft,storedRight){
    if(storedData === undefined){
        storedData = null;
    }
        if(storedLeft === undefined){
        storedleft = null;
    }
        if(storedRight === undefined){
        storedRight = null;
    }
    return{
        data:storedData,
        left:storedLeft,
        right:storedRight
    }
}
function buildTree(array){
    let start =0;
    let end = array.length -1;
    if(start>end){
        return null;
    }
    let middle = Math.ceil((start + end) / 2);
  let rootNode= node(array[middle],buildTree(array.slice(0,middle)),buildTree(array.slice(middle+1)));
  return rootNode;
}

class Tree{
    constructor(array){
       this.root = buildTree(array);
    }
    insert(num, currentNode = this.root){
         if (currentNode == null){
            return node(num); 
         } else if (currentNode.data == num) {
             return;
         }
         if(num < currentNode.data){
             currentNode.left = this.insert(num,currentNode.right);
         } else{
             currentNode.right = this.insert(num,currentNode.right);
         }
         return currentNode;
    }
    
}


let myTree = new Tree(numbers);
console.log(myTree.root)
myTree.insert(12)
console.log(myTree.root)
