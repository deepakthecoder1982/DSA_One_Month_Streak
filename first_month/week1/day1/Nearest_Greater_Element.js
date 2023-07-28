// Next Greater Element


let arr = [11,21,21,1];
let stack = [];
let result = [];

for(let i=arr.length-1;i>=0;i--){
    let top = stack[stack.length-1];
    if(stack.length>0&&top<=arr[i]){
        stack.pop();  
    }
    if(stack.length===0){
        result.push(-1);
        stack.push(arr[i]);
    }else{
        result.push(top);
    }
}
console.log(result.reverse().join(" "));