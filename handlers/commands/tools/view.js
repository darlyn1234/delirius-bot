module.exports = {
  tags: ["tools"],
  cmd: ["view", "viewonce"],
  help: ["view"],
  exec: async (m, Darlyn, { args }) => {
    const content = JSON.stringify(m.message);
    if (
      m.mtype === "extendedTextMessage" &&
      content.includes("viewOnceMessageV2")
    ) {
      m.quoted
        .copyNForward(m.chat, false, { readViewOnce: true, quoted: m })
        .catch((aa) => {
          console.log(aa);
          m.reply("*Error...*")
        });
    } else
      return m.reply(
        "• Etiqueta a un mensaje en ver una vez: *① foto | video*",
      );
  },
};
