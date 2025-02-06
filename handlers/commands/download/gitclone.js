const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");
const { default: axios } = require("axios");
const { ConvertMiles } = require("../../../utils/index");

module.exports = {
  tags: ["download"],
  args: ["url"],
  cmd: ["gitclone", "repo"],
  help: ["gitclone"],
  exec: async (m, Darlyn, { args }) => {
    const text = args.join(" ");
    if (!text)
      return m.reply(
        "*🍟 Ingresa un enlace de GitHub.*\n*Ejemplo:* gitclone https://github.com/darlyn1234/delirius-bot",
      );
    try {
      const { data: gitclone } = await axios.get(
        BASE_URL + "/download/gitclone",
        {
          params: {
            url: text,
          },
        },
      );
      let gitInfo =
        `亗 G I T C L O N E\n\n` +
        `*› Nombre :* ${gitclone.data.name}\n` +
        `*› Creador :* ${gitclone.data.creator}\n` +
        `*› Id :* ${gitclone.data.id}\n` +
        `*› Lenguaje :* ${gitclone.data.language}\n` +
        `*› Creado :* ${gitclone.data.created}\n` +
        `*› Actualizado :* ${gitclone.data.updated}\n` +
        `*› Peso :* ${gitclone.data.size}\n` +
        `*› Forks :* ${ConvertMiles(gitclone.data.forks)}\n` +
        `*› Estrellas :* ${ConvertMiles(gitclone.data.stargazers)}\n` +
        `*› Vistas :* ${ConvertMiles(gitclone.data.views)}\n` +
        `*› Descripción :* ${gitclone.data.description}\n\n` +
        `> *❄️ Powered By ${BOT_CONFIG.BOT_NAME}*`;
      const rq = await Darlyn.sendMessage(
        m.chat,
        { image: { url: gitclone.data.image }, caption: gitInfo },
        { quoted: m },
      );
      await Darlyn.sendMessage(
        m.chat,
        {
          document: { url: gitclone.data.download },
          mimetype: "application/zip",
          fileName: gitclone.data.name + ".zip",
        },
        { quoted: rq },
      );
    } catch (error) {
      m.reply(new Error(error).message);
    }
  },
};
