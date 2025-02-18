const { groupManage } = require("../../../db");

module.exports = {
  tags: ["groups"],
  cmd: ["raid", "antiraid"],
  help: ["antiraid"],
  group: true,
  botAdmin: false,
  admin: true,
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    if (!m.isGroup) return m.reply("");
    if (args.length === 0) return m.reply("*🍟 Ejemplo:* " +
          cmd +
          "on" +
          " *o* " +
          cmd +
          "off");
    const action = args[0]?.toLowerCase();
    if (!["on", "off"].includes(action)) {
      return m.reply(
        "*🍟 Ejemplo:* " +
          cmd +
          "on" +
          " *o* " +
          cmd +
          "off",
      );
    }
    const enable = action === "on" ? 1 : 0;
    try {
      await groupManage.update(m.chat, { raid: enable });
      const msgg = enable
        ? "*🎍 Antiraid ha sido `activado` en este grupo.*"
        : "*🧃 Antiraid ha sido `desactivado` en este grupo.*";
      Darlyn.sendMessage(m.chat, { text: msgg }, { quoted: m });
    } catch (err) {
      m.reply(new Error(err).message);
    }
  },
};
