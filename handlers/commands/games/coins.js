const { groupManage, Users } = require("../../../db");
const MSG_CNG = require("../../../utils/config.json");
const { milesToComas } = require("../../../utils/index");

module.exports = {
  tags: ["games"],
  cmd: ["balance", "bal", "coins"],
  help: ["coins"],
  exec: async (m, Darlyn, { prefix, cmd }) => {
    const user_info = await Users.get(m.sender);
    const group_db = await groupManage.get(m.chat);
    if (!m.isGroup) return m.reply(MSG_CNG.MSG.groupMsg);
    if (m.isGroup && !group_db.games)
      return m.reply("*🚩 Los minijuegos fueron desactivados en este grupo.*");
    if (!user_info) 
      return m.reply("*🚩 No estas registrado en mi base de datos.*")
    Darlyn.sendMessage(
      m.chat,
      {
        text: `🌾Tienes *${MSG_CNG.BOT_CONFIG.MONEY_SYMBOL} ${milesToComas(user_info.balance) || 0}* ${MSG_CNG.BOT_CONFIG.MONEY_NAME} y *${milesToComas(user_info.xp) || 0}* xp`,
      },
      { quoted: m },
    );
  },
};
