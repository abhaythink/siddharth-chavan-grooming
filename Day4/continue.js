for (let i = 0; i <= 5; i++){
    if (i % 2 == 0){
        continue
    }
    console.log(i)
}


outer: for (let m = 1; m<=3;m++){
    inner: for(let n=1;n<=3;n++){
        if (m+n == 3) continue outer;
        console.log(m,n)
    }
}