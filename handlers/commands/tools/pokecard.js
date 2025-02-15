const { default: axios } = require("axios");
const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");

module.exports = {
  tags: ["tools"],
  args: ["query"],
  cmd: ["pokecard", "pokemoncard"],
  help: ["pokecard"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    if (args.length < 1)
      return m.reply(`*🚩 Ejemplo :* ${prefix + cmd} caterpie`);
    axios
      .get(BASE_URL + "/search/pokecard", {
        params: {
          text: args.join(" "),
        },
        responseType: "arraybuffer",
      })
      .then((__) => {
        Darlyn.sendMessage(m.chat, { image: __.data, caption: "> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ " + BOT_CONFIG.CREATOR_NAME + " ©" }, { quoted: m });
      })
      .catch((__e) => {
        m.reply(new Error(__e).message);
      });
  },
};
