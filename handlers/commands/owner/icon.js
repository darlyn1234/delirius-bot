module.exports = {
  tags: ["owner"],
  cmd: ["setppbot", "icon"],
  help: ["icon"],
  owner: true,
  exec: async (m, Darlyn, { prefix, cmd }) => {
    if (
      m.mtype == "imageMessage" ||
      (m.quoted && m.quoted.mtype == "imageMessage")
    ) {
      const ms = m.quoted ? m.quoted : m;
      const media = await Darlyn.downloadMediaMessage(ms);
      await Darlyn.updateProfile(m.sender, media);
    } else {
      m.reply(
        "*🍟 Envia o responde a una imagen con el comando :* " + prefix + cmd,
      );
    }
  },
};
