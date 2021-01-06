<?php 

	require_once "conexionMysql.php";

class datosModelo{

	//Listar Dialogos ----------------------------------------------------------
		
 static public function mdlListarDatos(){
		$stmt = ConexionMysql::conectarMysql()->prepare("SELECT * FROM vistadatoschart");

		if ($stmt->execute()) {
			return $stmt->fetchAll();
		}else{
			print_r(ConexionMysql::conectarMysql()->errorInfo());
		}
		$stmt = null;
	}
	//Listar Dialogos ----------------------------------------------------------
}
//Autoload ajax
	$resp = datosModelo::mdlListarDatos();
	echo json_encode($resp);
?>