const axios = require('axios');
const { BASE_URL } = require("../../../utils/config.json");

module.exports = {
  tags: ['search'],
  cmd: ['google', 'googlesearch'],
  args: ['query'],
  help: ['google'],
  exec: async (m, Delirius, { prefix, cmd, args }) => {
    try {
      if (args.length < 1)
        return m.reply(
          `*Ingresa lo que buscas.*\n*Ejemplo :* ${prefix + cmd} Lisa de blackpink`
        );
      const response = await axios.get(BASE_URL + "/search/googlesearch", {
        params: {
          query: args.join(' ')
        }
      });
      const data = response.data;
      if (data.status && data.data.length > 0) {
        let textgoogle = `  *ゲ◜៹ Google Search ៹◞ゲ*\n`;
        let n = 1;
        for (let result of data.data) {
          const title = result.title || '';
          const url = result.url || '';
          const description = result.description || '';
          textgoogle += `\n*_${n}_.*\n*• Titulo:* ${title}\n*• Descripcion:* ${description}\n*• Enlace:* ${url}\n`;
          n++;
        }
        Delirius.sendMessage(
          m.chat,
          {
            video: {
              url: 'https://github.com/darlyn1234/recursos/raw/main/video/sIAjM9x.mp4'
            },
            caption: textgoogle,
            gifPlayback: true
          },
          { quoted: m }
        );
      } else {
        m.reply('> No se encontraron resultados');
      }
    } catch (error) {
      console.error(error);
      m.reply(new Error(error).message);
    }
  }
};
