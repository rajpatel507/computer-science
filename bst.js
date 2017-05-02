function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}


function BinarySearchTree(){
  this.root = null;
}


BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

}      

function main (){
    var bst = new BinarySearchTree();
    bst.push(3);
    bst.push(2);
    bst.push(4);
    bst.push(1);
    bst.push(5);
}

main();