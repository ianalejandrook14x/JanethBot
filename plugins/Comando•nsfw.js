import axios from 'axios';
const handler = async (m, {command, conn, usedPrefix}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) return conn.reply(m.chat, '✿︎ * # Los comandos ingresados se encuentran desactivados*', m, );
conn.reply(m.chat, `✿︎ *Enviando ${command}...*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
const res = (await axios.get(`https://raw.githubusercontent.com/ianalejandrook14xxyz/JanethBot-MD/master/src/JSON/${command}.json`)).data;
const haha = await res[Math.floor(res.length * Math.random())];
conn.sendFile(m.chat, haha, 'error.jpg', `🔥 *${command}*`, m, null, );
};
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.tags = ['nsfw'];
export default handler;