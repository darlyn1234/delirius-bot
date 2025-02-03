const { UploadBuffer } = require("../../../utils/index");
const { default: axios } = require("axios");
const { BASE_URL } = require("../../../utils/config.json");

module.exports = {
  tags: ["tools"],
  args: ["reply media"],
  cmd: ["todiscord", "discord"],
  help: ["discord"],
  exec: async (m, Darlyn, { prefix, flags, cmd, arg, body, url }) => {
    if (
      m.mtype == "imageMessage" ||
      (m.quoted && m.quoted.mtype == "imageMessage")
    ) {
      const ms = m.quoted ? m.quoted : m;
      let media = await Darlyn.downloadMediaMessage(ms);
      const urll = await UploadBuffer(media);
      axios
        .get(BASE_URL + "/tools/cdn", {
          params: { url: urll, filename: m.pushName },
        })
        .then((ress) => {
          m.reply(`*亗 D I S C O R D*\n
*› Filename :* ${ress.data.data.filename || "-"}
*› Size :* ${ress.data.data.size || "-"}
*› Publicado :* ${ress.data.data.publish || "-"}
*› Url :* ${ress.data.data.url || "-"}\n
*🍟 Powered By Delirius.*`);
        })
        .catch((errr) => {
          m.reply("*🍟 Error al subir el archivo.*");
        });
    } else {
      m.reply(
        "*🍟 Envia o responde a una imagen con el comando :* " + prefix + cmd,
      );
    }
  },
};
