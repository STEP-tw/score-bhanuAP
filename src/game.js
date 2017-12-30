const Game = function() {
  this.name = 'snakeGame';
}

Game.prototype.updateScore = function(score) {
  document.getElementById('score').innerText = score;
}
