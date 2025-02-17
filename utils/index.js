const _0x52b888 = _0x4a7d;
(function (_0x459670, _0x4fd62e) {
  const _0x5c4756 = _0x4a7d,
    _0xcf72d5 = _0x459670();
  while (!![]) {
    try {
      const _0x5484ff =
        -parseInt(_0x5c4756(0x1cc)) / 0x1 +
        (-parseInt(_0x5c4756(0x1fd)) / 0x2) *
          (-parseInt(_0x5c4756(0x1e5)) / 0x3) +
        parseInt(_0x5c4756(0x1e9)) / 0x4 +
        -parseInt(_0x5c4756(0x1e2)) / 0x5 +
        (-parseInt(_0x5c4756(0x203)) / 0x6) *
          (parseInt(_0x5c4756(0x1fc)) / 0x7) +
        parseInt(_0x5c4756(0x1c1)) / 0x8 +
        (parseInt(_0x5c4756(0x1cb)) / 0x9) * (parseInt(_0x5c4756(0x20a)) / 0xa);
      if (_0x5484ff === _0x4fd62e) break;
      else _0xcf72d5["push"](_0xcf72d5["shift"]());
    } catch (_0x2a6df0) {
      _0xcf72d5["push"](_0xcf72d5["shift"]());
    }
  }
})(_0x3619, 0x67290);
const fs = require("fs"),
  fss2 = require("fs")[_0x52b888(0x1c0)],
  path = require(_0x52b888(0x1cd)),
  chalk = require(_0x52b888(0x210)),
  moment = require(_0x52b888(0x1c3)),
  mime = require("mime-types");
moment["tz"]["setDefault"](_0x52b888(0x1c8))[_0x52b888(0x1dc)]("es");
const { default: axios, AxiosRequestConfig } = require(_0x52b888(0x1f1)),
  {
    S_WHATSAPP_NET,
    getHttpStream,
    toBuffer,
  } = require("@whiskeysockets/baileys"),
  { fromBuffer } = require(_0x52b888(0x1be)),
  FormData = require(_0x52b888(0x1e7)),
  { promisify } = require(_0x52b888(0x1d2)),
  { exec } = require(_0x52b888(0x1f2)),
  os = require("os");
!fs["existsSync"]("./temp") &&
  fs[_0x52b888(0x215)](_0x52b888(0x1f7), { recursive: !![] });
const download = (_0x1496a8, _0x26405a, _0x2fc307 = {}) => {
    return new Promise(async (_0x1c5ded, _0x4d6237) => {
      const _0x291db3 = _0x4a7d;
      try {
        let _0x2f43dc = await getHttpStream(_0x1496a8, _0x2fc307);
        const _0x11237f = await toBuffer(_0x2f43dc),
          _0xa40653 = await fromBuffer(_0x11237f);
        let _0x46dd17 =
          _0x291db3(0x1f5) +
          new Date()[_0x291db3(0x1d1)]() +
          "." +
          (_0x26405a || _0xa40653[_0x291db3(0x1c2)]);
        fs[_0x291db3(0x20e)](
          _0x46dd17,
          _0x11237f[_0x291db3(0x1e0)](_0x291db3(0x1e1)),
          _0x291db3(0x1e1),
        );
        let _0x5c2687 = {
          filepath: _0x46dd17,
          mimetype: _0xa40653[_0x291db3(0x1c7)],
        };
        _0x1c5ded(_0x5c2687);
      } catch (_0x3f38b8) {
        console["log"](_0x3f38b8);
      }
    });
  },
  parseMention = (_0x48c5a5) =>
    [..._0x48c5a5["matchAll"](/@?([0-9]{5,16}|0)/g)][_0x52b888(0x1bb)](
      (_0x23cb72) => _0x23cb72[0x1] + S_WHATSAPP_NET,
    ),
  color = (_0x30f5a1, _0x15b4ef) => {
    const _0x12a8d6 = _0x52b888;
    return !_0x15b4ef
      ? chalk["green"](_0x30f5a1)
      : _0x15b4ef[_0x12a8d6(0x20d)]("#")
        ? chalk["hex"](_0x15b4ef)(_0x30f5a1)
        : chalk["keyword"](_0x15b4ef)(_0x30f5a1);
  };
