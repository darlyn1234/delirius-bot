const { Sticker } = require("../../../utils/sticker");
let { statistics } = require("../../../db");
let packMessage = require("../../../utils/config.json");

module.exports = {
  tags: ["tools"],
  flags: ["style"],
  args: ["emoji"],
  cmd: ["emo", "emoji"],
  help: ["emoji"],
  exec: async (m, client, { flags, args, body, prefix, cmd }) => {
    try {
      let vendor = [
        "apple",
        "google",
        "facebook",
        "twitter",
        "samsung",
        "microsoft",
        "whatsapp",
        "messenger",
        "joypixels",
        "openmoji",
        "emojidex",
        "htc",
        "lg",
        "mozilla",
        "softbank",
        "au_kddi",
      ];
      const emojiRegex = require("emoji-regex")();
      if (args.length === 0)
        return m.reply(
          `*🌾 Ingresa un emoji.*\n*Ejemplo :* ${prefix + cmd} ❄️`,
        );
      if ([...body.matchAll(emojiRegex)].length > 1)
        return m.reply("*Solo se puede convertir 1 emoji.*");
      const res = await Sticker.emoji(args[0], flags[0]);
      if (res == undefined)
        return m.reply(
          `*Emoji/estilo no disponible.*\n\n*Ejemplo de estilo ∙* ${
            prefix + cmd
          } --estilo\n*Lista de estilos ∙*\n\n--${vendor.join("\n--")}`,
        );
      const data = new Sticker(
        res,
        {
          packname: packMessage.stickerMetadata.packauthor,
          author: packMessage.stickerMetadata.packname,
        },
      );
      await client.sendMessage(m.chat, await data.toMessage(), { quoted: m });
      statistics("sticker");
    } catch (error) {
      const res = await Sticker.emojicdn(args[0], flags[0]);
      if (res == undefined)
        return m.reply(
          `*Emoji/estilo no disponible.*\n\n*Ejemplo de estilo ∙* ${
            prefix + cmd
          } --estilo\n*Lista de estilos ∙*\n\n--${vendor.join("\n--")}`,
        );
      const data = new Sticker(
        res,
        {
          packname: packMessage.stickerMetadata.packauthor,
          author: packMessage.stickerMetadata.packname,
        },
      );
      await client.sendMessage(m.chat, await data.toMessage(), { quoted: m });
      statistics("sticker");
    }
  },
};
