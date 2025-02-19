const { default: axios } = require("axios");
const { BASE_URL } = require("../../../utils/config.json");
const { statistics } = require("../../../db");
const { sizeFromUrl } = require("../../../utils/scraper");

module.exports = {
  tags: ["download"],
  args: ["url"],
  cmd: ["threads", "threadsdl"],
  help: ["threads"],
  exec: async (m, Darlyn, { prefix, args, cmd }) => {
    const text = args.join(" ");
    const isValidUrl = (url) =>
      url.startsWith("https://") && url.includes("threads");
    if (!text || !isValidUrl(text)) {
      return m.reply(
        `*Ingresa el enlace de un post de Threads.*\n*Ejemplo :* ${prefix + cmd} https://www.threads.net/@momojypx/post/C52-OaTL3al`,
      );
    }
    try {
      const res = await axios.get(`${BASE_URL}/download/threads`, {
        params: { url: text },
      });
      if (res.data.status && res.data.data.length > 0) {
        const media = res.data.data;
        for (const item of media) {
          if (item.type === "image") {
            await Darlyn.sendMessage(
              m.chat,
              { image: { url: item.url } },
              { quoted: m },
            );
          } else if (item.type === "video") {
            await Darlyn.sendMessage(
              m.chat,
              { video: { url: item.url } },
              { quoted: m },
            );
          }
          statistics('filesize', (await sizeFromUrl(item.url)).size);
        }
      } else {
        m.reply("*🍟 Sin resultados para :* " + text);
      }
    } catch (err) {
      m.reply(new Error(err).message);
    }
  },
};
