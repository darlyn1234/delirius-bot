const fs = require('fs')
let config = require('../../../utils/config.json')

module.exports = {
  tags: ['owner'],
  args: ['on|off'],
  help: ['typing'],
  cmd: ['typing', 'composing', 'autocomposing'],
  owner: true,
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    try {
      if (args[0] === 'on') {
        if (config.composing)
          return m.reply('*Auto Escribiendo ha sido activado anteriormente.*')
        config.composing = true
        fs.writeFileSync(
          './utils/config.json',
          JSON.stringify(config, null, 2)
        )
        m.reply('*Auto Typing activado exitosamente.*')
      } else if (args[0] == 'off') {
        if (!config.composing)
          return m.reply('*El Auto Typing ha sido desactivado anteriormente.*')
        config.composing = false
        fs.writeFileSync(
          './utils/config.json',
          JSON.stringify(config, null, 2)
        )
        m.reply('*Auto Typing desactivado exitosamente.*')
      } else {
        m.reply(`🍟 *Ejemplo ∙* ${prefix + command} on\n
*Opciones ∙*\n
*${prefix + cmd} ∙* < on / off >
*on ∙* Activar el Auto Typing (Composing).
*off ∙* Desactivar el Auto Typing (Composing)`)
      }
    } catch (error) {
      m.reply(new Error(error).message);
      console.log(error);
    }
  }
}
