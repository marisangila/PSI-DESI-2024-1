function existeCpf() {
    cpf = document.getElementById("cpf").value.trim()

    if(cpf === ""){
        alert("Insira o cpf no campo indicado")
    }
}
function validaCPF(cpf) {
	cpf = cpf.replace(/\D+/g, '');
	if (cpf.length !== 11) return false;

	let soma = 0;
	let resto;
	if (/^(\d)\1{10}$/.test(cpf)) return false;

	for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
	resto = (soma * 10) % 11;
	if ((resto === 10) || (resto === 11)) resto = 0;
	if (resto !== parseInt(cpf.substring(9, 10))) return false;

	soma = 0;
	for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
	resto = (soma * 10) % 11;
	if ((resto === 10) || (resto === 11)) resto = 0;
	if (resto !== parseInt(cpf.substring(10, 11))) return false;

	return true;
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('cpfForm').addEventListener('submit', function(e) {
		var cpf = document.getElementById('cpf').value;
		if (!validaCPF(cpf)) {
			e.preventDefault();
			document.getElementById("erro").innerText = 'CPF inválido. Verifique o número digitado.';
			document.getElementById('cpf').focus();
		}else{
            alert("CPF cadastrado com sucesso!")
        }
	});

	document.getElementById('cpf').addEventListener('input', function(e) {
		var value = e.target.value;
		var cpfPattern = value.replace(/\D/g, '')
							  .replace(/(\d{3})(\d)/, '$1.$2')
							  .replace(/(\d{3})(\d)/, '$1.$2')
							  .replace(/(\d{3})(\d)/, '$1-$2')
							  .replace(/(-\d{2})\d+?$/, '$1');
		e.target.value = cpfPattern;
	});
});