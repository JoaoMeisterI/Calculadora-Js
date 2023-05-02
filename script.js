function clique(valor){
    // antes não dava porque não tinha nenhuma variável recebendo o valor
    let recebe = document.getElementById("txt").value += valor
    let conta = []
    let numeros = []
    let numComposto = ''
    let recebeNum = ''
    let simbolos = []
    let total = 0
    let cont = 0
    let cont1 = 0
    
    
    conta.push(...recebe)
    if(valor == "="){
      for(let i = 0; i < conta.length; i++){
            if(!isNaN(conta[i])){
                
                

                numComposto += conta[i]
                recebeNum = numComposto
                
                         
            }else{
                numeros.push(Number(recebeNum))
                numeros.push(conta[i])
                numComposto = ''
                recebeNum = ''
                
            

        }
        
    }
    for(let i = 0; i < numeros.length; i++){
           if(i == 0){
            total += numeros[0]
           }else if(numeros[i] == "+"){
            total = total + (numeros[i+1])
           }else if(numeros[i] == "-"){
            total = total - numeros[i+1]
           }else if(numeros[i] == "x"){
            if(numeros[i + 1] == 0){
                total = total * 1
            }else{
                total = total * numeros[i+1]
            }
           }else if(numeros[i] == "/"){
            if(numeros[i+1] == 0){
                total = total / 1
            }else{
            total = total / numeros[i+1]
            }
        }
           
            document.getElementById("txt").value = total
    }
   
    

    
    
    function soma(n1,n2){
        return n1 + n2
    }

    function multiplica(n1,n2){
        return n1*n2
    }

    function divide(n1,n2){
        return n1/n2
    }

    function subtrai(n1,n2){
        return n1-n2
    }

    }

}

function  limpar(){
    document.getElementById("txt").value = ""
}