function bgColor(_0x1b3f69, _0x89c84b) {
  const _0x36fa7e = _0x52b888;
  return !_0x89c84b
    ? chalk[_0x36fa7e(0x1bc)](_0x1b3f69)
    : _0x89c84b["startsWith"]("#")
      ? chalk[_0x36fa7e(0x1d5)](_0x89c84b)(_0x1b3f69)
      : chalk[_0x36fa7e(0x1ec)](_0x89c84b)(_0x1b3f69);
}
const isUrl = (_0x3fe808) => {
    const _0xec0519 = _0x52b888;
    return new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi,
    )[_0xec0519(0x1ca)](_0x3fe808);
  },
  msgs = (_0x1a03ce) => {
    return _0x1a03ce["length"] >= 0x14
      ? "" + _0x1a03ce["substring"](0x0, 0x1f4)
      : "" + _0x1a03ce;
  };
function _0x4a7d(_0x3e40c6, _0x1c765f) {
  const _0x3619c9 = _0x3619();
  return (
    (_0x4a7d = function (_0x4a7d8a, _0xffe120) {
      _0x4a7d8a = _0x4a7d8a - 0x1b9;
      let _0xdba804 = _0x3619c9[_0x4a7d8a];
      return _0xdba804;
    }),
    _0x4a7d(_0x3e40c6, _0x1c765f)
  );
}
async function getBuffer(_0xf1cff, _0x960b9e = {}) {
  const _0x39b371 = _0x52b888;
  try {
    if (fs["existsSync"](_0xf1cff))
      return {
        mimetype: mime[_0x39b371(0x20c)](_0xf1cff),
        buffer: fs["readFileSync"](_0xf1cff),
      };
    else {
      const _0x5b07e7 = await axios[_0x39b371(0x214)](_0xf1cff, {
        responseType: _0x39b371(0x212),
        ..._0x960b9e,
      });
      return {
        mimetype: _0x5b07e7["headers"]["content-type"],
        buffer: _0x5b07e7[_0x39b371(0x218)],
      };
    }
  } catch (_0x2aaab6) {
    console[_0x39b371(0x211)](_0x2aaab6);
  }
}
function humanFileSize(_0x4d6f27, _0x40da89 = !![], _0x11d004 = 0x1) {
  const _0x43a368 = _0x52b888,
    _0x2d17aa = _0x40da89 ? 0x3e8 : 0x400;
  if (Math[_0x43a368(0x1f9)](_0x4d6f27) < _0x2d17aa) return _0x4d6f27 + "\x20B";
  const _0x1a8980 = _0x40da89
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : [
        "KiB",
        _0x43a368(0x1df),
        _0x43a368(0x1f4),
        _0x43a368(0x217),
        _0x43a368(0x1e3),
        _0x43a368(0x1d4),
        "ZiB",
        "YiB",
      ];
  let _0x1b9290 = -0x1;
  const _0x353258 = 0xa ** _0x11d004;
  do {
    (_0x4d6f27 /= _0x2d17aa), ++_0x1b9290;
  } while (
    Math["round"](Math[_0x43a368(0x1f9)](_0x4d6f27) * _0x353258) / _0x353258 >=
      _0x2d17aa &&
    _0x1b9290 < _0x1a8980["length"] - 0x1
  );
  return _0x4d6f27["toFixed"](_0x11d004) + "\x20" + _0x1a8980[_0x1b9290];
}
async function fetchFilesize(_0x432964, _0x284da9 = {}) {
  const _0x5b30bb = _0x52b888;
  try {
    const _0x507330 = await axios["get"](_0x432964, ..._0x284da9);
    return _0x507330[_0x5b30bb(0x1c5)][_0x5b30bb(0x204)];
  } catch (_0x28e602) {
    throw _0x28e602;
  }
}
const Scandir = (_0x5e4677) => {
    const _0x51f242 = _0x52b888;
    let _0x51fddc = fs[_0x51f242(0x1f0)](_0x5e4677),
      _0x3c13fc = _0x51fddc[_0x51f242(0x1bb)]((_0x25699a) => {
        const _0x5ec429 = _0x51f242;
        let _0x20842f = path[_0x5ec429(0x1d6)](_0x5e4677, _0x25699a);
        return fs[_0x5ec429(0x1bd)](_0x20842f)[_0x5ec429(0x1eb)]()
          ? Scandir(_0x20842f)
          : _0x20842f;
      });
    return _0x3c13fc[_0x51f242(0x1fa)](
      (_0x22aea1, _0x170037) => _0x22aea1[_0x51f242(0x1e6)](_0x170037),
      [],
    );
  },
  pluginLoader = (_0x1c7ee8) => {
    const _0x4e2ded = _0x52b888;
    let _0x4e9a8a = path[_0x4e2ded(0x1d6)](__dirname, _0x1c7ee8),
      _0x167d30 = (_0xa34fb9) => /\.js$/[_0x4e2ded(0x1ca)](_0xa34fb9),
      _0xe1f4f = {};
    for (let _0x42071c of Scandir(_0x4e9a8a)[_0x4e2ded(0x1fb)](_0x167d30)) {
      filename = path[_0x4e2ded(0x208)](_0x42071c, ".js");
      try {
        (_0xe1f4f[filename] = require(_0x42071c)),
          nocache(_0x42071c, (_0x4a9569) =>
            console[_0x4e2ded(0x211)](
              color("\x27" + _0x4a9569 + "\x27\x20changed!"),
            ),
          );
      } catch (_0x49e602) {
        console[_0x4e2ded(0x211)](_0x49e602), delete _0xe1f4f[filename];
      }
    }
    return _0xe1f4f;
  };
