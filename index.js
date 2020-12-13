
module.exports = function WhiskersInCombat(mod) {    
    const WhiskerIDs = [206100, 206101, 206102, 206103, 206104, 206105, 206106, 206107, 206108, 206109];
    const Message = ' Angler Whiskers are equipped !';
    
    mod.game.initialize('inventory');
    
    mod.game.me.on('change_zone', () => { 
        if (mod.game.inventory.findInEquipment(WhiskerIDs)) {
            if (mod.game.me.inDungeon)
                mod.send('S_CHAT', 3, {
                    channel: 21,
                    gm: 1,
                    name: 'Dungeon-Alert',
                    message: Message                    
            });
        }
    })

}
