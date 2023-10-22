const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')
cmd({
    pattern: "alive",
    react: "🏆",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const data = await db_pool.get('ALIVE_MESSAGE')
		let logoimage = await db_pool.get('ALIVE_IMAGE')
await conn.sendMessage(from, { image: { url: logoimage }, caption: data }, { quoted: mek })
} catch (e) {
await conn.sendMessage(from, { image: { url: config.LOGO }, caption: config.ALIVE }, { quoted: mek })
}

})

cmd({
    pattern: "ping",
    react: "📟",
    alias: ["speed","cyber_ping"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*Pinging to PingModule...* ❗'  }, { quoted: mek } )
var final = new Date().getTime();
//await conn.sendMessage(from, { delete: ping.key })
return await conn.sendMessage(from , { text: '🎛️ *Pong ' + (final - inital) + ' Ms* '  }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "menu",
    react: "📑",
    alias: ["panel","list","commands","cyber_menu"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    let menuc1 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'admin'){
if(!commands[i].dontAddCommandList){
menuc1 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc2 = ``
for (let i=0;i<commands.length;i++) { 
  if(commands[i].category === 'main'){
  if(!commands[i].dontAddCommandList){
  menuc2 += `📁 *${commands[i].pattern}*\n`
  }}};

let menuc3 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'extra'){
  if(!commands[i].dontAddCommandList){
    menuc3 += `📊 *${commands[i].pattern}*\n`
}}};

let menuc4 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc4 += `🔎 *${commands[i].pattern}*\n`
}}};

let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc += `📥 *${commands[i].pattern}*\n`
}}};

let menuc6 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
if(!commands[i].dontAddCommandList){
  menuc6 += `🥏 *${commands[i].pattern}*\n`
}}};

let menuc5 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'profile'){
if(!commands[i].dontAddCommandList){
  menuc5 += `👤 *${commands[i].pattern}*\n`
}}};

let menumg = `
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈
┆ *HELLO ${pushname}*
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┆ *CYBER-X 2.0 SYSTEM INFORMATION*
┆    *© ʙᴇᴛᴀ ᴛᴇꜱᴛɪɴɢ ʙᴏᴛ ®* - 2.0ᴠ
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆
┆ 🗄 *Ram Usage* -  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
┆ 🧭 *Runtime* - _${runtime(process.uptime())}_  
┆
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄


╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈┈
┆✔️ *MAIN COMMANDS*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈┈

${menuc2}

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈
┆📥 *DOWNLOAD COMMANDS*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈

${menuc}

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈
┆🔍 *SEARCH COMMANDS*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈

${menuc4}

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈
┆🥏 *GROUP COMMANDS*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈

${menuc6}

╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈
┆👤 *PROFILE COMMANDS*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈

${menuc5}


╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈
┆🧮 *EXTRA COMMANDS*
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┈┈┈┈┈┈┈

${menuc3}


*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ꜱᴛᴀʙʟᴇ ᴏꜰꜰɪᴄɪᴀʟ ᴠᴇʀꜱɪᴏɴ - ɪɪ*`
await conn.sendMessage(from, { image: { url: "https://i.ibb.co/2jfypCx/Banner-Maker-27062023-101950.jpg" }, caption: menumg }, { quoted: mek })
} catch (e) {
reply('*Error !!*')
}
})

