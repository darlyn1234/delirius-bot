const _0x5f565b = _0x461f;
(function (_0x484820, _0x27ba5) {
  const _0xbeec0f = _0x461f,
    _0x5e66e8 = _0x484820();
  while (!![]) {
    try {
      const _0x2661db =
        (-parseInt(_0xbeec0f(0x153)) / 0x1) *
          (parseInt(_0xbeec0f(0x1b4)) / 0x2) +
        (parseInt(_0xbeec0f(0x1cd)) / 0x3) *
          (-parseInt(_0xbeec0f(0x17f)) / 0x4) +
        parseInt(_0xbeec0f(0x1ef)) / 0x5 +
        (parseInt(_0xbeec0f(0x145)) / 0x6) *
          (parseInt(_0xbeec0f(0x1a9)) / 0x7) +
        (-parseInt(_0xbeec0f(0x173)) / 0x8) *
          (-parseInt(_0xbeec0f(0x169)) / 0x9) +
        (-parseInt(_0xbeec0f(0x181)) / 0xa) *
          (parseInt(_0xbeec0f(0x144)) / 0xb) +
        parseInt(_0xbeec0f(0x1c2)) / 0xc;
      if (_0x2661db === _0x27ba5) break;
      else _0x5e66e8["push"](_0x5e66e8["shift"]());
    } catch (_0xbc208a) {
      _0x5e66e8["push"](_0x5e66e8["shift"]());
    }
  }
})(_0x4804, 0xd782c),
  process["on"](_0x5f565b(0x185), console["error"]);
const {
    default: makeWASocket,
    DisconnectReason,
    Browsers,
    isJidGroup,
    makeInMemoryStore,
    jidNormalizedUser,
    fetchLatestBaileysVersion,
    getContentType,
    delay,
    isJidStatusBroadcast,
    useMultiFileAuthState,
    makeCacheableSignalKeyStore,
    jidDecode,
  } = require(_0x5f565b(0x19f)),
  { Boom } = require(_0x5f565b(0x128)),
  moment = require(_0x5f565b(0x1e3)),
  _ = require(_0x5f565b(0x18a)),
  pino = require(_0x5f565b(0x19c)),
  NodeCache = require(_0x5f565b(0x14d)),
  gradient = require("gradient-string");
