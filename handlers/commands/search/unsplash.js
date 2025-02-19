const { unsplash } = require("../../../utils/scraper");

module.exports = {
  tags: ["search"],
  args: ["query"],
  cmd: ["unsplash"],
  help: ["unsplash"],
  exec: async (m, Darlyn, { prefix, cmd, args }) => {
    if (args.length < 1) return m.reply(`*🚩 Ejemplo :* ${prefix + cmd} Lisa`);
    unsplash(args.join(" "))
      .then((_res) => {
        Darlyn.sendMessage(
          m.chat,
          {
            image: {
              url: _res.data[Math.floor(Math.random() * _res.data.length)],
            },
          },
          { quoted: m },
        );
      })
      .catch((__error) => {
        m.reply(new Error(__error).message);
      });
  },
};
