$(document).ready(function() {
	console.log('charttttt.js');
	traerDatos();
	

});

//Funciones-------------------------------------------------------------------

function traerDatos(){
	$.ajax({
		url: 'php/traerDatos.php',
		type: 'POST',
		dataType: 'json',
		data: {param1: 'value1'},
	})
	.done(function(result) {
				console.log(result);
		$('#titulo').append('Estadisticas del mes de:'+result[0].Mes);
			var chartLabels = result.map(function(e) {
	   			return e.dia;
			});
		var total = 0;
			var chartData = result.map(function(e) {
				total = total + e.chats;
	   			return e.chats;
			});
		$('#cantidad').append('La cantidad de votos fueron: '+total);
		crearChart(chartLabels, chartData);
	});
	
}

function crearChart(chartLabels, chartData){
	var ctx = $('#chatsCanvas');
	var myChart = new Chart(ctx, {
	    type: 'line',
	    data: {
	        labels: chartLabels,
	        datasets: [{
	            label: '# of Votes',
	            data: chartData,
	            backgroundColor: [
	                'rgba(22, 120, 178, 0.2)'
	            ],
	            borderColor: [
	                'rgba(22, 120, 178, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});
}