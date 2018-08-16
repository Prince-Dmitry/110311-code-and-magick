'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(105, 15, 425, 275);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  
  
  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  
  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  
  var histogramWidth = 150;              // px;
  var step = histogramWidth / (max - 0); // px;

  ctx.fillText('Список результатов:', 120, 60);
  
  var barWidth = 40;       // px; 
  var indent = 90;          // px;
  var initialX = 140;       // px;
  var initialY = 240;        // px;
  var lineHeight = 15;      // px;
  var histogramMargin = 20; // px;

  function getRandom() {
    return Math.random();
  }

  for (var i = 0; i < times.length; i++) {
    var getRandomOpacity = getRandom();
    ctx.fillStyle = 'rgba(0, 0, 255, + getRandomOpacity)';
    ctx.fillRect(initialX + (indent * i), initialY - times[i] * step, barWidth, times[i] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillText(names[i], initialX + (indent * i), initialY + 20);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX + (indent * i), initialY - times[i] * step, barWidth, times[i] * step);
    }
  }
};