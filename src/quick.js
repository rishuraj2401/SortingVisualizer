export function quick(arr){
    const ani2=[];
    console.log(arr);

   quicksort(arr ,0 ,arr.length-1,ani2 )
   console.log(arr);
   return ani2;
}
function swap( arr , i , j){
    const temp =arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
const partition=(array ,l ,r ,ani2 )=>{
    var i=l-1;
    var pivot=array[r]
    ani2.push([r]);
    for(let j=l ;j<r ;j++){
        ani2.push([j,r]);
        ani2.push([j,r,0]);
        if(array[j]<array[r]){
            i++;
            ani2.push([i,j]);
        ani2.push([i,j,0]);
            swap(array ,i,j)
            
            ani2.push([i,j ,array[i] ,array[j]]);


        }
       
       
    }
    ani2.push([i+1,r]);
        ani2.push([i+1,r,0]);
    swap(array ,i+1 ,r)
    ani2.push([i+1 ,r ,array[i+1] ,array[r]])
    return i+1;

}
const quicksort=(array ,l,r ,ani2)=>{
    if(l<r){
    var pi=partition( array ,l,r,ani2);
    // ani2.push(pi);
    quicksort(array , l ,pi-1 ,ani2)
    quicksort(array , pi+1 ,r ,ani2)

}}

