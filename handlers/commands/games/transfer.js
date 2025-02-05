const { groupManage, Users } = require("../../../db");
const MSG_CNG = require("../../../utils/config.json");
const { milesToComas } = require("../../../utils/index");

module.exports = {
  tags: ["games"],
  cmd: ["transfer", "trasnferir"],
  args: ["@user", "monto"],
  help: ["transferir"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    if (!m.isGroup) return m.reply(MSG_CNG.MSG.groupMsg);
    const group_db = await groupManage.get(m.chat);
    if (!group_db.games)
      return m.reply(
        "*🚩 Los minijuegos han sido desactivados en este grupo.*",
      );
    const user_info = await Users.get(m.sender);
    if (!user_info)
      return m.reply("*🚩 No estás registrado en mi base de datos.*");
    const who = m.quoted
      ? m.quoted.sender
      : m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : null;
    if (!who)
      return m.reply(
        `*🚩 Debes mencionar al usuario al que deseas transferir ${MSG_CNG.BOT_CONFIG.MONEY_NAME}.*`,
      );
    if (who === m.sender)
      return m.reply("*🚩 No puedes transferirte dinero a ti mismo.*");
    const user_transfer = await Users.get(who);
    if (!user_transfer)
      return m.reply(
        `*🚩 El usuario ${await Darlyn.getName(who)} no está registrado en mi base de datos.*`,
      );
    const amount = parseInt(args[1], 10);
    if (!amount || isNaN(amount) || amount <= 0)
      return m.reply(
        `*🚩 Ingresa un monto válido para transferir.* Ejemplo: ${prefix}${cmd} @user 100`,
      );
    if (user_info.balance < amount)
      return m.reply(
        `🚩 No tienes suficiente saldo para transferir, saldo actual es *${MSG_CNG.BOT_CONFIG.MONEY_SYMBOL}${milesToComas(user_info.balance)}*`,
      );
    await Users.update(m.sender, {
      balance: (user_info.balance || 0) - amount,
    });
    await Users.update(who, { balance: (user_transfer.balance || 0) + amount });
    Darlyn.sendMessage(
      m.chat,
      {
        text: `🍟 Has transferido *${MSG_CNG.BOT_CONFIG.MONEY_SYMBOL}${milesToComas(amount)}* ${MSG_CNG.BOT_CONFIG.MONEY_NAME} a *${await Darlyn.getName(who)}*.\n\nTu nuevo saldo es *${MSG_CNG.BOT_CONFIG.MONEY_SYMBOL}${milesToComas(user_info.balance - amount)}* ${MSG_CNG.BOT_CONFIG.MONEY_NAME}.`,
      },
      { quoted: m },
    );
  },
};
