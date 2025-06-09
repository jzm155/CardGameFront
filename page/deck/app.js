window.onload = function () {
    var dados = [
        {
            "Id": 1,
            "Name": "Olhos do Oceano",
            "Image": "olhos-oceano",
            "Description": "Conjura aguas vivas",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 2,
            "Name": "Coelho Ladino",
            "Image": "coelho-ladino",
            "Description": "Ataque Rapido e Letal",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 3,
            "Name": "Gladiador do Inferno",
            "Image": "gladiador-inferno",
            "Description": "Dano de queimadura ",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 4,
            "Name": "Tubar�o Escorpi�o",
            "Image": "tubarao-escorpiao",
            "Description": "Dano de envenenamento e sangramento",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 5,
            "Name": "Elfa Arqueira",
            "Image": "elfa-arqueira",
            "Description": "Ataque Longo e Multiplo",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 6,
            "Name": "Orc do Inferno",
            "Image": "orc-inferno",
            "Description": "Esmaga e Queimadura",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 8,
            "Name": "Baron Madius",
            "Image": "baron-madius",
            "Description": "Atropelamento e Chamas",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 9,
            "Name": "Betrayal",
            "Image": "betrayal",
            "Description": "Armadura Pesada",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 10,
            "Name": "Assassino das sombras",
            "Image": "assassino-sombras",
            "Description": "Veneno Letal",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 11,
            "Name": "Orc Paladino",
            "Image": "orc-paladino",
            "Description": "Tank e Cura",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 12,
            "Name": "Lanceiro",
            "Image": "lanceiro",
            "Description": "Especialista em Lan�a",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 13,
            "Name": "Rainha do Gelo",
            "Image": "rainha-gelo",
            "Description": "Congelamento",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 14,
            "Name": "Guerreira Bailarina",
            "Image": "guerreira-bailarina",
            "Description": "Velocidade e Perfei��o",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 15,
            "Name": "Bailarina Guerreira",
            "Image": "bailarina-guerreira",
            "Description": "Perfei��o e Velocidade",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 16,
            "Name": "Mago de Fogo",
            "Image": "mago-de-fogo",
            "Description": "Dano de Queimadura",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 17,
            "Name": "Elfa Maga",
            "Image": "elfa-maga",
            "Description": "Magia Classica",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 18,
            "Name": "Cavaleira Alada",
            "Image": "cavaleira-alada",
            "Description": "Voar",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 19,
            "Name": "Demonio da Chama Azul",
            "Image": "demonio-chama-azul",
            "Description": "Destroi tudo pela frente",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 20,
            "Name": "Genio de Fogo",
            "Image": "genio-fogo",
            "Description": "Dano de Queimadura",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 21,
            "Name": "Guerreiro Berserk",
            "Image": "guerreiro-berserk",
            "Description": "Dano em Area",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 22,
            "Name": "Anatema",
            "Image": "anatema",
            "Description": "Cortar",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 23,
            "Name": "Rei Goblin",
            "Image": "rei-goblin",
            "Description": "Controla os goblins",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 24,
            "Name": "Tartaruga Rino",
            "Image": "tartaruga-rino",
            "Description": "Incrivelmente Resistente",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 25,
            "Name": "Pistoleiro Infernal",
            "Image": "pistoleiro-infernal",
            "Description": "Longo Alcance e Queimadura",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 26,
            "Name": "Cavaleiro Draconico",
            "Image": "cavaleiro-draconico",
            "Description": "Meio Humano-Drag�o",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 27,
            "Name": "Lorde Demonio",
            "Image": "lorde-demonio",
            "Description": "Lorde Demonio",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 28,
            "Name": "An�o guerreiro",
            "Image": "anao-guerreiro",
            "Description": "An�o",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 29,
            "Name": "Princesa Guerreira",
            "Image": "princesa-guerreira",
            "Description": "Rapida e Forte",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        },
        {
            "Id": 30,
            "Name": "Lobisomen",
            "Image": "lobisomen",
            "Description": "Lobisomen",
            "Attack": 10,
            "Defense": 10,
            "Magic": 10,
            "MagicResist": 10,
            "HealthPoint": 10,
            "Level": 10
        }
    ]
    dados.forEach(x => criarCard(x.Name, x.Level, x.Image, x.Description, x.Attack, x.Defense,))
    document.getElementById('arquivoJSON').addEventListener('change', function (e) {
        const arquivo = e.target.files[0];
        const leitor = new FileReader();
        leitor.onload = function (f) {
            const conteudo = f.currentTarget.result;
            const json = JSON.parse(conteudo);
            json.forEach(x => criarCard(x.Name,x.Level,x.Image,x.Description,x.Attack,x.Defense,))
        };
        leitor.readAsText(arquivo);
    });

    function criarCard(titulo, nivel, imagem, descricao, attack, defense) {
        const card = document.createElement('div');
        card.className = 'card';

        // T�tulo
        const cardTitle = document.createElement('div');
        cardTitle.className = 'card-title';

        const tituloElem = document.createElement('b');
        tituloElem.textContent = titulo;

        const nivelElem = document.createElement('b');
        nivelElem.textContent = nivel;

        cardTitle.appendChild(tituloElem);
        cardTitle.appendChild(nivelElem);

        // Imagem
        const cardImage = document.createElement('div');
        cardImage.className = 'card-image';

        const imgElem = document.createElement('img');
        imgElem.src = "../../img/cards/" + imagem + ".png";
        imgElem.alt = titulo;

        cardImage.appendChild(imgElem);

        // Descri��o
        const cardDescription = document.createElement('div');
        cardDescription.className = 'card-description';
        cardDescription.textContent = descricao;

        // Poder
        const cardPower = document.createElement('div');
        cardPower.className = 'card-power';
        cardPower.textContent = attack + '/' + defense;

        // Monta o card final
        card.appendChild(cardTitle);
        card.appendChild(cardImage);
        card.appendChild(cardDescription);
        card.appendChild(cardPower);

        document.getElementById('container').appendChild(card);
    }
}