const { default: axios } = require("axios");
const { BASE_URL, MSG } = require("../../../utils/config.json");
const { groupManage, Users } = require("../../../db");

module.exports = {
  tags: ["games"],
  cmd: ["balcard", "balancecard"],
  help: ["balcard"],
  exec: async (m, Darlyn, { args }) => {
    function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())];
    }
    const who = m.quoted
      ? m.quoted.sender
      : m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.sender;
    const user_info = await Users.get(who);
    const group_db = await groupManage.get(m.chat);
    const nameee = await Darlyn.getName(who);
    if (!m.isGroup) return m.reply(MSG.groupMsg);
    if (m.isGroup && !group_db.games)
      return m.reply("*🚩 Los minijuegos fueron desactivados en este grupo.*");
    if (!user_info)
      return m.reply(
        "*🚩 " + nameee + " no esta registrado en mi base de datos.*",
      );
    const bgs = await pickRandom([
      "https://i.pinimg.com/564x/99/14/8a/99148a1317f970d07c71525dc6b20967.jpg",
      "https://i.pinimg.com/564x/2b/fe/ac/2bfeace9e807c2e352eb435bf81bc77d.jpg",
      "https://i.pinimg.com/564x/71/14/df/7114dfda3200511c7cf5bb61b516af68.jpg",
    ]);
    const profile_canvas = await Darlyn.profilePictureUrl(
      who,
      "image",
    ).catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
    const str = (who.split("@")[0] || "313481219").toString();
    const num4 = str.substring(0, 4);
    const card_dls = await axios.get(BASE_URL + "/canvas/balcard", {
      params: {
        url: profile_canvas,
        background: bgs,
        username: nameee,
        discriminator: num4,
        money: user_info.balance ? user_info.balance : 0,
        xp: user_info.xp ? user_info.xp : 0,
        level: user_info.level ? user_info.level : 0,
      },
      responseType: "arraybuffer",
    });
    Darlyn.sendMessage(m.chat, { image: card_dls.data }, { quoted: m });
  },
};
