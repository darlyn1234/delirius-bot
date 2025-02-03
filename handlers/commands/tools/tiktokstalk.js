const { BASE_URL } = require("../../../utils/config.json");
const { default: axios } = require("axios");
const { ConvertMiles } = require("../../../utils/index");

module.exports = {
  tags: ["tools"],
  args: ["username"],
  cmd: ["tiktokstalk"],
  help: ["tiktokstalk"],
  exec: async (m, Darlyn, { args }) => {
    const text = args.join(" ");
    if (!text) return m.reply("*Ingresa el usario de TikTok.*");
    axios
      .get(BASE_URL + "/tools/tiktokstalk", {
        params: {
          q: text,
        },
      })
      .then(async (res) => {
        const result = res.data;
        let info_stalktiktok = `         \`ゲ◜៹ TikTok Stalk ៹◞ゲ\`\n
*› Nombre :* ${result.result.users.nickname}
*› Usuario :* ${result.result.users.username}
*› Enlace :* ${result.result.stats.url}
*› Verificado :* ${result.result.users.verified ? "Si" : "No"}
*› Region :* ${result.result.users.region}
*› Username Modificado :* ${new Date(result.result.users.usernameModifyTime * 1000).toLocaleDateString()}
*› Nombre modificado :* ${new Date(result.result.users.nicknameModifyTime * 1000).toLocaleDateString()}
*› Seguidores :* ${ConvertMiles(result.result.stats.followerCount)}
*› Siguiendo :* ${ConvertMiles(result.result.stats.followingCount)}
*› Total likes :* ${ConvertMiles(result.result.stats.heartCount)}
*› Videos :* ${ConvertMiles(result.result.stats.videoCount)}
*› Amigos :* ${ConvertMiles(result.result.stats.friendCount)}\n\n> *❄️ Powered By Delirius (神志不清)*`;
        Darlyn.sendMessage(
          m.chat,
          {
            image: {
              url:
                result.result.users.avatarLarger ||
                result.result.users.avatarMedium,
            },
            caption: info_stalktiktok,
          },
          { quoted: m },
        );
      });
  },
};
