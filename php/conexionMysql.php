<?php 

	Class ConexionMysql{

		static public function conectarMysql(){

			//parametros PDO ("nameserver;basededatos","usuario","contraseña")
			$link = new PDO("mysql:host=localhost;dbname=chartjs","root","root");
			$link ->exec("set names utf8");
			$link ->exec("set lc_time_names = 'es_CO'");
			$link->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
			return $link;
		}

	}

		/*$stmt = ConexionMysql::conectarMysql()->prepare("SELECT * FROM tbldatos");
		if ($stmt->execute()) {
			var_dump($stmt->fetchAll()) ;
		}else{
			print_r(ConexionMysql::conectarMysql()->errorInfo());
		}*/
?>