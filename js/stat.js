'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);
  var getRandomOpacity = function (minO, maxO) {
    return (Math.random() * (maxO - minO) + minO);
  };

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillText(names[i], 120 + 90 * i, 260);
    ctx.fillText(Math.round(times[i]), 120 + 90 * i, 230 - times[i] * step);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(120 + 90 * i, 240 - times[i] * step, 40, times[i] * step);
    } else {
      var getRandomValue = getRandomOpacity(1, 0.1);
      ctx.fillStyle = 'rgba(0, 0, 255,' + getRandomValue + ')';
      ctx.fillRect(120 + 90 * i, 240 - times[i] * step, 40, times[i] * step);
    }
  }
};
