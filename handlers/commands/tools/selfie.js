const { default: axios } = require("axios");
const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");

module.exports = {
  tags: ["tools"],
  cmd: ["selfie", "selfies"],
  help: ["selfie"],
  exec: async (m, Darlyn) => {
    axios
      .get(BASE_URL + "/anime/selfie")
      .then((__data) => {
        Darlyn.sendMessage(
          m.chat,
          {
            image: { url: __data.data.data.image },
            caption: `*亗 S E L F I E*\n
*› Id :* ${__data.data.data.id || "-"}
*› Titulo :* ${__data.data.data.title || "-"}
*› Likes :* ${__data.data.data.likes || 0}
*› Publicado :* ${__data.data.data.upload || "-"}
*› Peso :* ${__data.data.data.size ? "[ √ ]" : "[ × ]"}
*› Nsfw :* ${__data.data.data.nsfw}
*› Source :* ${__data.data.data.source || "-"}\n
*🍟 Powered By Delirius.*`,
          },
          { quoted: m },
        );
      })
      .catch((__failedxd) => {
        m.reply(new Error(__failedxd).message);
      });
  },
};
