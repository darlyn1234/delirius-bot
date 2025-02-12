const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");
const { default: axios } = require("axios");

module.exports = {
  tags: ["download", "search"],
  args: ["query/query"],
  cmd: ["pinterest", "pindl", "pinsh"],
  help: ["pinterest"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    const text = args.join(" ");
    if (!text)
      return m.reply(
        `*🚩 Ingresa un enlace o busqueda de Pinterest.*\n\n*Ejemplo ∙* ${prefix + cmd} https://pin.it/2Vflx5O\n\n*Ejemplo:* ${prefix + cmd} Lisa`,
      );
    const isUrlPinterest = /^(https?:\/\/)/.test(text);
    if (isUrlPinterest) {
      const rrrrrr = await axios.get(BASE_URL + "/download/pinterestdl", {
        params: { url: text },
      });
      let resrulpinterest =
        `*亗 P I N T E R E S T — D O W N L O A D*\n\n` +
        `*› Título :* ${rrrrrr.data.data.title}\n` +
        `*› Comentarios:* ${rrrrrr.data.data.comments}\n` +
        `*› Likes :* ${rrrrrr.data.data.likes}\n` +
        `*› Autor :* ${rrrrrr.data.data.author_name}\n` +
        `*› Usuario :* ${rrrrrr.data.data.username}\n` +
        `*› Seguidores :* ${rrrrrr.data.data.followers}\n` +
        `*› Publicado :* ${rrrrrr.data.data.upload}\n` +
        `*› Profile :* ${rrrrrr.data.data.author_url}\n` +
        `*› Descripcion :* ${rrrrrr.data.data.description}\n\n*🍟 Powered By ${BOT_CONFIG.BOT_NAME}*`;
      Darlyn.sendFileFromUrl(
        m.chat,
        rrrrrr.data.data.download.url || rrrrrr.data.data.thumbnail,
        resrulpinterest,
        m,
      );
    } else {
      try {
        const ressss = await axios.get(BASE_URL + "/search/pinterestv2", {
          params: { text: text },
        });
        const result = ressss.data;
        if (result.status && result.data.length > 0) {
          const imggresss =
            result.data[Math.floor(Math.random() * result.data.length)];
          let txtPinterest = `*亗 P I N T E R E S T*\n
*› Título :* ${imggresss.title}
*› Id :* ${imggresss.id}
*› Nombre :* ${imggresss.name}
*› Usuario :* ${imggresss.username}
*› Seguidores :* ${imggresss.followers}
*› Descripción :* ${imggresss.description}
*› Likes :* ${imggresss.likes}
*› Creado :* ${imggresss.created_at}
*› Url :* https://es.pinterest.com/${imggresss.username}\n
*🍟 Powered By ${BOT_CONFIG.BOT_NAME}*`;
          Darlyn.sendMessage(
            m.chat,
            { image: { url: imggresss.image }, caption: txtPinterest },
            { quoted: m },
          );
        } else {
          m.reply("*🚩 Imágenes no encontradas.*");
        }
      } catch (e) {
        m.reply("*🚩 Imágenes no encontradas.*");
      }
    }
  },
};
