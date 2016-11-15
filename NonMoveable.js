function NonMoveable()
{

Things.call(this);

}

NonMoveable.prototype = Object.create(Things.prototype);

NonMoveable.prototype.constructor = Moveable;

NonMoveable.prototype.action = function(roomID)
{
//inherited from Things.js


}
