let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '☆ *¡Este chat no está registrado!*', m, )
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, '✿︎ *Janeth no está baneada en este chat*', m, )
chat.isBanned = false
await conn.reply(m.chat, '✿︎ *Janeth ya fué desbaneada en este chat*', m, )
}
handler.help = ['unbanchat'];
handler.tags = ['grupo'];
handler.command = ['unbanchat','desbanearchat','desbanchat']
handler.admin = true 
handler.botAdmin = true
handler.group = true

export default handler
