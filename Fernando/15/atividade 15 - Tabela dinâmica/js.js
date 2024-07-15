//nome
//numCartao
//dtValidade
//codSeguranca
//btn

function addCartao(){

    cartao=document.createElement('tr');

    let nome = document.createElement('td');
    let numCartao = document.createElement('td');
    let dtValidade = document.createElement('td');
    let codSeguranca = document.createElement('td');
    let acoes = document.createElement('td');

    let editar=document.createElement('button');
    let excluir=document.createElement('button');

    editar.textContent='EDITAR';
    excluir.textContent='EXCLUIR';

    editar.className='btn col-2 m-2 btn-primary';
    excluir.className='btn col-2 m-2 btn-danger';

    excluir.addEventListener('click',delCartao
    );

    nome.textContent=document.getElementById('nome').value;
    numCartao.textContent=document.getElementById('numCartao').value;
    dtValidade.textContent=document.getElementById('dtValidade').value;
    codSeguranca.textContent=document.getElementById('codSeguranca').value;

    acoes.appendChild(editar);
    acoes.appendChild(excluir);

    cartao.appendChild(nome);
    cartao.appendChild(numCartao);
    cartao.appendChild(dtValidade);
    cartao.appendChild(codSeguranca);
    cartao.appendChild(acoes);
    

    document.getElementById('tbody').append(cartao);


}
function delCartao() {
    this.closest('tr').remove();
  }