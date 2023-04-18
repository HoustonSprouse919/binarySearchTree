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

function tree(root) {
        return{
            insert(num){
                    if(root == null){
                        root = node(num);
                    }
                    
                    if(num < root.data){
                        root = root.left;
                        this.insert(num);
                    } else if (num > root.data){
                         root = root.right
                        this.insert(num);
                }
                return root;
            },

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


let mainTree = buildTree(numbers);
tree(mainTree).insert(8);
console.log(mainTree);
