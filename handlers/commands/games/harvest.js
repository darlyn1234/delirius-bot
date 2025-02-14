const { groupManage, Users } = require("../../../db");
const MSG_CNG = require("../../../utils/config.json");
const { msToTimeRPG } = require("../../../utils/index");

module.exports = {
  tags: ["games"],
  cmd: ["harvest", "cosechar"],
  help: ["cosechar"],
  exec: async (m, Darlyn, { prefix, cmd }) => {
    const add_apple = Math.floor(Math.random() * 81);
    const add_orange = Math.floor(Math.random() * 32);
    const add_lemon = Math.floor(Math.random() * 123);
    const add_money = Math.floor(Math.random() * 49);
    const user_info = await Users.get(m.sender);
    const group_db = await groupManage.get(m.chat);
    if (!m.isGroup) return m.reply(MSG_CNG.MSG.groupMsg);
    if (m.isGroup && !group_db.games)
      return m.reply("*🚩 Los minijuegos ha sido desactivado en este grupo.*");
    const time = user_info.harvest_time || 0;
    if (new Date() - time < 300000) {
      m.reply(
        `*🌾 Ya cosechaste, vuelve en :* ${msToTimeRPG(300000 - (Date.now() - time))}`,
      );
      return;
    }
    m.reply(`	╭  ✦ harvest Status ✦  ╮\n
 *◦ 🍎 Manzana :* ${add_apple}
 *◦ 🍊 Naranja :* ${add_orange}
 *◦ 🍋 Limon :* ${add_lemon}
 *◦ 💰 Dinero :* ${add_money}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${MSG_CNG.BOT_CONFIG.CREATOR_NAME} ©`);
    Users.update(m.sender, {
      balance: (user_info.balance || 0) + add_money,
      apple: (user_info.apple || 0) + add_apple,
      orange: (user_info.orange || 0) + add_orange,
      lemon: (user_info.lemon || 0) + add_lemon,
      harvest_time: new Date() * 1,
    });
  },
};
