const _0xe0c0a3 = _0x576d;
function _0x576d(_0x2b9094, _0x40c1fe) {
  const _0x59d40 = _0x59d4();
  return (
    (_0x576d = function (_0x576d87, _0xe9a38d) {
      _0x576d87 = _0x576d87 - 0x17d;
      let _0x2b2e23 = _0x59d40[_0x576d87];
      return _0x2b2e23;
    }),
    _0x576d(_0x2b9094, _0x40c1fe)
  );
}
(function (_0x569947, _0x42fc6f) {
  const _0x510df7 = _0x576d,
    _0x359732 = _0x569947();
  while (!![]) {
    try {
      const _0x30740f =
        (parseInt(_0x510df7(0x186)) / 0x1) *
          (-parseInt(_0x510df7(0x1b0)) / 0x2) +
        -parseInt(_0x510df7(0x1ab)) / 0x3 +
        (parseInt(_0x510df7(0x197)) / 0x4) *
          (parseInt(_0x510df7(0x1a2)) / 0x5) +
        -parseInt(_0x510df7(0x1a8)) / 0x6 +
        (-parseInt(_0x510df7(0x1c2)) / 0x7) *
          (parseInt(_0x510df7(0x1b7)) / 0x8) +
        (-parseInt(_0x510df7(0x1d2)) / 0x9) *
          (-parseInt(_0x510df7(0x1d6)) / 0xa) +
        (-parseInt(_0x510df7(0x184)) / 0xb) *
          (-parseInt(_0x510df7(0x19f)) / 0xc);
      if (_0x30740f === _0x42fc6f) break;
      else _0x359732["push"](_0x359732["shift"]());
    } catch (_0x28dbb3) {
      _0x359732["push"](_0x359732["shift"]());
    }
  }
})(_0x59d4, 0xd1b57);
const fs = require("fs"),
  path = require("path"),
  chalk = require(_0xe0c0a3(0x1d3)),
  moment = require("moment-timezone"),
  mime = require("mime-types");
moment["tz"][_0xe0c0a3(0x1dd)](_0xe0c0a3(0x18b))["locale"]("es");
const { default: axios, AxiosRequestConfig } = require("axios"),
  { S_WHATSAPP_NET, getHttpStream, toBuffer } = require(_0xe0c0a3(0x1d1)),
  { fromBuffer } = require(_0xe0c0a3(0x1ae)),
  FormData = require(_0xe0c0a3(0x189));
!fs[_0xe0c0a3(0x1d9)](_0xe0c0a3(0x1cf)) &&
  fs["mkdirSync"]("./temp", { recursive: !![] });
const download = (_0x33eeb9, _0x30fd41, _0x345074 = {}) => {
    return new Promise(async (_0x903fc0, _0x361d4f) => {
      const _0x2a4201 = _0x576d;
      try {
        let _0x33fd53 = await getHttpStream(_0x33eeb9, _0x345074);
        const _0xc79bb0 = await toBuffer(_0x33fd53),
          _0x541518 = await fromBuffer(_0xc79bb0);
        let _0x366020 =
          _0x2a4201(0x17d) +
          new Date()[_0x2a4201(0x194)]() +
          "." +
          (_0x30fd41 || _0x541518["ext"]);
        fs[_0x2a4201(0x1bc)](
          _0x366020,
          _0xc79bb0["toString"](_0x2a4201(0x198)),
          "binary",
        );
        let _0x168112 = {
          filepath: _0x366020,
          mimetype: _0x541518[_0x2a4201(0x1b3)],
        };
        _0x903fc0(_0x168112);
      } catch (_0xd1f2c6) {
        console[_0x2a4201(0x180)](_0xd1f2c6);
      }
    });
  },
  parseMention = (_0x548a89) =>
    [..._0x548a89[_0xe0c0a3(0x1a5)](/@?([0-9]{5,16}|0)/g)]["map"](
      (_0x302b05) => _0x302b05[0x1] + S_WHATSAPP_NET,
    ),
  color = (_0x55e382, _0x2ae7b3) => {
    const _0x572b57 = _0xe0c0a3;
    return !_0x2ae7b3
      ? chalk[_0x572b57(0x18d)](_0x55e382)
      : _0x2ae7b3[_0x572b57(0x1ba)]("#")
        ? chalk[_0x572b57(0x1aa)](_0x2ae7b3)(_0x55e382)
        : chalk["keyword"](_0x2ae7b3)(_0x55e382);
  };
