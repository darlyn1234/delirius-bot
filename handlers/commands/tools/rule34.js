const { default: axios } = require("axios");
const { BASE_URL } = require("../../../utils/config.json");

module.exports = {
  tags: ["tools"],
  args: ["query"],
  cmd: ["rule34"],
  help: ["rule34"],
  exec: async (m, Darlyn, { args }) => {
    const text = args.join(" ");
    if (!text) return m.reply("*🍟 Ingresa el título que buscas en Rule34.*");
    try {
      const res = await axios.get(BASE_URL + "/search/rule34v2", {
        params: { query: text, page: 0 },
      });
      if (!res.data.status || res.data.data.length === 0)
        return m.reply("*🍟 Sin resultados.*");
      const indexxd = Math.floor(Math.random() * res.data.data.length);
      const imageee = res.data.data[indexxd].image;
      Darlyn.sendMessage(m.chat, { image: { url: imageee } }, { quoted: m });
    } catch (error) {
      const f2 = await axios.get(BASE_URL + "/search/rule34", {
        params: { query: text },
      });
      const rdix = Math.floor(Math.random() * f2.data.images.length);
      const imgr = f2.data.images[rdix];
      Darlyn.sendMessage(m.chat, { image: { url: imgr } }, { quoted: m });
    }
  },
};
