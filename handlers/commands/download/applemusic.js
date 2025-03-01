const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");
const { default: axios } = require("axios");
const { statistics } = require("../../../db");
const { sizeFromUrl } = require("../../../utils/scraper");

module.exports = {
  tags: ["download", "search"],
  args: ["query/url"],
  cmd: ["apple", "applemusic", "applemusicdl"],
  help: ["applemusic"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    const text = args.join(" ");
    if (!text)
      return m.reply(
        `*🚩 Ingresa un enlace o busqueda de Apple Music.*\n\n*Ejemplo ∙* ${prefix + cmd} https://music.apple.com/es/album/sola-remix-feat-daddy-yankee-wisin-farruko-zion-lennox/1183214926?i=1183215242\n\n*Ejemplo:* ${prefix + cmd} Feel Special`,
      );
    const isUrlAppleMusic = /^(https?:\/\/)/.test(text);
    if (isUrlAppleMusic) {
      const songg_deliriuzzz_dltxt = await axios.get(
        BASE_URL + "/download/applemusicdl",
        {
          params: {
            url: text,
          },
        },
      );
      let applemusic_searchhhxdd = `	╭  ✦ Apple Music Download ✦  ╮\n
 *◦ Titulo :* ${songg_deliriuzzz_dltxt.data.data.name || "-"}
 *◦ Artista :* ${songg_deliriuzzz_dltxt.data.data.artists || "-"}
 *◦ Duracion :* ${songg_deliriuzzz_dltxt.data.data.type || "-"}
 *◦ Duracion :* ${songg_deliriuzzz_dltxt.data.data.duration || "-"}
 *◦ Enlace :* ${text.trim()}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`;
      const rddeliriuszzz = await Darlyn.sendMessage(
        m.chat,
        {
          image: { url: songg_deliriuzzz_dltxt.data.data.image },
          caption: applemusic_searchhhxdd,
        },
        { quoted: m },
      );
      Darlyn.sendMessage(
        m.chat,
        {
          audio: { url: songg_deliriuzzz_dltxt.data.data.download },
          mimetype: "audio/mpeg",
        },
        { quoted: rddeliriuszzz },
      );
      statistics('filesize', (await sizeFromUrl(songg_deliriuzzz_dltxt.data.data.download)).size);
    } else {
      try {
        const ressss = await axios.get(BASE_URL + "/search/applemusic", {
          params: { text: text },
        });
        const result = ressss.data;
        if (result.length > 0) {
          const songg_deliriuzzz = result.find((dls) => dls.type === "Canción");
          const songg_deliriuzzz_dl = await axios.get(
            BASE_URL + "/download/applemusicdl",
            {
              params: {
                url: songg_deliriuzzz.url,
              },
            },
          );
          let applemusic_searchhhxdd = `	╭  ✦ Apple Music Search ✦  ╮\n
 *◦ Titulo :* ${songg_deliriuzzz.title || "-"}
 *◦ Artista :* ${songg_deliriuzzz.artists || "-"}
 *◦ Type :* ${songg_deliriuzzz.type}
 *◦ Enlace :* ${songg_deliriuzzz.url}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`;
          const rddeliriuszzz = await Darlyn.sendMessage(
            m.chat,
            {
              image: { url: songg_deliriuzzz.image },
              caption: applemusic_searchhhxdd,
            },
            { quoted: m },
          );
          Darlyn.sendMessage(
            m.chat,
            {
              audio: { url: songg_deliriuzzz_dl.data.data.download },
              mimetype: "audio/mpeg",
            },
            { quoted: rddeliriuszzz },
          );
          statistics('filesize', (await sizeFromUrl(songg_deliriuzzz_dl.data.data.download).size));
        } else {
          m.reply("*🚩 Cancion no encontrada.*");
        }
      } catch (e) {
        m.reply(new Error(e).message);
      }
    }
  },
};