function bgColor(_0x305390, _0x267821) {
  const _0x2750df = _0xe0c0a3;
  return !_0x267821
    ? chalk[_0x2750df(0x182)](_0x305390)
    : _0x267821["startsWith"]("#")
      ? chalk[_0x2750df(0x187)](_0x267821)(_0x305390)
      : chalk[_0x2750df(0x19a)](_0x267821)(_0x305390);
}
const isUrl = (_0xe572c8) => {
    const _0x371961 = _0xe0c0a3;
    return new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi,
    )[_0x371961(0x1d5)](_0xe572c8);
  },
  msgs = (_0x4773c2) => {
    const _0x5755b7 = _0xe0c0a3;
    return _0x4773c2["length"] >= 0x14
      ? "" + _0x4773c2[_0x5755b7(0x1c7)](0x0, 0x1f4)
      : "" + _0x4773c2;
  };
async function getBuffer(_0x2b77a7, _0x1ee775 = {}) {
  const _0x3834a8 = _0xe0c0a3;
  try {
    if (fs[_0x3834a8(0x1d9)](_0x2b77a7))
      return {
        mimetype: mime[_0x3834a8(0x196)](_0x2b77a7),
        buffer: fs["readFileSync"](_0x2b77a7),
      };
    else {
      const _0x56725d = await axios["get"](_0x2b77a7, {
        responseType: _0x3834a8(0x1ad),
        ..._0x1ee775,
      });
      return {
        mimetype: _0x56725d["headers"][_0x3834a8(0x1bf)],
        buffer: _0x56725d[_0x3834a8(0x18c)],
      };
    }
  } catch (_0x33455c) {
    console["log"](_0x33455c);
  }
}
function humanFileSize(_0x5a4336, _0x556363 = !![], _0xf87706 = 0x1) {
  const _0x1c7ca1 = _0xe0c0a3,
    _0x43e127 = _0x556363 ? 0x3e8 : 0x400;
  if (Math[_0x1c7ca1(0x1e0)](_0x5a4336) < _0x43e127) return _0x5a4336 + "\x20B";
  const _0x4a011a = _0x556363
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : [
        _0x1c7ca1(0x1c5),
        _0x1c7ca1(0x1d7),
        "GiB",
        _0x1c7ca1(0x1c0),
        _0x1c7ca1(0x1da),
        "EiB",
        _0x1c7ca1(0x1d4),
        _0x1c7ca1(0x183),
      ];
  let _0x549955 = -0x1;
  const _0x5971f0 = 0xa ** _0xf87706;
  do {
    (_0x5a4336 /= _0x43e127), ++_0x549955;
  } while (
    Math[_0x1c7ca1(0x1b8)](Math[_0x1c7ca1(0x1e0)](_0x5a4336) * _0x5971f0) /
      _0x5971f0 >=
      _0x43e127 &&
    _0x549955 < _0x4a011a["length"] - 0x1
  );
  return _0x5a4336[_0x1c7ca1(0x1c9)](_0xf87706) + "\x20" + _0x4a011a[_0x549955];
}
async function fetchFilesize(_0x38f95e, _0x48e4ba = {}) {
  const _0xc74d39 = _0xe0c0a3;
  try {
    const _0x50527d = await axios[_0xc74d39(0x1d8)](_0x38f95e, ..._0x48e4ba);
    return _0x50527d[_0xc74d39(0x1b6)]["content-length"];
  } catch (_0x31a183) {
    throw _0x31a183;
  }
}
const Scandir = (_0x540a53) => {
    const _0x499623 = _0xe0c0a3;
    let _0xfca15d = fs[_0x499623(0x1b9)](_0x540a53),
      _0x526b63 = _0xfca15d[_0x499623(0x1af)]((_0x5c147e) => {
        const _0x5b7e1d = _0x499623;
        let _0x40a235 = path[_0x5b7e1d(0x1b1)](_0x540a53, _0x5c147e);
        return fs[_0x5b7e1d(0x19c)](_0x40a235)[_0x5b7e1d(0x1c8)]()
          ? Scandir(_0x40a235)
          : _0x40a235;
      });
    return _0x526b63[_0x499623(0x1a7)](
      (_0xb687df, _0x1ec7ec) => _0xb687df[_0x499623(0x192)](_0x1ec7ec),
      [],
    );
  },
  pluginLoader = (_0x31862f) => {
    const _0x477cae = _0xe0c0a3;
    let _0x23e196 = path[_0x477cae(0x1b1)](__dirname, _0x31862f),
      _0x5e420e = (_0x561c0c) => /\.js$/[_0x477cae(0x1d5)](_0x561c0c),
      _0x389447 = {};
    for (let _0x242b9f of Scandir(_0x23e196)[_0x477cae(0x19d)](_0x5e420e)) {
      filename = path[_0x477cae(0x1d0)](_0x242b9f, ".js");
      try {
        (_0x389447[filename] = require(_0x242b9f)),
          nocache(_0x242b9f, (_0x4527f0) =>
            console[_0x477cae(0x180)](
              color("\x27" + _0x4527f0 + _0x477cae(0x1a6)),
            ),
          );
      } catch (_0x23cd10) {
        console[_0x477cae(0x180)](_0x23cd10), delete _0x389447[filename];
      }
    }
    return _0x389447;
  };
