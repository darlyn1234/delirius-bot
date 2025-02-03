const { UploadBuffer } = require("../../../utils/index");

module.exports = {
  tags: ["tools"],
  args: ["reply media"],
  cmd: ["tourl", "quax"],
  help: ["tourl"],
  exec: async (m, Darlyn, { prefix, flags, cmd, arg, body, url }) => {
    if (
      m.mtype == "imageMessage" ||
      (m.quoted && m.quoted.mtype == "imageMessage")
    ) {
      const ms = m.quoted ? m.quoted : m;
      let media = await Darlyn.downloadMediaMessage(ms);
      const urll = await UploadBuffer(media);
      m.reply(urll);
    } else {
      m.reply(
        "*🍟 Envia o responde a una imagen con el comando :* " + prefix + cmd,
      );
    }
  },
};
