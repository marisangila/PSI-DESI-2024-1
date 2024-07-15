<div id="myModalEdit" class="modal">
    <div class="modal-content d-flex" id="modal-editar-pontual" style="height: 300px;">
        <span class="close" id="close" onclick="closeModalEdit()">&times;</span>
        <form id="editForm" method="POST" action="../src/editar_pontual.php">
            <div class="mb-4 d-flex justify-content-center"><img src="../img/logo.png" height="auto" width="50" id="img-logo"></div>
            <input type="hidden" id="id_med_pontual" name="id">
            <input class="form-control mx-auto my-2" id="descricao" type="text" placeholder="Descrição" required name="descricao" style="width:250px!important">
            <select class="form-select mx-auto my-2" required name="tipo_med" id="tipo_med" style="width:250px">
                <option selected disabled>Escolha uma opção...</option>
                <option value="1">Cápsula</option>
                <option value="2">Cápsula Gelatinosa</option>
                <option value="3">Comprimido</option>
                <option value="4">Drágea</option>
                <option value="5">Pó</option>
                <option value="6">Granulado</option>
                <option value="7">Líquido</option>
                <option value="8">Solução</option>
                <option value="9">Suspensão</option>
                <option value="10">Emulsão</option>
                <option value="11">Xarope</option>
                <option value="12">Aerossol</option>
            </select>
            <div class="d-flex justify-content-center mt-3">
                <button type="submit" class="btn align btn-editar-pontual" id="btn-editar">Alterar</button>
            </div>
        </form>
    </div>
</div>
