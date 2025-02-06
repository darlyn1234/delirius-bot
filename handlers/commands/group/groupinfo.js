const { groupManage } = require("../../../db");
const { BOT_CONFIG } = require("../../../utils/config.json");
const moment = require("moment-timezone");
const { parseMention } = require("../../../utils/index");

module.exports = {
  tags: ["groups"],
  cmd: ["groupinfo", "gpinfo", "grupinfo"],
  help: ["groupinfo"],
  group: true,
  admin: true,
  exec: async (m, Darlyn, { prefix }) => {
    const group_db = await groupManage.get(m.chat);
    if (!group_db)
      return m.reply("*🚩 Este grupo no esta registrado en mi base de datos.*");
    const group_info = await Darlyn.groupMetadata(m.chat).catch((x) => null);
    const perfilx = await Darlyn.profilePictureUrl(m.chat, "image").catch(
      (_) => "https://telegra.ph/file/9b1353deceded7f387713.jpg",
    );
    let ingfogp = `*—  G R O U P - I N F O*\n
  ◦  *Nombre* : ${group_info.subject}
  ◦  *Id* : ${m.chat}
  ◦  *Participantes* : ${participants.length}
  ◦  *Admin* : ${groupAdmins.length}
  ◦  *Creado* : ${moment(group_info.creation * 1000)
    .tz("America/Lima")
    .locale("es")
    .format("ddd D [de] MMMM")} (${moment(group_info.creation * 1000)
    .tz("America/Lima")
    .locale("es")
    .format("h:mm a")})
  ◦  *Creador* : ${group_info.owner ? "@" + group_info.owner.split("@")[0] : m.chat.match("-") ? "@" + m.chat.split("-")[0] : ""}\n
*—  M O D E R A T I O N*\n
  ◦  *${group_db.leveling ? "[ √ ]" : "[ × ]"}* Leveling
  ◦  *${group_db.mute ? "[ √ ]" : "[ × ]"}* BanChat
  ◦  *${group_db.antilink ? "[ √ ]" : "[ × ]"}* Anti Link
  ◦  *${group_db.extranjeros ? "[ √ ]" : "[ × ]"}* Anti Extranjeros
  ◦  *${group_db.pokemon ? "[ √ ]" : "[ × ]"}* Pokemon
  ◦  *${group_db.viewonce ? "[ √ ]" : "[ × ]"}* Antionce
  ◦  *${group_db.antidelete ? "[ √ ]" : "[ × ]"}* Anti Delete
  ◦  *${group_db.games ? "[ √ ]" : "[ × ]"}* Juegos Rpg
  ◦  *${group_db.welcome.status ? "[ √ ]" : "[ × ]"}* Bienvenida
  ◦  *${group_db.leave.status ? "[ √ ]" : "[ × ]"}* Despedida\n
*Powered By ${BOT_CONFIG.BOT_NAME}*`;
    Darlyn.sendMessage(
      m.chat,
      {
        image: { url: perfilx },
        caption: ingfogp,
        mentions: await parseMention(ingfogp),
      },
      { quoted: m },
    );
  },
};
