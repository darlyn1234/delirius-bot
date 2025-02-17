const { groupManage, Users } = require("../../../db");
const { fetchData, bufferUrl, gifToMp4 } = require("../../../utils/index");

module.exports = {
  tags: ["anime"],
  cmd: ["kiss"],
  help: ["kiss"],
  group: true,
  exec: async (m, Darlyn, { prefix, cmd }) => {
    const who = m.quoted
      ? m.quoted.sender
      : m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.sender;
    const user_info = await Users.get(who);
    const group_db = await groupManage.get(m.chat);
    if (m.isGroup && !group_db.nsfw)
      return m.reply(
        "*🚩 Los comandos NSFW y SFW fueron desactivados en este grupo.*",
      );
    const { url } = await fetchData("https://api.waifu.pics/sfw/kiss");
    const buff = await bufferUrl(url);
    const resdls = await gifToMp4(buff);
    Darlyn.sendMessage(
      m.chat,
      {
        video: resdls,
        gifPlayback: true,
        caption:
          who !== m.sender
            ? `\`${m.pushName}\` besó a \`${user_info.name || who.split("@")[0]}\``
            : `\`${m.pushName}\` se besó a si mismo/a`,
        mentions: who !== m.sender ? [m.sender, who] : [m.sender],
      },
      { quoted: m },
    );
  },
};
