const { groupManage } = require("../../../db");

module.exports = {
  tags: ["groups"],
  cmd: ["juegos", "games"],
  help: ["games"],
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
      await groupManage.update(m.chat, { games: enable });
      const msgg = enable
        ? "*🎍 Los juegos han sido `activados` en este grupo.*"
        : "*🧃 Los juegos han sido `desactivados` en este grupo.*";
      Darlyn.sendMessage(m.chat, { text: msgg }, { quoted: m });
    } catch (err) {
      console.log(new Error(err).message);
      m.reply(new Error(err).message);
    }
  },
};
