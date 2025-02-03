const { BASE_URL } = require("../../../utils/config.json");
const { default: axios } = require("axios");
const { ConvertMiles } = require("../../../utils/index")

module.exports = {
  tags: ["download", "search"],
  args: ["query/url"],
  cmd: ["reddit", "redditdl"],
  help: ["reddit"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    const text = args.join(' ');
  if (!text) return m.reply("*Ingresa un enlace o lo que buscas en Reddit.*");
  const isUrlRedditxd = text.startsWith("http://") || text.startsWith("https://");
  if (isUrlRedditxd) {
    axios.get(BASE_URL + "/download/reddit", { params: { url: text } })
      .then(async (respondl) => {
        const ree = respondl.data;
          const post = ree.data;
          const { title, subreddit, author, ups, comments, created, url, download } = post;
          let resrulreddit = `*亗 R E D D I T  D L*\n\n` +
            `*› Título :* ${title || '-'}\n` +
            `*› SubReddit:* ${subreddit || '-'}\n` +
            `*› Autor :* ${author || '-'}\n` +
            `*› Votos :* ${ConvertMiles(ups) || '-'}\n` +
            `*› Comentarios :* ${comments || '-'}\n` +
            `*› Publicado :* ${created || '-'}\n` +
            `*› Enlace :* ${url || '-'}\n\nPowered By Delirius`;
          if (download && download.length > 0) {
            if (download.length === 1) {
              await Darlyn.sendMessage(m.chat, { image: { url: download[0] }, caption: resrulreddit }, { quoted: m });
            } else {
              m.reply(resrulreddit);
              download.forEach(async(image, index) => {
                await Darlyn.sendMessage(m.chat, { image: { url: image } }, { quoted: m });
              });
            }
          } else {
            m.reply("*No se encontraron imágenes para descargar en este post.*");
          }
      })
      .catch((error) => {
        console.log(new Error(error).message);
      });
  } else {
    axios.get(BASE_URL + "/tools/reddit", { params: { query: text } })
      .then(async(response) => {
        const data = response.data;
        if (data.status && data.data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.data.length);
          const randomPost = data.data[randomIndex];
          await Darlyn.sendMessage(m.chat, {
            image: { url: randomPost.image },
            caption: `*亗 R E D D I T*\n\n` +
              `*› Título :* ${randomPost.title}\n` +
              `*› SubReddit :* ${randomPost.subreddit}\n` +
              `*› Autor :* ${randomPost.author}\n` +
              `*› Votos :* ${ConvertMiles(randomPost.votes) || 0}\n` +
              `*› Proporción de votos :* ${randomPost.upvote_ratio}\n` +
              `*› NSFW :* ${randomPost.nsfw ? '√' : '×'}\n\n` +
              `*› Enlace :* ${randomPost.url}`,
          }, { quoted: m });
        } else {
          m.reply("*No se encontraron resultados para tu búsqueda.*");
        }
      })
      .catch((error) => {
        console.log(new Error(error).message);
      });
  }
  },
};
