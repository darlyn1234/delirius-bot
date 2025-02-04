const fs = require('fs')
let config = require('../../../utils/config.json')

module.exports = {
  tags: ['owner'],
  args: ['on|off'],
  help: ['onlyowner'],
  cmd: ['onlyowner'],
  owner: true,
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    try {
      if (args[0] === 'on') {
        if (config.onlyowner)
          return m.reply('*OnlyOnwer ha sido activado anteriormente.*')
        config.onlyowner = true
        fs.writeFileSync(
          './utils/config.json',
          JSON.stringify(config, null, 2)
        )
        m.reply('*OnlyOwner activado exitosamente.*')
      } else if (args[0] == 'off') {
        if (!config.onlyowner)
          return m.reply('*OnlyOwner ha sido desactivado anteriormente.*')
        config.onlyowner = false
        fs.writeFileSync(
          './utils/config.json',
          JSON.stringify(config, null, 2)
        )
        m.reply('*OnlyOwner desactivado exitosamente.*')
      } else {
        m.reply(`🍟 *Ejemplo ∙* ${prefix + cmd} on\n
*Opciones ∙*\n
*${prefix + cmd} ∙* < on / off >
*on ∙* Activar el OnlyOwner.
*off ∙* Desactivar el OnlyOwner`)
      }
    } catch (error) {
      m.reply(new Error(error).message);
      console.log(error);
    }
  }
}
