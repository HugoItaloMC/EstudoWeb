// Crie uma funcão para verificar se um valor é Truthy 

function v(vp) {
 return !!vp;
}


// Crie uma funcão matemática que retorna o perímetro de um quadrado 

function quadrado(p) {
    return p * 4;
}

console.log(quadrado(2));

// Crie uma funcão que retorne seu nome completo

function nomeCompleto(nome, sobre) { 
    
    return `Nome completo ${nome} ${sobre}`;
}

console.log(nomeCompleto('Hugo', 'Italo'))

// Crie uma funcão que verifique se o número é par

function isEven(numero){
    if (numero % 2 === 0) {
        return ` ${numero} é par` ;
    }else {
        return `${numero} é impar `;
    }
}