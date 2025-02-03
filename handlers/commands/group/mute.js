const { groupManage } = require('../../../db')

module.exports = {
  cmd: ['mute', 'mutear_bot'],
  help: ['mute'],
  tags: ['groups'],
  group: true,
  botAdmin: false,
  admin: true,
  groupMuteAllowed: true,
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    try {
      let json = groupManage.get(m.chat)
      if (json.mute)
        return m.reply('*🔐 El bot ya esta desactivado en este grupo.*')
      json.mute = true
      groupManage.update(m.chat, json)
      m.reply('*🔐 El bot ha sido deshabilitado en este grupo.*')
    } catch (error) {
      m.reply(String(error))
      console.log(error)
    }
  }
}
