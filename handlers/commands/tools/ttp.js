const { Sticker } = require("../../../utils/sticker");
let { statistics } = require("../../../db");
const { BASE_URL } = require("../../../utils/config.json");
const { default: axios } = require("axios");
let packMessage = require("../../../utils/config.json");

module.exports = {
  tags: ["sticker"],
  args: ["text"],
  cmd: ["ttp", "stext"],
  help: ["ttp"],
  exec: async (m, Delirius, { prefix, flags, cmd, args, body, url }) => {
    try {
      if (args.length < 1)
        return m.reply(`*🚩 Ejemplo :* ${prefix + cmd} Delirius`);
      const media = await axios.get(BASE_URL + "/canvas/ttp", {
        params: {
          text: args.join(" "),
        },
        responseType: "arraybuffer",
      });
      const data = new Sticker(media.data, {
        packname: packMessage.stickerMetadata.packauthor,
        author: packMessage.stickerMetadata.packname,
      });
      await Delirius.sendMessage(m.chat, await data.toMessage(), { quoted: m });
      statistics("sticker");
    } catch (error) {
      m.reply("*🚩 :* " + new Error(error).message);
      console.log(error);
    }
  },
};