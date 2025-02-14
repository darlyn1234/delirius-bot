module.exports = {
  tags: ["groups"],
  cmd: ["link", "enlace"],
  help: ["link"],
  group: true,
  botAdmin: true,
  admin: true,
  exec: async (m, Darlyn) => {
    const url_groupxd = await Darlyn.groupInviteCode(m.chat);
    m.reply("https://chat.whatsapp.com/" + url_groupxd);
  },
};
