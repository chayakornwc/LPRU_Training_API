<?php
require_once '../app/dbconnection.php';
$db = new mongoDatabase;
print_r($db->insertNewitem([
  'Thai' => 'Chang',
  'Thai' => 'Singha',
  'Thai' => 'LEO'
  ]));
?>
