const { BASE_URL, BOT_CONFIG } = require("../../../utils/config.json");
const { default: axios } = require("axios");
const { ConvertMiles } = require("../../../utils/index");

module.exports = {
  tags: ["tools"],
  args: ["username"],
  cmd: ["youtubestalk", "ytstalk"],
  help: ["youtubestalk"],
  exec: async (m, Darlyn, { args }) => {
    if (args.length < 1) return m.reply(`*🚩 Ejemplo :* ${prefix + cmd} 😄`);
    axios
      .get(BASE_URL + "/tools/ytstalk", {
        params: {
          channel: args.join(' '),
        },
      })
      .then(async (res) => {
        const result = res.data?.data;
    let youtube_stalkk = `	*╭  ✦ Youtube Stalk ✦  ╮*\n
 *◦ Username :* ${result.username}
 *◦ Suscriptores :* ${result.subscriber_count}
 *◦ Videos :* ${result.video_count}
 *◦ Id :* ${result.external_id}
 *◦ Enlace :* ${result.channel}
 *◦ isFamilySafe :* ${result.isFamilySafe}
 *◦ rssUrl :* ${result.rssUrl}
 *◦ Descripcion :* ${result.description}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${BOT_CONFIG.CREATOR_NAME} ©`;
        Darlyn.sendMessage(
          m.chat,
          {
            image: {
              url:
                result.avatar,
            },
            caption: youtube_stalkk,
          },
          { quoted: m },
        );
      });
  },
};
