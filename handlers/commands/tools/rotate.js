const { cropStyle, Sticker } = require('../../../utils/sticker')
const { statistics } = require('../../../db')
const packMessage = require('../../../utils/config.json')

module.exports = {
  tags: ['tools'],
  args: ['send/reply media'],
  cmd: ['flip', 'flop'],
  help: ['flip', 'flop'],
  exec: async (m, client, { prefix, flags, cmd, args, body, url }) => {
    try {
      const deg = /fl(i|o)p/i.test(cmd) ? cmd : Number(args[0])
      let crop = flags.find(v => cropStyle.map(x => x == v.toLowerCase()))
      if (
        m.mtype == 'imageMessage' ||
        (m.quoted && m.quoted.mtype && m.quoted.mtype == 'imageMessage')
      ) {
        const message = m.quoted ? m.quoted : m
        const buff = await client.downloadMediaMessage(message)
        const data = await Sticker.rotate(buff, deg)
        await client.sendMessage(
          m.chat,
          { image: data, caption: args[0] },
          { quoted: m }
        )
      } else if (
        m.quoted &&
        m.quoted.mtype == 'stickerMessage' &&
        !m.quoted.isAnimated
      ) {
        const buff = await client.downloadMediaMessage(m.quoted)
        const rotated = await Sticker.rotate(buff, deg)
        const data = new Sticker(
          rotated,
          {
            packname: packMessage.stickerMetadata.packauthor,
            author: packMessage.stickerMetadata.packname,
            packId: deg
          },
          crop
        )
        await client.sendMessage(m.chat, await data.toMessage(), { quoted: m })
        statistics('sticker')
      } else {
        m.reply(
          `Envia/Responde una imagen o sticker\nEjemplo: ${
            prefix + cmd
          } degrees\n\nLista:\n  -90\n  -180\n  -270\nEjemplo: ${
            prefix + cmd
          } -90`
        )
      }
    } catch (error) {
      m.reply(new Error(error).message);
    }
  }
}
