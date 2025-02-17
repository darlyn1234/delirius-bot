const { getDevice } = require("@whiskeysockets/baileys");
const _ = require("lodash");
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
const { BASE_URL } = require("../../utils/config.json");
const { default: axios } = require("axios");

module.exports = {
  cmd: ["menu", "help"],
  help: ["help"],
  exec: async (m, Delirius, { prefix, plugins }) => {
    try {
      const flag = (
        await axios.get(BASE_URL + "/tools/country?text=" + m.sender)
      ).data;
      const img = pickRandom([
        "https://telegra.ph/file/cfc1f24685e16dcfbbaef.jpg",
        "https://telegra.ph/file/50467816ff7f416893adc.jpg",
        "https://telegra.ph/file/b29358969c7d689c6c6ad.jpg",
      ]);
      const before =
        `*Hola, como estas?* @${m.sender.split("@")[0]} 🌵 ( *%pushname* )\n
> › ᴅʙ : ꜱqʟɪᴛᴇ
> › ᴄᴍᴅ ᴛᴏᴛᴀʟꜱ : ${Object.keys(plugins).length}
> › ᴀᴘɪ : https://delirius-apiofc.vercel.app
> › ᴛᴇʟᴇɢʀᴀᴍ ʙᴏᴛ : https://t.me/deliriuussBot
> › ᴘᴀɪꜱ & ᴅᴇᴠɪᴄᴇ : ${flag.result.name} ${flag.result.emoji} (%device)

%readmore\n`.trimStart();
      const header = "   `%category`\n";
      const body = "* *%cmd* %opts%args %flags";
      const footer = "";
      const after = "> Powered by Delirius";
      const help = Object.values(plugins)
        .filter(
          (plugin) =>
            (!plugin.disabled && plugin.help) ||
            plugin.regex ||
            plugin.startsWith,
        )
        .map((x) => ({
          help: Array.isArray(x.tags) ? x.help : [x.help],
          tags: Array.isArray(x.tags) ? x.tags : [x.tags],
          links: x.link !== "undefined" ? x.link : "",
          customPrefix: x.startsWith ? x.startsWith : "",
          opts: x.opts,
          args: x.args,
          flags: x.flags,
        }));
      const links = help
        .filter((x) => x.links !== undefined)
        .map((x) => x.links);
      const category = {};
      for (let plugin of help)
        if (plugin && "tags" in plugin)
          for (let tag of plugin.tags) category[tag] = _.capitalize(tag);
      const _text = [
        before
          .replace(/%device/g, getDevice(m.key.id))
          .replace(/%pushname/g, Delirius.pushname)
          .replace(/%readmore/g, readMore)
          .replace(/%links/g, `-${links.join("\n-")}`),
        ...Object.keys(category).map((tag) => {
          return (
            header.replace(/%category/g, category[tag]) +
            "\n" +
            [
              ...help
                .filter(
                  (a) =>
                    (a.tags && a.tags.includes(tag) && a.help) || a.startsWith,
                )
                .sort((a, b) => a.help[0].localeCompare(b.help[0]))
                .map((menu) =>
                  menu.help
                    .map((help) =>
                      body
                        .replace(
                          /%cmd/g,
                          menu.customPrefix ? menu.customPrefix : prefix + help,
                        )
                        .replace(
                          /%opts/g,
                          menu.opts ? `${menu.opts.join(" | ")}` : "",
                        )
                        .replace(
                          /%args/g,
                          menu.args ? `<${menu.args.join(" ")}>` : "",
                        )
                        .replace(
                          /%flags/g,
                          menu.flags ? `( --${menu.flags.join(" --")} )` : "",
                        )
                        .trim(),
                    )
                    .join("\n"),
                ),
              footer,
            ].join("\n")
          );
        }),
        after,
      ].join("\n");
      /*Delirius.sendMessage(
        m.chat,
        { image: { url: img }, caption: _text, mentions: [m.sender] },
        { quoted: m },
      );*/
      Delirius.sendMessage(
        m.chat,
        {
          video: {
            url: "https://deliriusdocumentation.vercel.app/preview.m4v",
          },
          gifPlayback: true,
          caption: _text,
          mentions: [m.sender]
        },
        { quoted: m },
      );
    } catch (error) {
      console.error(error);
      m.reply(new Error(error).message);
    }
  },
};
