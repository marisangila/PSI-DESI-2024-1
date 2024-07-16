<?php
    function showFirstName($fullName){
        $names = explode(" ", $fullName);
        $firstName = $names[0];
        return $firstName;
    }
?>