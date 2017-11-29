'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (startIndex, endIndex) {
  return Math.floor(startIndex + Math.random() * (endIndex - startIndex + 1));
};

var getRandomWizzard = function (n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = {
      name: firstName[getRandom(0, firstName.length - 1)] + ' ' + lastName[getRandom(0, lastName.length - 1)],
      coatColor: coatColor[getRandom(0, coatColor.length - 1)],
      eyesColor: eyesColor[getRandom(0, eyesColor.length - 1)]
    };
  }
  return arr;
};

var renderWizard = function (wizard) {
  var element = similarWizardTemplate.cloneNode(true);
  element.querySelector('.setup-similar-label').textContent = wizard.name;
  element.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  element.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  element.querySelector('.setup-similar-label').style.textAlign = 'center';
  return element;
};

var collectWizards = function (arr, wizard) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(wizard(arr[i]));
  }
  return fragment;
};

var wizards = getRandomWizzard(4);
setupSimilarList.appendChild(collectWizards(wizards, renderWizard));
setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');
