const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");
const { default: axios } = require("axios");

module.exports = {
  tags: ["download", "search"],
  args: ["query/url"],
  cmd: ["xnxx", "xnxxdl", "xnxxsearch"],
  help: ["xnxx"],
  /**
   *
   * @param {*} m
   * @param {import("@whiskeysockets/baileys").WASocket} Darlyn
   * @param {*} param2
   * @returns
   */
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    try {
      if (args.length < 1) {
        return m.reply(
          `*Ingresa lo que buscas*\n*Ejemplo :* ${prefix + cmd} rusas`,
        );
      }
      const shres = await axios.get(`${BASE_URL}/search/xnxxsearch`, {
        params: {
          query: args.join(" "),
        },
      });
      const { data } = shres.data;
      if (!data || data.length === 0) {
        return m.reply("*No se encontraron resultados.*");
      }
      const rdvid = data[Math.floor(Math.random() * data.length)];
      const dll = await axios.get(BASE_URL + "/download/xnxxdl", {
        params: {
          url: rdvid.link,
        },
      });
      const dlllllll = dll.data.data;
      const xzzz = `	╭  ✦ Xnxx Download ✦  ╮\n
 *◦ Titulo :* ${rdvid.title || "-"}
 *◦ Vistas :* ${rdvid.views || "-"}
 *◦ Duracion :* ${rdvid.duration || ""}
 *◦ Porcentage :* ${rdvid.percentage || "0"}
 *◦ Calidad :* ${rdvid.quality || 0}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`;
      Darlyn.sendMessage(
        m.chat,
        {
          document: { url: dlllllll.download.high || dlllllll.download.low },
          jpegThumbnail: await Darlyn.reSizeImg(
            dlllllll.gallery.default || dlllllll.gallery.thumbnail,
            250,
            250,
          ),
          mimetype: "video/mp4",
          fileName: rdvid.title + ".mp4",
          caption: xzzz,
        },
        { quoted: m },
      );
    } catch (error) {
      console.error(new Error(error).message);
      m.reply(`*Error:* ${new Error(error).message}`);
    }
  },
};
