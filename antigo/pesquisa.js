
let maximo = 5; 
let legumes_count = 1; /*conta as seleções do botão de adicionar.*/
let verduras_count = 1;
let outros_count = 1;
let carnes_count = 1;
let frutas_count = 1;

function add_legumes() {
    if (legumes_count >= maximo) return; /*após chegar no máx. não é possível add mais.*/

    /*Cria o select*/ 
    let legumes_novo = document.createElement('select');
    legumes_novo.setAttribute('name', `legumes${legumes_count}`);
    
    /*Cria opções do select*/ 
    let options = [
        { value: "0", text: "Legumes" },
        { value: "1", text: "Abóbora" },
        { value: "2", text: "Abobrinha" },
        { value: "3", text: "Batata" },
        { value: "4", text: "Batata-doce"},
        { value: "5", text: "Beterraba"},
        { value: "6", text: "Berinjela"},
        { value: "7", text: "Brócolis"},
        { value: "8", text: "Cabotiá"},
        { value: "9", text: "Cenoura"},
        { value: "10", text: "Couve-flor"},
        { value: "11", text: "Ervilha"},
        { value: "12", text: "Gengibre"},
        { value: "13", text: "Grão-de-bico"},
        { value: "14", text: "Inhame"},
        { value: "15", text: "Jiló"},
        { value: "16", text: "Lentilha"},
        { value: "17", text: "Mandioca"},
        { value: "18", text: "Milho"},
        { value: "19", text: "Nabo"},
        { value: "20", text: "Palmito"},
        { value: "21", text: "Pepino"},
        { value: "22", text: "Pimentão"},
        { value: "23", text: "Quiabo"},
        { value: "24", text: "Rabanete"},
        { value: "25", text: "Tomate"},
        { value: "26", text: "Vagem"}
    ];

    options.forEach(optionData => {
        let option = document.createElement('option');
        option.value = optionData.value;
        option.text = optionData.text;
        legumes_novo.appendChild(option);
    });

    /*Seleciona a div e adiciona o novo select e o botão após ele*/ 
    let div = document.querySelector('div.part1');
    div.appendChild(legumes_novo);

    /*Atualiza o contador de seleções de legumes*/ 
    legumes_count++; 

    /*Reposiciona o botão '+' após o novo select e o desabilita ao atingir o limite*/ 
    let botaoMais = document.getElementById("btn_legumes");
    div.appendChild(botaoMais);
    if (legumes_count >= maximo) {
        botaoMais.disabled = true; /*Desabilita o botão quando o limite é atingido*/ 
    }
}

function add_verduras() {
    if (verduras_count >= maximo) return; /*após chegar no máx. não é possível add mais.*/

    /*Cria o select*/ 
    let verduras_novo = document.createElement('select');
    verduras_novo.setAttribute('name', `verduras${verduras_count}`);
    
    /*Cria opções do select*/ 
    let options = [
        { value: "0", text: "Verduras"},
        { value: "1", text: "Açafrão"},
        { value: "2", text: "Acelga"},
        { value: "3", text: "Agrião"},
        { value: "4", text: "Aipo"},
        { value: "5", text: "Alcachofra"},
        { value: "6", text: "Alcaparra"},
        { value: "7", text: "Alecrim"},
        { value: "8", text: "Alface-americana"},
        { value: "9", text: "Alface-crespa"},
        { value: "10", text: "Alface-repolhuda"},
        { value: "11", text: "Alface-romana"},
        { value: "12", text: "Alho-poró"},
        { value: "13", text: "Almeirão"},
        { value: "14", text: "Aspargo"},
        { value: "15", text: "Cebolinha"},
        { value: "16", text: "Chicória"},
        { value: "17", text: "Coentro"},
        { value: "18", text: "Couve-de-bruxelas"},
        { value: "19", text: "Couve-de-milão"},
        { value: "20", text: "Couve-de-saboia"},
        { value: "21", text: "Espinafre"},
        { value: "22", text: "Manjericão"},
        { value: "23", text: "Ora-pro-nobis"},
        { value: "24", text: "Orégano"},
        { value: "25", text: "Peixinho-da-horta"},
        { value: "26", text: "Palma"},
        { value: "27", text: "Picão"},
        { value: "28", text: "Repolho"},
        { value: "29", text: "Rúcula"},
        { value: "30", text: "Salsa"},
        { value: "31", text: "Salsão"},
        { value: "32", text: "Sálvia"},
        { value: "33", text: "Taioba"},
        { value: "34", text: "Tomilho"}
    ];

    options.forEach(optionData => {
        let option = document.createElement('option');
        option.value = optionData.value;
        option.text = optionData.text;
        verduras_novo.appendChild(option);
    });

    /*Seleciona a div e adiciona o novo select e o botão após ele*/ 
    let div = document.querySelector('div.part2');
    div.appendChild(verduras_novo);

    /*Atualiza o contador de seleções de legumes*/ 
    verduras_count++; 

    /*Reposiciona o botão '+' após o novo select e o desabilita ao atingir o limite*/ 
    let botao_mais = document.getElementById("btn_verduras");
    div.appendChild(botao_mais);
    if (verduras_count >= maximo) {
        botao_mais.disabled = true; /*Desabilita o botão quando o limite é atingido*/ 
    }
}

