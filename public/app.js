const app = function () {
  const canvas = document.getElementById('main-canvas')
  const context = canvas.getContext('2d');

  const setBrushSizeText = function (size) {
    const brushSizeText = document.getElementById('brush-size-text');
    brushSizeText.textContent = `BRUSH SELECTION: ${size}, `;
  };

  const setBrushStyleText = function (style) {
    const brushStyleText = document.getElementById('brush-style-text');
    brushStyleText.textContent = `${style}`;
  };

  const setFillText = function (fill) {
    const fillOptionText = document.getElementById('fill-option-text');
    fillOptionText.textContent = ` ${fill}, `;
  };

  const drawCircle = function (x, y, size, fillType){
    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI * 2);
    fillType()
  };

  const drawSquare = function (x, y, size1, fillType){
    const size = size1 * 2;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y+size);
    context.lineTo(x+size, y+size);
    context.lineTo(x+size, y);
    context.closePath();
    fillType();
  };

  const drawRocket = function (x, y, size, fillType){
    context.beginPath();
    context.arc(x, y, size, 0, 1 * Math.PI, -1);
    context.lineTo(x+(size), y+(size*5));
    context.arc(x+(size*1.5), y+(size*5.5), size*2, 0, 1 * Math.PI, -1);
    context.arc(x-(size*1.5), y+(size*5.5), size*2, 0, 1 * Math.PI);
    context.closePath();
    fillType()
  };

  const setSolidFill = function () {
    return context.fill();
  }
  const setOutlineFill = function () {
    return context.stroke();
  }

  let mousedown = false;
  let fillType = setSolidFill;
  let brushSize = 5;
  let brushStyle = drawCircle;
  setBrushSizeText("Small");
  setFillText("Solid");
  setBrushStyleText("Circle");


  const changeColour = function () {
    context.strokeStyle = this.value;
    context.fillStyle = this.value;
  };

  const colourPicker = document.getElementById('input-colour');
  colourPicker.addEventListener('change', changeColour);

  // need to check if mouse is down or not the whole time....?
  canvas.addEventListener('mousedown', function () {
    mousedown = true;
  });

  canvas.addEventListener('mouseup', function () {
    mousedown = false;
  });

  // MAIN CLICK AND DRAW - need to be changed to match brush type
  canvas.addEventListener('click', function (event){
    brushStyle(event.layerX, event.layerY, brushSize, fillType);
  });

  const drawAway = function () {
    if (mousedown) {
      brushStyle(event.layerX, event.layerY, brushSize, fillType);
    };
  };

  canvas.addEventListener('mousemove', function () {
    drawAway();
  });

// BUTTON OPTIONS:
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

  const circleBrushButton = document.getElementById('circle');
  circleBrushButton.addEventListener('click', function () {
    setBrushStyleText("Circle");
    brushStyle = drawCircle;
  });

  const squareBrushButton = document.getElementById('square');
  squareBrushButton.addEventListener('click', function () {
    setBrushStyleText("Square");
    brushStyle = drawSquare;
  });

  const rocketBrushButton = document.getElementById('rocket');
  rocketBrushButton.addEventListener('click', function () {
    setBrushStyleText("Rocket");
    brushStyle = drawRocket;
  });

  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  const fillToggleButton = document.getElementById('fill-toggle');
  fillToggleButton.addEventListener('click', function () {
    if (fillType == setSolidFill) {
      setFillText("Outline");
      fillType = setOutlineFill;
    }
    else {
      setFillText("Solid");
      fillType = setSolidFill;
    }
  });

}; // end of app

document.addEventListener('DOMContentLoaded', app);
