const { groupManage } = require('../../../db')

module.exports = {
  cmd: ['setwelcome', 'welcome'],
  help: ['welcome'],
  args: ['msg', 'on', 'off'],
  tags: ['groups'],
  group: true,
  botAdmin: false,
  admin: true,
  exec: async (m, Darlyn, { prefix, cmd, args, text }) => {
    try {
      let json = await groupManage.get(m.chat);
      if (args[0] == 'on') {
        if (json.welcome_status)
          return m.reply('*La bienvenida ya ha sido activado anteriormente.*')
        json.welcome_status = 1
        groupManage.update(m.chat, json)
        m.reply(
          '*La bienvenida ha sido activado con el mensaje ∙* \n' +
            json.welcome_text
        )
      } else if (args[0] == 'off') {
        if (!json.welcome_status)
          return m.reply('*La bienvenida ha sido deshabilitado anteriormente.*')
        json.welcome_status = 0
        groupManage.update(m.chat, json)
        m.reply('*La bienvenida ha sido deshabilitado.*')
      } else if (args[0] == 'msg') {
        const q = args.slice(1).join(' ')
        if (!q)
          return m.reply(
            `*Ingresa el nuevo mensaje de bienvenida para este grupo.*\n*Ejemplo ∙* ${
              prefix + cmd
            } *Bienvenido ∙* @user\n*Grupo ∙* {title}`
          )
        json.welcome.msg = q
        groupManage.update(m.chat, json)
        m.reply(
          '*El mensaje de bienvenida ha sido cambiado en este grupo por∙* \n' +
            q
        )
      } else {
        m.reply(`*Ejemplo ∙*\n
*${prefix + cmd} ∙* < Msg / On / Off >
*msg ∙* Cambiar el mensaje de bienvenida
*on ∙* Activar
*off ∙* Desactivar

*Formato ∙*
*@user ∙* Mensaje para mencionar al usuario.
*{title} ∙* Mensaje con el nombre del grupo.
*{foto} ∙* Foto del nuevo miembro.
`)
      }
    } catch (error) {
      m.reply(new Error(error).message);
      console.log(error)
    }
  }
}
