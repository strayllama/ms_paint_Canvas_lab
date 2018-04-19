const app = function () {
  const canvas = document.getElementById('main-canvas')
  const context = canvas.getContext('2d');
  let brushSize = 5;

  const setBrushSizeText = function (size) {
    const brushSizeText = document.getElementById('brush-size-text');
    brushSizeText.textContent = `${size} brush selected`;
  };

  setBrushSizeText("Small");



  const changeColour = function () {
    context.strokeStyle = this.value;
  };

  const colourPicker = document.getElementById('input-colour');
  colourPicker.addEventListener('change', changeColour);


  const drawCircle = function (x, y, size){
  //  context.strokeStyle = 'hotpink';
    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI * 2);
    context.stroke();
  };

  // MAIN CLICK AND DRAW - need to be changed to match brush type
  canvas.addEventListener('click', function (event){
    drawCircle(event.layerX, event.layerY, brushSize);
    console.log(event);
  });


  const smallBrushButton = document.getElementById('small-brush');
  smallBrushButton.addEventListener('click', function () {
    setBrushSizeText("Small");
    brushSize = 5;
  });
  const mediumBrushButton = document.getElementById('medium-brush');
  mediumBrushButton.addEventListener('click', function () {
    setBrushSizeText("Medium");
    brushSize = 30;
  });
  const largeBrushButton = document.getElementById('large-brush');
  largeBrushButton.addEventListener('click', function () {
    setBrushSizeText("Large");
    brushSize = 100;
  });




    // context.fillStyle = 'salmon';
    // context.fillRect(10,10,50,50);
    // context.fillStyle = 'lightgreen';
    // context.fillRect(40,40,150,150);
    // context.strokeRect(100,100,50,50);
    //
    // context.fillStyle = 'dodgerblue';
    // context.beginPath();
    // context.moveTo(140,200);
    // context.lineTo(450,270);
    // context.lineTo(75,370);
    // context.closePath();
    // context.fill();
    //
    // context.strokeStyle = 'yellow';
    // context.beginPath();
    // context.moveTo(350,350);
    // context.arc(350,350, 50, 0.5, 2 * Math.PI * 1);
    // context.closePath();
    // context.stroke();

}; // end of app

document.addEventListener('DOMContentLoaded', app);
