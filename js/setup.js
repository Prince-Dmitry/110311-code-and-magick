'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');


var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
var setupUserName = setup.querySelector('.setup-user-name');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var firstName = [
  'Иван',
  'Хуан Себастьян',
  'Мария', 'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

var lastName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

var fireballsColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];


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
setupSimilar.classList.remove('hidden');


var onPopupEscPress = function (event) {
  if (event.keyCode === ESC_KEYCODE) {
    if (document.activeElement !== setupUserName) {
      closePopup();
    }
  }
};

var onPopupEnterPress = function (event) {
  if (event.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  event.preventDefault();
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', onPopupEnterPress);

setupSubmit.addEventListener('click', function () {
  closePopup();
});

setupSubmit.addEventListener('keydown', onPopupEnterPress);


var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');

var index = 1;

wizardCoat.addEventListener('click', function (event) {
  event.target.style.fill = coatColor[index];

  index = index < coatColor.length - 1 ? ++index : 0;
});

wizardEyes.addEventListener('click', function (event) {
  event.target.style.fill = eyesColor[getRandom(0, eyesColor.length)];
});

setupFireball.addEventListener('click', function (event) {
  event.target.parentNode.style.background = fireballsColors[getRandom(0, fireballsColors.length)];
});
