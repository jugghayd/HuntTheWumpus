function Player()
{

Moveable.call(this);

}
Player.prototype = Object.create(Moveable.prototype);

Player.prototype.constructor = Player;

Player.prototype.action = function()
{
//


}
Player.prototype.move = function(roomID)
{
//player movement


}