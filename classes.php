<?php
class Configuration
{
	public $host="";
	public $dbname="";
	public $username="";
	public $password="";

	public function __construct()
	{
		$this->host="127.0.0.1";
		$this->dbname="pcshop";
		$this->username="root";
		$this->password="";
	}
}

function write_to_console($data) {

 $console = 'console.log(' . json_encode($data) . ');';
 $console = sprintf('<script>%s</script>', $console);
 echo $console;
}

class Artikl
{
	public $Proizvodac;
	public $Kolicina;
	public $Cijena;
	public $Naziv;
	public $Model;
	public $Id;

	public function __construct($Id,$Naziv,$Proizvodac,$Model,$Cijena,$Kolicina)
	{
		$this->Proizvodac=$Proizvodac;
		$this->Kolicina=$Kolicina;
		$this->Cijena=$Cijena;
		$this->Naziv=$Naziv;
		$this->Model=$Model;
		$this->Id=$Id;
	}
}


?>

