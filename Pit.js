function Pit()
{

NonMoveable.call(this);

}
Pit.prototype = Object.create(NonMoveable.prototype);

Pit.prototype.constructor = Pit;

Pit.prototype.action = function()
{
//inherited from NonMoveable.js
//action such as killing the player
}