function nocache(_0x27e5df, _0x45bc85 = () => {}) {
  const _0x353d21 = _0x52b888;
  console["log"](color(_0x353d21(0x1cf) + _0x27e5df + _0x353d21(0x1ea))),
    fs[_0x353d21(0x1c4)](require[_0x353d21(0x209)](_0x27e5df), async () => {
      const _0x584c1e = _0x353d21;
      await uncache(require[_0x584c1e(0x209)](_0x27e5df)), _0x45bc85(_0x27e5df);
    });
}
function _0x3619() {
  const _0x8b48b2 = [
    "filter",
    "63uCCOEr",
    "638DZzbop",
    "append",
    "\x20horas",
    "split",
    "random",
    ".gif",
    "439710XnWTwq",
    "content-length",
    "push",
    "unlink",
    "length",
    "basename",
    "resolve",
    "547790psQIKX",
    "files[]",
    "lookup",
    "startsWith",
    "writeFileSync",
    "post",
    "chalk",
    "log",
    "arraybuffer",
    "writeFile",
    "get",
    "mkdirSync",
    "readFile",
    "TiB",
    "data",
    "https://qu.ax/upload.php",
    "\x20segundo",
    "floor",
    "map",
    "bgGreen",
    "statSync",
    "file-type",
    ".gif\x20-movflags\x20faststart\x20-pix_fmt\x20yuv420p\x20-vf\x20\x22scale=trunc(iw/2)*2:trunc(ih/2)*2\x22\x20",
    "promises",
    "1291024TfjCYR",
    "ext",
    "moment-timezone",
    "watchFile",
    "headers",
    "\x20hora",
    "mime",
    "America/Lima",
    "message",
    "test",
    "225QTXtrA",
    "780086AlBOBO",
    "path",
    "\x20y\x20",
    "Module\x20",
    "then",
    "getTime",
    "util",
    "expiry",
    "EiB",
    "bgHex",
    "join",
    "\x20segundos",
    "getHeaders",
    "cache",
    "files",
    "catch",
    "locale",
    "\x20minutos",
    "success",
    "MiB",
    "toString",
    "binary",
    "745945SWSpew",
    "PiB",
    "tmpdir",
    "1077VLskkZ",
    "concat",
    "form-data",
    "file.",
    "1464040FHpZTa",
    "\x20is\x20now\x20Watched",
    "isDirectory",
    "bgKeyword",
    "url",
    "Invalid\x20buffer\x20format",
    "\x20minuto",
    "readdirSync",
    "axios",
    "child_process",
    "replace",
    "GiB",
    "./temp/",
    "$1,",
    "./temp",
    ".mp4",
    "abs",
    "reduce",
  ];
  _0x3619 = function () {
    return _0x8b48b2;
  };
  return _0x3619();
}
function uncache(_0x487377 = ".") {
  return new Promise((_0x55a158, _0x256a9c) => {
    const _0x8d0c3 = _0x4a7d;
    try {
      delete require[_0x8d0c3(0x1d9)][require[_0x8d0c3(0x209)](_0x487377)],
        _0x55a158();
    } catch (_0x5335e8) {
      _0x256a9c(_0x5335e8);
    }
  });
}
function ConvertMiles(_0x2b611c) {
  const _0x547979 = _0x52b888,
    _0x47dc53 = /(\d)(?=(\d{3})+(?!\d))/g,
    _0x1410a7 = "$1.";
  let _0x4a4cef = (_0x2b611c ?? 0x0)[_0x547979(0x1e0)]()[_0x547979(0x200)](".");
  return (
    (_0x4a4cef[0x0] = _0x4a4cef[0x0][_0x547979(0x1f3)](_0x47dc53, _0x1410a7)),
    _0x4a4cef[0x1] ? _0x4a4cef["join"](".") : _0x4a4cef[0x0]
  );
}
const UploadBuffer = (_0x374194) => {
    return new Promise(async (_0x56dec4, _0x1925b7) => {
      const _0x340129 = _0x4a7d,
        { ext: _0x55245f, mime: _0x5e9143 } = await fromBuffer(_0x374194);
      if (_0x55245f && _0x5e9143) {
        const _0x17a28c = new FormData();
        _0x17a28c[_0x340129(0x1fe)](
          _0x340129(0x20b),
          _0x374194,
          _0x340129(0x1e8) + _0x55245f,
        ),
          _0x17a28c[_0x340129(0x1fe)]("expiry", "-1");
        const _0xd71c11 = { ..._0x17a28c[_0x340129(0x1d8)]() };
        axios[_0x340129(0x20f)](_0x340129(0x219), _0x17a28c, {
          headers: _0xd71c11,
        })
          ["then"]((_0x1a9107) => {
            const _0x4e24a4 = _0x340129,
              _0x29fe52 = _0x1a9107["data"];
            _0x29fe52[_0x4e24a4(0x1de)] &&
            _0x29fe52[_0x4e24a4(0x1da)][_0x4e24a4(0x207)] > 0x0
              ? _0x56dec4(_0x29fe52[_0x4e24a4(0x1da)][0x0][_0x4e24a4(0x1ed)])
              : _0x1925b7(null);
          })
          [_0x340129(0x1db)]((_0x2586c0) =>
            _0x1925b7(new Error(_0x2586c0)[_0x340129(0x1c9)]),
          );
      } else _0x1925b7(_0x340129(0x1ee));
    });
  },
  UploadQuax = (_0x1d2bcd) => {
    return new Promise(async (_0x2cfaab, _0x805bb) => {
      const _0x11cc5e = _0x4a7d,
        { ext: _0x35064d, mime: _0x33f9b8 } = await fromBuffer(_0x1d2bcd);
      if (_0x35064d && _0x33f9b8) {
        const _0x3e22ba = new FormData();
        _0x3e22ba[_0x11cc5e(0x1fe)](
          "files[]",
          _0x1d2bcd,
          _0x11cc5e(0x1e8) + _0x35064d,
        ),
          _0x3e22ba[_0x11cc5e(0x1fe)](_0x11cc5e(0x1d3), "-1");
        const _0x2a1475 = { ..._0x3e22ba[_0x11cc5e(0x1d8)]() };
        axios[_0x11cc5e(0x20f)](_0x11cc5e(0x219), _0x3e22ba, {
          headers: _0x2a1475,
        })
          [_0x11cc5e(0x1d0)]((_0x48550e) => {
            const _0x57170c = _0x11cc5e,
              _0x3f4c0d = _0x48550e[_0x57170c(0x218)];
            _0x3f4c0d[_0x57170c(0x1de)] &&
            _0x3f4c0d[_0x57170c(0x1da)][_0x57170c(0x207)] > 0x0
              ? _0x2cfaab(_0x3f4c0d[_0x57170c(0x1da)][0x0])
              : _0x805bb(null);
          })
          [_0x11cc5e(0x1db)]((_0x4e072b) =>
            _0x805bb(new Error(_0x4e072b)["message"]),
          );
      } else _0x805bb(_0x11cc5e(0x1ee));
    });
  };
