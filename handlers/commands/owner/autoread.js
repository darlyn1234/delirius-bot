const fs = require('fs')

let config = require('../../../utils/config.json')

module.exports = {
    tags: ['owner'],
    args: ['on|off'],
    help: ['autoread'],
    cmd: ['autoread'],
    owner: true,
    exec: async (m, client, { body, msg, args }) => {
        try {
            await client.presenceSubscribe(m.chat)
            await client.sendPresenceUpdate('composing', m.chat)
            if (args[0] === 'on') {
                if (config.autoRead) return m.reply('✅ *Auto Read* ya está activado previamente!')
                config.autoRead = true
                fs.writeFileSync('./utils/config.json', JSON.stringify(config, null, 2))
                m.reply('✅ *Auto Read* activado!')
            } else if (args[0] == 'off') {
                if (!config.autoRead) return m.reply('❌ *Auto Read* ya está desactivado previamente!')
                config.autoRead = false
                fs.writeFileSync('./utils/config.json', JSON.stringify(config, null, 2))
                m.reply('❌ *Auto Read* desactivado!')
            } else {
                m.reply('por favor elige on / off')
            }
        } catch (error) {
            m.reply(util.format(error))
            console.log(error);
        }
    }
}
