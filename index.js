
module.exports = function WhiskersInCombat(mod) {    
    const WhiskerIDs = [206100, 206101, 206102, 206103, 206104, 206105, 206106, 206107, 206108, 206109];
    const Message = 'Angler Whiskers are equipped!';
    
    mod.game.initialize('inventory');
    
    mod.game.me.on('enter_combat', () => { 
        if (mod.game.inventory.findInEquipment(WhiskerIDs)) {
                mod.send('S_DUNGEON_EVENT_MESSAGE', 2, {
                "type": 44,
                "chat": false,
                "channel": 0,
                "message": Message
            });
        }
    })

}
