<?php
require('vendor/autoload.php');
$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

/* The driver connects to the database server lazily, so Manager::getServers()
 * may initially return an empty array. */
var_dump($manager->getServers());

$command = new MongoDB\Driver\Command(['ping' => 1]);
$manager->executeCommand('db', $command);

var_dump($manager->getServers());
?>
