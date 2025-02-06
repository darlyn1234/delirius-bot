const fs = require('fs');
const path = require('path');

function getPlugins() {
    const commandsPath = path.join(__dirname, './handlers/commands/');
    let plugins = '';
    if (!fs.existsSync(commandsPath)) return 'Error: El directorio no existe'
    const categories = fs.readdirSync(commandsPath);
    categories.forEach(category => {
        const categoryPath = path.join(commandsPath, category);
        if (fs.statSync(categoryPath).isDirectory()) {
            const files = fs.readdirSync(categoryPath).filter(file => file.endsWith('.js'));
            files.forEach(file => {
                const filePath = path.join(categoryPath, file);
                plugins += fs.readFileSync(filePath, 'utf8') + '\n';
            });
        }
    });
    return plugins.trim() || 'Plugin no encontrado';
}

module.exports = {
    tags: ['owner'],
    args: ['name'],
    help: ['getplugins'],
    cmd: ['getcase', 'getplugins'],
    owner: true,
    exec: async (m, Darlyn, { body, msg, args }) => {
        const plugins = await getPlugins();
        await Darlyn.sendMessage(m.chat, plugins, { quoted: m });
    }
};
