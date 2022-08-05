
export function Algorithm(arr) {
    const animate = [];
    console.log(arr);
    if (arr.length <= 1) return arr;
    const aux = arr.slice();
    mergesort(arr, 0, arr.length - 1, aux, animate)
    // console.log(arr);
    return animate;

}



function mergesort(marr, l, r, aux, animate,) {
    if (l === r) return;

    const mid = Math.floor((l + r) / 2);
    mergesort(aux, l, mid, marr, animate);
    mergesort(aux, mid + 1, r, marr, animate);
    merge(marr, l, mid, r, aux, animate);


}


function merge(marr, l, mid, r, aux, animate) {

    let i = l;
    let j = mid + 1;
    let k = l;
    while (i <= mid && j <= r) {
        animate.push([i, j])
        animate.push([i, j])
        if (aux[i] <= aux[j]) {

            animate.push([k, aux[i]]);
            marr[k++] = aux[i++];

        }
        else {
            animate.push([k, aux[j]])
            marr[k++] = aux[j++]
        }

    }
    while (i <= mid) {
        animate.push([i, i])
        animate.push([i, i])
        animate.push([k, aux[i]])
        marr[k++] = aux[i++]
    }
    while (j <= r) {
        animate.push([j, j])
        animate.push([j, j])
        animate.push([k, aux[j]])
        marr[k++] = aux[j++]
    }

}