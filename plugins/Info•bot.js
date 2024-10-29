import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `✿︎ ¡Hola! Soy Janeth, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, , )
}

if (chat.isBaneed) return
if (/^akari|watanabe$/i.test(m.text)) {
conn.reply(m.chat, `> *Hola soy JanethBot-MD y fui creada por*\n> *ianalejandrook14x* \n\n> Escribe *.menu* para ver mis comandos, recuerda no hagas spam a la bot, Disfrute de *JanethBot-MD*\n\nPσɯҽɾҽԃ Bყ Tҽαɱ SHιɳιɳɠ 🌙`, m, , )
}

if (chat.isBaneed) return
if (/^reglas$/i.test(m.text)) {
conn.reply(m.chat, `*Hola si quieres unir a la bot deberas seguir las reglas basicas* 👇\n\n> No hacer spam a la bot\n\n> No llamar a la bot\n\n> El grupo debe de tener un minimo de 25 miembros o no sera otorgado el bot\n\n> No añadir a la bot sin permisos del creador \n\n> Wa.me/5493876639332\n\n> Disfrute de *JanethBot-MD Powered By Janethalejandrook15x*`, m, , )
}
  
if (/^ian$/i.test(m.text)) {
conn.reply(m.chat, `Hola Janeth es mi creador, si deseas unir a la bot puedes contactarte con el aqui te dejo su numero\n\n> wa.me/5493876639332`, m, , )
}
return !0;
};
export default handler;
