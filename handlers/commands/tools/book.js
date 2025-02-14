const { default: axios } = require("axios");
const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");

module.exports = {
  tags: ["tools"],
  cmd: ["book", "cuaderno"],
  help: ["book"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    if (args.length < 1)
      return m.reply(
        `*🚩 Ejemplo :* ${prefix + cmd} Bienvenido a ${BOT_CONFIG.BOT_NAME} 😄`,
      );
    const book_dls = await axios.get(BASE_URL + "/canvas/book", {
      params: {
        text: args.join(" "),
        footer: (
          await axios.get(BASE_URL + "/tools/country", {
            params: {
              text: m.sender,
            },
          })
        ).data.result.number,
      },
      responseType: "arraybuffer",
    });
    Darlyn.sendMessage(m.chat, { image: book_dls.data }, { quoted: m });
  },
};
