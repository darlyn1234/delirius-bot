const { Sticker } = require("../../../utils/sticker")
const { statistics } = require("../../../db")

module.exports = {
  tags: ['media'],
  args: ['reply sticker'],
  cmd: ['take'],
  help: ['take'],
  exec: async (m, client, { prefix, cmd, arg }) => {
    try {
      let pack = arg.split('|')[0]
      let author = arg.split('|')[1] || ''
      if (!pack) return m.reply('*🚩 Se requiere el nombre del paquete.*')
      if (m.quoted && m.quoted.mtype == 'stickerMessage') {
        const buff = await client.downloadMediaMessage(m.quoted)
        const data = new Sticker(buff, { packname: pack, author: author })
        await client.sendMessage(m.chat, await data.toMessage(), { quoted: m })
        statistics('sticker')
      } else {
        m.reply(
          `*🚩 Responde un sticker.*\n*Ejemplo :* ${prefix + cmd} pack|author`
        )
      }
    } catch (error) {
      m.reply('*🚩 * ' + new Error(error).message)
      console.log(error)
    }
  }
}
