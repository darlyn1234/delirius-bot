const _0x19b52a = _0x4142;
function _0x4142(_0x3ba8b9, _0x146afa) {
  const _0x77a6ea = _0x77a6();
  return (
    (_0x4142 = function (_0x414235, _0x1b0361) {
      _0x414235 = _0x414235 - 0x17c;
      let _0x40f708 = _0x77a6ea[_0x414235];
      return _0x40f708;
    }),
    _0x4142(_0x3ba8b9, _0x146afa)
  );
}
function _0x77a6() {
  const _0x594932 = [
    "\x20\x20\x20\x20>\x20*Xp*:\x20[",
    "axios",
    "length",
    "data",
    "top",
    "get",
    "balance",
    "sender",
    "*---\x20T\x20O\x20P\x20\x20G\x20L\x20O\x20B\x20A\x20L*\x0a\x0a*Tus\x20recursos\x20@",
    "*\x0a\x20\x20›\x20*Balance*:\x20",
    "../../../db",
    "result",
    ".\x20@",
    "/tools/country?text=",
    "groupMsg",
    "2033532fZJLIU",
    "10707FbMGAi",
    "reply",
    "MSG",
    "all",
    "958258cDrBjS",
    "6102252rtNzry",
    "\x20de\x20",
    "sort",
    "48MQdqqN",
    "../../../utils/config.json",
    "\x0a\x20\x20›\x20*Xp*:\x20",
    "chat",
    "join",
    "games",
    "ceil",
    "exports",
    "*🚩\x20Los\x20minijuegos\x20han\x20sido\x20desactivados\x20en\x20este\x20grupo.*",
    "\x20>\x20*",
    "catch",
    "map",
    "name",
    "470GpTheS",
    "split",
    "754670OewQMw",
    "isGroup",
    "emoji",
    "266166HYtZUI",
    "*🚩\x20No\x20hay\x20usuarios\x20registrados\x20para\x20mostrar\x20el\x20top.*",
    "@s.whatsapp.net",
    "../../../utils/index",
    "\x20\x20\x20\x20>\x20*Nacionalidad*:\x20",
    "push",
    "1305028OorfCR",
    "BASE_URL",
    "\x20\x20\x20\x20>\x20*Balance*:\x20",
  ];
  _0x77a6 = function () {
    return _0x594932;
  };
  return _0x77a6();
}
(function (_0x30df36, _0x53f779) {
  const _0x486d40 = _0x4142,
    _0x41a0af = _0x30df36();
  while (!![]) {
    try {
      const _0x4397e7 =
        -parseInt(_0x486d40(0x19a)) / 0x1 +
        (-parseInt(_0x486d40(0x195)) / 0x2) *
          (-parseInt(_0x486d40(0x180)) / 0x3) +
        parseInt(_0x486d40(0x1a0)) / 0x4 +
        parseInt(_0x486d40(0x197)) / 0x5 +
        -parseInt(_0x486d40(0x185)) / 0x6 +
        (-parseInt(_0x486d40(0x184)) / 0x7) *
          (-parseInt(_0x486d40(0x188)) / 0x8) +
        -parseInt(_0x486d40(0x17f)) / 0x9;
      if (_0x4397e7 === _0x53f779) break;
      else _0x41a0af["push"](_0x41a0af["shift"]());
    } catch (_0x5678e1) {
      _0x41a0af["push"](_0x41a0af["shift"]());
    }
  }
})(_0x77a6, 0x99592);
const { groupManage, Users } = require(_0x19b52a(0x1ad)),
  MSG_CNG = require(_0x19b52a(0x189)),
  { milesToComas, ConvertMiles } = require(_0x19b52a(0x19d)),
  { default: axios } = require(_0x19b52a(0x1a4)),
  parseMention = (_0x2caa47) =>
    [..._0x2caa47["matchAll"](/@?([0-9]{5,16}|0)/g)][_0x19b52a(0x193)](
      (_0x2c7196) => _0x2c7196[0x1] + _0x19b52a(0x19c),
    );
