function q1LinkBtn() {
    window.open("http://google.com.br", "_blank")
}

function q2HideMenu() {
    if (document.getElementById('menu').hidden == true) {
        document.getElementById('menu').hidden = false
    } else {
        document.getElementById('menu').hidden = true
    }
}

function q3ToggleInput() {
    if (document.getElementById('nome').value == "") {
        document.getElementById('sobrenome_label').hidden = true
        document.getElementById('sobrenome_input').hidden = true
        document.getElementById('sobrenome_input').value = ""
    } else {
        document.getElementById('sobrenome_label').hidden = false
        document.getElementById('sobrenome_input').hidden = false

    }
}

function q4Verify() {
    document.getElementById('btn').disabled = false
    if (document.getElementById('nome').value == "") {
        document.getElementById('w1').hidden = false
        document.getElementById('btn').disabled = true
    } else {
        document.getElementById('w1').hidden = true
        document.getElementById('btn').disabled = false
    }
    if (document.getElementById('sobrenome').value == "") {
        document.getElementById('w2').hidden = false
        document.getElementById('btn').disabled = true
    } else {
        document.getElementById('w2').hidden = true
        document.getElementById('btn').disabled = false
    }
}

function q5Validate() {
    cpf = document.getElementById('cpf').value
    if (cpf == "") {
        document.getElementById('invalid').hidden = true
        document.getElementById('valid').hidden = true
    } else {
        cpf = cpf.replace(/\D/g, '')
        if (cpf.length != 11) {
            document.getElementById('invalid').hidden = false
            document.getElementById('valid').hidden = true
        } else {
            cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
            document.getElementById('cpf').value = cpf
            document.getElementById('invalid').hidden = true
            document.getElementById('valid').hidden = false
        }
    }
}

function q6ShowOption() {
    caixa = document.getElementById('caixa');
    option1Campo = document.getElementById('option1Campo');
    option2Campo = document.getElementById('option2Campo');

    if (caixa.value === 'option1') {
        option1Campo.style.display = 'block';
        option2Campo.style.display = 'none';
    } else if (caixa.value === 'option2') {
        option1Campo.style.display = 'none';
        option2Campo.style.display = 'block';
    } else {
        option1Campo.style.display = 'none';
        option2Campo.style.display = 'none';
    }
}

function q7RealTimeCount(){
    count=document.getElementById('input').value.length
    document.getElementById('count').innerHTML=(count)
}

function q8Focus(){
    document.getElementById('box1').addEventListener('focus', () => {
        document.getElementById('b1txt1').removeAttribute('hidden');
        document.getElementById('b1txt2').setAttribute('hidden', 'true');
    });

    document.getElementById('box1').addEventListener('blur', () => {
        document.getElementById('b1txt1').setAttribute('hidden', 'true');
        document.getElementById('b1txt2').removeAttribute('hidden');
    });

    document.getElementById('box2').addEventListener('focus', () => {
        document.getElementById('b2txt1').removeAttribute('hidden');
        document.getElementById('b2txt2').setAttribute('hidden', 'true');
    });

    document.getElementById('box2').addEventListener('blur', () => {
        document.getElementById('b2txt1').setAttribute('hidden', 'true');
        document.getElementById('b2txt2').removeAttribute('hidden');
    });
}