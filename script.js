
// Estilização do Menu de Navegação

function toggleMenu() {
    console.log("Menu toggled"); // Verificar se essa mensagem aparece no console
    const menu = document.getElementById('menuItems');
    menu.classList.toggle('active');
}

// Fechamento do menu ao clicar fora dele

document.addEventListener('click', (event) => {
    const menu = document.getElementById('menuItems');
    const logo = document.querySelector('.logo-cabecalho');

    if (menu.classList.contains('active') && !menu.contains(event.target) && event.target !== logo) {
        menu.classList.remove('active'); // Remover a classe 'active'
    }
});

// Estilização do carrossel de imagens (Linhas 47 a 88 do arquivo index.html)

console.log("JavaScript carregado");

var cont = 1;

// Iniciar a troca automática de imagens

setInterval(() => {
    proximaImg();
}, 5000);

// Função para passar para a próxima imagem

function proximaImg() {
    cont++;
    if (cont > 4) {
        cont = 1; 
    }
    atualizarRadios();
}

// Atualizar o estado dos rádios

function atualizarRadios() {
    console.log("Atualizando rádio: " + cont); // Debug
    for (let i = 1; i <= 4; i++) {
        document.getElementById('radio' + i).checked = (i === cont);
    }
}

// Adicionar eventos de clique aos botões manuais

const manualBtns = document.querySelectorAll('.manual-btn');

manualBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        console.log("Botão manual clicado: " + (index + 1)); // Debug
        cont = index + 1; // Ajustar o contador baseado no índice
        atualizarRadios(); // Atualizar os radios para refletir a escolha manual
    });
});

// JavaScript para rolar suavamente o botão para voltar até topo 

// Função para rolar suavemente até o topo

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar o botão ao rolar

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const btnTopo = document.getElementById("btnTopo");
    if (btnTopo) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnTopo.style.display = "block"; // Exibir o botão
        } else {
            btnTopo.style.display = "none"; // Ocultar o botão
        }
    }
}