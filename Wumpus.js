function Wumpus()
{

Moveable.call(this);

}
Wumpus.prototype = Object.create(Moveable.prototype);

Wumpus.prototype.constructor = Wumpus;

Wumpus.prototype.action = function()
{
//inherited from Moveable.js
//action such as shooting arrow

}
Wumpus.prototype.move = function(roomID)
{
//Wumpus movement, only moves if player shoots
//inherited from Moveable.js


}