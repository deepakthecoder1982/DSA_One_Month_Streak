let arr = [2,3,4,5,6];
//-1 2 3 4 5
let stack = [];
let result= [];

for(let i=0;i<arr.length;i++){
    let top = stack[stack.length-1];
    while(stack.length>0&&top>arr[i]){
        stack.pop();
    }
    if(stack.length==0){
        result.push(-1);
    }else{
        result.push(top);
    }
    stack.push(arr[i]);
}
console.log(result);
