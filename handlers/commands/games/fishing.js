const { groupManage, Users } = require("../../../db");
const MSG_CNG = require("../../../utils/config.json");
const { milesToComas, msToTimeRPG } = require("../../../utils/index");

module.exports = {
  tags: ["games"],
  cmd: ["fishing", "pescar"],
  help: ["pescar"],
  exec: async (m, Darlyn, { prefix, cmd }) => {
    const add_peces = Math.floor(Math.random() * 9);
    const add_marucha = Math.floor(Math.random() * 200);
    const add_squid = Math.floor(Math.random() * 5);
    const add_money = Math.floor(Math.random() * 124);
    const user_info = await Users.get(m.sender);
    const group_db = await groupManage.get(m.chat);
    if (!m.isGroup) return m.reply(MSG_CNG.MSG.groupMsg);
    if (m.isGroup && !group_db.games)
      return m.reply("*🚩 Los minijuegos ha sido desactivado en este grupo.*");
    const time = user_info.fished_time || 0;
    if (new Date() - time < 300000) {
      m.reply(
        `*🌾 Ya pescaste vuelve en :* ${msToTimeRPG(300000 - (Date.now() - time))}`,
      );
      return;
    }
    m.reply(`	╭  ✦ Fishing Status ✦  ╮\n
 *◦ 🐟 Peces :* ${add_peces}
 *◦ 🦐 Calamar:* ${add_squid}
 *◦ 🦪 Marucha :* ${add_marucha}
 *◦ 💰 Dinero :* ${add_money}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${MSG_CNG.BOT_CONFIG.CREATOR_NAME} ©`);
    Users.update(m.sender, {
      balance: (user_info.balance || 0) + add_money,
      fish: (user_info.fish || 0) + add_peces,
      marucha: (user_info.marucha || 0) + add_marucha,
      squid: (user_info.squid || 0) + add_squid,
      fished_time: new Date() * 1,
    });
  },
};
