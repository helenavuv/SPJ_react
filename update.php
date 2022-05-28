<?php
include 'connection.php';
header('Content-type: text/json');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$naziv = $_POST["naziv"];
$proizvodac = $_POST["proizvodac"];
$model = $_POST["model"];
$cijena = $_POST["cijena"];
$kolicina = $_POST["kolicina"];
$id = $_POST["id"];

$arrayId=[];



$sQuery = "update artikli set Naziv = '$naziv', Proizvodac = '$proizvodac', Model = '$model', Cijena = '$cijena', Kolicina = '$kolicina' where id='$id';";

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



