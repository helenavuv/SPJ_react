<?php
include 'connection.php';
header('Access-Control-Allow-Origin: *');
header('Content-type: text/json');
header('Content-type: application/json; charset=utf-8');


$sQuery = "select * from artikli where Id=".$_GET['id'].";";
$oRecord = $oConnection->query($sQuery);
$artikli=array();
while($oRow = $oRecord->fetch(PDO::FETCH_BOTH))
{
	$oArtikl = new Artikl($oRow['Id'],$oRow['Naziv'],$oRow['Proizvodac'],$oRow['Model'],$oRow['Cijena'],$oRow['Kolicina']);
	array_push($artikli,$oArtikl);
}
echo json_encode($artikli);



?>