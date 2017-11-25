'use strict';

window.renderStatistics = function (ctx, names, times) {

  var getWindow = function (attributeX, attributeY, windowWidth, windowHeight, shadowOfWindow) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeRect(attributeX, attributeY, windowWidth, windowHeight);
    ctx.fillRect(attributeX + shadowOfWindow, attributeY + shadowOfWindow, windowWidth, windowHeight);
    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.fillRect(attributeX, attributeY, windowWidth, windowHeight);
  };

  var getText = function (attributeX, attributeY, textColor, textSize, textFont) {
    ctx.fillStyle = 'textColor';
    ctx.font = textSize + 'px  ' + textFont;
    ctx.fillText('Ура вы победили!', attributeX, attributeY);
    ctx.fillText('Список результатов:', attributeX, attributeY + 20);
  };

  getWindow(100, 10, 420, 270, 10);
  getText(100, 10, '#000', 16, 'PT Mono');

  var max = -1;
  var getMaximum = function (ourMassive) {
    for (var i = 0; i < ourMassive.length; i++) {
      var variable = ourMassive[i];
      if (variable > max) {
        max = variable;
      }
    }
    return max;
  };

  var getRandom = function (minO, maxO) {
    return (Math.random() * (maxO - minO) + minO);
  };

  var getRandomColorOpacity = function (red, green, blue) {
    var getRandomOpacity = getRandom(1, 0.1);
    ctx.fillStyle = rgba(red, green, blue,' + getRandomOpacity + ');
    return ctx.fillStyle;
  };

  var maxOfTimes = getMaximum(times);

  var histogramWidth = 150;
  var step = histogramWidth / (maxOfTimes - 0);

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillText(names[i], 120 + 90 * i, 260);
    ctx.fillText(Math.round(times[i]), 120 + 90 * i, 230 - times[i] * step);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(120 + 90 * i, 240 - times[i] * step, 40, times[i] * step);
    } else {
      getRandomColorOpacity(0, 0, 255);
      ctx.fillRect(120 + 90 * i, 240 - times[i] * step, 40, times[i] * step);
    }
  }
};
