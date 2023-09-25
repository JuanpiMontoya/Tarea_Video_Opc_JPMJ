
function mostrarPrimos(n){
    const primos_num =[]
    let divisor = 2;
    while (n > 1){
        while (n % divisor == 0){
            primos_num.push(divisor);
            n = n / divisor;
        }
        divisor++;     
    }
    return primos_num;
}

export default mostrarPrimos;