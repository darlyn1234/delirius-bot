const { default: axios } = require("axios");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");

module.exports = {
  tags: ["search"],
  args: ["query"],
  cmd: ["pixaiart"],
  help: ["pixaiart"],
  exec: async (m, Delirius, { prefix, args, cmd }) => {
    try {
      if (args.length < 1)
        return m.reply(`*🚩 Ejemplo :* ${prefix + cmd} Lisa`);
      const res = await axios.get(BASE_URL + "/search/pixaiart", {
        params: { query: args.join(" ") },
      });
      if (!res.data.data || res.data.data.length === 0)
        return m.reply("*🍟 Sin resultados.*");
      const rdd =
        res.data.data[Math.floor(Math.random() * res.data.data.length)];
      const imageBuffer = await axios.get(rdd.image, {
        responseType: "arraybuffer",
      });
      const tmpathhhh = path.join(os.tmpdir(), `pixaiart_${Date.now()}.png`);
      await sharp(imageBuffer.data).toFormat("png").toFile(tmpathhhh);
      Delirius.sendMessage(
        m.chat,
        {
          image: { url: tmpathhhh },
          caption: `	╭  ✦ PixaiArt Search  ╮\n
 *◦ Id :* ${rdd.id}
 *◦ Titulo :* ${rdd.title}
 *◦ Resolucion :* ${rdd.resolution}
 *◦ Usuario :* ${rdd.username}
 *◦ Nombre :* ${rdd.name}
 *◦ Publicado :* ${rdd.created}
 *◦ Likes :* ${rdd.likes}
 *◦ Comentarios :* ${rdd.comments}
 *◦ Enlace :* https://pixai.art/artwork/${rdd.id}?utm_source=copy_web\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`,
        },
        { quoted: m },
      );
      setTimeout(
        () =>
          fs.unlink(tmpathhhh, (err) => {
            if (err) console.log(new Error(err).message);
          }),
        5000,
      );
    } catch (error) {
      m.reply(new Error(error).message);
    }
  },
};
