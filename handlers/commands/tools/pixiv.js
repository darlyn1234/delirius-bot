const {default: axios } = require("axios");
const { BASE_URL } = require("../../../utils/config.json");

module.exports = {
  tags: ["tools"],
  args: ["query"],
  cmd: ["pixiv"],
  help: ["pixiv"],
  exec: async (m, Delirius, { prefix, args, flags, cmd, body, url }) => {
    try {
      if (args.length < 1)
        return m.reply(`*🚩 Ejemplo :* ${prefix + cmd} Lisa`);
      const res = await axios.get(BASE_URL + "/anime/pixiv", {
        params: {
          query: args.join(" "),
        },
      });
      const responseeeeexdd = res.data.data;
      let txtPixiv = `*亗 P I X I V - S E A R C H*\n
*› Titulo :* ${responseeeeexdd.title}
*› Full :* ${responseeeeexdd.fulltitle}
*› Id :* ${responseeeeexdd.id}
*› Publicado :* ${responseeeeexdd.publish}
*› Tags :* ${responseeeeexdd.tags.join(", ")}
*› Autor :* ${responseeeeexdd.author}
*› Usuario :* ${responseeeeexdd.username}
*› Enlace :* https://www.pixiv.net/en/artworks/${responseeeeexdd.id}
*› Desc :* ${responseeeeexdd.description}\n
> 🍟 Powered By Delirius`;
      Delirius.sendMessage(
        m.chat,
        {
          image: Buffer.from(responseeeeexdd.download.split(", ").map(Number)),
          caption: txtPixiv,
        },
        { quoted: m },
      );
    } catch (error) {
      m.reply(new Error(error).message);
    }
  },
};