function nocache(_0x2f80fd, _0x20206f = () => {}) {
  const _0xafc3a3 = _0xe0c0a3;
  console[_0xafc3a3(0x180)](
    color(_0xafc3a3(0x193) + _0x2f80fd + _0xafc3a3(0x18e)),
  ),
    fs[_0xafc3a3(0x19b)](require["resolve"](_0x2f80fd), async () => {
      await uncache(require["resolve"](_0x2f80fd)), _0x20206f(_0x2f80fd);
    });
}
function uncache(_0x13ac9e = ".") {
  return new Promise((_0x534408, _0x36467c) => {
    const _0x234d40 = _0x576d;
    try {
      delete require[_0x234d40(0x1b4)][require[_0x234d40(0x1a1)](_0x13ac9e)],
        _0x534408();
    } catch (_0x2b80a3) {
      _0x36467c(_0x2b80a3);
    }
  });
}
function ConvertMiles(_0x21620d) {
  const _0x6c7594 = _0xe0c0a3,
    _0x384283 = /(\d)(?=(\d{3})+(?!\d))/g,
    _0x422f00 = _0x6c7594(0x191);
  let _0x3846ba = (_0x21620d ?? 0x0)["toString"]()[_0x6c7594(0x18a)](".");
  return (
    (_0x3846ba[0x0] = _0x3846ba[0x0][_0x6c7594(0x1bb)](_0x384283, _0x422f00)),
    _0x3846ba[0x1] ? _0x3846ba["join"](".") : _0x3846ba[0x0]
  );
}
const UploadBuffer = (_0x186884) => {
    return new Promise(async (_0x1f1d97, _0x485139) => {
      const _0x38130a = _0x576d,
        { ext: _0x191ba2, mime: _0x121dd1 } = await fromBuffer(_0x186884);
      if (_0x191ba2 && _0x121dd1) {
        const _0x24fe7e = new FormData();
        _0x24fe7e[_0x38130a(0x185)](
          _0x38130a(0x1cc),
          _0x186884,
          _0x38130a(0x1cd) + _0x191ba2,
        ),
          _0x24fe7e[_0x38130a(0x185)]("expiry", "-1");
        const _0x5c777d = { ..._0x24fe7e[_0x38130a(0x1de)]() };
        axios["post"](_0x38130a(0x1c6), _0x24fe7e, { headers: _0x5c777d })
          [_0x38130a(0x1c3)]((_0x1db63f) => {
            const _0x429e83 = _0x38130a,
              _0x4fbb84 = _0x1db63f[_0x429e83(0x18c)];
            _0x4fbb84[_0x429e83(0x1b5)] && _0x4fbb84["files"]["length"] > 0x0
              ? _0x1f1d97(_0x4fbb84["files"][0x0][_0x429e83(0x1db)])
              : _0x485139(null);
          })
          ["catch"]((_0x220f41) => _0x485139(new Error(_0x220f41)["message"]));
      } else _0x485139("Invalid\x20buffer\x20format");
    });
  },
  UploadQuax = (_0x1230a4) => {
    return new Promise(async (_0x289d1f, _0x29f369) => {
      const _0xcf0a84 = _0x576d,
        { ext: _0x34d17e, mime: _0x4b6ed0 } = await fromBuffer(_0x1230a4);
      if (_0x34d17e && _0x4b6ed0) {
        const _0x469c06 = new FormData();
        _0x469c06[_0xcf0a84(0x185)](
          _0xcf0a84(0x1cc),
          _0x1230a4,
          _0xcf0a84(0x1cd) + _0x34d17e,
        ),
          _0x469c06[_0xcf0a84(0x185)](_0xcf0a84(0x195), "-1");
        const _0x472c01 = { ..._0x469c06[_0xcf0a84(0x1de)]() };
        axios[_0xcf0a84(0x1df)](_0xcf0a84(0x1c6), _0x469c06, {
          headers: _0x472c01,
        })
          [_0xcf0a84(0x1c3)]((_0x43a970) => {
            const _0x491b70 = _0xcf0a84,
              _0x4ce522 = _0x43a970[_0x491b70(0x18c)];
            _0x4ce522[_0x491b70(0x1b5)] &&
            _0x4ce522[_0x491b70(0x188)][_0x491b70(0x1ca)] > 0x0
              ? _0x289d1f(_0x4ce522["files"][0x0])
              : _0x29f369(null);
          })
          [_0xcf0a84(0x1c4)]((_0x568264) =>
            _0x29f369(new Error(_0x568264)["message"]),
          );
      } else _0x29f369(_0xcf0a84(0x1dc));
    });
  };