function milesToComas(_0x5baa35) {
  const _0x233acd = _0x52b888,
    _0x2ee487 = /(\d)(?=(\d{3})+(?!\d))/g,
    _0x325492 = _0x233acd(0x1f6);
  let _0x2589f5 = (_0x5baa35 ?? 0x0)[_0x233acd(0x1e0)]()[_0x233acd(0x200)](".");
  return (
    (_0x2589f5[0x0] = _0x2589f5[0x0][_0x233acd(0x1f3)](_0x2ee487, _0x325492)),
    _0x2589f5[0x1] ? _0x2589f5[_0x233acd(0x1d6)](".") : _0x2589f5[0x0]
  );
}
function msToTimeRPG(_0x267d3d) {
  const _0x3c6799 = _0x52b888;
  (seconds = Math[_0x3c6799(0x1ba)]((_0x267d3d / 0x3e8) % 0x3c)),
    (minutes = Math[_0x3c6799(0x1ba)]((_0x267d3d / (0x3e8 * 0x3c)) % 0x3c)),
    (hours = Math[_0x3c6799(0x1ba)](
      (_0x267d3d / (0x3e8 * 0x3c * 0x3c)) % 0x18,
    )),
    (hours = hours < 0xa ? "0" + hours : hours),
    (minutes = minutes < 0xa ? "0" + minutes : minutes),
    (seconds = seconds < 0xa ? "0" + seconds : seconds);
  var _0x493df2 = hours + (hours === 0x1 ? _0x3c6799(0x1c6) : _0x3c6799(0x1ff)),
    _0x4e27ae =
      minutes + (minutes === 0x1 ? _0x3c6799(0x1ef) : _0x3c6799(0x1dd)),
    _0xf39787 =
      seconds + (seconds === 0x1 ? _0x3c6799(0x1b9) : _0x3c6799(0x1d7)),
    _0x5cf82a = [];
  return (
    hours > 0x0 && _0x5cf82a[_0x3c6799(0x205)](_0x493df2),
    minutes > 0x0 && _0x5cf82a["push"](_0x4e27ae),
    (seconds > 0x0 || (hours === 0x0 && minutes === 0x0 && seconds === 0x0)) &&
      _0x5cf82a[_0x3c6799(0x205)](_0xf39787),
    _0x5cf82a[_0x3c6799(0x1d6)](_0x3c6799(0x1ce))
  );
}
const bufferUrl = async (_0x1fc3aa) =>
    (
      await axios[_0x52b888(0x214)](_0x1fc3aa, {
        responseType: _0x52b888(0x212),
      })
    )["data"],
  fetchData = async (_0x13f8fa) =>
    (await axios[_0x52b888(0x214)](_0x13f8fa))["data"],
  execute = promisify(exec),
  gifToMp4 = async (_0xd103c7, _0x397ce0 = ![]) => {
    const _0x80dcf2 = _0x52b888,
      _0x36b1fd =
        os[_0x80dcf2(0x1e4)]() +
        "/" +
        Math[_0x80dcf2(0x201)]()["toString"](0x24);
    await fss2[_0x80dcf2(0x213)](_0x36b1fd + _0x80dcf2(0x202), _0xd103c7),
      await execute(
        "ffmpeg\x20-f\x20gif\x20-i\x20" +
          _0x36b1fd +
          _0x80dcf2(0x1bf) +
          _0x36b1fd +
          ".mp4",
      );
    if (_0x397ce0) return _0x36b1fd + _0x80dcf2(0x1f8);
    const _0x2305a3 = await fss2[_0x80dcf2(0x216)](
      _0x36b1fd + _0x80dcf2(0x1f8),
    );
    return (
      Promise["all"]([
        fss2[_0x80dcf2(0x206)](_0x36b1fd + _0x80dcf2(0x202)),
        fss2[_0x80dcf2(0x206)](_0x36b1fd + _0x80dcf2(0x1f8)),
      ]),
      _0x2305a3
    );
  };
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
  bufferUrl: bufferUrl,
  fetchData: fetchData,
  gifToMp4: gifToMp4,
};
