let numbers = [1,2,3,4,5,6,7];
function node(storedData,storedLeft,storedRight){
    if(storedData == undefined){
        storedData = null;
    }
        if(storedLeft == undefined){
        storedleft = null;
    }
        if(storedRight == undefined){
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
            return node(num, null, null); 
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
    delete(num, currentNode = this.root){
        if (currentNode == null){
            return currentNode; 
    }
       if(num < currentNode.data){
           this.delete(num, currentNode.left);
       } else if(num > currentNode.data){
           this.delete(num, currentNode.right);
       }
        else{
            //first works
            if(currentNode.left == null && currentNode.right == null){
                return currentNode.data = null;
                //works now;
        } else if(currentNode.left != null && currentNode.right != null){
            let sucessor = currentNode.right;
            this.delete(sucessor.data);
            currentNode.data=sucessor.data;
            currentNode.left = sucessor.left;
            currentNode.right = sucessor.right;
            return currentNode;
        } else{
            let child;
            if(currentNode.left != null){
                child = currentNode.left
            } else{
                child = currentNode.right
            }
            let newData = child.data;
            let newLeft = child.left;
            let newRight = child.right;
            this.delete(child.data);
            currentNode.data=newData;
            currentNode.left = newLeft;
            currentNode.right = newRight;
            return currentNode;
        }
    }
    return currentNode;
    }
    find(num, currentNode = this.root){
        let target;
         if (currentNode.data == null){
            return "node not found"; 
    }
       if(num < currentNode.data){
           return this.find(num, currentNode.left);
       } else if(num > currentNode.data){
           return this.find(num, currentNode.right);
       }
        else if(num == currentNode.data){
            target = currentNode;
    }
    return target;
    }
    levelOrder(func=null, currentNode = this.root){
        if(currentNode == null){
            return;
        }
        if(func == null){
            func = function getNumbers(current){
               return current.data
            }
        }
        let queue =[];
        queue.push(this.root);
        let arrayOfValues = [];
        function recur(){
                if(queue != []){
                   let current = queue.shift();
                   if (current == undefined){
                        return;
                    }
                    arrayOfValues.push(func(current));
                    
                     if(current.left != null){
                        queue.push(current.left)
                    }
                    if(current.right != null){
                        queue.push(current.right)
                    }
                    recur()
                }else{
                    return;
                }
        }
        recur();
        console.log(arrayOfValues);
        }
}


let myTree = new Tree(numbers);
myTree.insert(8);
myTree.insert(9);
myTree.insert(12);
myTree.delete(9);
myTree.levelOrder(); 
