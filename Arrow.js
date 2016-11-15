function Arrow()
{

Moveable.call(this);

}
Arrow.prototype = Object.create(Moveable.prototype);

Arrow.prototype.constructor = Arrow;

Arrow.prototype.action = function()
{
//inherited from Moveable.js
//action such as killing player/wumpus

}
Arrow.prototype.move = function(roomID)
{
//Moves when player shoots Arrow up to 5 caves unless it hits Wumpus/Player
//inherited from Moveable.js


}