<?php
    $_SESSION["loggedin"] = false;
    session_destroy();
    header("location:../pages/logout.php");
?>