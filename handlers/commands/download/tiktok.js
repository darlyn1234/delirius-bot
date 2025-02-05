const { BASE_URL } = require("../../../utils/config.json");
const { default: axios } = require("axios");
const { ConvertMiles } = require("../../../utils/index");
const os = require("os");
const fs = require("fs");
const path = require("path");

module.exports = {
  tags: ["download"],
  args: ["url"],
  cmd: ["tiktok", "tt", "tiktokdl"],
  help: ["tiktok"],
  exec: async (m, Darlyn, { args }) => {
    const text = args.join(" ");
    if (!text) return m.reply("*∙ Ingresa un enlace de TikTok.*");
    try {
      const { data: rtiktokdl } = await axios.get(
        BASE_URL + "/download/tiktok",
        {
          params: {
            url: args.join(" "),
          },
        },
      );
      let txtdlauto = `亗 T I K T O K\n
*› Nombre :* ${rtiktokdl.data.author.nickname}
*› Usuario :* ${rtiktokdl.data.author.username}
*› Duración :* ${rtiktokdl.data.duration}s
*› Reproducido :* ${ConvertMiles(rtiktokdl.data.repro)}
*› Likes :* ${ConvertMiles(rtiktokdl.data.like)}
*› Compartido :* ${ConvertMiles(rtiktokdl.data.share)}
*› Comentario :* ${ConvertMiles(rtiktokdl.data.comment)}
*› Descargas :* ${ConvertMiles(rtiktokdl.data.download)}
*› Música :* ${rtiktokdl.data.music.title}\n\n> *❄️ Powered By Delirius (神志不清)*`;
      if (rtiktokdl.data.meta.media[0].type === "video") {
        await Darlyn.sendMessage(
          m.chat,
          {
            video: { url: rtiktokdl.data.meta.media[0].org },
            caption: txtdlauto,
          },
          { quoted: m },
        );
      } else if (rtiktokdl.data.meta.media[0].type === "image") {
        m.reply(txtdlauto);
        const tempDir = os.tmpdir();
        const images = rtiktokdl.data.meta.media[0].images;
        for (let imgUrl of images) {
          const imageName = `tiktok-${Date.now()}.jpg`;
          const imagePath = path.join(tempDir, imageName);
          const response = await axios.get(imgUrl, {
            responseType: "arraybuffer",
          });
          fs.writeFileSync(imagePath, response.data);
          await Darlyn.sendMessage(
            m.chat,
            { image: { url: imagePath } },
            { quoted: m },
          );
        }
      }
    } catch (error) {
      m.reply(new Error(error).message);
    }
  },
};
