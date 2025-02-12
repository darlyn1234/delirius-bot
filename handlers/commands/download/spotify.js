const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");
const { default: axios } = require("axios");

module.exports = {
  tags: ["download", "search"],
  args: ["query/url"],
  cmd: ["spotify", "spotifydl"],
  help: ["spotify"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    const text = args.join(" ");
    if (!text)
      return m.reply(
        `*🚩 Ingresa un enlace o busqueda de Spotify.*\n\n*Ejemplo ∙* ${prefix + cmd} https://open.spotify.com/track/22fSzde77hjB052Vo155LF\n\n*Ejemplo:* ${prefix + cmd} Feel Special`,
      );
    const isUrlSpotify = /^(https?:\/\/)/.test(text);
    if (isUrlSpotify) {
      const songg_deliriuzzz_dltxt = await axios.get(
        BASE_URL + "/download/spotifydl",
        {
          params: {
            url: text,
          },
        },
      );
      let spotify_download = `	╭  ✦ Spotify Download ✦  ╮\n
 *◦ Titulo :* ${songg_deliriuzzz_dltxt.data.data.title || "-"}
 *◦ Artista :* ${songg_deliriuzzz_dltxt.data.data.artist || "-"}
 *◦ Publicado :* ${songg_deliriuzzz_dltxt.data.data.publish || "-"}
 *◦ Popularidad :* ${songg_deliriuzzz_dltxt.data.data.popularity || "-"}
 *◦ Album :* ${songg_deliriuzzz_dltxt.data.data.album}
 *◦ Enlace :* ${text.trim()}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`;
      await Darlyn.sendMessage(
        m.chat,
        {
          image: { url: songg_deliriuzzz_dltxt.data.data.image },
          caption: spotify_download,
        },
        { quoted: m },
      );
      Darlyn.sendMessage(
        m.chat,
        {
          audio: { url: songg_deliriuzzz_dltxt.data.data.download },
          mimetype: "audio/mpeg",
        },
        { quoted: m },
      );
    } else {
      try {
        const ressss = await axios.get(BASE_URL + "/search/spotify", {
          params: {
            q: text,
            limit: 1,
          },
        });
        const result = ressss.data.data;
        console.log(result[0]);
        if (result.length > 0) {
          const songg_deliriuzzz_dl = await axios.get(
            BASE_URL + "/download/spotifydl",
            {
              params: {
                url: result[0].url,
              },
            },
          );
          let spotifysearchh = `	╭  ✦ Spotify Search ✦  ╮\n
 *◦ Titulo :* ${result[0].title || "-"}
 *◦ Artista :* ${result[0].artist || "-"}
 *◦ Duracion :* ${result[0].duration}
 *◦ Enlace :* ${result[0].album}
 *◦ Popularidad :* ${result[0].popularity || "-"}
 *◦ Enlace :* ${result[0].url}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`;
          Darlyn.sendMessage(
            m.chat,
            {
              image: { url: result[0].image },
              caption: spotifysearchh,
            },
            { quoted: m },
          );
          Darlyn.sendMessage(
            m.chat,
            {
              audio: { url: songg_deliriuzzz_dl.data.data.download },
              mimetype: "audio/mpeg",
            },
            { quoted: m },
          );
        } else {
          m.reply("*🚩 Cancion no encontrada.*");
        }
      } catch (e) {
        m.reply(new Error(e).message);
      }
    }
  },
};
