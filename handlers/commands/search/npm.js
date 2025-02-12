const { default: axios } = require("axios");
const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");

module.exports = {
  tags: ["search"],
  cmd: ["npmsearch", "npmpackage", "npm"],
  args: ["query"],
  help: ["npm"],
  exec: async (m, Delirius, { prefix, cmd, args }) => {
    try {
      if (args.length < 1)
        return m.reply(
          `*Ingresa el nombre del paquete que buscas.*\n*Ejemplo :* ${prefix + cmd} axios`,
        );
      const response = await axios.get(`${BASE_URL}/search/npm`, {
        params: { q: args.join(" "), limit: 1 },
      });
      const data = response.data;
      if (data.status && data.results.length > 0) {
        const pkg = data.results[0];
        let textNpm = `\t╭  ✦ NPM Package ✦  ╮`;
        textNpm += `\n\n *◦ Nombre:* ${pkg.package}`;
        textNpm += `\n *◦ Autor:* ${pkg.author}`;
        textNpm += `\n *◦ Publicado:* ${pkg.publish}`;
        textNpm += `\n *◦ Versión:* ${pkg.version}`;
        textNpm += `\n *◦ Descripción:* ${pkg.description}`;
        textNpm += `\n *◦ Url:* ${pkg.url}`;
        textNpm += `\n\n> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`;
        await Delirius.sendMessage(
          m.chat,
          {
            document: { url: pkg.download },
            fileName: pkg.package + ".tgz",
            caption: textNpm,
          },
          { quoted: m },
        );
      } else {
        m.reply("*🍟 No se encontraron resultados.*");
      }
    } catch (error) {
      m.reply(new Error(error).message);
    }
  },
};
