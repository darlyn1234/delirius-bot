const {default: axios } = require('axios');

module.exports = {
  tags: ['tools'],
  args: ['Url'],
  cmd: ['fetch', 'get'],
  help: ['fetch'],
  exec: async (m, Delirius, { prefix, cmd, args }) => {
    try {
      const text = args.join(' ');
      if (!/^https?:\/\//.test(text))
        return m.reply('*🚩 Ingresa un enlace válido con http:// o https://*');

      const res = await axios.get(text, { responseType: 'text' });

      if (res.headers['content-length'] > 100 * 1024 * 1024) {
        throw `Content-Length: ${res.headers['content-length']}`;
      }

      if (!/text|json/.test(res.headers['content-type'])) {
        return Delirius.sendFileFromUrl(m.chat, text, text, m);
      }

      let txt = res.data;
      try {
        txt = JSON.stringify(JSON.parse(txt), null, 2);
      } catch (e) {
        txt = txt + '';
      } finally {
        m.reply(txt.slice(0, 65536) + '');
      }
    } catch (error) {
      m.reply('*🚩 :* ' + error.message);
      console.log(error.message);
    }
  }
};
