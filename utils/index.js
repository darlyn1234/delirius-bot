const _0x588627=_0x154c;(function(_0x4f3b35,_0x20ad0c){const _0x5765e2=_0x154c,_0x26d058=_0x4f3b35();while(!![]){try{const _0x11c766=parseInt(_0x5765e2(0xb0))/0x1*(-parseInt(_0x5765e2(0xbc))/0x2)+parseInt(_0x5765e2(0xd5))/0x3*(parseInt(_0x5765e2(0xd8))/0x4)+-parseInt(_0x5765e2(0xd1))/0x5+-parseInt(_0x5765e2(0xc9))/0x6*(-parseInt(_0x5765e2(0x9b))/0x7)+parseInt(_0x5765e2(0x99))/0x8*(-parseInt(_0x5765e2(0x98))/0x9)+parseInt(_0x5765e2(0xaf))/0xa+parseInt(_0x5765e2(0xdd))/0xb;if(_0x11c766===_0x20ad0c)break;else _0x26d058['push'](_0x26d058['shift']());}catch(_0x298aa9){_0x26d058['push'](_0x26d058['shift']());}}}(_0x3b53,0xbb09d));const fs=require('fs'),path=require('path'),chalk=require('chalk'),moment=require(_0x588627(0xcc)),mime=require(_0x588627(0xea));moment['tz']['setDefault'](_0x588627(0xb1))[_0x588627(0xa5)]('es');const {default:axios,AxiosRequestConfig}=require(_0x588627(0xe9)),{S_WHATSAPP_NET,getHttpStream,toBuffer}=require(_0x588627(0xb5)),{fromBuffer}=require(_0x588627(0xac)),FormData=require('form-data');function _0x3b53(){const _0x1464b3=['America/Lima','push','mkdirSync','expiry','@whiskeysockets/baileys','writeFileSync','split','getHeaders','\x20is\x20now\x20Watched','success','replace','1154558SCORqZ','./temp','$1.','\x20horas','mime','message','post','\x20hora','resolve','get','\x20y\x20','readdirSync','MiB','1794HuLPyN','filter','https://qu.ax/upload.php','moment-timezone','arraybuffer','bgHex','headers','\x20segundo','2306510OTmdgk','watchFile','keyword','isDirectory','3fbIzZn','PiB','.js','3412192gSmlZp','ext','readFileSync','\x27\x20changed!','existsSync','9918700cyKJtS','files[]','reduce','YiB','exports','file.','map','concat','files','toFixed','data','test','axios','mime-types','Invalid\x20buffer\x20format','bgKeyword','then','content-type','4282749LwQGma','16BPGBtC','toString','3143tryueb','Module\x20','log','KiB','length','round','./temp/','bgGreen','substring','binary','locale','join','append','abs','catch','startsWith','\x20minutos','file-type','statSync','matchAll','8674130BoDepG','1XoyNLj'];_0x3b53=function(){return _0x1464b3;};return _0x3b53();}!fs[_0x588627(0xdc)]('./temp')&&fs[_0x588627(0xb3)](_0x588627(0xbd),{'recursive':!![]});const download=(_0xd9013c,_0x2905b7,_0x44f8ca={})=>{return new Promise(async(_0x4fc03d,_0x426187)=>{const _0x5eab8b=_0x154c;try{let _0x2cf111=await getHttpStream(_0xd9013c,_0x44f8ca);const _0x5175a1=await toBuffer(_0x2cf111),_0x2e6eca=await fromBuffer(_0x5175a1);let _0x20c2db=_0x5eab8b(0xa1)+new Date()['getTime']()+'.'+(_0x2905b7||_0x2e6eca[_0x5eab8b(0xd9)]);fs[_0x5eab8b(0xb6)](_0x20c2db,_0x5175a1[_0x5eab8b(0x9a)](_0x5eab8b(0xa4)),_0x5eab8b(0xa4));let _0x441626={'filepath':_0x20c2db,'mimetype':_0x2e6eca[_0x5eab8b(0xc0)]};_0x4fc03d(_0x441626);}catch(_0x27fc48){console[_0x5eab8b(0x9d)](_0x27fc48);}});},parseMention=_0xf08594=>[..._0xf08594[_0x588627(0xae)](/@?([0-9]{5,16}|0)/g)][_0x588627(0xe3)](_0x50a3f7=>_0x50a3f7[0x1]+S_WHATSAPP_NET),color=(_0x269227,_0x9d244b)=>{const _0x3421cf=_0x588627;return!_0x9d244b?chalk['green'](_0x269227):_0x9d244b[_0x3421cf(0xaa)]('#')?chalk['hex'](_0x9d244b)(_0x269227):chalk[_0x3421cf(0xd3)](_0x9d244b)(_0x269227);};function bgColor(_0x17f54e,_0x22c6d4){const _0x5cade4=_0x588627;return!_0x22c6d4?chalk[_0x5cade4(0xa2)](_0x17f54e):_0x22c6d4[_0x5cade4(0xaa)]('#')?chalk[_0x5cade4(0xce)](_0x22c6d4)(_0x17f54e):chalk[_0x5cade4(0xec)](_0x22c6d4)(_0x17f54e);}const isUrl=_0x2fead0=>{const _0x263591=_0x588627;return new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)[_0x263591(0xe8)](_0x2fead0);},msgs=_0x26cdc6=>{const _0x2e80cd=_0x588627;return _0x26cdc6['length']>=0x14?''+_0x26cdc6[_0x2e80cd(0xa3)](0x0,0x1f4):''+_0x26cdc6;};async function getBuffer(_0x3bdc45,_0x59ac38={}){const _0x2b544d=_0x588627;try{if(fs[_0x2b544d(0xdc)](_0x3bdc45))return{'mimetype':mime['lookup'](_0x3bdc45),'buffer':fs[_0x2b544d(0xda)](_0x3bdc45)};else{const _0x8adc48=await axios[_0x2b544d(0xc5)](_0x3bdc45,{'responseType':_0x2b544d(0xcd),..._0x59ac38});return{'mimetype':_0x8adc48[_0x2b544d(0xcf)][_0x2b544d(0xee)],'buffer':_0x8adc48[_0x2b544d(0xe7)]};}}catch(_0x2d8db3){console['log'](_0x2d8db3);}}function humanFileSize(_0x47c42d,_0x12dee1=!![],_0x168392=0x1){const _0x7444ae=_0x588627,_0x27958b=_0x12dee1?0x3e8:0x400;if(Math[_0x7444ae(0xa8)](_0x47c42d)<_0x27958b)return _0x47c42d+'\x20B';const _0x1c3e62=_0x12dee1?['kB','MB','GB','TB','PB','EB','ZB','YB']:[_0x7444ae(0x9e),_0x7444ae(0xc8),'GiB','TiB',_0x7444ae(0xd6),'EiB','ZiB',_0x7444ae(0xe0)];let _0x17c53e=-0x1;const _0x2a9504=0xa**_0x168392;do{_0x47c42d/=_0x27958b,++_0x17c53e;}while(Math[_0x7444ae(0xa0)](Math[_0x7444ae(0xa8)](_0x47c42d)*_0x2a9504)/_0x2a9504>=_0x27958b&&_0x17c53e<_0x1c3e62[_0x7444ae(0x9f)]-0x1);return _0x47c42d[_0x7444ae(0xe6)](_0x168392)+'\x20'+_0x1c3e62[_0x17c53e];}function _0x154c(_0xef24d6,_0x5b7308){const _0x3b5333=_0x3b53();return _0x154c=function(_0x154ca6,_0x6cae97){_0x154ca6=_0x154ca6-0x98;let _0xc94138=_0x3b5333[_0x154ca6];return _0xc94138;},_0x154c(_0xef24d6,_0x5b7308);}async function fetchFilesize(_0x6e79a6,_0x214e4f={}){const _0xdce22a=_0x588627;try{const _0x57991e=await axios[_0xdce22a(0xc5)](_0x6e79a6,..._0x214e4f);return _0x57991e[_0xdce22a(0xcf)]['content-length'];}catch(_0x15b7be){throw _0x15b7be;}}const Scandir=_0x253002=>{const _0x8add48=_0x588627;let _0x2a6b96=fs[_0x8add48(0xc7)](_0x253002),_0x2afbec=_0x2a6b96[_0x8add48(0xe3)](_0x1c3941=>{const _0x394bc1=_0x8add48;let _0x1e9749=path['join'](_0x253002,_0x1c3941);return fs[_0x394bc1(0xad)](_0x1e9749)[_0x394bc1(0xd4)]()?Scandir(_0x1e9749):_0x1e9749;});return _0x2afbec[_0x8add48(0xdf)]((_0x1546ab,_0xc9f9e3)=>_0x1546ab[_0x8add48(0xe4)](_0xc9f9e3),[]);},pluginLoader=_0x16df5c=>{const _0x51f4fb=_0x588627;let _0x4f568e=path['join'](__dirname,_0x16df5c),_0x1e25ea=_0x5b15f0=>/\.js$/[_0x51f4fb(0xe8)](_0x5b15f0),_0x7d25b8={};for(let _0x14ca79 of Scandir(_0x4f568e)[_0x51f4fb(0xca)](_0x1e25ea)){filename=path['basename'](_0x14ca79,_0x51f4fb(0xd7));try{_0x7d25b8[filename]=require(_0x14ca79),nocache(_0x14ca79,_0x318d9e=>console[_0x51f4fb(0x9d)](color('\x27'+_0x318d9e+_0x51f4fb(0xdb))));}catch(_0xc9fd55){console[_0x51f4fb(0x9d)](_0xc9fd55),delete _0x7d25b8[filename];}}return _0x7d25b8;};function nocache(_0x4dad10,_0x3fab9b=()=>{}){const _0x4ca082=_0x588627;console['log'](color(_0x4ca082(0x9c)+_0x4dad10+_0x4ca082(0xb9))),fs[_0x4ca082(0xd2)](require[_0x4ca082(0xc4)](_0x4dad10),async()=>{const _0x3bb7bb=_0x4ca082;await uncache(require[_0x3bb7bb(0xc4)](_0x4dad10)),_0x3fab9b(_0x4dad10);});}function uncache(_0x501228='.'){return new Promise((_0x424a7a,_0x15ce43)=>{const _0x144b33=_0x154c;try{delete require['cache'][require[_0x144b33(0xc4)](_0x501228)],_0x424a7a();}catch(_0x27fb08){_0x15ce43(_0x27fb08);}});}function ConvertMiles(_0x3db90b){const _0x915c5d=_0x588627,_0x43ec35=/(\d)(?=(\d{3})+(?!\d))/g,_0x399482=_0x915c5d(0xbe);let _0x202824=(_0x3db90b??0x0)[_0x915c5d(0x9a)]()['split']('.');return _0x202824[0x0]=_0x202824[0x0]['replace'](_0x43ec35,_0x399482),_0x202824[0x1]?_0x202824[_0x915c5d(0xa6)]('.'):_0x202824[0x0];}const UploadBuffer=_0x429d9a=>{return new Promise(async(_0x49936e,_0x1cdc2d)=>{const _0x1db62a=_0x154c,{ext:_0x5695ab,mime:_0x4a52ff}=await fromBuffer(_0x429d9a);if(_0x5695ab&&_0x4a52ff){const _0x135f47=new FormData();_0x135f47['append'](_0x1db62a(0xde),_0x429d9a,_0x1db62a(0xe2)+_0x5695ab),_0x135f47['append'](_0x1db62a(0xb4),'-1');const _0xc278={..._0x135f47[_0x1db62a(0xb8)]()};axios[_0x1db62a(0xc2)](_0x1db62a(0xcb),_0x135f47,{'headers':_0xc278})[_0x1db62a(0xed)](_0x36b1ca=>{const _0x2637e4=_0x1db62a,_0x105f8c=_0x36b1ca[_0x2637e4(0xe7)];_0x105f8c[_0x2637e4(0xba)]&&_0x105f8c[_0x2637e4(0xe5)]['length']>0x0?_0x49936e(_0x105f8c[_0x2637e4(0xe5)][0x0]['url']):_0x1cdc2d(null);})[_0x1db62a(0xa9)](_0x32d849=>_0x1cdc2d(new Error(_0x32d849)[_0x1db62a(0xc1)]));}else _0x1cdc2d('Invalid\x20buffer\x20format');});},UploadQuax=_0x41e9b6=>{return new Promise(async(_0x370293,_0x26e32b)=>{const _0x2a198b=_0x154c,{ext:_0xe7849b,mime:_0x27f4c9}=await fromBuffer(_0x41e9b6);if(_0xe7849b&&_0x27f4c9){const _0x34a7fc=new FormData();_0x34a7fc['append'](_0x2a198b(0xde),_0x41e9b6,_0x2a198b(0xe2)+_0xe7849b),_0x34a7fc[_0x2a198b(0xa7)](_0x2a198b(0xb4),'-1');const _0x5eec5d={..._0x34a7fc['getHeaders']()};axios['post'](_0x2a198b(0xcb),_0x34a7fc,{'headers':_0x5eec5d})['then'](_0x5aaedd=>{const _0x4c1070=_0x2a198b,_0x24e1c8=_0x5aaedd['data'];_0x24e1c8[_0x4c1070(0xba)]&&_0x24e1c8[_0x4c1070(0xe5)]['length']>0x0?_0x370293(_0x24e1c8[_0x4c1070(0xe5)][0x0]):_0x26e32b(null);})[_0x2a198b(0xa9)](_0x384cf5=>_0x26e32b(new Error(_0x384cf5)[_0x2a198b(0xc1)]));}else _0x26e32b(_0x2a198b(0xeb));});};function milesToComas(_0x1eb1cf){const _0x30db18=_0x588627,_0x5d8393=/(\d)(?=(\d{3})+(?!\d))/g,_0x21a8ee='$1,';let _0x337ca5=(_0x1eb1cf??0x0)[_0x30db18(0x9a)]()[_0x30db18(0xb7)]('.');return _0x337ca5[0x0]=_0x337ca5[0x0][_0x30db18(0xbb)](_0x5d8393,_0x21a8ee),_0x337ca5[0x1]?_0x337ca5['join']('.'):_0x337ca5[0x0];}function msToTimeRPG(_0x2d0650){const _0x1ec351=_0x588627;seconds=Math['floor'](_0x2d0650/0x3e8%0x3c),minutes=Math['floor'](_0x2d0650/(0x3e8*0x3c)%0x3c),hours=Math['floor'](_0x2d0650/(0x3e8*0x3c*0x3c)%0x18),hours=hours<0xa?'0'+hours:hours,minutes=minutes<0xa?'0'+minutes:minutes,seconds=seconds<0xa?'0'+seconds:seconds;var _0x4ed337=hours+(hours===0x1?_0x1ec351(0xc3):_0x1ec351(0xbf)),_0x3e8924=minutes+(minutes===0x1?'\x20minuto':_0x1ec351(0xab)),_0x2f6e4a=seconds+(seconds===0x1?_0x1ec351(0xd0):'\x20segundos'),_0x4477f0=[];return hours>0x0&&_0x4477f0['push'](_0x4ed337),minutes>0x0&&_0x4477f0[_0x1ec351(0xb2)](_0x3e8924),(seconds>0x0||hours===0x0&&minutes===0x0&&seconds===0x0)&&_0x4477f0[_0x1ec351(0xb2)](_0x2f6e4a),_0x4477f0[_0x1ec351(0xa6)](_0x1ec351(0xc6));}module[_0x588627(0xe1)]={'isUrl':isUrl,'bgColor':bgColor,'color':color,'msgs':msgs,'getBuffer':getBuffer,'humanFileSize':humanFileSize,'Scandir':Scandir,'pluginLoader':pluginLoader,'fetchFilesize':fetchFilesize,'nocache':nocache,'download':download,'parseMention':parseMention,'ConvertMiles':ConvertMiles,'UploadBuffer':UploadBuffer,'UploadQuax':UploadQuax,'milesToComas':milesToComas,'msToTimeRPG':msToTimeRPG};