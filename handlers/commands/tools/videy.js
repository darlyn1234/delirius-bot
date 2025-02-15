const { VideyUploader } = require("../../../utils/index");
const { BOT_CONFIG } = require("../../../utils/config.json");

module.exports = {
  tags: ["tools"],
  args: ["reply video"],
  cmd: ["videy"],
  help: ["videy"],
  exec: async (m, Darlyn, { prefix, flags, cmd, arg, body, url }) => {
    if (
      ["videoMessage"].includes(m.mtype) ||
      (m.quoted && ["videoMessage"].includes(m.quoted.mtype))
    ) {
      const ms = m.quoted ? m.quoted : m;
      let media = await Darlyn.downloadMediaMessage(ms);
      const urll = await VideyUploader(media);
      m.reply(`    ╭  ✦ Videy Upload ✦  ╮

 *◦ Id :* ${urll.data.id}
 *◦ Tamaño :* ${urll.data.size}
 *◦ Extension :* ${urll.data.extension}
 *◦ Enlace :* ${urll.data.url}

> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`)
    } else {
      m.reply(
        "*🍟 Envia o responde a un video con el comando :* " +
          prefix +
          cmd
      );
    }
  },
};
