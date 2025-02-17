const { groupManage, Users } = require("../../../db");
const MSG_CNG = require("../../../utils/config.json");
const { milesToComas, msToTimeRPG } = require("../../../utils/index");

module.exports = {
  tags: ["games"],
  cmd: ["claim", "work"],
  help: ["claim"],
  exec: async (m, Darlyn, { prefix, cmd }) => {
    const user_info = await Users.get(m.sender);
    const group_db = await groupManage.get(m.chat);
    if (!m.isGroup) return m.reply(MSG_CNG.MSG.groupMsg);
    if (m.isGroup && !group_db.games)
      return m.reply("*🚩 Los minijuegos fueron desactivados en este grupo.*");
    const time = user_info.time || 0;
    if (new Date() - time < 300000) {
      m.reply(
        `*🌾 Ya reclamaste tu recompensa, vuelve en :* ${msToTimeRPG(300000 - (Date.now() - time))}`,
      );
      return;
    }
    Darlyn.sendMessage(
      m.chat,
      {
        text: `🌾Obtuviste *${MSG_CNG.BOT_CONFIG.MONEY_SYMBOL} ${milesToComas(2000)}* ${MSG_CNG.BOT_CONFIG.MONEY_NAME} y *${milesToComas(200)}* xp`,
      },
      { quoted: m },
    );
    Users.update(m.sender, {
      balance: (user_info.balance || 0) + 2000,
      xp: (user_info.xp || 0) + 200,
      time: new Date() * 1,
    });
  },
};
