const { humanFileSize } = require("../../../utils")
let config = require('../../../utils/config.json')
const os = require('os');
let { info } = require("../../../db");

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
    tags: ['tools'],
    cmd: ['ping', 'stat'],
    help: ['ping'],
    exec: async (m, client, { prefix }) => {
        let { stats } = await info('stats');
        now = new Date()
        let text = `*–  B O T S T A T*\n
* *${humanFileSize(stats.filesize, true) || "0kbps"} media enviada
* *${stats.msgRecv || 0}* mensajes recibidos
* *${stats.msgSent || 0}* mensajes enviados
* *${stats.cmd || 0}* commands hit
* *${stats.autodownload || 0}* autodescargas
* *${stats.sticker || 0}* stickers creados
› Runtime : ${runtime(process.uptime())}

–  S Y S T E M

* *${config.composing ? '[ √ ]' : '[ × ]'}* Autotyping
* *${config.autoRead ? '[ √ ]' : '[ × ]'}* Autoread
* *${config.autoPost ? '[ √ ]' : '[ × ]'}* Autopost
*› Prefix :* (multi) (!./#-)

> Powered By Delirius (神志不清)`;
        client.sendMessage(m.chat, {image: {url: "https://i.postimg.cc/2yF3Q01L/zazaza.jpg"}, caption: text}, {quoted: m});
    }
}