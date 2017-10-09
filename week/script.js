var arr = [1,5,5,4,5,8,5];
var brr= [];
function nRepeat(arr){
    for(var i=0;i<arr.length;i++){
        if(brr.indexOf(arr[i]) !== 1){
            brr.push(arr[i]);
        }
    }
    return brr;
}
console.log(nRepeat(arr));

function nre(arr){
    for(var i=0;i<arr.length;i++){//循环遍历
    if(arr.indexOf(arr[i]) === 1){//判断
       arr.splice(i,1);//删除
       }
     }
     return arr;
}
console.log(nre(arr));