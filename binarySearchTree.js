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
                    } else if(num == root.data){
                        return;
                    }
                    
                    if(num < root.data){
                        if(root.left == null){
                            root.left = node(num,null,null);
                        }
                        root = root.left;
                        this.insert(num);
                    } else if (num > root.data){
                        if(root.right == null){
                            root.right = node(num,null,null);
                        }
                         root = root.right
                        this.insert(num);
                }
                return root;
            },
            delete(num){
                if(root == null){
                    return root;
                }else if(num < root.data){
                    root =root.left;
                    this.delete(num);
                }else if(num > root.data){
                    root = root.right;
                    this.delete(num);
                } else{
                    if(root.left ==null && root.right ==null){
                        root = null;
                        console.log(root);
                        return root;
                    } else if(root.left == null){
                        tempRoot = root.right;
                        root.right = null;
                        root = tempRoot;
                        return root;
                    } else if(root.right == null){
                        tempRoot = root.left;
                        root.left = null;
                        root = tempRoot;
                        return root;
                    }
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
tree(mainTree).insert(2);
tree(mainTree).insert(22);
tree(mainTree).delete(22);
console.log(mainTree.right.right)
