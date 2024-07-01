
var titles = ["horrored.rip?", "are you real?", "die?", "npc?", "whos horrored?", "lev?", "vu?", "my dicks bigger, skidder", "I am your master", "ass, ass, ass", "I hate all niggers", "I am the master", "vu the nigger?", "lev cant troll?","private biolink?", "who coded me?", "hijacked horrored acc?", "stole ur bitch", "/chiterl better!"];
var currentTitleIndex = 0;
function changeTitle() {
  document.title = titles[currentTitleIndex];
  currentTitleIndex = (currentTitleIndex + 1) % titles.length;
}
setInterval(changeTitle, 150);
