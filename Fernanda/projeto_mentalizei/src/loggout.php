<?php
    session_destroy();
    $_SESSION["loggedin"] = false;
    header("location:../");
?>