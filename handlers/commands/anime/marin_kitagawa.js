const { sizeFromUrl, marin_kitagawa } = require("../../../utils/scraper");
const { BOT_CONFIG } = require("../../../utils/config.json");
const { statistics } = require("../../../db")

module.exports = {
  tags: ["anime"],
  cmd: ["marin_kitagawa"],
  help: ["marin_kitagawa"],
  exec: async (m, Darlyn) => {
    marin_kitagawa().then(async(res_dls) => {

      Darlyn.sendMessage(m.chat, {image: {url: res_dls.data.image}, caption: `	╭  ✦ Marin kitagawa ✦  ╮

 *◦ Titulo :* ${res_dls.data?.title}
 *◦ Id :* ${res_dls.data?.id}
 *◦ Likes :* ${res_dls.data?.likes}
 *◦ Peso :* ${res_dls.data?.size}
 *◦ Publicado :* ${res_dls.data?.upload}
 *◦ Extension :* ${res_dls.data?.ext}
 *◦ Url :* ${res_dls.data?.nsfw ? "√" : "×"}
 *◦ Source :* ${res_dls.data.source}

> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`}, {quoted: m});
      statistics('filesize', (await sizeFromUrl(res_dls.data.image)).size);
    })
  },
};