function milesToComas(_0x21f13c) {
  const _0x23ed5c = _0xe0c0a3,
    _0x248179 = /(\d)(?=(\d{3})+(?!\d))/g,
    _0x607e77 = _0x23ed5c(0x1ac);
  let _0x50fcdf = (_0x21f13c ?? 0x0)[_0x23ed5c(0x18f)]()[_0x23ed5c(0x18a)](".");
  return (
    (_0x50fcdf[0x0] = _0x50fcdf[0x0]["replace"](_0x248179, _0x607e77)),
    _0x50fcdf[0x1] ? _0x50fcdf[_0x23ed5c(0x1b1)](".") : _0x50fcdf[0x0]
  );
}
function msToTimeRPG(_0x54eaab) {
  const _0x907c8 = _0xe0c0a3;
  (seconds = Math[_0x907c8(0x1a4)]((_0x54eaab / 0x3e8) % 0x3c)),
    (minutes = Math[_0x907c8(0x1a4)]((_0x54eaab / (0x3e8 * 0x3c)) % 0x3c)),
    (hours = Math[_0x907c8(0x1a4)]((_0x54eaab / (0x3e8 * 0x3c * 0x3c)) % 0x18)),
    (hours = hours < 0xa ? "0" + hours : hours),
    (minutes = minutes < 0xa ? "0" + minutes : minutes),
    (seconds = seconds < 0xa ? "0" + seconds : seconds);
  var _0x1fb50e = hours + (hours === 0x1 ? "\x20hora" : _0x907c8(0x1a3)),
    _0x4982af = minutes + (minutes === 0x1 ? _0x907c8(0x1be) : "\x20minutos"),
    _0x51737b = seconds + (seconds === 0x1 ? "\x20segundo" : _0x907c8(0x1bd)),
    _0x52f96b = [];
  return (
    hours > 0x0 && _0x52f96b[_0x907c8(0x1a9)](_0x1fb50e),
    minutes > 0x0 && _0x52f96b[_0x907c8(0x1a9)](_0x4982af),
    (seconds > 0x0 || (hours === 0x0 && minutes === 0x0 && seconds === 0x0)) &&
      _0x52f96b[_0x907c8(0x1a9)](_0x51737b),
    _0x52f96b["join"](_0x907c8(0x1b2))
  );
}
function FileSize(_0x4f976c) {
  return new Promise((_0x277d0a, _0x4f2dbd) => {
    const _0x5ab18b = _0x576d;
    if (!Buffer[_0x5ab18b(0x17f)](_0x4f976c))
      return _0x4f2dbd(new Error(_0x5ab18b(0x1cb)));
    _0x277d0a(_0x4f976c["length"]);
  });
}
async function VideyUploader(_0x1ad091) {
  return new Promise(async (_0x5b58e0, _0x140c36) => {
    const _0x500d78 = _0x576d;
    if (!Buffer[_0x500d78(0x17f)](_0x1ad091))
      return _0x140c36(new Error(_0x500d78(0x1cb)));
    try {
      const _0x10cd3c = await FileSize(_0x1ad091);
      if (_0x10cd3c >= 0x3e800000)
        return _0x140c36(new Error(_0x500d78(0x181)));
      const _0x5c9722 = _0x500d78(0x17e) + Date[_0x500d78(0x1a0)]() + ".mp4",
        _0x5c9385 = new FormData();
      _0x5c9385[_0x500d78(0x185)]("file", Buffer[_0x500d78(0x1c1)](_0x1ad091), {
        filename: _0x5c9722,
        contentType: _0x500d78(0x199),
      });
      const _0x4f8d3c = await axios[_0x500d78(0x1df)](
        "https://videy.co/api/upload",
        _0x5c9385,
        { headers: { ..._0x5c9385[_0x500d78(0x1de)]() } },
      );
      return _0x4f8d3c?.[_0x500d78(0x18c)]?.["id"]
        ? _0x5b58e0({
            creator: _0x500d78(0x190),
            status: !![],
            data: {
              id: _0x4f8d3c[_0x500d78(0x18c)]["id"],
              extension: _0x500d78(0x1ce),
              size: await humanFileSize(_0x10cd3c, !![], 0x2),
              url:
                "https://cdn.videy.co/" +
                _0x4f8d3c[_0x500d78(0x18c)]["id"] +
                _0x500d78(0x1ce),
            },
          })
        : _0x140c36(new Error(_0x500d78(0x19e)));
    } catch (_0x2bf5be) {
      return _0x140c36(_0x2bf5be);
    }
  });
}
function _0x59d4() {
  const _0x34e3f8 = [
    "ZiB",
    "test",
    "10DAnxKy",
    "MiB",
    "get",
    "existsSync",
    "PiB",
    "url",
    "Invalid\x20buffer\x20format",
    "setDefault",
    "getHeaders",
    "post",
    "abs",
    "./temp/",
    "delirius-",
    "isBuffer",
    "log",
    "Max\x20size\x20upload\x20for\x20VideyCDN\x20is\x20only\x201GB!",
    "bgGreen",
    "YiB",
    "19100499zykEdo",
    "append",
    "57705wmxghc",
    "bgHex",
    "files",
    "form-data",
    "split",
    "America/Lima",
    "data",
    "green",
    "\x20is\x20now\x20Watched",
    "toString",
    "darlingg",
    "$1.",
    "concat",
    "Module\x20",
    "getTime",
    "expiry",
    "lookup",
    "12aJiPjq",
    "binary",
    "video/mp4",
    "bgKeyword",
    "watchFile",
    "statSync",
    "filter",
    "Upload\x20failed",
    "24YqwHRv",
    "now",
    "resolve",
    "2673375wCMAqn",
    "\x20horas",
    "floor",
    "matchAll",
    "\x27\x20changed!",
    "reduce",
    "5444640iRVWZG",
    "push",
    "hex",
    "3893994KUJaCR",
    "$1,",
    "arraybuffer",
    "file-type",
    "map",
    "12zmBGSB",
    "join",
    "\x20y\x20",
    "mime",
    "cache",
    "success",
    "headers",
    "16QToTiI",
    "round",
    "readdirSync",
    "startsWith",
    "replace",
    "writeFileSync",
    "\x20segundos",
    "\x20minuto",
    "content-type",
    "TiB",
    "from",
    "5870179JKJHSy",
    "then",
    "catch",
    "KiB",
    "https://qu.ax/upload.php",
    "substring",
    "isDirectory",
    "toFixed",
    "length",
    "Invalid\x20buffer\x20input!",
    "files[]",
    "file.",
    ".mp4",
    "./temp",
    "basename",
    "@whiskeysockets/baileys",
    "98874OlBSzH",
    "chalk",
  ];
  _0x59d4 = function () {
    return _0x34e3f8;
  };
  return _0x59d4();
}
module["exports"] = {
  isUrl: isUrl,
  bgColor: bgColor,
  color: color,
  msgs: msgs,
  getBuffer: getBuffer,
  humanFileSize: humanFileSize,
  Scandir: Scandir,
  pluginLoader: pluginLoader,
  fetchFilesize: fetchFilesize,
  nocache: nocache,
  download: download,
  parseMention: parseMention,
  ConvertMiles: ConvertMiles,
  UploadBuffer: UploadBuffer,
  UploadQuax: UploadQuax,
  milesToComas: milesToComas,
  msToTimeRPG: msToTimeRPG,
  VideyUploader: VideyUploader,
};
