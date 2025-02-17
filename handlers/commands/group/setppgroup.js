module.exports = {
  tags: ["groups"],
  cmd: ["setppgroup", "icongroup", "groupicon"],
  help: ["setppgroup"],
  group: true,
  botAdmin: true,
  admin: true,
  exec: async (m, Darlyn, { prefix, cmd }) => {
    if (
      m.mtype == "imageMessage" ||
      (m.quoted && m.quoted.mtype == "imageMessage")
    ) {
      const ms = m.quoted ? m.quoted : m;
      const media = await Darlyn.downloadMediaMessage(ms);
      await Darlyn.updateProfile(m.chat, media);
    } else {
      m.reply(
        "*🍟 Envia o responde a una imagen con el comando :* " + prefix + cmd,
      );
    }
  },
};
