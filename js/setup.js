'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getRandom = function (documentLength) {
  return Math.round(Math.random() * (documentLength - 1) + 1);
};
var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вышингтон'];
var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColor = ['Иblack', 'red', 'blue', 'yellow', 'green'];

var differencesOfWizzard = [
  {
    name: 'Петр Петров',
    coatColor: 'rgb(0, 0, 0)',
    eyeColor: 'rgb(0, 0, 0)'
  },
  {
    name: 'Петр Петров',
    coatColor: 'rgb(0, 0, 0)',
    eyeColor: 'rgb(0, 0, 0)'
  },
  {
    name: 'Петр Петров',
    coatColor: 'rgb(0, 0, 0)',
    eyeColor: 'rgb(0, 0, 0)'
  },
  {
    name: 'Петр Петров',
    coatColor: 'rgb(0, 0, 0)',
    eyeColor: 'rgb(0, 0, 0)'
  }
];

for (i = 0; i < 4; i++) {
  differencesOfWizzard[i].name = firstName[' + getRandom(firstName.length) + '] + lastName[' + getRandom(lastName.length) + '];
  differencesOfWizzard[i].coatColor = coatColor[' + getRandom(coatColor.length) + '];
  differencesOfWizzard[i].eyeColor = eyeColor[' + getRandom(eyeColor.length) + '];
}

document.querySelector('.setup-similar').classList.remove('hidden');

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = differencesOfWizzard[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = differencesOfWizzard[i].coatColor;
  wizardElement.querySelector('.wizard-eye').style.fill = differencesOfWizzard[i].eyeColor;
  similarListElement.appendChild(wizardElement);
}
userDialog.querySelector('.setup-similar').classList.remove('hidden');
