// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x =  (Math.floor(Math.random() * 5));
    this.y =  (Math.floor(Math.random() * 3)  + 1  );
    this.speed = Math.random(2)*5 + 5;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x =  this.x + dt*this.speed;
    if (this.x > 6){
        this.x = 0;
        this.y = this.y =  (Math.floor(Math.random() * 3)  + 1  );
        this.speed = Math.random(2)*3 + 10;
    };
    if (Math.floor(this.x) == player.x && Math.floor(this.y) == player.y){
        alert("your lose ");
        player.x = 2;
        player.y = 5;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x*83, this.y*80);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 5;
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x*100, this.y*80);
};

Player.prototype.handleInput = function(direction) {

    var direction = direction;

    switch(direction){
        case 'left':
            if (this.x-1 < 0){
                break;
            }else{
                this.x = this.x - 1;
            };
            break;
        case 'up':
            if (this.y -1 <= 0 ){
                alert("you win the game");
                //reset();
                this.x = 2;
                this.y = 5;
            }else{
                this.y  = this.y - 1;
            };

        break;
        case 'right':
            if (this.x+1 > 4){
                break;
            }else{
                this.x = this.x + 1;  
            };
            break;
        case 'down':
            if (this.y+1 > 5){
                break;
            }else{
                this.y += 1;
            };
            break;
    };

};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies = [new Enemy(), new Enemy(), new Enemy()]; 


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
