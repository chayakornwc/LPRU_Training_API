<?php
 require 'vendor/autoload.php';

 $manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

 $command = new MongoDB\Driver\Command(array("ping" => 1));
 $result = $manager->executeCommand("test", $command);

 var_dump($result, $result->toArray());
/*  class mongoDatabase {
    function __construct(){
      $this->db = ( new mongoDB\Client)->demo->beers;

    }
    public function insertNewitem( $iteminfo =[]){
      if(empty($iteminfo)){
        return false;
      }
      $this->db->insertOne([
        'Thai' => $iteminfo['Thai'],
        'Thai' => $iteminfo['Thai'],
        'Thai' => $iteminfo['Thai']
      ]);
      return $insertable->getInsertedId();
  }
}
*/
