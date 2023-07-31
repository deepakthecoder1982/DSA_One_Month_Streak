let arr = [4,3,2,1];
// arr = [1,3,2,4]
let stack = [];
let result = [];
for(let i=0;i<arr.length;i++){
    let top = stack[stack.length-1];
    while(stack.length>0&&top<arr[i]){
        stack.pop();
    }
    if(stack.length==0){
        result.push(-1);
        stack.push(arr[i]);
    }else{
        result.push(top);
    }
}
console.log(result);