function add_outros() {
    if (outros_count >= maximo) return; /*após chegar no máx. não é possível add mais.*/

    /*Cria o select*/ 
    let outros_novo = document.createElement('select');
    outros_novo.setAttribute('name', `outros${outros_count}`);
    
    /*Cria opções do select*/ 
    let options = [
        { value: "0", text: "Ingredientes Variados"},
        { value: "1", text: "Açúcar"},
        { value: "2", text: "Alho"},
        { value: "3", text: "Arroz"},
        { value: "4", text: "Azeite"},
        { value: "5", text: "Cebola"},
        { value: "6", text: "Creme de leite"},
        { value: "7", text: "Farinha de trigo"},
        { value: "8", text: "Farinha de rosca"},
        { value: "9", text: "Fermento"},
        { value: "10", text: "Feijão"},
        { value: "11", text: "Leite"},
        { value: "12", text: "Macarrão"},
        { value: "13", text: "Manteiga"},
        { value: "14", text: "Mel"},
        { value: "15", text: "Óleo"},
        { value: "16", text: "Ovos"}
    ];

    options.forEach(optionData => {
        let option = document.createElement('option');
        option.value = optionData.value;
        option.text = optionData.text;
        outros_novo.appendChild(option);
    });

    /*Seleciona a div e adiciona o novo select e o botão após ele*/ 
    let div = document.querySelector('div.part3');
    div.appendChild(outros_novo);

    /*Atualiza o contador de seleções de legumes*/ 
    outros_count++; 

    /*Reposiciona o botão '+' após o novo select e o desabilita ao atingir o limite*/ 
    let botao_mais = document.getElementById("btn_outros");
    div.appendChild(botao_mais);
    if (outros_count >= maximo) {
        botao_mais.disabled = true; /*Desabilita o botão quando o limite é atingido*/ 
    }
}

function add_carnes() {
    if (carnes_count >= maximo) return;

    let carnes_novo = document.createElement('select');
    carnes_novo.setAttribute('name', `carnes${carnes_count}`);
    
    let options = [
        { value: "0", text: "Carnes"},
        { value: "1", text: "Acém"},
        { value: "2", text: "Carne moída"},
        { value: "3", text: "Lagarto"},
        { value: "4", text: "Bacon"},
        { value: "5", text: "Sobrecoxa de frango"},
        { value: "6", text: "Atum"},
        { value: "7", text: "Merluza"},
        { value: "8", text: "Tilápia"}
    ];

    options.forEach(optionData => {
        let option = document.createElement('option');
        option.value = optionData.value;
        option.text = optionData.text;
        carnes_novo.appendChild(option);
    });

    let div = document.querySelector('div.part4');
    div.appendChild(carnes_novo);

    carnes_count++;

    let botao_mais = document.getElementById("btn_carnes");
    div.appendChild(botao_mais);
    if (carnes_count >= maximo) {
        botao_mais.disabled = true;
    }
}

function add_frutas() {
    if (frutas_count >= maximo) return;

    let frutas_novo = document.createElement('select');
    frutas_novo.setAttribute('name', `frutas${frutas_count}`);
    
    let options = [
        { value: "0", text: "Frutas"},
        { value: "1", text: "Abacaxi"},
        { value: "2", text: "Banana"},
        { value: "3", text: "Goiaba"},
        { value: "4", text: "Laranja"},
        { value: "5", text: "Limão"},
        { value: "6", text: "Manga"},
        { value: "7", text: "Morango"}
    ];

    options.forEach(optionData => {
        let option = document.createElement('option');
        option.value = optionData.value;
        option.text = optionData.text;
        frutas_novo.appendChild(option);
    });

    let div = document.querySelector('div.part5');
    div.appendChild(frutas_novo);

    frutas_count++;

    let botao_mais = document.getElementById("btn_frutas");
    div.appendChild(botao_mais);
    if (frutas_count >= maximo) {
        botao_mais.disabled = true;
    }
}