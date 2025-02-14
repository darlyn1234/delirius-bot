const { groupManage, Users } = require("../../../db");
const MSG_CNG = require("../../../utils/config.json");
const { msToTimeRPG } = require("../../../utils/index");

module.exports = {
  tags: ["games"],
  cmd: ["talar"],
  help: ["talar"],
  exec: async (m, Darlyn, { prefix, cmd }) => {
    const add_three = Math.floor(Math.random() * 71);
    const add_palm = Math.floor(Math.random() * 92);
    const add_pines = Math.floor(Math.random() * 13);
    const add_money = Math.floor(Math.random() * 39);
    const user_info = await Users.get(m.sender);
    const group_db = await groupManage.get(m.chat);
    if (!m.isGroup) return m.reply(MSG_CNG.MSG.groupMsg);
    if (m.isGroup && !group_db.games)
      return m.reply("*🚩 Los minijuegos ha sido desactivado en este grupo.*");
    const time = user_info.fell_time || 0;
    if (new Date() - time < 300000) {
      m.reply(
        `*🌾 Ya talaste, vuelve en :* ${msToTimeRPG(300000 - (Date.now() - time))}`,
      );
      return;
    }
    m.reply(`	╭  ✦ Cut Status ✦  ╮\n
 *◦ 🌳 Arboles :* ${add_three}
 *◦ 🌴 Palmeras :* ${add_palm}
 *◦ 🌲 Pinos :* ${add_pines}
 *◦ 💰 Dinero :* ${add_money}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${MSG_CNG.BOT_CONFIG.CREATOR_NAME} ©`);
    Users.update(m.sender, {
      balance: (user_info.balance || 0) + add_money,
      three: (user_info.three || 0) + add_three,
      palm: (user_info.palm || 0) + add_palm,
      pines: (user_info.pines || 0) + add_pines,
      fell_time: new Date() * 1,
    });
  },
};
