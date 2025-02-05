const { default: axios } = require("axios");
const { BASE_URL } = require("../../../utils/config.json");

module.exports = {
  tags: ["download"],
  args: ["url"],
  cmd: ["threads", "threadsdl"],
  help: ["threads"],
  exec: async (m, Darlyn, { prefix, args, cmd }) => {
    const text = args.join(" ");
    const isValidUrl = (url) => {
      return url.startsWith("https://") && url.includes("threads");
    };
    if (!text || !isValidUrl(text))
      return m.reply(
        `*Ingresa el enlace de un post de Threads.*\n*Ejemplo :* ${prefix + cmd} https://www.threads.net/@momojypx/post/C52-OaTL3al`,
      );
    try {
      const res = await axios.get(BASE_URL + "/download/threads", {
        params: {
          url: text
        }
      });
      if (res.data.status && res.data.data.media.length > 0) {
        const txtresthreads = `亗 T H R E A D S\n
*Usuario :* ${res.data.data.username || "-"}
*Description :* ${res.data.data.description || "-"}
*Likes :* ${res.data.data.likes || "-"}
*Verificado :* ${res.data.data.is_verified ? "√" : "×"}
*Files :* ${res.data.data.media.length || "-"}
*Enlace :* ${text.trim()}\n
*🍟 Powered By Delirius (神志不清)*`;
        m.reply(txtresthreads);
        const media = res.data.data.media;
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
        }
      } else {
        m.reply("*🍟 Sin resultados para :* " + text);
      }
    } catch (err) {
      console.log(new Error(err).message);
    }
  },
};