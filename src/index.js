window.addEventListener('DOMContentLoaded', function() {

  'use strict';
  let calc = require('./parts/calc.js'),
  form = require('./parts/form.js'),
  links = require('./parts/links.js'),
  modal = require('./parts/modal.js'),
  slider = require('./parts/slider.js'),
  tabs = require('./parts/tabs.js'),
  timer = require('./parts/timer.js');

  calc();
  form();
  links();
  modal();
  slider();
  tabs();
  timer();
});