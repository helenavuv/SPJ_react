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

$sQuery = "select max(Id) as najveci from artikli";
$oRecord = $oConnection->query($sQuery);
$arrayId  =[];
array_push($arrayId,$naziv);

while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
{
	$id = $oRow['najveci']+1;
    array_push($arrayId,$id);
}

$sQuery = "insert into artikli values ('$id','$naziv','$proizvodac','$model','$cijena','$kolicina');";
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