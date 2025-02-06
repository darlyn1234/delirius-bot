const { getBuffer, gifToMp4 } = require("functionsss");
const { default: axios } = require("axios");

module.exports = {
  tags: ["tools"],
  cmd: ["kiss"],
  help: ["kiss"],
  exec: async (m, Darlyn) => {
    try {
      const rrrrrrrxdd = (await axios.get("https://api.waifu.pics/sfw/kiss")).data;
      const result = await getBuffer(rrrrrrrxdd.url);
      const buf = await gifToMp4(result);
      let who = null;
      if (m.mentionedJid && m.mentionedJid.length > 0) {
        who = m.mentionedJid[0];
      } else if (m.quoted && m.quoted.sender) {
        who = m.quoted.sender;
      }
      const nameexd = await Darlyn.getName(who);
      if (!who) {
        Darlyn.sendMessage(
          m.chat,
          { video: buf, gifPlayback: true },
          { quoted: m },
        );
      } else {
        Darlyn.sendMessage(
          m.chat,
          {
            video: buf,
            gifPlayback: true,
            caption: `@${m.pushName} *besó a* @${nameexd}`,
            mentions: [m.sender, who],
          },
          { quoted: m },
        );
      }
    } catch (error) {
      console.log(new Error(error).message);
    }
  },
};
