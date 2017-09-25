<?php
 require 'vendor/autoload.php';
  class mongoDatabase {
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