let package = require(_0x5f565b(0x147));
function _0x461f(_0x1ac6e1, _0x3390ac) {
  const _0x48045e = _0x4804();
  return (
    (_0x461f = function (_0x461f83, _0x28392b) {
      _0x461f83 = _0x461f83 - 0x127;
      let _0x1898a1 = _0x48045e[_0x461f83];
      return _0x1898a1;
    }),
    _0x461f(_0x1ac6e1, _0x3390ac)
  );
}
const config = require(_0x5f565b(0x12e)),
  msgRetryCounterMap = {},
  store = makeInMemoryStore({
    logger: pino()[_0x5f565b(0x151)]({
      level: _0x5f565b(0x17e),
      stream: _0x5f565b(0x13f),
    }),
  }),
  { color, bgColor, msgs, pluginLoader, Scandir } = require(_0x5f565b(0x187)),
  { Serialize } = require(_0x5f565b(0x177)),
  { statistics, groupManage, Users } = require("./db"),
  start = async () => {
    const _0x301a9d = _0x5f565b;
    let _0x442361 = pluginLoader(_0x301a9d(0x165)),
      _0x35dd66 = pluginLoader(_0x301a9d(0x1ca));
    const _0x48658b = Object[_0x301a9d(0x18d)](_0x442361, _0x35dd66),
      { version: _0x39413d, isLatest: _0x329bbd } =
        await fetchLatestBaileysVersion();
    console["log"](
      color(_0x301a9d(0x1c0), _0x301a9d(0x1a2)),
      _0x301a9d(0x1a5),
      color("" + package["version"], _0x301a9d(0x167)),
    ),
      console["log"](
        color(_0x301a9d(0x1c0), "cyan"),
        _0x301a9d(0x16d),
        color(_0x39413d[_0x301a9d(0x160)]("."), _0x301a9d(0x18e)),
        "Is\x20Latest\x20:",
        color("" + _0x329bbd, "#f5af19"),
      ),
      console["log"](
        color(_0x301a9d(0x1c0), _0x301a9d(0x1a2)),
        _0x301a9d(0x13e) +
          color(
            Object[_0x301a9d(0x171)](_0x48658b)[_0x301a9d(0x12d)],
            _0x301a9d(0x18e),
          ) +
          _0x301a9d(0x196) +
          color(Scandir(_0x301a9d(0x14b))[_0x301a9d(0x12d)], _0x301a9d(0x18f)),
      ),
      console[_0x301a9d(0x164)](
        color("[SYS]", _0x301a9d(0x1a2)),
        "Client\x20loaded\x20with\x20" +
          color(
            Object[_0x301a9d(0x171)](store[_0x301a9d(0x15b)])["length"],
            "#009FF0",
          ) +
          "\x20contacts,\x20" +
          (color(store[_0x301a9d(0x16a)][_0x301a9d(0x12d)], _0x301a9d(0x167)) +
            _0x301a9d(0x12a)) +
          (color(
            Object[_0x301a9d(0x171)](store[_0x301a9d(0x1b9)])[_0x301a9d(0x12d)],
            _0x301a9d(0x167),
          ) +
            _0x301a9d(0x1e6)) +
          (color(
            (Date[_0x301a9d(0x138)]() - Date[_0x301a9d(0x138)]()) / 0x3e8,
            "#38ef7d",
          ) +
            "s"),
      );
    const { state: _0x9df91f, saveCreds: _0x5710c5 } =
        await useMultiFileAuthState(config[_0x301a9d(0x159)]),
      _0x24d5c5 = makeWASocket({
        version: _0x39413d,
        printQRInTerminal: !![],
        logger: pino({ level: _0x301a9d(0x17e) }),
        msgRetryCounterMap: msgRetryCounterMap,
        auth: {
          creds: _0x9df91f[_0x301a9d(0x188)],
          keys: makeCacheableSignalKeyStore(
            _0x9df91f[_0x301a9d(0x171)],
            pino({ level: _0x301a9d(0x175) })["child"]({ level: "fatal" }),
          ),
        },
        browser: ["delirius-md", _0x301a9d(0x18b), _0x301a9d(0x135)],
        mediaCache: new NodeCache({
          stdTTL: 0x3c * 0x5,
          useClones: ![],
          deleteOnExpire: !![],
        }),
        linkPreviewImageThumbnailWidth: 0x190,
        generateHighQualityLinkPreview: !![],
        defaultQueryTimeoutMs: undefined,
        userDevicesCache: new NodeCache({ stdTTL: 0x0, checkperiod: 0x0 }),
        waWebSocketUrl: _0x301a9d(0x16f),
      });
    (global[_0x301a9d(0x1b8)] = _0x24d5c5),
      _0x24d5c5["ev"]["on"](_0x301a9d(0x1c8), async (_0x405a27) => {
        const _0x5ad4d0 = _0x301a9d;
        global["qr"] !== _0x405a27["qr"] && (global["qr"] = _0x405a27["qr"]);
        const { connection: _0x177fde, lastDisconnect: _0x1a6468 } = _0x405a27;
        if (_0x177fde === _0x5ad4d0(0x1b6))
          console[_0x5ad4d0(0x164)](
            color(_0x5ad4d0(0x1c0), _0x5ad4d0(0x154)),
            color(moment()[_0x5ad4d0(0x1ea)](_0x5ad4d0(0x1d8)), "#A1FFCE"),
            color(
              package[_0x5ad4d0(0x14f)] + "\x20is\x20Authenticating...",
              _0x5ad4d0(0x1d2),
            ),
          );
        else {
          if (_0x177fde === _0x5ad4d0(0x162)) {
            const _0x147bb5 = (_0x3741cd) =>
                console[_0x5ad4d0(0x164)](
                  color(_0x5ad4d0(0x1c0), _0x5ad4d0(0x154)),
                  color(
                    moment()[_0x5ad4d0(0x1ea)](_0x5ad4d0(0x1d8)),
                    "#A1FFCE",
                  ),
                  color(_0x3741cd, _0x5ad4d0(0x146)),
                ),
              _0x523eb7 = new Boom(_0x1a6468?.[_0x5ad4d0(0x15e)])?.["output"][
                "statusCode"
              ];
            console[_0x5ad4d0(0x164)](_0x1a6468[_0x5ad4d0(0x15e)]);
            if (_0x523eb7 === DisconnectReason[_0x5ad4d0(0x182)])
              _0x147bb5(_0x5ad4d0(0x1b2) + session + _0x5ad4d0(0x136)), start();
            else {
              if (_0x523eb7 === DisconnectReason[_0x5ad4d0(0x148)])
                _0x147bb5(_0x5ad4d0(0x1c9)), start();
              else {
                if (_0x523eb7 === DisconnectReason[_0x5ad4d0(0x1b5)])
                  _0x147bb5(_0x5ad4d0(0x1b0)), start();
                else {
                  if (_0x523eb7 === DisconnectReason["connectionReplaced"])
                    _0x147bb5(
                      "Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First",
                    ),
                      process[_0x5ad4d0(0x1ec)]();
                  else {
                    if (_0x523eb7 === DisconnectReason["loggedOut"])
                      _0x147bb5(_0x5ad4d0(0x1bc) + session + _0x5ad4d0(0x157)),
                        process[_0x5ad4d0(0x1ec)]();
                    else {
                      if (_0x523eb7 === DisconnectReason[_0x5ad4d0(0x1d1)])
                        _0x147bb5(_0x5ad4d0(0x199)), start();
                      else
                        _0x523eb7 === DisconnectReason["timedOut"]
                          ? (_0x147bb5(
                              "Connection\x20timedOut,\x20reconnecting...",
                            ),
                            start())
                          : (console[_0x5ad4d0(0x164)](_0x1a6468["error"]),
                            start());
                    }
                  }
                }
              }
            }
          } else
            _0x177fde === "open" &&
              console[_0x5ad4d0(0x164)](
                color(_0x5ad4d0(0x1c0), _0x5ad4d0(0x154)),
                color(moment()["format"]("DD/MM/YY\x20HH:mm:ss"), "#A1FFCE"),
                color(
                  package[_0x5ad4d0(0x14f)] + _0x5ad4d0(0x140),
                  _0x5ad4d0(0x18e),
                ),
              );
        }
      }),
      _0x24d5c5["ev"]["on"](_0x301a9d(0x172), _0x5710c5),
      _0x24d5c5["ev"]["on"](_0x301a9d(0x1d7), async (_0x3dff9c) => {
        const _0x14a40c = _0x301a9d;
        try {
          if (!_0x3dff9c[_0x14a40c(0x1b9)]) return;
          const _0x3f948c = _0x3dff9c[_0x14a40c(0x1b9)][0x0];
          _0x3f948c[_0x14a40c(0x141)]["fromMe"]
            ? statistics(_0x14a40c(0x176))
            : statistics(_0x14a40c(0x19e));
          config[_0x14a40c(0x1f1)] &&
            (await _0x24d5c5[_0x14a40c(0x13d)]([_0x3f948c[_0x14a40c(0x141)]]));
          if (
            _0x3f948c[_0x14a40c(0x141)] &&
            isJidStatusBroadcast(_0x3f948c[_0x14a40c(0x141)]["remoteJid"])
          )
            return;
          const _0x1cdccd = _0x3f948c[_0x14a40c(0x141)][_0x14a40c(0x1df)];
          let _0x1419d6 = (_0x24d5c5[_0x14a40c(0x149)] = getContentType(
            _0x3f948c[_0x14a40c(0x16e)],
          ));
          Serialize(_0x24d5c5, _0x3f948c);
          let _0x546f8c = (_0x24d5c5["timestamp"] =
            _0x3f948c[_0x14a40c(0x19b)]);
          const _0x1fe6e0 =
            _0x1419d6 === _0x14a40c(0x198)
              ? _0x3f948c[_0x14a40c(0x16e)][_0x14a40c(0x198)]
              : _0x1419d6 == _0x14a40c(0x127)
                ? _0x3f948c[_0x14a40c(0x16e)][_0x14a40c(0x127)]["caption"]
                : _0x1419d6 == "videoMessage"
                  ? _0x3f948c[_0x14a40c(0x16e)][_0x14a40c(0x1ba)]["caption"]
                  : _0x1419d6 == _0x14a40c(0x1a1)
                    ? _0x3f948c["message"][_0x14a40c(0x1a1)][_0x14a40c(0x1d3)]
                    : _0x1419d6 == _0x14a40c(0x1bf)
                      ? _0x3f948c[_0x14a40c(0x16e)]["buttonsResponseMessage"][
                          _0x14a40c(0x16b)
                        ]
                      : _0x1419d6 == _0x14a40c(0x12b)
                        ? _0x3f948c["message"][_0x14a40c(0x12b)][
                            "singleSelectReply"
                          ][_0x14a40c(0x197)]
                        : _0x1419d6 == _0x14a40c(0x186)
                          ? _0x3f948c[_0x14a40c(0x16e)][_0x14a40c(0x186)][
                              _0x14a40c(0x1b1)
                            ]
                          : _0x1419d6 === _0x14a40c(0x1ee)
                            ? _0x3f948c["message"][_0x14a40c(0x12b)][
                                _0x14a40c(0x143)
                              ][_0x14a40c(0x197)] ||
                              _0x3f948c["message"][_0x14a40c(0x1bf)][
                                _0x14a40c(0x16b)
                              ] ||
                              _0x3f948c[_0x14a40c(0x1d3)]
                            : _0x1419d6 == _0x14a40c(0x1cc)
                              ? _0x3f948c[_0x14a40c(0x16e)]["stickerMessage"][
                                  _0x14a40c(0x184)
                                ][_0x14a40c(0x1d0)](_0x14a40c(0x1e5))
                              : _0x1419d6 == _0x14a40c(0x1a3)
                                ? _0x3f948c[_0x14a40c(0x16e)][_0x14a40c(0x1a3)][
                                    "caption"
                                  ]
                                : _0x1419d6 == _0x14a40c(0x190)
                                  ? JSON[_0x14a40c(0x1e0)](
                                      _0x3f948c["message"][
                                        "interactiveResponseMessage"
                                      ][_0x14a40c(0x13c)][_0x14a40c(0x183)],
                                    )["id"]
                                  : "";
          let _0x51afdb = isJidGroup(_0x3f948c[_0x14a40c(0x179)]),
            _0x58b2ea = _0x3f948c[_0x14a40c(0x158)];
          const _0x39459d = config["owner"][_0x14a40c(0x1aa)](_0x58b2ea);
          let _0x563369 = (_0x24d5c5[_0x14a40c(0x1d6)] =
            _0x3f948c[_0x14a40c(0x19d)]);
          const _0x2d8072 = jidNormalizedUser(_0x24d5c5["user"]["id"]);
          let _0x12717a = _0x51afdb
              ? (await _0x24d5c5[_0x14a40c(0x139)](_0x3f948c["chat"])) !==
                undefined
                ? await _0x24d5c5[_0x14a40c(0x139)](_0x3f948c[_0x14a40c(0x179)])
                : await store[_0x14a40c(0x142)](
                    _0x3f948c[_0x14a40c(0x179)],
                    _0x24d5c5,
                  )
              : {},
            _0x2e90b7 = _0x51afdb ? _0x12717a["participants"] : [],
            _0x25c099 = _0x2e90b7[_0x14a40c(0x130)](
              (_0x3f3184) => _0x3f3184[_0x14a40c(0x193)] !== null,
            )["map"]((_0x381e12) => _0x381e12["id"]),
            _0x105840 = _0x39459d || _0x25c099[_0x14a40c(0x1aa)](_0x58b2ea),
            _0x113281 = _0x25c099["includes"](_0x2d8072),
            _0x2f7a21 = _0x51afdb ? _0x12717a[_0x14a40c(0x1c6)] : "",
            _0x1f066d = _0x51afdb
              ? groupManage[_0x14a40c(0x1ed)](_0x3f948c["chat"]) == undefined
                ? groupManage["add"](_0x3f948c[_0x14a40c(0x179)], _0x2f7a21)
                : groupManage["get"](_0x3f948c[_0x14a40c(0x179)])
              : {};
          const _0x6b29 = /^[./~!#%^&=\,;:()]/[_0x14a40c(0x1e2)](_0x1fe6e0)
              ? _0x1fe6e0["match"](/^[./~!#%^&=\,;:()]/gi)
              : "#",
            _0xb9780d = _0x1fe6e0[_0x14a40c(0x1db)](
              _0x1fe6e0[_0x14a40c(0x133)]("\x20") + 0x1,
            ),
            _0x41bcbf = _0x1fe6e0[_0x14a40c(0x1bd)]()
              [_0x14a40c(0x15d)](/ +/)
              [_0x14a40c(0x1da)](0x1),
            _0x44f514 = [],
            _0x5dd451 = (_0x24d5c5[_0x14a40c(0x1ae)] =
              _0x1fe6e0[_0x14a40c(0x156)](_0x6b29)),
            _0x5552ce = (_0x24d5c5[_0x14a40c(0x1b7)] = _0x5dd451
              ? _0x1fe6e0[_0x14a40c(0x1da)](0x1)
                  [_0x14a40c(0x1bd)]()
                  [_0x14a40c(0x15d)](/ +/)
                  [_0x14a40c(0x1cb)]()
                  ["toLowerCase"]()
              : null);
          let _0x418d38 = _0x41bcbf["length"] !== 0x0 ? _0x41bcbf[0x0] : "";
          for (let _0x2185db of _0x41bcbf) {
            if (_0x2185db[_0x14a40c(0x156)]("--"))
              _0x44f514[_0x14a40c(0x132)](
                _0x2185db[_0x14a40c(0x1da)](0x2)[_0x14a40c(0x1a8)](),
              );
          }
          const _0x199233 = (_0x2f4961) => {
            const _0x5e193b = _0x14a40c;
            !_0x51afdb &&
              console[_0x5e193b(0x164)](
                bgColor(
                  color(_0x5e193b(0x174), _0x5e193b(0x134)),
                  _0x5e193b(0x18e),
                ),
                color(
                  moment(_0x546f8c * 0x3e8)[_0x5e193b(0x1ea)](_0x5e193b(0x1d8)),
                  _0x5e193b(0x1ab),
                ),
                gradient["summer"]("[" + _0x2f4961 + "]"),
                bgColor(color(_0x1419d6, _0x5e193b(0x134)), _0x5e193b(0x1a2)),
                _0x5e193b(0x1e1),
                gradient[_0x5e193b(0x1d5)](_0x563369),
              ),
              _0x51afdb &&
                console[_0x5e193b(0x164)](
                  bgColor(color(_0x5e193b(0x174), _0x5e193b(0x134)), "#38ef7d"),
                  color(
                    moment(_0x546f8c * 0x3e8)[_0x5e193b(0x1ea)](
                      _0x5e193b(0x1d8),
                    ),
                    _0x5e193b(0x1ab),
                  ),
                  gradient[_0x5e193b(0x12c)]("[" + _0x2f4961 + "]"),
                  bgColor(color(_0x1419d6, _0x5e193b(0x134)), _0x5e193b(0x1a2)),
                  "~>\x20from",
                  gradient[_0x5e193b(0x1d5)](_0x563369),
                  "in",
                  gradient["fruit"](_0x2f7a21),
                );
          };
          let _0x424555 = bgColor(
            color(_0x1419d6, _0x14a40c(0x134)),
            _0x14a40c(0x14e),
          );
          !_0x5dd451 &&
            !_0x51afdb &&
            console[_0x14a40c(0x164)](
              _0x14a40c(0x1d9),
              color(
                moment(_0x546f8c * 0x3e8)[_0x14a40c(0x1ea)](_0x14a40c(0x1d8)),
                _0x14a40c(0x1ab),
              ),
              msgs(_0x3f948c[_0x14a40c(0x1d3)]),
              _0x14a40c(0x15c) + _0x424555 + "\x20from",
              color(_0x563369, _0x14a40c(0x18e)),
            );
          !_0x5dd451 &&
            _0x51afdb &&
            console[_0x14a40c(0x164)](
              _0x14a40c(0x1d9),
              color(
                moment(_0x546f8c * 0x3e8)[_0x14a40c(0x1ea)](_0x14a40c(0x1d8)),
                _0x14a40c(0x1ab),
              ),
              msgs(_0x3f948c[_0x14a40c(0x1d3)]),
              _0x14a40c(0x15c) + _0x424555 + _0x14a40c(0x137),
              color(_0x563369, _0x14a40c(0x18e)),
              "in",
              gradient[_0x14a40c(0x1a7)](_0x2f7a21),
            );
          _0x5dd451 &&
            !_0x51afdb &&
            console[_0x14a40c(0x164)](
              color("[CMD]"),
              color(
                moment(_0x546f8c * 0x3e8)["format"](_0x14a40c(0x1d8)),
                _0x14a40c(0x1ab),
              ),
              color(_0x5552ce + "\x20[" + _0x41bcbf[_0x14a40c(0x12d)] + "]"),
              color("" + msgs(_0x1fe6e0), "cyan"),
              "~>\x20from",
              gradient[_0x14a40c(0x1dc)](_0x563369, _0x14a40c(0x1cf)),
            );
          _0x5dd451 &&
            _0x51afdb &&
            console[_0x14a40c(0x164)](
              color(_0x14a40c(0x17d)),
              color(
                moment(_0x546f8c * 0x3e8)[_0x14a40c(0x1ea)](
                  "DD/MM/YY\x20HH:mm:ss",
                ),
                _0x14a40c(0x1ab),
              ),
              color(_0x5552ce + "\x20[" + _0x41bcbf[_0x14a40c(0x12d)] + "]"),
              color("" + msgs(_0x1fe6e0), _0x14a40c(0x1a2)),
              _0x14a40c(0x1e1),
              gradient[_0x14a40c(0x1dc)](_0x563369),
              "in",
              gradient[_0x14a40c(0x1a0)](_0x2f7a21),
            );
          _0x51afdb &&
            groupManage[_0x14a40c(0x195)](
              _0x3f948c[_0x14a40c(0x179)],
              _0x2f7a21,
            );
          if (_0x5dd451 && _0x51afdb) {
            const _0x2fe35d = _0x563369 || _0x14a40c(0x1bb);
            Users[_0x14a40c(0x195)](
              _0x3f948c[_0x14a40c(0x158)],
              _0x2fe35d,
              null,
              0x0,
              0x0,
              0x0,
              0x0,
              0x0,
              ![],
              ![],
              ![],
            )
              [_0x14a40c(0x1e4)](() => {
                const _0x31e2e3 = _0x14a40c;
                Users[_0x31e2e3(0x1ed)](_0x3f948c[_0x31e2e3(0x158)])
                  [_0x31e2e3(0x1e4)]((_0x3b6153) => {
                    const _0x40a3fb = _0x31e2e3;
                    _0x3b6153 &&
                      _0x3b6153[_0x40a3fb(0x14f)] !== _0x2fe35d &&
                      Users[_0x40a3fb(0x129)](_0x3f948c[_0x40a3fb(0x158)], {
                        name: _0x2fe35d,
                      })
                        [_0x40a3fb(0x1e4)](() =>
                          console["log"]("Nombre\x20actualizado"),
                        )
                        [_0x40a3fb(0x1d4)]((_0x436e72) =>
                          console[_0x40a3fb(0x164)](
                            new Error(_0x436e72)[_0x40a3fb(0x16e)],
                          ),
                        );
                  })
                  [_0x31e2e3(0x1d4)]((_0x46040c) => {
                    const _0x464aa1 = _0x31e2e3;
                    console[_0x464aa1(0x15e)](
                      _0x464aa1(0x19a),
                      new Error(_0x46040c)[_0x464aa1(0x16e)],
                    );
                  });
              })
              ["catch"]((_0x177abb) => {
                const _0x238303 = _0x14a40c;
                console[_0x238303(0x15e)](
                  _0x238303(0x163),
                  new Error(_0x177abb)[_0x238303(0x16e)],
                );
              });
          }
          _0x5dd451 &&
            config[_0x14a40c(0x170)] &&
            (await _0x24d5c5[_0x14a40c(0x1eb)](_0x1cdccd),
            await _0x24d5c5[_0x14a40c(0x1ad)](_0x14a40c(0x170), _0x1cdccd));
          if (_0x5dd451 && !_0x39459d && config[_0x14a40c(0x1c5)]) return;
          if (_0x1fe6e0[_0x14a40c(0x156)](">")) {
            if (!_0x39459d) return;
            try {
              let _0x1f307b = await eval(_0x1fe6e0[_0x14a40c(0x1da)](0x2));
              if (typeof _0x1f307b !== _0x14a40c(0x1c1))
                _0x1f307b = require(_0x14a40c(0x17b))[_0x14a40c(0x1de)](
                  _0x1f307b,
                );
              await _0x3f948c["reply"](_0x1f307b[_0x14a40c(0x1d0)]());
            } catch (_0x3be9db) {
              await _0x3f948c[_0x14a40c(0x168)](String(_0x3be9db));
            }
          }
          for (let _0x386ddc in _0x48658b) {
            let _0x4d1fd4 = _0x48658b[_0x386ddc];
            if (
              _0x4d1fd4[_0x14a40c(0x1b7)] &&
              _0x4d1fd4[_0x14a40c(0x1b7)][_0x14a40c(0x1aa)](_0x5552ce) &&
              !_0x3f948c[_0x14a40c(0x13a)]
            ) {
              let _0x564fdf =
                _0x4d1fd4[_0x14a40c(0x1b7)] instanceof Array
                  ? _0x4d1fd4["cmd"][_0x14a40c(0x1aa)](_0x5552ce)
                  : _0x4d1fd4[_0x14a40c(0x1b7)] instanceof String
                    ? _0x4d1fd4[_0x14a40c(0x1b7)] == _0x5552ce
                    : ![];
              if (!_0x564fdf) continue;
              if (
                typeof _0x4d1fd4[_0x14a40c(0x193)] != "undefined" &&
                _0x4d1fd4["admin"] &&
                !_0x105840 &&
                _0x51afdb
              ) {
                _0x3f948c[_0x14a40c(0x168)](
                  config[_0x14a40c(0x1af)]["notGroupAdmin"],
                );
                continue;
              } else {
                if (
                  typeof _0x4d1fd4["botAdmin"] != _0x14a40c(0x14c) &&
                  _0x4d1fd4[_0x14a40c(0x1ce)] &&
                  !_0x113281 &&
                  _0x51afdb
                ) {
                  _0x3f948c[_0x14a40c(0x168)](
                    config[_0x14a40c(0x1af)][_0x14a40c(0x1dd)],
                  );
                  continue;
                } else {
                  if (
                    typeof _0x4d1fd4[_0x14a40c(0x1e9)] != _0x14a40c(0x14c) &&
                    _0x4d1fd4[_0x14a40c(0x1e9)] &&
                    !_0x51afdb
                  ) {
                    _0x3f948c[_0x14a40c(0x168)](
                      config["MSG"][_0x14a40c(0x189)],
                    );
                    continue;
                  } else {
                    if (
                      typeof _0x4d1fd4[_0x14a40c(0x18c)] != _0x14a40c(0x14c) &&
                      _0x4d1fd4[_0x14a40c(0x18c)] &&
                      !_0x39459d
                    ) {
                      _0x3f948c[_0x14a40c(0x168)](
                        config[_0x14a40c(0x1af)][_0x14a40c(0x18c)],
                      );
                      continue;
                    } else {
                      if (
                        typeof _0x4d1fd4[_0x14a40c(0x1ac)] ==
                          _0x14a40c(0x14c) &&
                        _0x51afdb &&
                        _0x1f066d[_0x14a40c(0x1be)]
                      ) {
                        _0x3f948c[_0x14a40c(0x168)](_0x14a40c(0x166));
                        continue;
                      }
                    }
                  }
                }
              }
              await _0x4d1fd4[_0x14a40c(0x17c)](_0x3f948c, _0x24d5c5, {
                body: _0x1fe6e0,
                prefix: _0x6b29,
                args: _0x41bcbf,
                arg: _0xb9780d,
                cmd: _0x5552ce,
                url: _0x418d38,
                flags: _0x44f514,
                msg: _0x3dff9c,
                plugins: _0x48658b,
              }),
                statistics("cmd");
              break;
            } else {
              if (
                _0x4d1fd4[_0x14a40c(0x12f)] instanceof RegExp &&
                _0x4d1fd4[_0x14a40c(0x12f)][_0x14a40c(0x1e2)](_0x1fe6e0) &&
                !_0x3f948c[_0x14a40c(0x13a)]
              ) {
                if (
                  typeof _0x4d1fd4[_0x14a40c(0x1ac)] == _0x14a40c(0x14c) &&
                  _0x51afdb &&
                  _0x1f066d[_0x14a40c(0x1be)]
                ) {
                  _0x3f948c[_0x14a40c(0x168)](_0x14a40c(0x166));
                  continue;
                } else
                  _0x199233(
                    _0x1fe6e0[_0x14a40c(0x152)](
                      _0x4d1fd4[_0x14a40c(0x12f)],
                    )[0x0],
                  ),
                    await _0x4d1fd4["exec"](_0x3f948c, _0x24d5c5, {
                      body: _0x1fe6e0,
                      logEvent: _0x199233,
                      prefix: _0x6b29,
                      args: _0x41bcbf,
                      cmd: _0x5552ce,
                      url: _0x418d38,
                    }),
                    statistics(_0x14a40c(0x150));
              } else {
                if (
                  _0x4d1fd4[_0x14a40c(0x156)] &&
                  _0x1fe6e0[_0x14a40c(0x156)](_0x4d1fd4[_0x14a40c(0x156)]) &&
                  !_0x3f948c[_0x14a40c(0x13a)]
                ) {
                  if (
                    typeof _0x4d1fd4[_0x14a40c(0x18c)] != "undefined" &&
                    _0x4d1fd4[_0x14a40c(0x18c)] &&
                    !_0x39459d
                  )
                    return;
                  if (
                    typeof _0x4d1fd4[_0x14a40c(0x193)] != "undefined" &&
                    _0x4d1fd4[_0x14a40c(0x193)] &&
                    !_0x105840
                  )
                    return;
                  if (
                    typeof _0x4d1fd4["botAdmin"] != "undefined" &&
                    _0x4d1fd4[_0x14a40c(0x1ce)] &&
                    !_0x113281
                  )
                    return;
                  if (
                    typeof _0x4d1fd4[_0x14a40c(0x1e9)] != _0x14a40c(0x14c) &&
                    _0x4d1fd4["group"] &&
                    !_0x51afdb
                  )
                    return;
                  if (
                    typeof _0x4d1fd4[_0x14a40c(0x1ac)] == "undefined" &&
                    _0x51afdb &&
                    _0x1f066d["mute"]
                  )
                    return;
                  await _0x4d1fd4[_0x14a40c(0x17c)](_0x3f948c, _0x24d5c5, {
                    body: _0x1fe6e0,
                    prefix: _0x6b29,
                    args: _0x41bcbf,
                    arg: _0xb9780d,
                    cmd: _0x5552ce,
                    url: _0x418d38,
                    flags: _0x44f514,
                    msg: _0x3dff9c,
                    plugins: _0x48658b,
                  }),
                    statistics("cmd");
                } else {
                  if (_0x4d1fd4["groupEvent"] && _0x51afdb) {
                    if (
                      typeof _0x4d1fd4[_0x14a40c(0x18c)] != _0x14a40c(0x14c) &&
                      _0x4d1fd4[_0x14a40c(0x18c)] &&
                      !_0x39459d
                    )
                      return _0x3f948c["reply"](
                        config[_0x14a40c(0x1af)][_0x14a40c(0x18c)],
                      );
                    if (
                      typeof _0x4d1fd4["admin"] != _0x14a40c(0x14c) &&
                      _0x4d1fd4[_0x14a40c(0x193)] &&
                      _0x51afdb &&
                      !_0x105840
                    )
                      return _0x3f948c[_0x14a40c(0x168)](
                        config[_0x14a40c(0x1af)][_0x14a40c(0x1b3)],
                      );
                    if (
                      typeof _0x4d1fd4[_0x14a40c(0x1ce)] != _0x14a40c(0x14c) &&
                      _0x4d1fd4[_0x14a40c(0x1ce)] &&
                      _0x1f066d[_0x14a40c(0x191)] &&
                      _0x51afdb &&
                      !_0x113281
                    )
                      return _0x3f948c[_0x14a40c(0x168)](
                        config[_0x14a40c(0x1af)][_0x14a40c(0x1dd)],
                      );
                    if (
                      typeof _0x4d1fd4["group"] != _0x14a40c(0x14c) &&
                      _0x4d1fd4[_0x14a40c(0x1e9)] &&
                      !_0x51afdb
                    )
                      return _0x3f948c["reply"](
                        config[_0x14a40c(0x1af)]["groupMsg"],
                      );
                    if (
                      typeof _0x4d1fd4["groupMuteAllowed"] == "undefined" &&
                      _0x51afdb &&
                      _0x1f066d[_0x14a40c(0x1be)]
                    )
                      return;
                    await _0x4d1fd4[_0x14a40c(0x17c)](_0x3f948c, _0x24d5c5, {
                      body: _0x1fe6e0,
                      prefix: _0x6b29,
                      args: _0x41bcbf,
                      arg: _0xb9780d,
                      cmd: _0x5552ce,
                      url: _0x418d38,
                      flags: _0x44f514,
                      msg: _0x3dff9c,
                      plugins: _0x48658b,
                      formattedTitle: _0x2f7a21,
                    });
                  }
                }
              }
            }
          }
        } catch (_0xca205f) {
          console["log"](
            color(_0x14a40c(0x1a6), _0x14a40c(0x1c3)),
            color(
              moment()[_0x14a40c(0x1ea)](_0x14a40c(0x1d8)),
              _0x14a40c(0x1ab),
            ),
            _0xca205f,
          );
        }
      }),
      _0x24d5c5["ws"]["on"]("CB:call", async (_0x3b3440) => {
        const _0x2f6499 = _0x301a9d;
        if (_0x3b3440["content"][0x0]["tag"] == _0x2f6499(0x194)) {
          const _0x38bcaf =
              _0x3b3440[_0x2f6499(0x15a)][0x0][_0x2f6499(0x16c)][
                _0x2f6499(0x1a4)
              ],
            {
              version: _0x2991ab,
              platform: _0x412547,
              notify: _0xb94015,
              t: _0x869c36,
            } = _0x3b3440[_0x2f6499(0x16c)],
            _0x3fc2cf =
              _0x2f6499(0x17a) +
              (_0xb94015 || _0x2f6499(0x1c4)) +
              _0x2f6499(0x155) +
              moment["tz"]("America/Lima")[_0x2f6499(0x1ea)](_0x2f6499(0x1f0)) +
              _0x2f6499(0x1e7);
          await delay(0xbb8);
          for (
            let _0x485930 = 0x0;
            _0x485930 < config[_0x2f6499(0x18c)][_0x2f6499(0x12d)];
            _0x485930++
          ) {
            await _0x24d5c5[_0x2f6499(0x178)](
              _0x38bcaf,
              config["owner"][_0x485930][_0x2f6499(0x15d)](S_WHATSAPP_NET)[0x0],
              "" +
                (config[_0x2f6499(0x18c)][_0x2f6499(0x12d)] < 0x1
                  ? _0x2f6499(0x1c7)
                  : _0x2f6499(0x131) + (_0x485930 + 0x1)),
            );
          }
          await delay(0x1b58),
            await _0x24d5c5[_0x2f6499(0x180)](_0x38bcaf, { text: _0x3fc2cf })[
              _0x2f6499(0x1e4)
            ](async () => {
              const _0x3ea2e3 = _0x2f6499;
              await _0x24d5c5[_0x3ea2e3(0x13b)](_0x38bcaf, "block");
            });
        }
      });
    const _0x3c3c33 = (_0x1bb47e) => {
      const _0x561521 = _0x301a9d;
      if (!_0x1bb47e) return _0x1bb47e;
      if (/:\d+@/gi[_0x561521(0x1e2)](_0x1bb47e)) {
        const _0x439eaa = jidDecode(_0x1bb47e) || {};
        return _0x439eaa[_0x561521(0x192)] && _0x439eaa[_0x561521(0x1e8)]
          ? _0x439eaa[_0x561521(0x192)] + "@" + _0x439eaa["server"]
          : _0x1bb47e;
      }
      return _0x1bb47e;
    };
    _0x24d5c5["ev"]["on"](_0x301a9d(0x15f), async (_0x4d063f) => {
      const _0x103ab1 = _0x301a9d;
      try {
        for (const _0x3bac90 of _0x4d063f) {
          const _0x5f44ed = _0x3c3c33(_0x3bac90["id"]);
          Users[_0x103ab1(0x14a)]()[_0x103ab1(0x12d)] > 0x1 &&
            Users[_0x103ab1(0x1ed)](_0x5f44ed) &&
            Users[_0x103ab1(0x129)](_0x5f44ed, {
              name: _0x3bac90[_0x103ab1(0x161)],
            });
        }
      } catch (_0x4a65f0) {
        console[_0x103ab1(0x164)](new Error(_0x4a65f0)[_0x103ab1(0x16e)]);
      }
    });
  };
start()[_0x5f565b(0x1d4)](() => start());
function _0x4804() {
  const _0x7af309 = [
    "wss://web.whatsapp.com/ws/chat?ED=CAIICA",
    "composing",
    "keys",
    "creds.update",
    "24ToiBgL",
    "[EXEC]",
    "fatal",
    "msgSent",
    "./utils/simple",
    "sendContact",
    "chat",
    "Vaya\x20_",
    "util",
    "exec",
    "[CMD]",
    "silent",
    "39364rtRfwA",
    "sendMessage",
    "10501530SsOGAr",
    "badSession",
    "paramsJson",
    "fileSha256",
    "uncaughtException",
    "templateButtonReplyMessage",
    "./utils",
    "creds",
    "groupMsg",
    "lodash",
    "Safari",
    "owner",
    "assign",
    "#38ef7d",
    "#f5af19",
    "interactiveResponseMessage",
    "antilink",
    "user",
    "admin",
    "offer",
    "add",
    "\x20of\x20",
    "selectedRowId",
    "conversation",
    "Restart\x20required,\x20restarting...",
    "Error\x20al\x20obtener\x20el\x20usuario:",
    "messageTimestamp",
    "pino",
    "pushName",
    "msgRecv",
    "@whiskeysockets/baileys",
    "fruit",
    "extendedTextMessage",
    "cyan",
    "documentMessage",
    "call-creator",
    "Package\x20Version",
    "[ERROR]",
    "morning",
    "toLowerCase",
    "479129zAsRhR",
    "includes",
    "#A1FFCE",
    "groupMuteAllowed",
    "sendPresenceUpdate",
    "isCmd",
    "MSG",
    "Connection\x20lost,\x20reconnecting....",
    "selectedId",
    "Bad\x20session\x20file,\x20delete\x20",
    "notGroupAdmin",
    "13288rlkdEr",
    "connectionLost",
    "connecting",
    "cmd",
    "client",
    "messages",
    "videoMessage",
    "dls",
    "Device\x20Logged\x20Out,\x20Please\x20Delete\x20",
    "trim",
    "mute",
    "buttonsResponseMessage",
    "[SYS]",
    "string",
    "7819992oIYpQu",
    "red",
    "usuario\x20del\x20bot",
    "onlyowner",
    "subject",
    "Owner",
    "connection.update",
    "Connection\x20closed,\x20reconnecting....",
    "../handlers/events",
    "shift",
    "stickerMessage",
    "222pGQuBa",
    "botAdmin",
    "magenta",
    "toString",
    "restartRequired",
    "#f12711",
    "text",
    "catch",
    "cristal",
    "pushname",
    "messages.upsert",
    "DD/MM/YY\x20HH:mm:ss",
    "[MSG]",
    "slice",
    "substring",
    "teen",
    "botNotAdmin",
    "inspect",
    "remoteJid",
    "parse",
    "~>\x20from",
    "test",
    "moment-timezone",
    "then",
    "base64",
    "\x20messages\x20in\x20",
    "*\x20,\x20por\x20lo\x20que\x20sera\x20bloqueado\x20automáticamente.\x0a🚩\x20Por\x20favor,\x20chatee\x20con\x20el\x20propietario\x20del\x20bot\x20para\x20desbloquearlo.",
    "server",
    "group",
    "format",
    "presenceSubscribe",
    "exit",
    "get",
    "messageContextInfo",
    "1486765QtSAAW",
    "LLL",
    "autoRead",
    "imageMessage",
    "./node_modules/@hapi/boom",
    "update",
    "\x20chats,\x20",
    "listResponseMessage",
    "summer",
    "length",
    "./utils/config.json",
    "regex",
    "filter",
    "Owner\x20",
    "push",
    "indexOf",
    "black",
    "2.0.0",
    "\x20and\x20run\x20again",
    "\x20from",
    "now",
    "groupMetadata",
    "isBot",
    "updateBlockStatus",
    "nativeFlowResponseMessage",
    "readMessages",
    "Loaded\x20Plugins\x20",
    "store",
    "\x20is\x20now\x20Connected...",
    "key",
    "fetchGroupMetadata",
    "singleSelectReply",
    "11GzlPDB",
    "114GyBnDM",
    "#f64f59",
    "./package.json",
    "connectionClosed",
    "msgType",
    "all",
    "./handlers",
    "undefined",
    "node-cache",
    "#FAFFD1",
    "name",
    "autodownload",
    "child",
    "match",
    "157AozUaP",
    "#009FFF",
    "_\x20,\x20haz\x20llamado\x20al\x20bot\x20*",
    "startsWith",
    "\x20and\x20Scan\x20Again.",
    "sender",
    "SESSION_NAME",
    "content",
    "contacts",
    "~>\x20",
    "split",
    "error",
    "contacts.update",
    "join",
    "notify",
    "close",
    "Error\x20al\x20agregar\x20usuario:",
    "log",
    "../handlers/commands",
    "*🚩\x20El\x20bot\x20esta\x20Muteado\x20/\x20Deshabilitado\x20en\x20este\x20grupo.*",
    "#009FF0",
    "reply",
    "4364145bVASUj",
    "chats",
    "selectedButtonId",
    "attrs",
    "WA\x20Version",
    "message",
  ];
  _0x4804 = function () {
    return _0x7af309;
  };
  return _0x4804();
}
