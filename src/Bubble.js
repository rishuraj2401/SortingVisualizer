
export function bubble (arr){
    // arr=[6,7,8,9,1,0,12,34,5]
    var n=1
    // const arr=aux.slice();
    const animate=[];
    // let a=arr.length;
    console.log(arr);
while(n<arr.length)
{for(let i=0 ;i<arr.length-n;i++)
{ 
    // console.log(arr[i]);
    animate.push([i,i+1])
    animate.push([i,i+1])
   if( arr[i]>arr[i+1])
   {
   
    // animate.push([])
    // swap(arr[i] ,arr[i+1])
    const temp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp
    // console.log(arr[i],arr[i+1]);
    // animate.push([i,i+1,arr[i],arr[i+1]])
   }
animate.push([i,i+1,arr[i],arr[i+1]])

}

n++;
}
console.log(arr);
// console.log(animate);
return animate;
}
// console.log(animate);
