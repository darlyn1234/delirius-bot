const { BASE_URL } = require("../../../utils/config.json");
const { Users } = require("../../../db");
const { get } = require("axios");
const { ConvertMiles } = require("../../../utils/index");

module.exports = {
  cmd: ["ava", "avatar", "perfil", "profile"],
  help: ["perfil"],
  tags: ["tools"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    const who = m.quoted
      ? m.quoted.sender
      : m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.sender;
    const rflag = await get(BASE_URL + "/tools/country?text=" + who);
    const userr = await Users.get(who);
    const perfil = await Darlyn.profilePictureUrl(who, "image").catch(
      (_) => "https://telegra.ph/file/288dfd6336e8854cf144b.jpg",
    );
    const blockList =
      typeof (await await Darlyn.fetchBlocklist()) != "undefined"
        ? await await Darlyn.fetchBlocklist()
        : [];
    const blocked = blockList.includes(who) ? true : false;
    const nameee = await Darlyn.getName(who);
    let messageProfile = `	╭  ✦ User Profile ✦  ╮

 *◦ Nombre :* ${nameee || "-"}
 *◦ Numero :* ${rflag.data.result.number || "-"}
 *◦ Pais :* ${rflag.data.result.name} ${rflag.data.result.emoji}
 *◦ Nivel :* ${ConvertMiles(userr.level) || 0}
 *◦ Xp :* ${ConvertMiles(userr.xp) || 0}
 *◦ Balance :* ${ConvertMiles(userr.balance) || 0}

	╭  ✦ User Status ✦  ╮

 *◦ Bloqueado :* ${blocked ? "√" : "×"}
 *◦ Baneado :* ${userr.banned ? "√" : "×"}
 *◦ Warning :* ${userr.warning ? "√" : "×"}\n
> ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ sareth ©`;
    Darlyn.sendMessage(
      m.chat,
      { image: { url: perfil }, caption: messageProfile, mentions: [who] },
      { quoted: m },
    );
  },
};
