const { BOT_CONFIG } = require("../../../utils/config.json");
const { soundcloud } = require("../../../utils/scraper");

module.exports = {
  tags: ["download"],
  args: ["url"],
  cmd: ["soundcloud", "soundclouddl", "downloadsoundcloud"],
  help: ["soundcloud"],
  /**
   * 
   * @param {*} m 
   * @param {import("@whiskeysockets/baileys").WASocket} Darlyn 
   * @param {*} param2 
   * @returns 
   */
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    try {
      if (args.length < 1) return m.reply(`*🚩 Ejemplo :* ${prefix + cmd} Twice`);
      soundcloud(args.join(' ')).then(async(responseee) => {
        const res = responseee.data;
        await Darlyn.sendMessage(m.chat, {image: {url: res.image }, caption: `	╭  ✦ Soundcloud Download ✦  ╮

 *◦ Titulo :* ${res.title}
 *◦ Artista :* ${res.artist}
 *◦ Genero :* ${res.genre}
 *◦ Album :* ${res.album}
 *◦ Play :* ${res.play}
 *◦ Likes :* ${res.likes}
 *◦ Comentarios :* ${res.comments}

> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`}, {quoted: m});
        await Darlyn.sendMessage(m.chat, {document: {url: res.download}, mimetype: "audio/mpeg", fileName: res.title + ".mp3" ,jpegThumbnail:  await Darlyn.reSizeImg(res.avatar, 250, 250 )}, {quoted: m});
      })
    } catch (e) {
     
    }
  },
};
