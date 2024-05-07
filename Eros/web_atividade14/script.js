function textOnly()
{
    if (document.getElementById('idNameRequired'))
    {
        document.getElementById('idNameRequired').remove();
    }

    var n = document.createElement('small');
    n.id = "idNameRequired";
    n.classList = "text-danger text-opacity-75";
    n.innerText = "* invalid data *";
    return document.getElementById("divName").appendChild(n);
}

function textOk()
{
    if (document.getElementById('idNameRequired'))
    {
        document.getElementById('idNameRequired').remove();
    }
}

function intOnly() {
    return '<small id="idRequired" class="text-danger text-opacity-75">* fill this field only with text *</small>'
}

function cpfOnly()
{
    if (document.getElementById('idCpfRequired'))
    {
        document.getElementById('idCpfRequired').remove();
    }

    var r = document.createElement('small');
    r.id = "idCpfRequired";
    r.classList = "text-danger text-opacity-75";
    r.innerText = "* invalid cpf *";
    return document.getElementById("divCpf").appendChild(r);
}

function cpfOk()
{
    if (document.getElementById('idCpfRequired'))
    {
        document.getElementById('idCpfRequired').remove();
    }
}

function enableNext(u)
{
    switch (u)
    {
        case 2:
            if (document.getElementById("idA").value == "")
            {
                document.getElementById("idB").disabled = true;
                document.getElementById("idC").disabled = true;
                document.getElementById("idD").disabled = true;
                document.getElementById("idOk").disabled = true;
            }
            else
            {
                document.getElementById("idB").disabled = false;
                validateText(document.getElementById("idA").value);
            }
            break;
        case 3:
            if (document.getElementById("idB").value == "")
            {
                document.getElementById("idC").disabled = true;
                document.getElementById("idD").disabled = true;
                document.getElementById("idOk").disabled = true;

            }
            else
            {
                document.getElementById("idC").disabled = false;
                validateCpf(document.getElementById("idB").value);
            }
            break;
        case 4:
            if (document.getElementById("idC").value == "") {
                document.getElementById("idD").disabled = true;
                document.getElementById("idOk").disabled = true;
            }
            else
            {
                document.getElementById("idD").disabled = false;
            }
            break;
        case 5:
            if (document.getElementById("idD").value == "")
            {
                document.getElementById("idOk").disabled = true;
            }
            else
            {
                document.getElementById("idOk").disabled = false;
            }
            break;

        default:
            alert("switch's default");
            break;
    }
}

function validateText(str)
{
    str;
    str.trim();
    str.trim();

}

function validateCpf(str)
{
    var sum;
    var left;
    sum = 0;
    if (str == "00000000000") return document.getElementById("divCpf").appendChild(cpfOnly());

    for (i = 1; i <= 9; i++) sum = sum + parseInt(str.substring(i - 1, i)) * (11 - i);
    left = (sum * 10) % 11;

    if ((left == 10) || (left == 11)) left = 0;
    if (left != parseInt(str.substring(9, 10))) return document.getElementById("divCpf").appendChild(cpfOnly());

    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(str.substring(i - 1, i)) * (12 - i);
    left = (sum * 10) % 11;

    if ((left == 10) || (left == 11)) left = 0;
    if (left != parseInt(str.substring(10, 11))) return document.getElementById("divCpf").appendChild(cpfOnly());
    return cpfOk();
}