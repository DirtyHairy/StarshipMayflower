var world = require('./world'),
    ActionManager = require('./action/actionManager'),
    timer = require('./timer'),
    _ = require('lodash'),
    pomelo = require('pomelo'),
    Channel = require('./channel');

var channel = new Channel();

var shipRegistry = new world.ShipRegistry();
var actionManager = new ActionManager();

var exp = module.exports;

exp.getShipRegistry = function() {
    return shipRegistry;
};

exp.start = function() {
    timer.run(actionManager);
};

exp.getActionManager = function() {
    return actionManager;
};

exp.moveShips = function() {
    var me = this;
    _.forEach(shipRegistry.getAllShips(), function(ship) {
        me.moveShip(ship);
    });
};

exp.moveShip = function(ship) {
    var lastMove = ship.getLastMove();
    var seconds = (Date.now() - lastMove) / 1000;

    var position = ship.getPosition();

    var velocity = ship.getVelocity();
    var movement = velocity.multiply(seconds);

    ship.setPosition(position.add(movement));
    ship.setLastMove(Date.now());

    channel.pushToShip(ship, 'ShipUpdate', ship.serialize());
};

exp.timer = function() {
    return timer;
};
