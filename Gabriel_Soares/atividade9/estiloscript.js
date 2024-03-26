var b_desmarca = document.getElementById("desmarca");
var b_marca = document.getElementById("marca");
var conteudo = document.getElementById("conteudo");

desabilitado();

function desmarca()
{
    b_desmarca.classList.remove("invisivel");
    b_marca.classList.add("invisivel");

    desabilitado();
};

function marca()
{
    b_marca.classList.remove("invisivel");
    b_desmarca.classList.add("invisivel");
    
    habilitado();
};

function desabilitado()
{
    var form = conteudo.getElementsByTagName('*');
    for(var i = 0; i < form.length; i++)
    {
        form[i].disabled = true;
    }
}

function habilitado()
{
    var form = conteudo.getElementsByTagName('*');
    for(var i = 0; i < form.length; i++)
    {
        form[i].disabled = false;
    }
}