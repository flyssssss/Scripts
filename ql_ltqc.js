//const $ = new Env('快看点')
//cron: 6 15 * * *
var CryptoJS = require('crypto-js')
/*
岚图汽车签到
重写：https://clientapi.dsmp.voyah.com.cn/

变量：ltCookie 
变量：ltdevicesn 

*/

const jsname = '岚图汽车'
const _0x2c8bff=_0x1ce7,_0x32f6ff=_0x487f;(function(_0xe98503,_0x4d308e){const _0x3e23b2=_0x1ce7,_0x5b40f7=_0x487f,_0x45c329=_0xe98503();while(!![]){try{const _0x1df16f=-parseInt(_0x5b40f7(0x18b,'S%9c'))/0x1*(parseInt(_0x5b40f7(0x187,'S%9c'))/0x2)+-parseInt(_0x5b40f7(0x15d,'8ziW'))/0x3*(-parseInt(_0x3e23b2(0x181))/0x4)+-parseInt(_0x5b40f7(0x183,'JZS^'))/0x5*(parseInt(_0x5b40f7(0x146,'*qu3'))/0x6)+-parseInt(_0x5b40f7(0x168,'rK]D'))/0x7+-parseInt(_0x5b40f7(0x14d,'yF2o'))/0x8+parseInt(_0x3e23b2(0x155))/0x9+parseInt(_0x5b40f7(0x153,'0O6v'))/0xa;if(_0x1df16f===_0x4d308e)break;else _0x45c329['push'](_0x45c329['shift']());}catch(_0x1ce97c){_0x45c329['push'](_0x45c329['shift']());}}}(_0x63ed,0xd499e));function _0x1ce7(_0x40cd8e,_0x25a2d8){const _0x63ed8e=_0x63ed();return _0x1ce7=function(_0x1ce7f3,_0x2a2d2b){_0x1ce7f3=_0x1ce7f3-0x101;let _0x3ce28c=_0x63ed8e[_0x1ce7f3];if(_0x1ce7['LDsOQH']===undefined){var _0x31fbb0=function(_0x487fda){const _0x4bb03f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3d8068='',_0x3c38cd='';for(let _0x4d79b0=0x0,_0x4791f3,_0x2e2979,_0x2de26f=0x0;_0x2e2979=_0x487fda['charAt'](_0x2de26f++);~_0x2e2979&&(_0x4791f3=_0x4d79b0%0x4?_0x4791f3*0x40+_0x2e2979:_0x2e2979,_0x4d79b0++%0x4)?_0x3d8068+=String['fromCharCode'](0xff&_0x4791f3>>(-0x2*_0x4d79b0&0x6)):0x0){_0x2e2979=_0x4bb03f['indexOf'](_0x2e2979);}for(let _0x41a581=0x0,_0x57925a=_0x3d8068['length'];_0x41a581<_0x57925a;_0x41a581++){_0x3c38cd+='%'+('00'+_0x3d8068['charCodeAt'](_0x41a581)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3c38cd);};_0x1ce7['VjNNuI']=_0x31fbb0,_0x40cd8e=arguments,_0x1ce7['LDsOQH']=!![];}const _0x3c19d7=_0x63ed8e[0x0],_0x48062a=_0x1ce7f3+_0x3c19d7,_0xf509ec=_0x40cd8e[_0x48062a];return!_0xf509ec?(_0x3ce28c=_0x1ce7['VjNNuI'](_0x3ce28c),_0x40cd8e[_0x48062a]=_0x3ce28c):_0x3ce28c=_0xf509ec,_0x3ce28c;},_0x1ce7(_0x40cd8e,_0x25a2d8);}const $=new Env(jsname);let logDebug=0x0;LBJSNAMED=$['isNode']()?require('path')['basename'](__filename):_0x32f6ff(0x13e,'@X@6'),NAME=LBJSNAMED['split']('.')[0x0];let status;status=(status=$['getval'](NAME+_0x32f6ff(0x12a,'GJN3'))||'1')>0x1?''+status:'';let userCookie=[],userList=[],userIdx=0x0,parallel=0x1,cxdata={'headers':['Cookie','devicesn']},cxurl=_0x2c8bff(0x15f),host=_0x32f6ff(0x103,'1D!e');class USER_LB{constructor(){const _0x4490fa=_0x32f6ff;this[_0x4490fa(0x101,'Qm&i')]=++userIdx;}async[_0x2c8bff(0x1b3)](_0x2de26f,_0x41a581){this[_0x2de26f]=_0x41a581;}async[_0x32f6ff(0x160,'aCbl')](_0x57925a){const _0x46ee74=_0x2c8bff;this[_0x46ee74(0x164)](_0x57925a,''),await httpRequest(_0x46ee74(0x190),this[_0x46ee74(0x186)]);let _0x594826=httpResult;return _0x594826;}async[_0x32f6ff(0x125,'lA[Q')](_0x347e12,_0x519610=''){const _0x463e5c=_0x2c8bff,_0x4dffce=_0x32f6ff;this[_0x4dffce(0x176,'1D!e')](_0x347e12,_0x519610),await httpRequest('post',this[_0x463e5c(0x186)]);let _0x18d31c=httpResult;return _0x18d31c;}async[_0x2c8bff(0x164)](_0x3a68fa,_0x2046b9=''){const _0xcd2c97=_0x2c8bff,_0xc6cf14=_0x32f6ff;let _0x4677d1=host[_0xc6cf14(0x193,'cGjE')]('//','/')[_0xc6cf14(0x1a9,'ub8u')]('/')[0x1],_0x480a09={'url':host+_0x3a68fa,'headers':{'Host':_0x4677d1,'Connection':_0xcd2c97(0x185),'User-Agent':_0xc6cf14(0x14f,'S%9c'),'Content-Type':'application/json','osversion':_0xc6cf14(0x104,'1ydb'),'platform':_0xcd2c97(0x15a),'sign_encrypt':_0xcd2c97(0x165)}};if(cxdata[_0xc6cf14(0x1b6,'!z#y')])for(let _0x3c3379 of cxdata[_0xcd2c97(0x123)]){_0x480a09[_0xcd2c97(0x123)][_0xc6cf14(0x112,'^Itv')]('?')==-0x1?_0x480a09['url']=_0x480a09[_0xc6cf14(0x12d,'e1x%')]+('?'+_0x3c3379+'='+this[_0x3c3379]):_0x480a09['url']=_0x480a09[_0xcd2c97(0x123)]+('&'+_0x3c3379+'='+this[_0x3c3379]);}if(cxdata[_0xcd2c97(0x180)])for(let _0x5a7176 of cxdata[_0xc6cf14(0x102,'84zR')]){_0x480a09['headers'][_0x5a7176]=this[_0x5a7176];}if(cxdata[_0xcd2c97(0x19d)])for(let _0x1a96e2 of cxdata['body']){_0x2046b9[_0xcd2c97(0x15c)]('{')>-0x1?(_0x2046b9=JSON['parse'](_0x2046b9),_0x2046b9[_0x1a96e2]=this[_0x1a96e2],_0x2046b9=JSON['stringify'](_0x2046b9),_0x480a09[_0xc6cf14(0x198,'RWjP')][_0xc6cf14(0x10e,'gmba')]='application/json'):(_0x2046b9==''?_0x2046b9=_0x2046b9+(_0x1a96e2+'='+this[_0x1a96e2]):_0x2046b9=_0x2046b9+('&'+_0x1a96e2+'='+this[_0x1a96e2]),_0x480a09['headers'][_0xcd2c97(0x1a7)]=_0xcd2c97(0x18f));}_0x2046b9&&(_0x480a09[_0xcd2c97(0x19d)]=_0x2046b9,_0x480a09['headers']['Content-Length']=_0x3a68fa[_0xcd2c97(0x19d)]?_0x3a68fa[_0xcd2c97(0x19d)]['length']:0x0),this['urlObject']=_0x480a09;}}!(async()=>{const _0x4dce81=_0x32f6ff,_0x244fbd=_0x2c8bff;if(typeof $request!==_0x244fbd(0x142))await get_data();else{if(!await handleCK())return;console[_0x4dce81(0x10c,'aUoM')](_0x4dce81(0x154,'(pw6')+userList[_0x244fbd(0x192)]+'个账号-------------\x0a');if(parallel)for(let _0x436d05=0x0;_0x436d05<userList[_0x244fbd(0x192)];_0x436d05++){let _0x49dde8,_0x3eaa29=_0x436d05+0x1;_0x49dde8=await userList[_0x436d05][_0x244fbd(0x1ab)](_0x4dce81(0x11b,'&&Ww'));let _0xc546b8=JSON[_0x4dce81(0x175,'!z#y')](aesDecrypt(_0x49dde8[_0x4dce81(0x17f,'gmba')]));console[_0x244fbd(0x1af)](_0x4dce81(0x194,'0O6v')+_0x3eaa29+_0x4dce81(0x196,'JZS^')+_0xc546b8[_0x4dce81(0x11d,'*9%&')]);let _0x38cac5=new Date()[_0x4dce81(0x131,'aCbl')](),_0x58a84b=userList[_0x436d05][_0x4dce81(0x18c,'lA[Q')][_0x244fbd(0x182)](/userid=(.+?);/)[0x1],_0x29c990=aesEncrypt('{\x22phoneNumber\x22:\x2218888888888\x22,\x22userId\x22:\x22'+_0x58a84b+_0x244fbd(0x12b)+_0x38cac5+_0x244fbd(0x113)+_0x38cac5);_0x49dde8=await userList[_0x436d05][_0x4dce81(0x152,'$dyD')]('v1/rewardService/drawingCard',_0x4dce81(0x135,'qTFB')+_0x29c990+'\x22}'),_0xc546b8=JSON['parse'](aesDecrypt(_0x49dde8[_0x4dce81(0x162,'aKKa')])),_0xc546b8[_0x244fbd(0x16c)]==0x0?console['log'](_0x244fbd(0x1ae)+_0x3eaa29+_0x244fbd(0x10a)+_0xc546b8['msg']+_0x244fbd(0x14c)+_0xc546b8[_0x4dce81(0x1a3,'1ydb')][_0x244fbd(0x158)]+'】'):console[_0x4dce81(0x18d,'JZS^')]('账号【'+_0x3eaa29+_0x244fbd(0x17a)+_0xc546b8[_0x244fbd(0x15e)]);}else{let _0x5add55=[];for(let _0x526c8f of userList){let _0x1992c8=async function(){const _0x12c694=_0x4dce81,_0x35b9fe=_0x244fbd;let _0xe81313,_0x1bca8a=_0x526c8f[_0x35b9fe(0x189)];_0xe81313=await _0x526c8f[_0x12c694(0x191,'rK]D')](_0x12c694(0x12c,'GJN3'));let _0x42b5d6=JSON[_0x12c694(0x147,'0O6v')](aesDecrypt(_0xe81313[_0x12c694(0x1a8,'k&5m')]));console[_0x12c694(0x11c,'^Itv')]('账号【'+_0x1bca8a+'】签到：'+_0x42b5d6[_0x35b9fe(0x15e)]);};_0x5add55[_0x4dce81(0x138,'qTFB')](_0x1992c8());}await Promise['all'](_0x5add55);for(let _0x3a23df of userList){let _0x27922f=async function(){const _0xa4b602=_0x4dce81,_0x29d904=_0x244fbd;let _0x147764,_0x2ef12f=_0x3a23df['index'],_0x498e6f=new Date()[_0x29d904(0x12e)](),_0x1125a5=_0x3a23df['Cookie'][_0xa4b602(0x13a,'FBqX')](/userid=(.+?);/)[0x1],_0x215b58=aesEncrypt(_0xa4b602(0x16f,'yF2o')+_0x1125a5+_0x29d904(0x12b)+_0x498e6f+_0x29d904(0x113)+_0x498e6f);_0x147764=await _0x3a23df[_0x29d904(0x1ab)](_0xa4b602(0x167,'8ziW'),_0x29d904(0x149)+_0x215b58+'\x22}'),aes[_0x29d904(0x16c)]==0x0?console[_0x29d904(0x1af)]('账号【'+_0x2ef12f+_0x29d904(0x10a)+aes[_0xa4b602(0x109,'VcS$')]+_0x29d904(0x14c)+aes[_0x29d904(0x173)]['cardName']+'】'):console[_0x29d904(0x1af)]('账号【'+_0x2ef12f+'】抽卡:\x20'+aes[_0x29d904(0x15e)]);};_0x5add55[_0x244fbd(0x136)](_0x27922f());}await Promise[_0x4dce81(0x159,'q1Dt')](_0x5add55);}}})()[_0x2c8bff(0x13b)](_0x14f130=>$[_0x2c8bff(0x195)](_0x14f130))[_0x32f6ff(0x126,'pvaL')](()=>$[_0x2c8bff(0x1a6)]());function get_data(){const _0x14ac7c=_0x2c8bff,_0x18ad5f=_0x32f6ff;if($request[_0x18ad5f(0x19a,'0O6v')][_0x14ac7c(0x15c)](cxurl)>-0x1){if(cxdata[_0x14ac7c(0x180)])for(let _0x117f94 of cxdata[_0x18ad5f(0x157,'lA[Q')]){let _0x12cac0=$request['headers'][_0x117f94],_0x546bae=($[_0x14ac7c(0x197)]()?process[_0x14ac7c(0x151)][NAME+_0x117f94]:$[_0x14ac7c(0x1b4)](NAME+_0x117f94))||'';_0x546bae[_0x18ad5f(0x1b2,'ub8u')](_0x12cac0)==-0x1?(_0x546bae?_0x546bae=_0x546bae+'@'+_0x12cac0:_0x546bae=_0x12cac0,$[_0x14ac7c(0x163)](_0x546bae,NAME+_0x117f94),ckList=_0x546bae[_0x18ad5f(0x1aa,'RWjP')]('@'),$['msg'](jsname+_0x18ad5f(0x143,'gmba')+ckList[_0x18ad5f(0x127,'qFYB')]+'个'+_0x117f94+'成功:\x20'+_0x12cac0)):$[_0x18ad5f(0x150,'84zR')](jsname+':'+(NAME+_0x117f94)+_0x18ad5f(0x16b,'qTFB')+_0x12cac0);}if(cxdata[_0x18ad5f(0x19f,'cGjE')])for(let _0x2a2b8a of cxdata[_0x14ac7c(0x19d)]){let _0x271a4d=$request[_0x14ac7c(0x19d)];if(_0x271a4d[_0x18ad5f(0x1a5,'e1x%')]('{')==-0x1){if(_0x271a4d['indexOf']('&')==-0x1){var _0x568ad2=_0x2a2b8a+_0x18ad5f(0x134,'8ziW'),_0x209402=new RegExp(_0x568ad2);_0x271a4d=_0x271a4d[_0x18ad5f(0x128,'gmba')](_0x209402)[0x1];}else{let _0x547935=_0x271a4d[_0x18ad5f(0x172,'FBqX')](_0x2a2b8a);if(_0x547935['indexOf']('&')==-0x1){var _0x568ad2=_0x2a2b8a+'=(.*)',_0x209402=new RegExp(_0x568ad2);_0x271a4d=_0x271a4d[_0x18ad5f(0x114,'q1Dt')](_0x209402)[0x1];}else{var _0x568ad2=_0x2a2b8a+'=(.*)&',_0x209402=new RegExp(_0x568ad2);_0x271a4d=_0x271a4d['match'](_0x209402)[0x1];}}}else _0x271a4d=JSON[_0x14ac7c(0x1a1)](_0x271a4d),_0x271a4d=_0x271a4d[_0x2a2b8a];let _0x1c47fa=($[_0x14ac7c(0x197)]()?process[_0x14ac7c(0x151)][NAME+_0x2a2b8a]:$[_0x14ac7c(0x1b4)](NAME+_0x2a2b8a))||'';_0x1c47fa[_0x18ad5f(0x18a,'Kkd$')](_0x271a4d)==-0x1?(_0x1c47fa?_0x1c47fa=_0x1c47fa+'@'+_0x271a4d:_0x1c47fa=_0x271a4d,$[_0x18ad5f(0x13d,'aUoM')](_0x1c47fa,NAME+_0x2a2b8a),ckList=_0x1c47fa[_0x14ac7c(0x14b)]('@'),$[_0x18ad5f(0x179,'Qm&i')](jsname+_0x18ad5f(0x178,'1ydb')+ckList[_0x18ad5f(0x11e,'Jf]%')]+'个'+_0x2a2b8a+_0x18ad5f(0x132,'qTFB')+_0x271a4d)):$[_0x14ac7c(0x15e)](jsname+':'+(NAME+_0x2a2b8a)+_0x18ad5f(0x148,'37F$')+_0x271a4d);}if(cxdata['url'])for(let _0x52d54f of cxdata['url']){let _0x8b88b9=$request[_0x18ad5f(0x19b,'@X@6')],_0x37c510=($[_0x18ad5f(0x115,'0O6v')]()?process[_0x14ac7c(0x151)][NAME+_0x52d54f]:$[_0x18ad5f(0x140,'VcS$')](NAME+_0x52d54f))||'',_0x57ad41=_0x8b88b9[_0x18ad5f(0x137,'&&Ww')](_0x52d54f);if(_0x57ad41['indexOf']('&')==-0x1){var _0x568ad2=_0x52d54f+_0x14ac7c(0x17d),_0x209402=new RegExp(_0x568ad2);_0x8b88b9=_0x8b88b9[_0x14ac7c(0x182)](_0x209402)[0x1];}else{var _0x568ad2=_0x52d54f+_0x14ac7c(0x156),_0x209402=new RegExp(_0x568ad2);_0x8b88b9=_0x8b88b9['match'](_0x209402)[0x1];}_0x37c510[_0x14ac7c(0x15c)](_0x8b88b9)==-0x1?(_0x37c510?_0x37c510=_0x37c510+'@'+_0x8b88b9:_0x37c510=_0x8b88b9,$[_0x18ad5f(0x19c,'aCbl')](_0x37c510,NAME+_0x52d54f),ckList=_0x37c510['split']('@'),$[_0x18ad5f(0x10f,'rK]D')](jsname+':获取第'+ckList['length']+'个'+_0x52d54f+_0x14ac7c(0x14e)+_0x8b88b9)):$[_0x14ac7c(0x15e)](jsname+':'+(NAME+_0x52d54f)+_0x18ad5f(0x120,'84zR')+_0x8b88b9);}}}function handleCK(){const _0x8fd556=_0x32f6ff,_0x59b6cb=_0x2c8bff;let _0x166252=['\x0a','@','&'];for(let _0x4bc99d in cxdata){for(let _0x51246c of cxdata[_0x4bc99d]){userCookie[_0x51246c]=($[_0x59b6cb(0x197)]()?process['env'][NAME+_0x51246c]:$[_0x8fd556(0x10b,'JZS^')](NAME+_0x51246c))||'';if(userCookie[_0x51246c]){let _0x5cf891=_0x166252[0x0];for(let _0x3c3794 of _0x166252){if(userCookie[_0x51246c][_0x8fd556(0x17e,'1D!e')](_0x3c3794)>-0x1){_0x5cf891=_0x3c3794;break;}}if(userList['length']>0x0){let _0x217a71=userCookie[_0x51246c][_0x8fd556(0x144,'1D!e')](_0x5cf891);if(_0x217a71[_0x8fd556(0x107,'rK]D')]!=userList[_0x59b6cb(0x192)]){console[_0x8fd556(0x108,'nsJ9')]('CK变量长度不对应');return;}for(let _0x360165=0x0;_0x360165<userList[_0x8fd556(0x13c,'nsJ9')];_0x360165++){userList[_0x360165]['setValueForKey'](_0x51246c,_0x217a71[_0x360165]);}}else for(let _0x27b3ae of userCookie[_0x51246c][_0x59b6cb(0x14b)](_0x5cf891)){const _0x139b1e=new USER_LB();_0x139b1e['setValueForKey'](_0x51246c,_0x27b3ae);if(_0x27b3ae)userList[_0x59b6cb(0x136)](_0x139b1e);}}else{console[_0x8fd556(0x1a0,'!z#y')]('\x0a未找到CK，变量名为：'+(NAME+_0x51246c));return;}}}return console[_0x59b6cb(0x1af)](_0x59b6cb(0x174)+userList[_0x8fd556(0x184,'@X@6')]+_0x59b6cb(0x1b1)),!![];}async function httpRequest(_0x93de59,_0x2a9459){const _0x5a9b43=_0x2c8bff;httpResult=null;if(_0x93de59=='get')delete _0x2a9459[_0x5a9b43(0x19d)];return new Promise(_0x1aa5f5=>{$[_0x93de59](_0x2a9459,async(_0x4aa50c,_0x242aa,_0x4f839e)=>{const _0x477d30=_0x487f,_0x55e6aa=_0x1ce7;try{if(_0x4aa50c)console[_0x55e6aa(0x1af)](_0x93de59+'请求失败'),console[_0x477d30(0x119,'v7Xv')](JSON[_0x55e6aa(0x166)](_0x4aa50c)),$[_0x55e6aa(0x195)](_0x4aa50c);else{if(safeGet(_0x4f839e)){httpResult=JSON[_0x477d30(0x188,'ub8u')](_0x4f839e);if(logDebug)console[_0x477d30(0x110,'cGjE')](JSON['stringify'](httpResult));}}}catch(_0x2e1231){$[_0x477d30(0x17b,'q1Dt')](_0x2e1231,_0x242aa);}finally{_0x1aa5f5();}});});}function _0x63ed(){const _0xa05fdc=['WOJdGmkKWOxdNmkSW7pcQvtdL1On','Dg9tDhjPBMC','6lsM5y+344cq','Bg9N','zw5J','5lIQ6lsM5y+3','WOFdNmkVWO3dP8klW7q','C2v0vMfSDwvgB3jlzxK','z2v0zgf0yq','W4ZdHaT6','W7uGW6C','WQpdOmk/W6C9','W4ldKWvZCmoEzG','WQDde1FcL8kUcSklw8kaDteNWRnQm8oIE1dcOHn6W4RcPSoBWOflWRBcQxqHW6OmWPxdRNe','WP0DkNTfmCovW6pdVG','WRioyG','W6ZdNLe','WRfEnSoXW4FcKq','W4G1WRu','nmobWQm','44cr5OQ95y2H','W6itCsRcKCoqWQS','WRmhW6S','Dg9mB2nHBgvtDhjPBMC','W4hdL8oJtcVcHSoNgSkLWPu1WPC','WRbipW','mmopWP8','yMfZzty0','p8oSBmoaW4BdQf0','iN0M','u8ohWQVcRNi','W7Xae8o8qSk0','hSork8kKWRaZWOmIWQS','5PYn5yQH5zMO6k6/6zEU5PwW5O2U5lI656M677Ym6k+35Qoa5P+L6iEQ6lQR6k6+5Ash572r57UC5Oof5yA1','m8ocWPjFhIO','W5/dVSoc','W4uReSk7obrl','aCkLiGvGCaegWQldOZiRW4pdQSoyWQ0GWOWuW5VcV8kWWRTbtCoVWR/cTvxcQmoPBmkd','oSoTBW','zKvd','fCkHWPFcVvTj','zgvJCNLWDa','5y2Y6yw55BAw5A2p5zY9WPy1','6l6W5OYr5zga','W5/dVNiTw24a','DxjS','mJHPwvj2Cvm','W7aEW6pdSCo1cXm','ldKtsJRdP8kq','W7xcVuqNWP9J','W6/dMCo5wYy','WOFcN3qUpfVdIbS/aMtdNq','W67dQ8kvWQBdUHu','iIWIDxnLCK5HBwuIoIlLSPRLM77NLkJMIlC','W6VcRSoBWRpdVXzkuSk+W4GkW5NcKCopW4XYfg7cUSkijYuAW59en8orW4ZdHcTzW5NdTW','AG7cPq','z2v0vgLTzq','y2HHCKnVzgvbDa','vxrMoa','W5aRfSkdmbPl','5OUQ5yQiWOas','W6eCAhBdICkuW7H6WP7cVSoeWP7dRCkAW4ldSG','W7FcK8oTbfC','WOe1W4HxWPxcKHnD','ChvZAa','bmoKyq1K','WOPIW4LA','CMvWBgfJzq','W4NdKw7cNfO','y2f0y2G','W4G/WRZcK8ouWQW','WQWnW7JcQXhdTcO','WPS5usqSamkK','W4hdVMWMtMu','pSoxWRddL8oNcCo3','vuldSdpdISoOWRW','Dw5KzwzPBMvK','WRJOJi/LJzVNRjq','WRXhc07cKa','odunrZFdQmkmiSk0WQq','aHZcOxpdKmobWRhdULVdSq','W6vsl8oGqW','5yYa6ywi5BEu5A+e5z6zr8kH','EYjYzxeIoIi','sSojWOZcUwJdT8kNW5y','C3bSAxq','77YA5y2H54Mh44cq','x8kwW4hcVCodWPxcKIGzWPNcRf9hW5u','5OIq5yQFoIa','WRldSmklzYZdUvS9wvNcRaPaW6D7CLC2D8ofWRa/zCoDW6GiW6/dILRdJglcQNT9WPeUW4tcNYGqWQvx','W4FdHqm','zw52','p8ogW6HDWPr6zW','WQeaB8kNhSoMWPbiWRxdLgvnpmkh','cbnfxwbFWQdcLfq+WOreW4PD5yAt','mtm1odqZm0f6v1nkDG','psGUkIKM','W5q5W53dHCoFkJq','y2fYze5HBwu','x8okWRm','yw5KCM9Pza','Bw9Kzq','Aw5KzxHpzG','W7NcISo3hKLiWP3cQ0JcSCkBW6tcQW','BxnN','DgfZAY9JAgvJAY9Xza','W7SmpCkqhcm','5QYt5lMz5AYz56YV','sGnTEq','C2v0zgf0yq','Cg9WDwXHDgvvCMXpyMPLy3q','ugXjzZnomdDoqK15vZrzttqZA0DUEKPyCJjhqweWwuOXDvvVAujxuvCVtI83A3GRz0DzvITrA2mZuM02CNbjBLzZnw5fsZnSDLPgmLeYtLjqwMjqsKrytwGZBuT0sZffDJLxnKXZmg9tngjAte1cmhLzz0TmDu1TzJb0m1HltMfhsfDOv0K3Ew44qM9esxnktfrIBJv0yJjXm1Djww5fEwzhrxO1q1jnr1jOAdn0vvnVm09cren2uMTxBeuXn1DIr29Ju1jWsLrrytfUl3zKvLrjAKrHBfOZCtD6veKVodm4rKPKovPOy05cr1vgwMT2mITtCJfYC1burtrUsg9nl2j3D0iXzc9Umgv1mKjjt1biEMTRELnMrdbkAxr5sK9JCenmvfnXqNH0l0PuENPkwuvfzgDkCvb3CKT5EKzQmwfNs0flr1bMywX3mgi4B3jKkZLgrLbrpt0G','C3rYAw5NAwz5','WRZcISoSxbSgW4xcLuxcUmkRW7xcUttcJw85FCkNWRuFm8oLWPyaW67cIZe','W6uoyCkJWOxdICoBWRtdLHWqmSoZ','quvt','w8ksBSo9WPyyWO8nWRVcNW','5yYI6yEy5Bwi5A2Q5z+mWOOj','y29Kzq','ugTJCZC','WPa/WRhcPCoIWOHU','fCkfWOpdOCkvW4RdHLqeWPlcQ0bWWPLKWRldH13cKMNcVMBdHrlcSqj4WP/dK1tdPmosWPjtWRFcG8o0c8ow','CgfK','WRRdMSkN','W5FdGhBcLKy','zgf0yq','5ywX5OM+5yIW','W7aZW7NdPsC','WR9yf1lcImo1uCobBCkECbSRWQ1Uimo/','gSoiWQddVCkiW43dJx0','W6BOJ4tLJPJNRku','WQFdVCk8','44cr5OQ95y2HoIa','uSojWRJcIgJdRa','W7JdSCkx','psGUkIK','WQzza0lcNmoBqW','W7ddNCo+sa','AgvHzgvYCW','ngvJuujmwa','Bwf0y2G','WRnbmN7cUmoOWQ8aWP3dOG','WPSOtIb2aG','A2vLCc1HBgL2zq','DxjSt2jQzwn0','W5dcUSknwGVdRf4G','WP7dK8k5WPVdUG','Aw5KzxG','Bt0xd1dcMHy','W5pcS8ovnMRcO2S3qwtcR04','W78ZW5pdISotpq','W6KzyG','W4aWWR/dJmkzW7qeub3dVcetj8oLohO','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','z2v0','WPf5b8ogW7ZcQSk+','BgvUz3rO','lSofWOHwhd3cHG','6lAZ5y+e44gn','Bg9NrxjY','44ku56Yi5yI1772u','AxnoB2rL','W7WWA0T8dSk7','sGnUzwJcJSo5','W6bbmq','WOi/ta','W4qRfSkZoanp','yM9KEq','W43dTmkxWQhcUa','pSopWPXd','W6W9W6W','CgfYC2u','zNjVBunOyxjdB2rL','WRGsoMG','rSkLp1aPmr9cWQpdTxGWW6xdPW','DHlcRCocWQ0XFq','zg9Uzq','q29UDgvUDc1uExbL','W4xdNKLF','WP3dGSkNWOhdQW','W6CLzKzT','tejFue9tva'];_0x63ed=function(){return _0xa05fdc;};return _0x63ed();}function safeGet(_0x58f20f){const _0x40c178=_0x32f6ff,_0x3cb660=_0x2c8bff;try{if(typeof JSON[_0x3cb660(0x1a1)](_0x58f20f)==_0x40c178(0x118,'cGjE'))return!![];else console[_0x3cb660(0x1af)](_0x58f20f);}catch(_0x5a82f9){return console[_0x3cb660(0x1af)](JSON[_0x40c178(0x116,'KrEJ')](_0x5a82f9)),console['log'](_0x3cb660(0x117)),![];}}function timestampToTime(_0x528c20){const _0x195228=_0x32f6ff,_0x1fd5e7=_0x2c8bff;return new Date(parseInt(_0x528c20))[_0x1fd5e7(0x10d)]()[_0x195228(0x199,'aKKa')](/年|月/g,'-')[_0x195228(0x11a,'aCbl')](/日/g,'\x20');}function stringToBase64(_0x2661e2){const _0x2a5c08=_0x2c8bff,_0x53a075=_0x32f6ff;var _0x4fc2ae=Buffer[_0x53a075(0x1b5,'84zR')](_0x2661e2)[_0x2a5c08(0x1ad)](_0x2a5c08(0x111));return _0x4fc2ae;}function _0x487f(_0x40cd8e,_0x25a2d8){const _0x63ed8e=_0x63ed();return _0x487f=function(_0x1ce7f3,_0x2a2d2b){_0x1ce7f3=_0x1ce7f3-0x101;let _0x3ce28c=_0x63ed8e[_0x1ce7f3];if(_0x487f['RlJDjk']===undefined){var _0x31fbb0=function(_0x4bb03f){const _0x3d8068='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3c38cd='',_0x4d79b0='';for(let _0x4791f3=0x0,_0x2e2979,_0x2de26f,_0x41a581=0x0;_0x2de26f=_0x4bb03f['charAt'](_0x41a581++);~_0x2de26f&&(_0x2e2979=_0x4791f3%0x4?_0x2e2979*0x40+_0x2de26f:_0x2de26f,_0x4791f3++%0x4)?_0x3c38cd+=String['fromCharCode'](0xff&_0x2e2979>>(-0x2*_0x4791f3&0x6)):0x0){_0x2de26f=_0x3d8068['indexOf'](_0x2de26f);}for(let _0x57925a=0x0,_0x594826=_0x3c38cd['length'];_0x57925a<_0x594826;_0x57925a++){_0x4d79b0+='%'+('00'+_0x3c38cd['charCodeAt'](_0x57925a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4d79b0);};const _0x487fda=function(_0x347e12,_0x519610){let _0x18d31c=[],_0x3a68fa=0x0,_0x2046b9,_0x4677d1='';_0x347e12=_0x31fbb0(_0x347e12);let _0x480a09;for(_0x480a09=0x0;_0x480a09<0x100;_0x480a09++){_0x18d31c[_0x480a09]=_0x480a09;}for(_0x480a09=0x0;_0x480a09<0x100;_0x480a09++){_0x3a68fa=(_0x3a68fa+_0x18d31c[_0x480a09]+_0x519610['charCodeAt'](_0x480a09%_0x519610['length']))%0x100,_0x2046b9=_0x18d31c[_0x480a09],_0x18d31c[_0x480a09]=_0x18d31c[_0x3a68fa],_0x18d31c[_0x3a68fa]=_0x2046b9;}_0x480a09=0x0,_0x3a68fa=0x0;for(let _0x3c3379=0x0;_0x3c3379<_0x347e12['length'];_0x3c3379++){_0x480a09=(_0x480a09+0x1)%0x100,_0x3a68fa=(_0x3a68fa+_0x18d31c[_0x480a09])%0x100,_0x2046b9=_0x18d31c[_0x480a09],_0x18d31c[_0x480a09]=_0x18d31c[_0x3a68fa],_0x18d31c[_0x3a68fa]=_0x2046b9,_0x4677d1+=String['fromCharCode'](_0x347e12['charCodeAt'](_0x3c3379)^_0x18d31c[(_0x18d31c[_0x480a09]+_0x18d31c[_0x3a68fa])%0x100]);}return _0x4677d1;};_0x487f['MLWtfM']=_0x487fda,_0x40cd8e=arguments,_0x487f['RlJDjk']=!![];}const _0x3c19d7=_0x63ed8e[0x0],_0x48062a=_0x1ce7f3+_0x3c19d7,_0xf509ec=_0x40cd8e[_0x48062a];return!_0xf509ec?(_0x487f['KmbPSI']===undefined&&(_0x487f['KmbPSI']=!![]),_0x3ce28c=_0x487f['MLWtfM'](_0x3ce28c,_0x2a2d2b),_0x40cd8e[_0x48062a]=_0x3ce28c):_0x3ce28c=_0xf509ec,_0x3ce28c;},_0x487f(_0x40cd8e,_0x25a2d8);}function sleep(_0x1f9f16){return new Promise(_0x480dfc=>setTimeout(_0x480dfc,_0x1f9f16));}function reconvert(_0x530a84){const _0x3d9cd6=_0x2c8bff;return _0x530a84=_0x530a84[_0x3d9cd6(0x139)](/(\\u)(\w{1,4})/gi,function(_0x35dcce){const _0x25e7a5=_0x487f;return String[_0x25e7a5(0x129,'^Zk^')](parseInt(escape(_0x35dcce)['replace'](/(%5Cu)(\w{1,4})/g,'$2'),0x10));}),_0x530a84=_0x530a84['replace'](/(&#x)(\w{1,4});/gi,function(_0x5cd4a2){const _0x149fa7=_0x487f;return String[_0x149fa7(0x1ac,'ub8u')](parseInt(escape(_0x5cd4a2)[_0x149fa7(0x122,'MYxv')](/(%26%23x)(\w{1,4})(%3B)/g,'$2'),0x10));}),_0x530a84=_0x530a84[_0x3d9cd6(0x139)](/(&#)(\d{1,6});/gi,function(_0x5d2fc3){const _0x20fc9d=_0x487f,_0x1567cf=_0x3d9cd6;return String[_0x1567cf(0x1a2)](parseInt(escape(_0x5d2fc3)[_0x20fc9d(0x199,'aKKa')](/(%26%23)(\d{1,6})(%3B)/g,'$2')));}),_0x530a84;}function encodeUTF8(_0x20e023){const _0x431355=_0x2c8bff,_0x1d1463=_0x32f6ff;let _0x443534='';for(let _0x19acad=0x0;_0x19acad<_0x20e023[_0x1d1463(0x13f,'MYxv')];_0x19acad++){let _0x29a548=_0x20e023[_0x19acad],_0x22be0b='';encodeURIComponent(_0x29a548)['length']<0x4?_0x22be0b=_0x29a548[_0x431355(0x12f)](0x0)[_0x1d1463(0x177,'yF2o')](0x10):(_0x22be0b=encodeURIComponent(_0x29a548),_0x22be0b=_0x22be0b[_0x1d1463(0x145,'pvaL')]('%','')),console[_0x431355(0x1af)](_0x1d1463(0x161,'1ydb'),_0x19acad,_0x29a548,_0x22be0b),_0x443534+=_0x22be0b;}return console[_0x431355(0x1af)](_0x1d1463(0x121,'1ydb'),_0x443534),_0x443534;}function aesDecrypt(_0x42b421){const _0x1a7e7f=_0x32f6ff,_0x38a608=_0x2c8bff;var _0x6ee260=CryptoJS[_0x38a608(0x169)][_0x38a608(0x11f)](_0x42b421,CryptoJS[_0x38a608(0x1b0)]['Utf8']['parse'](_0x1a7e7f(0x133,'JZS^')),{'mode':CryptoJS['mode'][_0x1a7e7f(0x105,'@X@6')],'padding':CryptoJS[_0x38a608(0x170)][_0x38a608(0x16d)]});return _0x6ee260[_0x1a7e7f(0x14a,'q1Dt')](CryptoJS[_0x38a608(0x1b0)][_0x38a608(0x130)]);}function aesEncrypt(_0x4a9456){const _0x50ef26=_0x2c8bff,_0x478c16=_0x32f6ff;var _0x197db8=CryptoJS[_0x478c16(0x106,'MYxv')][_0x478c16(0x141,'*qu3')](_0x4a9456,CryptoJS[_0x478c16(0x17c,'GJN3')]['Utf8'][_0x50ef26(0x1a1)](_0x478c16(0x18e,'nsJ9')),{'mode':CryptoJS[_0x50ef26(0x15b)]['ECB'],'padding':CryptoJS[_0x478c16(0x171,'8ziW')][_0x478c16(0x19e,'GJN3')]})[_0x50ef26(0x1ad)]();return _0x197db8;}

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), "PUT" === e && (s = this.put), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } put(t) { return this.send.call(this.env, t, "PUT") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } put(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.put(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "PUT", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.put(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }