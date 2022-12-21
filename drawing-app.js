// drawing-app.js

const stage = new Konva.Stage({
    container: 'drawing-canvas',
    width: 800,
    height: 600
  });
  
  const layer = new Konva.Layer();
  
  let tool = 'pencil';
  
  stage.on('mousedown', e => {
    if (tool === 'pencil') {
      // create a new line on mouse down
      const line = new Konva.Line({
        stroke: 'black',
        strokeWidth: 2,
        points: [e.evt.offsetX, e.evt.offsetY]
    });
    layer.add(line);

    stage.on('mousemove', e => {
      // add a new point to the line on mouse move
      line.points([line.points(), e.evt.offsetX, e.evt.offsetY]);
      layer.batchDraw();
    });
  } else if (tool === 'eraser') {
    // code to implement eraser functionality goes here
  }
});

stage.on('mouseup', () => {
  stage.off('mousemove');
});

document.getElementById('pencil-button').addEventListener('click', () => {
  tool = 'pencil';
});

document.getElementById('eraser-button').addEventListener('click', () => {
  tool = 'eraser';
});

  