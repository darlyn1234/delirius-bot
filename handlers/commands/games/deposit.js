const { groupManage, Users } = require("../../../db");
const MSG_CNG = require("../../../utils/config.json");
const { milesToComas, msToTimeRPG } = require("../../../utils/index");

module.exports = {
  tags: ["games"],
  cmd: ["deposit", "depositar"],
  help: ["depositar"],
  exec: async (m, Darlyn, { prefix, args, cmd }) => {
    try {
      const user_info = await Users.get(m.sender);
      const group_db = await groupManage.get(m.chat);
      if (!m.isGroup) return m.reply(MSG_CNG.MSG.groupMsg);
      if (m.isGroup && !group_db?.games)
        return m.reply(
          "*🚩 Los minijuegos fueron desactivados en este grupo.*",
        );
      if (args.length < 1) return m.reply(`*🚩 Ejemplo :* ${prefix + cmd} 😄`);
      const amount = parseInt(args.join(" "));
      if (isNaN(amount) || amount <= 0)
        return m.reply("*🍟 Ingresa el monto que vas a depositar*");
      if ((user_info.balance || 0) < amount)
        return m.reply("*🍟 No tienes suficiente saldo.*");
      Users.update(m.sender, {
        balance: user_info.balance - amount,
        bank: (user_info.bank || 0) + amount, // ← ola
      });
      m.reply(
        `🌾 Depositaste *${MSG_CNG.BOT_CONFIG.MONEY_SYMBOL} ${milesToComas(amount)}* en el banco`,
      );
    } catch (err) {
      m.reply(new Error(err).message);
    }
  },
};
