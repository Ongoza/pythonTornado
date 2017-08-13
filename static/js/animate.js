	canAnim = document.getElementById('animation');
	conAnim = canAnim.getContext('2d');
	var amplitude = canAnim.width/2 - 10;
        // in ms
	var period = 10000;
	var myRectangle = {
		x: 500,
		y: 00,
		width: 20,
		height: 20,
		borderWidth: 1
	};
     
     window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();
      function drawRectangle(myRectangle, context) {
        context.beginPath();
        context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
        context.fillStyle = '#8ED6FF';
        context.fill();
        context.lineWidth = myRectangle.borderWidth;
        context.strokeStyle = 'black';
        context.stroke();
      }
      function animate(myRectangle, canvas, context, startTime) {
        // update
        var time = (new Date()).getTime() - startTime;
        var centerX = canvas.width / 2 - myRectangle.width / 2;
        var nextX = amplitude * Math.sin(time * 2 * Math.PI / period) + centerX;
        myRectangle.x = nextX;
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawRectangle(myRectangle, context);
        requestAnimFrame(function() {
          animate(myRectangle, canAnim, context, startTime);
        });
      }
      drawRectangle(myRectangle, conAnim);
      // wait one second before starting animation
      setTimeout(function() {
        var startTime = (new Date()).getTime();
        animate(myRectangle, conAnim, conAnim, startTime);
      }, 100);