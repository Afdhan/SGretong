const { MessageType } = require('@adiwajshing/baileys')
let handler = async function(m, { conn , args, text, isAdmin, isBotAdmin, groupMetadata }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let usname = conn.getName(who)
  let mentionedJid = [m.sender]
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let users = m.sender
  let vir = users.split("@s.whatsapp.net")[0]
  let virtex = conn.copyNForward(m.text)
  if (!groupMetadata) { 
    m.reply('BAPAK LO JAGOAN MANA ANJING !?!?')
    } else {
 // if (text.length > 5000) {
  conn.sendMessage(vir + '@s.whatsapp.net', `${m.text}`, MessageType.text)
      // } 
  	if (isAdmin) return m.reply('*ADMIN KONTOL*')
    await conn.reply(m.chat, `
*[ CHAT ANTI VIRTEX ]*

_Terdeteksi *${usname}* telah mengirim virtex!_

Maaf Kamu akan dikick oleh *SGDC-BOT*
`.trim(), m)
 if (isBotAdmin) {
   conn.groupRemove(m.chat, [users])
     } else { 
     	m.reply('```JADIKAN BOT SEBAGAI ADMIN !!!```')
    }
  }
}
handler.customPrefix = /๒๒๒๒๒๒/i
handler.command = new RegExp

handler.fail = null

module.exports = handler
// by Muhammad Afdhan
// INI WM KU