cmd({
    pattern: "dmenu",
    react: "📥",
    alias: ["downloadmenu","downmenu"],
    desc: "Get bot\'s dl command list.",
    category: "main",
    use: '.dmenu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc += `📥 *Cmd - ${commands[i].pattern}*
📁 Desc - ${commands[i].desc}
🖊️ Usage - ${commands[i].use}

`
}}};

let menumg = `*DOWNLOAD COMMAND LIST OF CYBER-X 2.0*

${menuc}

*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ꜱᴛᴀʙʟᴇ ᴏꜰꜰɪᴄɪᴀʟ ᴠᴇʀꜱɪᴏɴ - ɪɪ*`
await conn.sendMessage(from, { image: { url: "https://i.ibb.co/thT65qN/Banner-Maker-27062023-104127.jpg" }, caption: menumg }, { quoted: mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "mmenu",
    react: "📁",
    alias: ["mainmenu"],
    desc: "Get bot\'s main command list.",
    category: "main",
    use: '.mmenu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
  if(!commands[i].dontAddCommandList){
menuc += `🥎 *Cmd - ${commands[i].pattern}*
📁 Desc - ${commands[i].desc}
🖊️ Usage - ${commands[i].use}

`
}}};

let menumg = `*MAIN COMMAND LIST OF CYBER-X 2.0*

${menuc}

*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ꜱᴛᴀʙʟᴇ ᴏꜰꜰɪᴄɪᴀʟ ᴠᴇʀꜱɪᴏɴ - ɪɪ*`
await conn.sendMessage(from, { image: { url: config.LOGO }, caption: menumg }, { quoted: mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "gmenu",
    react: "📁",
    alias: ["groupmenu"],
    desc: "Get bot\'s group command list.",
    category: "main",
    use: '.gmenu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
  if(!commands[i].dontAddCommandList){
menuc += `🥏 *Cmd - ${commands[i].pattern}*
📁 Desc - ${commands[i].desc}
🖊️ Usage - ${commands[i].use}

`
}}};

let menumg = `*GROUP COMMAND LIST OF CYBER-X 2.0*

${menuc}

*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ꜱᴛᴀʙʟᴇ ᴏꜰꜰɪᴄɪᴀʟ ᴠᴇʀꜱɪᴏɴ - ɪɪ*`
await conn.sendMessage(from, { image: { url: "https://i.ibb.co/25z3pkB/Banner-Maker-27062023-104458.jpg" }, caption: menumg }, { quoted: mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "emenu",
    react: "🖊️",
    alias: ["extramenu"],
    desc: "Get bot\'s extra command list.",
    category: "main",
    use: '.emenu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'extra'){
  if(!commands[i].dontAddCommandList){
menuc += `📊 *Cmd - ${commands[i].pattern}*
📁 Desc - ${commands[i].desc}
🖊️ Usage - ${commands[i].use}

`
}}};

let menumg = `*EXTRA COMMAND LIST OF CYBER-X 2.0*

${menuc}

*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ꜱᴛᴀʙʟᴇ ᴏꜰꜰɪᴄɪᴀʟ ᴠᴇʀꜱɪᴏɴ - ɪɪ*`
await conn.sendMessage(from, { image: { url: config.LOGO }, caption: menumg }, { quoted: mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "pmenu",
    react: "🖊️",
    alias: ["profilemenu"],
    desc: "Get bot\'s profile command list.",
    category: "main",
    use: '.pmenu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'profile'){
  if(!commands[i].dontAddCommandList){
menuc += `🥏 *Cmd - ${commands[i].pattern}*
📁 Desc - ${commands[i].desc}
📬 Usage - ${commands[i].use}

`
}}};

let menumg = `*PROFILE COMMAND LIST OF CYBER-X 2.0*

${menuc}

*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ꜱᴛᴀʙʟᴇ ᴏꜰꜰɪᴄɪᴀʟ ᴠᴇʀꜱɪᴏɴ - ɪɪ*`
await conn.sendMessage(from, { image: { url: config.LOGO }, caption: menumg }, { quoted: mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "smenu",
    react: "🖊️",
    alias: ["searchmenu"],
    desc: "Get bot\'s search command list.",
    category: "main",
    use: '.smenu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += `🔎 *Cmd - ${commands[i].pattern}*
📁 Desc - ${commands[i].desc}
📬 Usage - ${commands[i].use}

`
}}};

let menumg = `*SEARCH COMMAND LIST OF CYBER-X 2.0*

${menuc}

*ᴄʏʙᴇʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*
*ꜱᴛᴀʙʟᴇ ᴏꜰꜰɪᴄɪᴀʟ ᴠᴇʀꜱɪᴏɴ - ɪɪ*`
await conn.sendMessage(from, { image: { url: "https://i.ibb.co/R2QwCcM/Banner-Maker-27062023-104611.jpg" }, caption: menumg }, { quoted: mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})