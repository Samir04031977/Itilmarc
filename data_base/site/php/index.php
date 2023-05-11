<?php
$dbh = new PDO('mysql:host=db;dbname=sakila;user=root;password=password');
$sth = $dbh->query('SELECT * FROM choix')->fetch();
print_r($sth)
?>