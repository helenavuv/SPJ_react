<?php
include 'connection.php';
header('Access-Control-Allow-Headers:*');
header('Access-Control-Allow-Origin: *');
header('Content-type: text/json');
header('Content-type: application/json; charset=utf-8');
$arrayId  =[];

$sQuery = "delete from artikli where id=".$_GET['id'].";";
try
{
    $oConnection->query($sQuery);
}
catch (PDOException $pe)
{
    echo "Error: " . $sQuery . "<br>" . $oConnection->e;
}
  


echo json_encode($arrayId);

?>