module[_0x19b52a(0x18f)] = {
  tags: [_0x19b52a(0x18d)],
  cmd: ["topglobal", _0x19b52a(0x1a7)],
  help: ["topglobal"],
  exec: async (_0x1f3404, _0x4af955, { args: _0x57a4d0 }) => {
    const _0xc40d05 = _0x19b52a,
      _0x516c06 = await Users[_0xc40d05(0x1a8)](_0x1f3404[_0xc40d05(0x1aa)]),
      _0x38ebef = await groupManage[_0xc40d05(0x1a8)](
        _0x1f3404[_0xc40d05(0x18b)],
      );
    if (!_0x1f3404[_0xc40d05(0x198)])
      return _0x1f3404[_0xc40d05(0x181)](
        MSG_CNG[_0xc40d05(0x182)][_0xc40d05(0x17e)],
      );
    if (!_0x38ebef?.["games"])
      return _0x1f3404[_0xc40d05(0x181)](_0xc40d05(0x190));
    const _0x15556a = await Users[_0xc40d05(0x183)]();
    if (!_0x15556a || _0x15556a[_0xc40d05(0x1a5)] === 0x0)
      return _0x1f3404[_0xc40d05(0x181)](_0xc40d05(0x19b));
    const _0x506dc6 = parseInt(_0x57a4d0[_0xc40d05(0x18c)]("\x20")) || 0x1,
      _0x54d5a8 = 0xa,
      _0xb39bd5 = (_0x506dc6 - 0x1) * _0x54d5a8,
      _0x486f75 = _0xb39bd5 + _0x54d5a8;
    let _0x1cb728 = "";
    const _0x28c8f4 =
        "*🚩\x20TOP\x20GLOBAL\x20de\x20los\x20usuarios\x20con\x20más\x20dinero\x20acumulado\x20en\x20el\x20bot.*",
      _0x1027ba = [],
      _0x5f02bd = ["🥇", "🥈", "🥉"],
      _0x35a106 = _0x15556a[_0xc40d05(0x187)](
        (_0x9e447c, _0x580e27) =>
          _0x580e27[_0xc40d05(0x1a9)] - _0x9e447c[_0xc40d05(0x1a9)],
      );
    for (
      let _0x57995b = _0xb39bd5;
      _0x57995b < _0x486f75 && _0x57995b < _0x35a106[_0xc40d05(0x1a5)];
      _0x57995b++
    ) {
      const _0x5be6bd = _0x35a106[_0x57995b],
        _0x30f813 = await axios["get"](
          MSG_CNG["BASE_URL"] + _0xc40d05(0x17d) + _0x5be6bd["id"],
        )[_0xc40d05(0x192)](() => ({
          data: { result: { name: "-", emoji: "🌍" } },
        })),
        _0x24dab3 = _0x57995b < 0x3 ? _0x5f02bd[_0x57995b] : "🍟";
      (_0x1cb728 +=
        _0x24dab3 +
        _0xc40d05(0x191) +
        (_0x57995b + 0x1) +
        _0xc40d05(0x17c) +
        _0x5be6bd["id"][_0xc40d05(0x196)]("@")[0x0] +
        "*\x0a"),
        (_0x1cb728 +=
          _0xc40d05(0x1a2) +
          milesToComas(_0x5be6bd[_0xc40d05(0x1a9)]) +
          "\x0a"),
        (_0x1cb728 += _0xc40d05(0x1a3) + _0x5be6bd["xp"] + "]\x0a"),
        (_0x1cb728 +=
          _0xc40d05(0x19e) +
          _0x30f813[_0xc40d05(0x1a6)]["result"][_0xc40d05(0x194)] +
          "\x20" +
          _0x30f813[_0xc40d05(0x1a6)][_0xc40d05(0x1ae)][_0xc40d05(0x199)] +
          "\x0a\x0a"),
        _0x1027ba[_0xc40d05(0x19f)](_0x5be6bd["id"]);
    }
    const _0x311fdd = await axios[_0xc40d05(0x1a8)](
        MSG_CNG[_0xc40d05(0x1a1)] +
          _0xc40d05(0x17d) +
          _0x1f3404[_0xc40d05(0x1aa)],
      )[_0xc40d05(0x192)](() => ({
        data: { result: { name: "-", emoji: "🌍" } },
      })),
      _0x3f108a = _0x516c06?.[_0xc40d05(0x1a9)] || 0x0,
      _0x4717ad = Math[_0xc40d05(0x18e)](
        _0x15556a[_0xc40d05(0x1a5)] / _0x54d5a8,
      ),
      _0x3d9070 =
        ">\x20*🌻\x20Página\x20" +
        _0x506dc6 +
        _0xc40d05(0x186) +
        _0x4717ad +
        "*",
      _0x5e220d =
        _0xc40d05(0x1ab) +
        _0x1f3404["sender"][_0xc40d05(0x196)]("@")[0x0] +
        _0xc40d05(0x1ac) +
        ConvertMiles(_0x3f108a) +
        _0xc40d05(0x18a) +
        _0x516c06?.["xp"] +
        "\x0a\x20\x20›\x20*Nacionalidad*:\x20" +
        _0x311fdd[_0xc40d05(0x1a6)]["result"][_0xc40d05(0x194)] +
        "\x20" +
        _0x311fdd["data"][_0xc40d05(0x1ae)][_0xc40d05(0x199)];
    _0x4af955["sendMessage"](
      _0x1f3404["chat"],
      {
        image: { url: "https://i.imgur.com/hrWJ1Al.jpeg" },
        caption:
          _0x5e220d +
          "\x0a" +
          _0x28c8f4 +
          "\x0a\x0a" +
          _0x1cb728 +
          "\x0a" +
          _0x3d9070,
        mentions: await parseMention(_0x5e220d + _0x1cb728),
      },
      { quoted: _0x1f3404 },
    );
  },
};
