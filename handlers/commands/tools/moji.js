const { Sticker } = require("../../../utils/sticker");
let { statistics } = require("../../../db");
const { BASE_URL } = require("../../../utils/config.json");
const { default: axios } = require("axios");
let packMessage = require("../../../utils/config.json");

module.exports = {
  tags: ["sticker"],
  args: ["emoji"],
  cmd: ["moji", "emojito"],
  help: ["emojito"],
  exec: async (m, Delirius, { prefix, cmd, args }) => {
    try {
      if (args.length < 1)
        return m.reply(`*🚩 Ejemplo :* ${prefix + cmd} 😄`);
      const media = await axios.get(BASE_URL + "/tools/mojito", {
        params: {
          emoji: args.join(" "),
        }
      });
      const data = new Sticker(Buffer.from(media.data.result.split(',').map(Number)), {
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