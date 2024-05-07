var lin = "a";
var i = 0;

function add()
{
    i++;
    TBtabela = document.getElementById('IDtabela');
    INnome = document.getElementById('IDnome');
    INtime = document.getElementById('IDtime');
    INlamb = document.getElementById('IDlambidas');
    
    if (INnome.value != "" && INtime.value != "" && INlamb.value != "")
    {
        var lin = document.createElement('tr');
        lin.id = "lin"+i;
        BTNedit = criaBTNedit();
        BTNdelet = criaBTNdelet();
        
        let cel0 = document.createElement('td');
        let cel1 = document.createElement('td');
        let cel2 = document.createElement('td');
        let cel3 = document.createElement('td');
        let cel4 = document.createElement('td');
        let cel5 = document.createElement('td');
    
        cel0.textContent = i;
        lin.appendChild(cel0);
    
        cel1.textContent = INlamb.value;
        lin.appendChild(cel1);
        cel2.textContent = INtime.value;
        lin.appendChild(cel2);
        cel3.textContent = INnome.value;
        lin.appendChild(cel3);
    
        cel4.appendChild(BTNedit);
        lin.appendChild(cel4);
        cel5.appendChild(BTNdelet);
        lin.appendChild(cel5);
        
        return TBtabela.appendChild(lin)
    } else {
        return alert('Todos os campos devem estar preenchidos!');
        }
}

function criaBTNedit()
{
    var x = document.createElement('button');
    x.id = 'IDedit'+i;
    x.classList.add('btn','btn-warning','btn-lg','rounded-5');
    x.style.padding = '0.3rem';
    x.style.width = '50px';
    x.textContent = "E";

    x.addEventListener('click',edit());

    return x
}

function criaBTNdelet()
{
    var x = document.createElement('button');
    x.id = 'IDdelet'+i;
    x.classList.add('btn','btn-danger','btn-lg','rounded-5');
    x.style.padding = '0.3rem';
    x.style.width = '50px';
    x.textContent = "X";

    x.addEventListener('click',delet());

    return x
}

function edit()
{
    alert(this);
    this.classList.add('bg-warning-subtle');
    //this.closest('tr').classList.add('bg-warning-subtle');
}

function delet(x)
{
    x.parentNode.parentNode.remove();
}