# Plugin Manager for Discord Bots.
---
A module that manages plugins that will easily add new features to your Discord Bot.

[Discord](https://discord.gg/cW2ntzQ3fb).
---

## Installation

```shell
npm install plugincord
```

### Launch of the module

```javascript
const PluginManager = require('plugincord');

const manager = new PluginManager(client);

manager.start("./src/plugins"); // Full path of directory that includes plugin files.
```

### Plugin Example

```js
module.exports = {
    name: "example-plugin",
	run(client) {
        const channel = client.channels.cache.get("0000000000000000");
        setInterval(() => {
            channel.send("This message sended via " + this.name + " plugin!");
        }, 60 * 1000)
	},
};
```