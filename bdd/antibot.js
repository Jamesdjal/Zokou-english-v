const a2_0x318ceb=a2_0x129e;(function(_0x5e7797,_0x2d1a84){const _0x4f4912=a2_0x129e,_0x2cefc5=_0x5e7797();while(!![]){try{const _0x290dbc=-parseInt(_0x4f4912(0x19e))/0x1+-parseInt(_0x4f4912(0x1a7))/0x2*(parseInt(_0x4f4912(0x1ad))/0x3)+parseInt(_0x4f4912(0x196))/0x4+parseInt(_0x4f4912(0x18c))/0x5*(parseInt(_0x4f4912(0x1a6))/0x6)+-parseInt(_0x4f4912(0x19a))/0x7+parseInt(_0x4f4912(0x1a4))/0x8+parseInt(_0x4f4912(0x190))/0x9;if(_0x290dbc===_0x2d1a84)break;else _0x2cefc5['push'](_0x2cefc5['shift']());}catch(_0x4d2d9f){_0x2cefc5['push'](_0x2cefc5['shift']());}}}(a2_0x1d6a,0x4778e),require(a2_0x318ceb(0x1aa))[a2_0x318ceb(0x18f)]());const {Pool}=require('pg');let s=require(a2_0x318ceb(0x19d));var dbUrl=s[a2_0x318ceb(0x191)]?s[a2_0x318ceb(0x191)]:a2_0x318ceb(0x194);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createAntibotTable(){const _0x4544f6=a2_0x318ceb,_0x4555ff=(function(){let _0x155420=!![];return function(_0x4838a2,_0x103bb1){const _0x545e5e=_0x155420?function(){if(_0x103bb1){const _0x26d114=_0x103bb1['apply'](_0x4838a2,arguments);return _0x103bb1=null,_0x26d114;}}:function(){};return _0x155420=![],_0x545e5e;};}()),_0x21af00=_0x4555ff(this,function(){const _0x3d44f4=a2_0x129e;return _0x21af00[_0x3d44f4(0x1b2)]()[_0x3d44f4(0x19f)]('(((.+)+)+)+$')[_0x3d44f4(0x1b2)]()[_0x3d44f4(0x193)](_0x21af00)['search'](_0x3d44f4(0x188));});_0x21af00();const _0x34997a=await pool[_0x4544f6(0x1a1)]();try{await _0x34997a[_0x4544f6(0x195)](_0x4544f6(0x1b3)),console['log'](_0x4544f6(0x197));}catch(_0x4cdac2){console['error']('Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27antibot\x27:',_0x4cdac2);}finally{_0x34997a[_0x4544f6(0x18a)]();}}createAntibotTable();async function atbajouterOuMettreAJourJid(_0x13cf07,_0xd9b19e){const _0x48d307=a2_0x318ceb,_0x187d16=await pool[_0x48d307(0x1a1)]();try{const _0x4eb98b=await _0x187d16[_0x48d307(0x195)](_0x48d307(0x18b),[_0x13cf07]),_0x58f3f1=_0x4eb98b[_0x48d307(0x1ab)][_0x48d307(0x1a5)]>0x0;_0x58f3f1?await _0x187d16[_0x48d307(0x195)](_0x48d307(0x1b1),[_0xd9b19e,_0x13cf07]):await _0x187d16[_0x48d307(0x195)](_0x48d307(0x18d),[_0x13cf07,_0xd9b19e,'supp']),console[_0x48d307(0x1a8)](_0x48d307(0x187)+_0x13cf07+'\x20ajouté\x20ou\x20mis\x20à\x20jour\x20avec\x20succès\x20dans\x20la\x20table\x20\x27antibot\x27.');}catch(_0x18a2ba){console[_0x48d307(0x18e)](_0x48d307(0x1b0),_0x18a2ba);}finally{_0x187d16[_0x48d307(0x18a)]();}}function a2_0x129e(_0x449fd6,_0x2669e6){const _0x433f02=a2_0x1d6a();return a2_0x129e=function(_0x1cba7e,_0x4e0379){_0x1cba7e=_0x1cba7e-0x186;let _0x1d6a04=_0x433f02[_0x1cba7e];return _0x1d6a04;},a2_0x129e(_0x449fd6,_0x2669e6);};async function atbmettreAJourAction(_0x24fff0,_0x3b9e54){const _0x1333f0=a2_0x318ceb,_0x1db29f=await pool[_0x1333f0(0x1a1)]();try{const _0x405d28=await _0x1db29f[_0x1333f0(0x195)](_0x1333f0(0x18b),[_0x24fff0]),_0x448ebd=_0x405d28['rows'][_0x1333f0(0x1a5)]>0x0;_0x448ebd?await _0x1db29f['query'](_0x1333f0(0x192),[_0x3b9e54,_0x24fff0]):await _0x1db29f[_0x1333f0(0x195)](_0x1333f0(0x18d),[_0x24fff0,_0x1333f0(0x1a2),_0x3b9e54]),console[_0x1333f0(0x1a8)](_0x1333f0(0x1a3)+_0x24fff0+_0x1333f0(0x19b));}catch(_0x513680){console[_0x1333f0(0x18e)](_0x1333f0(0x1ae),_0x513680);}finally{_0x1db29f['release']();}};async function atbverifierEtatJid(_0x14a2dc){const _0x1e2d29=a2_0x318ceb,_0x21b06b=await pool[_0x1e2d29(0x1a1)]();try{const _0x4bcdf9=await _0x21b06b[_0x1e2d29(0x195)](_0x1e2d29(0x1ac),[_0x14a2dc]);if(_0x4bcdf9[_0x1e2d29(0x1ab)][_0x1e2d29(0x1a5)]>0x0){const _0x2a1d9c=_0x4bcdf9['rows'][0x0][_0x1e2d29(0x19c)];return _0x2a1d9c===_0x1e2d29(0x1a9);}else return![];}catch(_0x2f0268){return console[_0x1e2d29(0x18e)](_0x1e2d29(0x1af),_0x2f0268),![];}finally{_0x21b06b[_0x1e2d29(0x18a)]();}};function a2_0x1d6a(){const _0xefde3a=['Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20du\x20JID\x20dans\x20la\x20table\x20,','UPDATE\x20antibot\x20SET\x20etat\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','toString','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20antibot\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20etat\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20action\x20text\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','exports','JID\x20','(((.+)+)+)+$','action','release','SELECT\x20*\x20FROM\x20antibot\x20WHERE\x20jid\x20=\x20$1','6285ZVhOTm','INSERT\x20INTO\x20antibot\x20(jid,\x20etat,\x20action)\x20VALUES\x20($1,\x20$2,\x20$3)','error','config','7982739xhLHOF','DATABASE_URL','UPDATE\x20antibot\x20SET\x20action\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','constructor','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','query','1064476ifanHc','La\x20table\x20\x27antibot\x27\x20a\x20été\x20créée\x20avec\x20succès.','SELECT\x20action\x20FROM\x20antibot\x20WHERE\x20jid\x20=\x20$1','supp','2970730gDKrXJ','\x20dans\x20la\x20table\x20\x27antibot\x27.','etat','../set','442154BjHJip','search','Erreur\x20lors\x20de\x20la\x20récupération\x20de\x20l\x27action\x20du\x20JID\x20dans\x20la\x20table\x20:','connect','non','Action\x20mise\x20à\x20jour\x20avec\x20succès\x20pour\x20le\x20JID\x20','3756568RuDcNz','length','228UtfjgB','2pTiqTi','log','oui','dotenv','rows','SELECT\x20etat\x20FROM\x20antibot\x20WHERE\x20jid\x20=\x20$1','1533399FeWsiE','Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20de\x20l\x27action\x20pour\x20le\x20JID\x20dans\x20la\x20table\x20\x20:','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20l\x27état\x20du\x20JID\x20dans\x20la\x20table\x20'];a2_0x1d6a=function(){return _0xefde3a;};return a2_0x1d6a();}async function atbrecupererActionJid(_0x39f4e2){const _0x392eac=a2_0x318ceb,_0x361d68=await pool[_0x392eac(0x1a1)]();try{const _0x402bb1=await _0x361d68[_0x392eac(0x195)](_0x392eac(0x198),[_0x39f4e2]);if(_0x402bb1['rows'][_0x392eac(0x1a5)]>0x0){const _0x665355=_0x402bb1['rows'][0x0][_0x392eac(0x189)];return _0x665355;}else return _0x392eac(0x199);}catch(_0x27063d){return console[_0x392eac(0x18e)](_0x392eac(0x1a0),_0x27063d),_0x392eac(0x199);}finally{_0x361d68[_0x392eac(0x18a)]();}};module[a2_0x318ceb(0x186)]={'atbmettreAJourAction':atbmettreAJourAction,'atbajouterOuMettreAJourJid':atbajouterOuMettreAJourJid,'atbverifierEtatJid':atbverifierEtatJid,'atbrecupererActionJid':atbrecupererActionJid};