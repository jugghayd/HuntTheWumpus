function Moveable()
{

Things.call(this);

}
Moveable.prototype.move = function()
{

//moves object


}
Moveable.prototype = Object.create(Things.prototype);

Moveable.prototype.constructor = Moveable;

Moveable.prototype.action = function(roomID)
{
//


}