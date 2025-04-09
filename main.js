function ColorirDia(){
    // Pegar valor de campo de dia
    let days = document.getElementById('days').value;
    
    //Pega o valor do campo de cor 
    let color = document.getElementById('color').value;

    // Pega os elementos da tabela calendario
    let calendar = document.getElementById('calendar');

    // Verifica se o campo de dia foi prenchido
    if(!days){
        alert('Favor infroma o dia');
    } else if((days >0) && (days < 31)){
        // se o numero de dias esta no intervalor
        // aplicara a cor da celula do calendario
        let td = calendar.getElementsByTagName('td');
        td.style.backgroundColor = color;
    } else{
        alert("Favor informar um dia do calendario");
    }

     
    // Guarda a celula da tabela
    let elementos = document.querySelectorAll('td');

    //Declara e inicializa contadores
    let contadorAzul = 0, contadorVerde = 0, contadorRoxo = 0, contadorRosa = 0;
   
    // Loop para verificar o estilo de cada celula e contar quantas tem cor e qual cor 
      for (let i =0; i < elementos.length; i++){
        // obtem o estilo computador do elemento atual 
        var estilo = window.getComputedStyle(elementos[i]);

        // Obtem a cor de fundo atual da célula
        var corEstilo = estilo.backgroundColor;
        //Verifica a cor e ubcrementar contador correspondente
         if(corEstilo === "rgb(173,216,230)"||corEstilo === "lightblue"){contadorAzul++;

         } else if(corEstilo === "rgb(152,215,152)"||corEstilo === "palegreen"){contadorVerde++;

         }

      }   
}