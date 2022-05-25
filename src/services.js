export function dobro(numero){
    return numero * 2;
}

export function somar(a, b){
    return a + b;
}


export function temperatura(febre){
    let resposta = false;
    if(febre>=37.5){
         resposta=true;
     }
     return resposta;
    }
    
    export function passou(n1,n2,n3){
        let total= (n1+n2+n3)/3;
        let resposta =true;    
        if(total<=5.0){
            resposta=false;
        }
    
        return resposta;
    }
    
    export function tabuada(numero){
        let tabu= [11];
        let a=0
        for(let i=0; i<=10; i++ ){
            tabu[i]= a;
            a= a+numero;
        }
        return tabu;
    }
    
    
    export function corprimaria(cor){
        let resposta= false;
        if(cor=="amarelo"||cor=="azul"|| cor=="vermelho" ){
            resposta=true;
        }
    
        return resposta;
    }
    
    export function ingCinema(inteira,meia,diasemana,nacionalidade){
        
        let ingressosint= inteira*28.5;
        let ingressosmeia= meia*14.25;
        let total= ingressosint+ ingressosmeia;
        if(diasemana== "quarta-feira"){
            total= total/2;
        }
        if(nacionalidade=="brasileira"){
            ingressosint= inteira*5;
            ingressosmeia=meia*5;
            total= ingressosmeia+ingressosint;
        }
    
        return total;
    }