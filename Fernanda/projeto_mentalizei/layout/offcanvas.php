<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="my-2">
      <a class="text-decoration-none text-black" href="../pages/inicial.php">Home</a>
    </div>
    <div class="my-2">
      <a class="text-decoration-none text-black" href="../pages/meu_perfil.php">Meu perfil</a>
    </div>
    <div class="dropdown my-2">
      <div class="" type="button" data-bs-toggle="dropdown">
        <a class="dropdown text-decoration-none text-black" type="button">
          Medicações</a>
        <i class="bi bi-chevron-down position-absolute end-0"></i>
      </div>
      <ul class="dropdown-menu form-control">
        <li><a class="dropdown-item" href="../pages/cadastrar_med.php">Cadastrar Medicações</a></li>
        <li><a class="dropdown-item" href="../pages/lista_med.php">Resumo Medicações</a></li>
      </ul>
    </div>
    <?php echo '<a class="text-black position-absolute bottom-0 mb-2 start-0 ms-3" href="../src/logout.php"><i class="bi bi-power"></i>Logout</a>';?>
  </div>
</div>