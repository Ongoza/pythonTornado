	
	
	
	canChart = document.getElementById('chart');
	conChart  = canChart.getContext('2d');

	
	
	function drowChart(arrayBuffer){
		var start = 0;
		var len=100;
		var mas=[];
		// data from generator
		//var m=32000;	var minY = 0;	var maxY = 320;  var len = m; scaleY =canChart.height ;
		
		//  data from file
		tmpLen =Math.round(arrayBuffer.byteLength/2);  if (tmpLen>32000){len=32000;} else{len=tmpLen;}
		canChart.width = len;
		conChart.clearRect(0, 0, canChart.width, canChart.height);
		conChart.scale(1,-1);
		conChart.translate(0,-canChart.height);
		if  (document.getElementById('chart_minX') != null){	document.getElementById('chart_minX').innerHTML=chart_minX;	}
		if  (document.getElementById('chart_maxX') != null){document.getElementById('chart_maxX').innerHTML=len;}
		
		//context.moveTo(0, 0);
		var max=1;
		var k=0;
		var  scale=100;
		conChart.beginPath();
		// test line
		conChart.moveTo(0, 0);
		conChart.lineTo(len, canChart.height);
		// end test
		
		// take data from file
		if (arrayBuffer) {var byteArray = new Int16Array(arrayBuffer); 
			for (var i = 0; i < len; i++) {
				k = Math.round(byteArray[i]/scale);
				if (max<k){max=k;};
				mas.push([i,k]);
				conChart.lineTo(i+start, k );}}
		
		///    take data from generator Math.round()
		 	//                           for (var i=0; i<m; i++){ 	k=Math.random() * scaleY;if (max<k){max=k;}conChart.lineTo(i+start, k );}
		///	end generate data
		
		if  (document.getElementById('chart_maxY') != null){document.getElementById('chart_maxY').innerHTML=max;}
		conChart.lineWidth = 1;
		conChart.strokeStyle = "#66FF33";
		conChart.stroke();	
		document.getElementById('myArray').innerHTML=JSON.stringify(mas);
	}
	
	
	//var dragging = false; var lastX = 0;var translated = 0;
	//window.onmouseup = function(){dragging = false;}
	//canChart.onmousedown = function(e){var evt = e || event;		dragging = true;lastX = evt.offsetX;}
	//window.onmousemove = function(e){var evt = e || event;if (dragging){	var delta = evt.offsetX - lastX;	translated += delta;	conChart.translate(delta, 0);
	//		lastX = evt.offsetX;			conChart.clearRect(0, 0, canChart.width, canChart.height);			drowChart();		}}
