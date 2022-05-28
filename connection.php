<?php 
include 'classes.php';

$config=new Configuration();

try
{
	$oConnection = new PDO("mysql:host=$config->host;dbname=$config->dbname", $config->username, $config->password);
	#write_to_console("Connected successfully.");
	#write_to_console("Connected to $config->dbname at $config->host successfully." ) ;
}
catch (PDOException $pe)
{
 die("Could not connect to the database $config->dbname :" . $pe->getMessage());
}




 ?>