const { default: axios } = require("axios");
const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");

module.exports = {
  tags: ["search"],
  args: ["query"],
  cmd: ["codepen"],
  help: ["codepen"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    try {
      if (args.length < 1) return m.reply(`*🚩 Ejemplo :* ${prefix + cmd} threejs`);
      const response = await axios.get(BASE_URL + "/search/codepen", {
        params: {
          query: args.join(' ')
        }
      });
      const rdd = response.data.data[Math.floor(Math.random() * response.data.data.length)];
      Darlyn.sendMessage(m.chat, {image: {url: rdd.avatar}, caption: `	╭  ✦ CodePen Search ✦  ╮\n
 *◦ Id :* ${rdd.id}
 *◦ Titulo :* ${rdd.title}
 *◦ Creado :* ${rdd.created}
 *◦ Vistas :* ${rdd.views}
 *◦ Comentarios :* ${rdd.comments}
 *◦ Likes :* ${rdd.likes}
 *◦ Nombre :* ${rdd.owner}
 *◦ Usuario :* ${rdd.username}
 *◦ Preview :* ${rdd.preview}
 *◦ Enlace :* ${rdd.url}
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`})
    } catch (er) {
      m.reply(new Error(er).message);
    }
  },
};
