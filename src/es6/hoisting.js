"use strict";
let
  /*Storage Services*/
  data,
  userPos = Object.create(null),
  emap = Object.create(null),
  targetsUnfilled = 0,
  flag,

  /*Auxiliary Services*/
  logger,
  classFnc,
  addEvent
  ;