(localStorage.getItem("level"))
  ? game.currentLevel = localStorage.getItem("level")
  : game.currentLevel = 1;

View.buildLevelList();

if (!localStorage.getItem("firstTime")) {
  game.modalContent.welcome();
  events.modalLogic.openModal();
  localStorage.setItem('firstTime', 'true');
}
