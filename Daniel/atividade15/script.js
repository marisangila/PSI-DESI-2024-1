let countId = 0
$('#formTable').on('submit', (event) => {
    countId++
    event.preventDefault();
    let name = $('#nameInput').val();
    let email = $('#emailInput').val();

    let columnName = $(`<tr id="line1">
                        <th scope="row" class="px-4">${countId}</th>
                        <td class="px-3" >${name}</th>
                        <td class="px-3" >${email}</th>
                        <td><input type="button" value="Edit" class="btn btn-secondary" onClick="edit(this)" id="butEdit"></td>
                        <td><input type="button" value="Delete" class="btn btn-danger" onClick="remove(this)" id="butDelete"></td>
                        </tr>`);

    $('#table').append(columnName);
})

function remove(element){
    $(element).parent().parent().remove();
}

function edit(element){
    
    const name = $(element).parent().prev().prev();
    console.log(name);
    const email = $(element).parent().prev();
    console.log(email);
    $('#modalEdit').css('background-color', 'rgba(0,0,0,.2)')
    $('.modal-dialog').css('width', '200000px')

    $('#modalEdit').css('display', 'flex');
    $('#nameInputModal').val(name.text());
    $('#emailInputModal').val(email.text());

    $("#saveModal").click((event)=>{
        event.preventDefault()
        $(name).text($('#nameInputModal').val())
        $(email).text($('#emailInputModal').val())
        $('#modalEdit').css('display', 'none');
    })

    $("#closeModal").click((event)=>{
        event.preventDefault()
        $('#modalEdit').css('display', 'none');
    })
}