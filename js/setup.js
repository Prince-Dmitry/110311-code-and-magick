'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вышингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColor = ['black', 'red', 'blue', 'yellow', 'green'];
var numberOfWizzards = 4;

var getRandom = function (documentLength) {
  return Math.round(Math.random() * (documentLength - 1) + 1);
};

var getRandomWizzard = function (first, last, coat, eye, number) {
  for (var i = 0; i < number; i++) {
    var differencesOfWizzard = [];
    var randomFirstName = getRandom(first.length);
    var randomLastName = getRandom(last.length);
    var randomCoatColor = getRandom(coat.length);
    var randomEyeColor = getRandom(eye.length);
    differencesOfWizzard[i].name.push(first[' + randomFirstName + '] + last[' + randomLastName + ']);
    differencesOfWizzard[i].coatColor.push(coat[' + randomCoatColor + ']);
    differencesOfWizzard[i].eyeColor.push(eye[' + randomEyeColor + ']);
  }
  return differencesOfWizzard;
};

var differencesOfWizzard = getRandomWizzard(firstName, lastName, coatColor, eyeColor, numberOfWizzards);

var renderWizard = function (massive) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = massive.name;
  wizardElement.querySelector('.wizard-coat').style.fill = massive.coatColor;
  wizardElement.querySelector('.wizard-eye').style.fill = massive.eyeColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < numberOfWizzards; i++) {
  fragment.appendChild(renderWizard(differencesOfWizzard[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
