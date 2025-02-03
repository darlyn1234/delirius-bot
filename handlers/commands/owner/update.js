const { execSync } = require("child_process");

module.exports = {
  tags: ["owner"],
  help: ["update"],
  cmd: ["update"],
  owner: true,
  exec: async (m, client, { body, msg, args }) => {
    try {
      const output = execSync(`git pull origin master`);
      await m.reply(
        output.toString().replace(/\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/g, ""),
      );
    } catch (error) {
      console.log(new Error(error).message);
      m.reply(new Error(error).message);
    }
  },
};
