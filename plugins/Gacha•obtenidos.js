/*
《✧》DERECHOS RESERVADOS POR EL AUTOR 《✧》
- DavidChian (@David-Chian)
*/

const _0x3494a5=_0x20af;(function(_0x1a525c,_0x3aab05){const _0x53a73c=_0x20af,_0x113270=_0x1a525c();while(!![]){try{const _0x46915c=-parseInt(_0x53a73c(0x100))/0x1*(parseInt(_0x53a73c(0x12a))/0x2)+-parseInt(_0x53a73c(0x10e))/0x3*(parseInt(_0x53a73c(0x10d))/0x4)+parseInt(_0x53a73c(0xfc))/0x5*(parseInt(_0x53a73c(0x104))/0x6)+-parseInt(_0x53a73c(0xf5))/0x7+-parseInt(_0x53a73c(0x102))/0x8+-parseInt(_0x53a73c(0xf3))/0x9*(parseInt(_0x53a73c(0x107))/0xa)+-parseInt(_0x53a73c(0xf9))/0xb*(-parseInt(_0x53a73c(0x10a))/0xc);if(_0x46915c===_0x3aab05)break;else _0x113270['push'](_0x113270['shift']());}catch(_0x4bbbca){_0x113270['push'](_0x113270['shift']());}}}(_0x3519,0x8eed1));import _0x3805b5 from'fs';function _0x20af(_0x56bf2d,_0x2bc443){const _0x3519f6=_0x3519();return _0x20af=function(_0x20af22,_0x5bea55){_0x20af22=_0x20af22-0xed;let _0x537d37=_0x3519f6[_0x20af22];return _0x537d37;},_0x20af(_0x56bf2d,_0x2bc443);}import{prepareWAMessageMedia,generateWAMessageFromContent,getDevice}from'@whiskeysockets/baileys';const obtenerDatos=()=>{const _0x3fcefd=_0x20af;return _0x3805b5['existsSync'](_0x3fcefd(0x111))?JSON[_0x3fcefd(0x127)](_0x3805b5[_0x3fcefd(0x122)](_0x3fcefd(0x111),_0x3fcefd(0x123))):{'usuarios':{},'personajesReservados':[]};},obtenerPersonajes=()=>{const _0x2a1b7d=_0x20af;return _0x3805b5[_0x2a1b7d(0x11e)](_0x2a1b7d(0x10f))?JSON['parse'](_0x3805b5[_0x2a1b7d(0x122)](_0x2a1b7d(0x10f),_0x2a1b7d(0x123))):[];},contarTotalPersonajes=()=>{const _0x250afb=_0x20af;if(_0x3805b5[_0x250afb(0x11e)]('./src/JSON/characters.json')){const _0x3bd712=_0x3805b5[_0x250afb(0x122)](_0x250afb(0x10f),_0x250afb(0x123))[_0x250afb(0x109)]('\x0a');return _0x3bd712['length']-0x2;}else return 0x0;};let handler=async(_0x4ca3d1,{conn:_0xc077f0,usedPrefix:_0x3f1fd3})=>{const _0x1f3ca9=_0x20af,_0x3749b4=_0x4ca3d1[_0x1f3ca9(0x125)];let _0x5aa719=obtenerDatos(),_0x1e6fea=obtenerPersonajes(),_0xbccced=contarTotalPersonajes();if(!_0x5aa719[_0x1f3ca9(0x124)]||!(_0x3749b4 in _0x5aa719[_0x1f3ca9(0x124)])||_0x5aa719[_0x1f3ca9(0x124)][_0x3749b4][_0x1f3ca9(0xfb)][_0x1f3ca9(0x117)]===0x0){_0xc077f0[_0x1f3ca9(0x115)](_0x4ca3d1[_0x1f3ca9(0x11d)],_0x1f3ca9(0x120),_0x4ca3d1);return;}const _0x8be588=()=>{const _0x3ce9ab=_0x1f3ca9;try{const _0x52f9da=JSON['parse'](_0x3805b5[_0x3ce9ab(0x122)](_0x3ce9ab(0x119),_0x3ce9ab(0x123)));if(_0x52f9da[_0x3ce9ab(0xf8)]!==_0x3ce9ab(0x116))return![];if(_0x52f9da[_0x3ce9ab(0x118)]['url']!==_0x3ce9ab(0xef))return![];return!![];}catch(_0x3f9c95){return console[_0x3ce9ab(0xf6)]('✧\x20Error\x20al\x20leer\x20package.json:',_0x3f9c95),![];}};if(!_0x8be588()){await _0xc077f0[_0x1f3ca9(0x11f)](_0x4ca3d1[_0x1f3ca9(0x11d)],'✧\x20Este\x20comando\x20solo\x20es\x20disponible\x20en\x20JanethBot-MD\x0a◇\x20https://github.com/ianalejandrook14x/JanethBot-MD',_0x4ca3d1,);return;}const {characters:_0x284080,totalRwcoins:_0x599cef}=_0x5aa719['usuarios'][_0x3749b4],_0x34c63a=_0x284080['length'];let _0x58dfd2=new Set();Object[_0x1f3ca9(0x10b)](_0x5aa719[_0x1f3ca9(0x124)])[_0x1f3ca9(0x128)](_0x5a399c=>{const _0x8280e0=_0x1f3ca9;_0x5a399c[_0x8280e0(0xfb)][_0x8280e0(0x128)](_0x40b74f=>_0x58dfd2[_0x8280e0(0x126)](_0x40b74f[_0x8280e0(0xf8)]));});let _0x377b30=_0x1e6fea[_0x1f3ca9(0x101)](_0x12dd52=>!_0x58dfd2[_0x1f3ca9(0xf2)](_0x12dd52[_0x1f3ca9(0xf8)])),_0x24eb88=_0x377b30[_0x1f3ca9(0x117)];const _0xca197e=_0x1f3ca9(0xed)+_0x34c63a+_0x1f3ca9(0x114)+_0x599cef+_0x1f3ca9(0x11a)+(_0x34c63a/_0xbccced*0x64)[_0x1f3ca9(0x105)](0x2)+_0x1f3ca9(0x129)+_0x24eb88+'\x20de\x20'+_0xbccced+_0x1f3ca9(0x108);let _0x36273c=_0x284080[_0x1f3ca9(0x106)]((_0x2d3b04,_0x15972b)=>({'header':_0x2d3b04[_0x1f3ca9(0xf8)],'title':_0x1f3ca9(0xfd)+(_0x15972b+0x1),'description':_0x1f3ca9(0x113)+_0x2d3b04[_0x1f3ca9(0xf8)],'id':_0x3f1fd3+_0x1f3ca9(0x10c)+_0x2d3b04[_0x1f3ca9(0xf8)]}));const _0x337c60=await getDevice(_0x4ca3d1[_0x1f3ca9(0xee)]['id']);if(_0x337c60!==_0x1f3ca9(0xfa)&&_0x337c60!=='web'){const _0x444805={'body':{'text':_0xca197e},'footer':{'text':'Personajes\x20Obtenidos'},'nativeFlowMessage':{'buttons':[{'name':_0x1f3ca9(0xf4),'buttonParamsJson':JSON[_0x1f3ca9(0x103)]({'title':_0x1f3ca9(0xfe),'sections':[{'title':_0x1f3ca9(0x11b),'rows':_0x36273c}]})}],'messageParamsJson':''}};let _0x574d41=generateWAMessageFromContent(_0x4ca3d1[_0x1f3ca9(0x11d)],{'viewOnceMessage':{'message':{'interactiveMessage':_0x444805}}},{'userJid':_0xc077f0[_0x1f3ca9(0x110)][_0x1f3ca9(0x112)],'quoted':_0x4ca3d1});_0xc077f0['relayMessage'](_0x4ca3d1['chat'],_0x574d41[_0x1f3ca9(0xf7)],{'messageId':_0x574d41[_0x1f3ca9(0xee)]['id']});}else _0xc077f0[_0x1f3ca9(0x115)](_0x4ca3d1['chat'],_0xca197e,_0x4ca3d1);};function _0x3519(){const _0x3511c6=['toFixed','map','2454170MBhMsw','\x20en\x20total.','split','1068XqMJdj','values','character\x20','281508KFCeyp','18knWFCC','./src/JSON/characters.json','user','data.json','jid','Selecciona\x20para\x20ver\x20la\x20imagen\x20de\x20','\x20WF\x20♡\x0a✰\x20Total\x20de\x20WFCoins:\x0a>\x20»\x20','reply','JanethBot-MD','length','repository','./package.json','\x0a✰\x20Porcentaje:\x0a>\x20»\x20','Lista\x20de\x20Personajes','obtenidos','chat','existsSync','sendMessage','✧\x20No\x20tienes\x20ningún\x20objeto\x20en\x20tu\x20inventario','obtenido','readFileSync','utf-8','usuarios','sender','add','parse','forEach','%\x0a✰\x20Personajes\x20disponibles:\x0a>\x20»\x20','1299202zySVRu','┏━━━━━━━━━⪩\x0a┃˚₊\x20·\x20͟͟͞͞➳❥\x20𝐈𝐍𝐕𝐄𝐍𝐓𝐀𝐑𝐈𝐎𝐒\x0a┃⏤͟͟͞͞𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐉𝐄\x20𝐎𝐁𝐓𝐔𝐕𝐈𝐃𝐎\x0a┗━━━━━━━━━⪩\x0a\x0a✰\x20Personajes:\x0a>\x20»\x20','key','git+https://github.com/ianalejandrook14x/JanethBot-MD.git','help','tags','has','18qMNYpX','single_select','3601283wMxzxz','error','message','name','345389mpZJsC','desktop','characters','20sKFTTY','Personaje\x20','Tus\x20Personajes','command','1oIcKgR','filter','7993504IpBFiL','stringify','1300902DOkjsM'];_0x3519=function(){return _0x3511c6;};return _0x3519();}handler[_0x3494a5(0xf0)]=[_0x3494a5(0x11c)],handler[_0x3494a5(0xf1)]=['gacha'],handler[_0x3494a5(0xff)]=[_0x3494a5(0x11c),'ginfo',_0x3494a5(0x121),'ob'];export default handler;