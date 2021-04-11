const fs = require('fs');

module.exports = class PluginManager {
    constructor(client) {
        if (!client) return Throw("[Plugin Manager] You need to send client object to class.")
        this.client = client;
    }

    start(dir) {
        if (!dir) throw new Error("[Plugin Manager] You need to specify plugins directory.");

        try {
            const plugins = fs.readdirSync(`${__dirname}/../../${dir}`).filter(file => file.endsWith('.plugin.js'));
            if (plugins.length === 0) return Throw("[Plugin Manager] There is no plugin files, be sure that plugin names ends with .plugin.js");
            console.log(`[Plugin Manager] Starting ${plugins.length} plugins...`);
            for (const file of plugins) {
                const plugin = require(`${__dirname}/../../${dir}/${file}`);
                plugin.run(this.client);
                delete require.cache[file];
            }
            console.log(`[Plugin Manager] Plugins has been started.`);
        } catch (error) {
            throw new Error("[Plugin Manager] " + error)
        }
    }
}