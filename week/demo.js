var arr = [1,5,5,4,5,8,5];
function nRe(arr){
    var brr= [];//定义一个空数组
    for(var i=0;i<arr.length;i++){//循环遍历
    if(brr.indexOf(arr[i])===-1){//判断查找
        brr.push(arr[i]);//添加
      }
   }
   return brr;
}
console.log(nRe(arr));//打印

function nre(arr){
    for(var i=0;i<arr.length;i++){//循环遍历
    if(arr.indexOf(arr[i]) === 1){//判断
       arr.splice(i,1);//删除
       }
     }
     return arr;
}
console.log(nre(arr));

function nRes(arr){
    var brr = [];
    for(var i=0;i<arr.length;i++){
    if(brr.indexOf(arr[i]) !== 1){
       brr.push(arr[i])
    }
  }
   return brr;
}
console.log(nRes(arr));



