let tarefas = [];

function adicionar() {
    let input = document.getElementById('txt1').value;
    if (input === '') {
        alert('O campo não pode estar vazio!');
        return;
    }

    tarefas.push(input);
    atualizarLista();
    document.getElementById('txt1').value = '';
}

function atualizarLista() {
    let resultado_1 = document.getElementById('resultado_1');
    resultado_1.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        let li = document.createElement('li');
        li.innerText = tarefa;

        let button = document.createElement('button');
        button.innerText = 'Remover';
        button.onclick = function() {
            remover(index);
        }

        li.appendChild(button);
        resultado_1.appendChild(li);
    });
}

function remover(index) {
    tarefas.splice(index, 1);
    atualizarLista();
}
