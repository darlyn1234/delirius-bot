const { humanFileSize } = require("../../../utils");
const config = require("../../../utils/config.json");
const { info } = require("../../../db");
const { get } = require("axios");

const runtime = (seconds) => {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

module.exports = {
  tags: ["tools"],
  cmd: ["ping", "stat"],
  help: ["ping"],
  exec: async (m, client, { prefix }) => {
    let { stats } = await info("stats");
    let txt = `	╭  ✦ Bot Stats ✦  ╮\n
 *◦ Media enviada :* ${humanFileSize(stats.filesize, true) || "0kbps"}
 *◦ Msg recibidos :* ${stats.msgRecv || 0}
 *◦ Msg enviados :* ${stats.msgSent || 0}
 *◦ Commands hit :* ${stats.cmd || 0}
 *◦ Autodescargas :* ${stats.autodownload || 0}
 *◦ Stickers creados :* ${stats.sticker || 0}
 *◦ Runtime :* ${runtime(process.uptime())}\n
	╭  ✦ System Status ✦  ╮\n
 *◦ Autotyping :* ${config.composing ? "[ √ ]" : "[ × ]"}
 *◦ Autoread :* ${config.autoRead ? "[ √ ]" : "[ × ]"}
 *◦ OnlyOwner :* ${config.onlyowner ? "[ √ ]" : "[ × ]"}
 *◦ Autopost :* ${config.autoPost ? "[ √ ]" : "[ × ]"}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ${config.BOT_CONFIG.CREATOR_NAME} ©`;
    client.sendMessage(
      m.chat,
      {
        text: txt,
        linkPreview: false,
        contextInfo: {
          externalAdReply: {
            title: config.BOT_CONFIG.BOT_NAME,
            body: "Bot Stats",
            thumbnail: (
              await get("https://i.postimg.cc/2yF3Q01L/zazaza.jpg", {
                responseType: "arraybuffer",
              })
            ).data,
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: "https://delirius-apiofc.vercel.app",
            showAdAttribution: true,
          },
        },
      },
      {
        quoted: m,
      },
    );
  },
};
