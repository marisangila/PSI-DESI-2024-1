<div id="myModalConfirma" class="modal">
    <div class="modal-content" id="diario-modal">
        <span class="close" onclick="closeModalConfirma()">&times;</span>
        <div class="d-flex flex-column my-3">
            <label class="mx-auto fs-5 text-center">Deseja realmente excluir essa medicação?</label>
            <div class="d-flex justify-content-center mt-4">
                <form id="deleteForm" action="../src/deletar_continuo.php" method="get">
                    <input type="hidden" id="id_med_continuo_confirm" name="id">
                    <button type="submit" class="btn btn-primary" id="opc_sim">Sim</button>
                </form>
                <div class="d-flex justify-content-center mx-1"><button type="button" class="btn btn-danger" onclick="closeModalConfirma()">Não</button></div>
            </div>
        </div>
    </div>
</div>