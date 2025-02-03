const { BASE_URL } = require("../../../utils/config.json");

module.exports = {
  tags: ["tools"],
  cmd: ["boobs", "tetas"],
  help: ["boobs"],
  exec: async (m, Darlyn, { args }) => {
    try {
      Darlyn.sendFileFromUrl(
        m.chat,
        BASE_URL + "/nsfw/boobs",
        "*Powered By Delirius (神志不清)*",
        m,
        "",
        "jpeg",
        { viewOnce: true },
      );
    } catch (error) {
      m.reply("🚩 " + new Error(error).message);
    }
  },
};
