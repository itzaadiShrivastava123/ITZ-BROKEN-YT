const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "boss",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "SHANKAR SUMAN",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/ZOZv3qU.jpeg",
            "https://i.imgur.com/BspSZp1.jpeg",
            "https://i.imgur.com/4XEmnMC.jpeg",
            "https://i.imgur.com/lKiDmdd.jpeg",
            "https://i.imgur.com/FdJbTKS.jpeg",
            "https://i.imgur.com/VHUGlkZ.jpeg"
        ];

        const message = "𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐁𝐨𝐭 𝐢𝐃 🤖\n\n● ────────────────── ●\n\n𝐌𝐘 𝐎𝐰𝐧𝐞𝐑 𝐀𝐚𝐝𝐢 𝐁𝐚𝐁𝐮 .... < 𝐄𝐃𝐈𝐓 > .... 🦋🌿𝐀𝐧𝐤𝐇𝐨 𝐌𝐞 𝐏𝐲𝐚𝐑 𝐃𝐢𝐋 𝐌𝐞 𝐊𝐡𝐮𝐌𝐚𝐫 🌬️🌍 ••𝐊𝐚𝐇𝐢 𝐏𝐲𝐚𝐑 𝐓𝐨 𝐍𝐚𝐇𝐢 𝐇𝐨 𝐆𝐚𝐘𝐚 𝐌𝐞𝐫𝐄 𝐀𝐚𝐝𝐢 𝐁𝐚𝐁𝐮 𝐣𝐢 𝐒𝐞 >³••🕊️🍎\n\n● ────────────────── ●\n\n𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("aadi")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("😘", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}