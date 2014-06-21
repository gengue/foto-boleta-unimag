function cargarImagen(){
	var cod = $("#codigo").val();

	if(cod == ""){
		return false;
	}

	$("#fotoResul").attr('src','http://www.linuxhispano.net/wp-content/plugins/jetpack/modules/sharedaddy/images/loading.gif');
	$("#foto").show();	
	
	setTimeout(function(){
		$("#fotoResul").addClass('img-thumbnail');
		$("#fotoResul").attr('src','http://admisiones.unimagdalena.edu.co/estudiantes/fotoEst/upload/'+cod+'.jpg');	
	}, 300);	
	
}
