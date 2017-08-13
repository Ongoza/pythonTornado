	txt_div = document.getElementById("messages"); 
	
	ws_chart.onopen = function(){
		txt_div.innerHTML = "chart is started<br>";
		//ws_chart.send("Start chart connection");
	}
	ws_chart.onmessage = function(event) {
		var msg_data = event.data;
		txt_div.innerHTML += "2>> data for  received<br>";
		mas = JSON.parse(msg_data);
		document.getElementById('myArray').innerHTML=JSON.stringify(mas);
		txt_div.scrollTop = txt_div.scrollHeight;
		drowChart();
		};
		
	ws_chart.onclose = function() { txt_div.innerHTML += "Connection is closed...\n<br>";}
	
	ws.onopen = function(){
		txt_div.innerHTML = "Application is started<br>";
		ws.send("Start websocket connection");
	}
	ws.onmessage = function(event) {
		var incomingMessage = event.data;
		txt_div.innerHTML += ">> "+event.data+"<br>";
		txt_div.scrollTop = txt_div.scrollHeight;
		};
		
	ws.onclose = function() { txt_div.innerHTML += "Connection is closed...\n<br>";}
	

	
	function sendNewSize(width,height){
		document.getElementById("chart").width = width;
		document.getElementById("chart").height = height;
		drowChart();
	}		
	

	function WebSocketTest() {
		if ("WebSocket" in window) {
				txt_div.innerHTML += "Test message start\n<br>";
				//var ws = new WebSocket("ws://localhost:8008/websocket?Id=123456789");
				ws.send("Test");
				//ws.onmessage = function (evt) {  var received_msg = evt.data;
				//txt_div.innerHTML += "Message is received..."+received_msg+"<br>";
				//txt_div.scrollTop = txt_div.scrollHeight;};
				//
		} else {txt_div.innerHTML += "WebSocket NOT supported by your Browser!\n<br>";}
		}
	function requestData(){
		ws_chart.send("Start chart connection");
	}