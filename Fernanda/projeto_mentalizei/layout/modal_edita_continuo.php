<div id="myModalEditContinuo" class="modal">
    <div class="modal-content-continuo d-flex" id="diario-modal-continuo">
        <span class="close" id="close" onclick="closeModal()">&times;</span>
        <form id="editForm" method="POST" action="../src/editar_continuo.php">
            <input type="hidden" id="id_med_continuo" name="id">
            <div class="mb-4 d-flex justify-content-center"><img src="../img/logo.png" height="auto" width="50" id="img-logo"></div>
            <label class="form-label my-2">Descrição(nome):<input class="form-control" type="text" name="descricao" id="descricao"></label>
            <label class="form-label my-2">Miligramagem:<input class="form-control" type="text" name="mg" id="mg"></label>
            <label class="form-label my-2">Quantidade no dia:<input class="form-control" type="text" name="quantidade_dia" id="quantidade_dia"></label>
            <label class="form-label my-2">Horário:<input class="form-control" type="time" name="horario" id="horario"></label>
            <label class="form-label my-2">Data de Início:<input class="form-control" type="date" name="dt_inicio" id="dt_inicio"></label>
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
                <button type="submit" class="btn align btn-editar-pontual" id="btn-editar-pontual">Alterar</button>
                <button type="button" class="btn align btn-cancelar-pontual" id="">Excluir</button>
            </div>
        </form>
    </div>
</div>
