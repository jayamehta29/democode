function f(flag){
    // if(flag[0]==='m'){

    // }else{

    // }
    let sum=0;
    for(let i=1;i<flag.length;i++){
        sum+=flag[i];
    }
    return sum;
}


// console.log(f("m",2,4));
console.log(f([1,2,3]));