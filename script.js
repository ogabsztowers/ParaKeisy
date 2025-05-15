document.addEventListener('DOMContentLoaded', () => {
    const botaoPoema = document.getElementById('botao-poema');
    const poemaAmor = document.getElementById('poema-amor');
    const textoPoema = document.getElementById('texto-poema');
    const listaQualidadesSecao = document.getElementById('lista-qualidades');
    const listaQualidades = document.getElementById('qualidades');
    const mensagemFinalSecao = document.getElementById('mensagem-final');
    const textoFinal = document.getElementById('texto-final');

    const poemas = [
        `Em cada amanhecer, teu sorriso me guia,
        Na melodia da vida, tua voz é magia.
        Teu olhar sereno, farol em meu caminho,
        Keisy, meu amor, flor do meu jardimho.`,
        `Palavras são poucas para expressar o que sinto,
        Um oceano de amor, um laço infinito.
        Tua alma bondosa, teu jeito especial,
        Em meu coração, tens um lugar sem igual.`,
        `Como a brisa suave que acalma a paixão,
        Você chegou em minha vida, doce canção.
        Em teus braços encontro a paz e o calor,
        Meu eterno amor, meu maior valor.`,
        `Se cada estrela no céu fosse um beijo meu,
        A noite seria eterna, meu grande anseu.
        Você é a poesia que a vida me deu,
        Keisy, meu amor, meu eterno troféu.`
    ];

    const qualidadesKeisy = [
        "Sua doçura encanta meu dia.",
        "Sua inteligência me inspira.",
        "Sua bondade aquece meu coração.",
        "Seu humor me faz sorrir sempre.",
        "Sua força me motiva a seguir.",
        "Sua lealdade é um tesouro.",
        "Sua paciência me acalma.",
        "Sua beleza irradia.",
        "Sua alegria é contagiante.",
        "Sua compreensão me conforta."
        // Adicione mais qualidades que você admira nela!
    ];

    const mensagensFinais = [
        "Que este pequeno gesto mostre o quanto você é importante para mim.",
        "Meu amor por você é constante e verdadeiro, Keisy.",
        "Espero que este carinho ilumine ainda mais o seu dia.",
        "Você merece todo o amor e felicidade do mundo.",
        "Pensando em você com muito amor e carinho."
    ];

    botaoPoema.addEventListener('click', () => {
        // Escolhe um poema aleatório
        const poemaAleatorio = poemas[Math.floor(Math.random() * poemas.length)];
        textoPoema.textContent = poemaAleatorio;
        poemaAmor.classList.add('mostrar');

        // Exibe a lista de qualidades com um pequeno atraso e animação
        setTimeout(() => {
            qualidadesKeisy.forEach(qualidade => {
                const li = document.createElement('li');
                li.textContent = qualidade;
                listaQualidades.appendChild(li);
            });
            listaQualidadesSecao.classList.add('mostrar');
        }, 1000);

        // Exibe a mensagem final
        setTimeout(() => {
            const mensagemFinalAleatoria = mensagensFinais[Math.floor(Math.random() * mensagensFinais.length)];
            textoFinal.textContent = mensagemFinalAleatoria;
            mensagemFinalSecao.classList.add('mostrar');
        }, 2000);

        // Desabilita o botão
        botaoPoema.disabled = true;
        botaoPoema.textContent = 'Poema e Surpresas Reveladas!';
    });
});