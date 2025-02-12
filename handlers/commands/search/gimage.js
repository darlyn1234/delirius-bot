const { default: axios } = require("axios");
const { BASE_URL } = require("../../../utils/config.json");

module.exports = {
  tags: ["search"],
  cmd: ["imagen", "googleimage", "image", "gimage"],
  args: ["query"],
  help: ["image"],
  exec: async (m, Delirius, { prefix, cmd, args }) => {
    try {
      if (args.length < 1)
        return m.reply(
          `*Ingresa el nombre de la imagen que buscas.*\n*Ejemplo :* ${prefix + cmd} twice`,
        );
      const response = await axios.get(`${BASE_URL}/search/gimage`, {
        params: {
          query: args.join(" "),
        },
      });
      const data = response.data;
      if (data.status && data.data.length > 0) {
        const rd_imgg =
          data.data[Math.floor(Math.random() * data.data.length)].url ||
          data.data[Math.floor(Math.random() * data.data.length)].preview;
        Delirius.sendMessage(
          m.chat,
          { image: { url: rd_imgg } },
          { quoted: m },
        );
      } else {
        m.reply("*🍟 No se encontraron resultados.*");
      }
    } catch (error) {
      m.reply(new Error(error).message);
    }
  },
};
