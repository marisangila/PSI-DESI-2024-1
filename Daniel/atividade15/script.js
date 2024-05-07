$('#formTable').on('submit', (event) => {
    event.preventDefault();
    let name = $('#nameInput').val();
    let email = $('#emailInput').val();

    let columnName = $(`<tr>
                        <td class="px-3" >${name}</th>
                        <td class="px-3 " >${email}</th>
                        <td><input type="button" value="Edit" class="btn btn-secondary"></td>
                        <td><input type="button" value="Delete" class="btn btn-danger"></td>
                        <tr>`);

    $('#table').append(columnName);
})