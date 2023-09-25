
function mostrarPrimos(n){
    const primos_num =[]
    let divisor = 2;
    for (; n > 1 ; divisor++){
        for(; n % divisor == 0; n = n / divisor){
            primos_num.push(divisor);
        }
    }    
    return primos_num;
}

export default mostrarPrimos;