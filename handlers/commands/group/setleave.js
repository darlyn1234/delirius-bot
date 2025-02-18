const { groupManage } = require('../../../db');

module.exports = {
  cmd: ['setleave'],
  help: ['setleave'],
  args: ['msg', 'on', 'off'],
  tags: ['groups'],
  group: true,
  botAdmin: false,
  admin: true,
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    try {
      let json = await groupManage.get(m.chat)
      if (args[0] == 'on') {
        if (json.leave_status)
          return m.reply('*La despedida ha sido activado anteriormente.*')
        json.leave_status = 1
        groupManage.update(m.chat, json)
        m.reply(
          '*La despedida ha sido activada con el mensaje ∙* \n' + json.leave_text
        )
      } else if (args[0] == 'off') {
        if (!json.leave_status)
          return m.reply('*La despedida ha sido desactivado anteriormente.*')
        json.leave_status = 0
        groupManage.update(m.chat, json)
        m.reply('*Despedida desactivado exitosamente.*')
      } else if (args[0] == 'msg') {
        const q = args.slice(1).join(' ')
        if (!q)
          return m.reply(
            `*Ingresa el nuevo mensaje para la despedida de este grupo.*\n*Ejemplo ∙* ${
              prefix + cmd
            } *Adios ∙* @user\n*Grupo ∙* {title}`
          )
        json.leave_text = q
        groupManage.update(m.chat, json)
        m.reply(
          'Se ha cambiado el mensaje para la despedida de este grupo ∙*\n' + q
        )
      } else {
        m.reply(`*Ejemplo ∙*\n
*${prefix + cmd} ∙* < Msg / On / Off >
*msg ∙* Cambiar el mensaje de despedida
*on ∙* Activar
*off ∙* Desactivar

*Formato ∙*
*@user ∙* Mensaje para mencionar al usuario.
*{title} ∙* Mensaje con el nombre del grupo.
*{foto} ∙* Foto del nuevo miembro`)
      }
    } catch (error) {
      m.reply(new Error(error).message);
      console.log(error)
    }
  }
}
