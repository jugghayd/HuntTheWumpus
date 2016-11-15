function Bats()
{

NonMoveable.call(this);

}
Bats.prototype = Object.create(NonMoveable.prototype);

Bats.prototype.constructor = Bats;

Bats.prototype.action = function()
{
//inherited from NonMoveable.js
//action such as moving the player to a random cave
}
