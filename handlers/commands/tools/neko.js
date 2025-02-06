const { default: axios } = require("axios");
const { BOT_CONFIG } = require("../../../utils/config.json");

module.exports = {
  tags: ["tools"],
  cmd: ["neko"],
  help: ["neko"],
  exec: async (m, Darlyn) => {
    axios
      .get("https://nekos.best/api/v2/neko")
      .then((__data) => {
        Darlyn.sendMessage(
          m.chat,
          {
            image: { url: __data.data.results[0].url },
            caption: "*Powered By " + BOT_CONFIG.BOT_NAME + "*",
          },
          { quoted: m },
        );
      })
      .catch((__failedxd) => {
        m.reply(new Error(__failedxd).message);
      });
  },
};
