const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");
const { default: axios } = require("axios");
const { ConvertMiles } = require("../../../utils/index")

module.exports = {
  tags: ["download"],
  args: ["url"],
  cmd: ["ig", "reel", "instagram"],
  help: ["instagram"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    const regexIG = /\/(p|reel|tv|stories|s)\//;
    try {
      if (args.length < 1)
        return m.reply(
          "*🍟 Ingresa el link de un post de Instagram.*\n  *◦ Ejemplo:* " +
            prefix +
            cmd +
            "\thttps://www.instagram.com/p/Ck9R1K8hzcY/?utm_source=ig_web_copy_link",
        );
      if (!regexIG.test(args.join(' ')))
        return m.reply(
          "*🍟 Solo se pueden descargar videos, tv, carretes, historias o stories.*",
        );
      const { data } = await axios.get(BASE_URL + "/download/igv2", {
        params: { url: args.join(' ') },
      });
      const { data: result } = data;
      if (result.download.length === 1) {
        await Darlyn.sendFileFromUrl(
          m.chat,
          result.download[0].url,
          `*亗 I N S T A G R A M*\n\n` +
            `*› Usuario:* ${result.username || "-"}\n` +
            `*› Fullname :* ${result.fullname || "-"}\n` +
            `*› Likes :* ${ConvertMiles(result.likes) || "-"}\n` +
            `*› Comentarios :* ${ConvertMiles(result.comments) || "-"}\n` +
            `*› Publicado :* ${result.published || "-"}\n` +
            `*› Follows :* ${ConvertMiles(result.followed) || "-"}\n` +
            `*› Verificado :* ${result.is_verified ? "×" : "√"}\n` +
            `*› Private :* ${result.is_private ? "×" : "√"}\n` +
            `\n*Powered By ${BOT_CONFIG.BOT_NAME}*`,
          m,
          "",
          "",
        );
      } else {
        m.reply(
          `*亗 I N S T A G R A M*\n\n` +
            `*› Profile :* https://www.instagram.com/${result.username || "-"}\n` +
            `*› Usuario :* ${result.username || "-"}\n` +
            `*› Fullname :* ${result.fullname || "-"}\n` +
            `*› Likes :* ${ConvertMiles(result.likes) || "-"}\n` +
            `*› Comentarios :* ${ConvertMiles(result.comments) || "-"}\n` +
            `*› Publicado :* ${result.published || "-"}\n` +
            `*› Follows :* ${ConvertMiles(result.followed) || "-"}\n` +
            `*› Verificado :* ${result.is_verified ? "√" : "×"}\n` +
            `*› Private :* ${result.is_private ? "√" : "×"}\n` +
            `\n*Powered By ${BOT_CONFIG.BOT_NAME}*`,
        );
        for (let i = 0; i < result.download.length; i++) {
          await Darlyn.sendFileFromUrl(
            m.chat,
            result.download[i].url,
            "",
            m,
            "",
            "",
          );
        }
      }
    } catch (e) {
      console.log(new Error(e).message);
      axios
        .get(BASE_URL + "/download/instagram", { params: { url: args.join(' ') } })
        .then(async (data) => {
          const results = data.data.data;
          for (let i = 0; i < results.length; i++) {
            await Darlyn.sendFileFromUrl(m.chat, results[i].url, "", m, "", "");
          }
        });
    }
  },
};
