
function mostrarPrimos(n){
    const primos_num =[]
    if (n > 1){
        while (n % 2 == 0){
            primos_num.push(2);
            n = n / 2;
        }
        if (n > 1){
            primos_num.push(n);
        }     
    }
    return primos_num;
}

export default mostrarPrimos;