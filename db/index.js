const _0x22a198 = _0x363e;
function _0xcb79() {
  const _0x2f1673 = [
    "1120008aQYeUu",
    "message",
    "2152595Tvuphb",
    "8724aeJydq",
    "map",
    "SELECT\x20*\x20FROM\x20users",
    "SELECT\x20*\x20FROM\x20groups\x20WHERE\x20id\x20=\x20?",
    "SELECT\x20*\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
    "changes",
    "Database",
    "verbose",
    "980XKMpTr",
    "SELECT\x201\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20config\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20session_id\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20removeBG\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20musixMatch\x20TEXT\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "SELECT\x20*\x20FROM\x20config",
    "get",
    "catch",
    "join",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20afk\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupId\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timestamp\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20reason\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(jid,\x20groupId)\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "Error\x20al\x20abrir\x20la\x20base\x20de\x20datos",
    "Base\x20de\x20datos\x20SQLite\x20conectada.",
    "811687Cxxzul",
    "12313791AmCBHU",
    "INSERT\x20INTO\x20groups\x20(id,\x20groupName)\x20VALUES\x20(?,\x20?)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(id)\x20DO\x20NOTHING",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20stats\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20prop\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20count\x20INTEGER\x20DEFAULT\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "all",
    "then",
    "groupManage",
    "keys",
    "database.db",
    "UPDATE\x20stats\x20SET\x20count\x20=\x20count\x20+\x20?\x20WHERE\x20prop\x20=\x20?",
    "7jucWOp",
    "statistics",
    "\x20=\x20?\x20WHERE\x20id\x20=\x20?",
    "path",
    "log",
    "run",
    "error",
    "DELETE\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "SELECT\x20*\x20FROM\x20afk",
    "prop",
    "forEach",
    "SELECT\x20*\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "5411136rrRwKZ",
    "info",
    "INSERT\x20INTO\x20afk\x20(jid,\x20groupId,\x20groupName,\x20timestamp,\x20reason)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(jid,\x20groupId)\x20DO\x20UPDATE\x20SET\x20timestamp\x20=\x20excluded.timestamp,\x20reason\x20=\x20excluded.reason",
    "count",
    "SELECT\x20count\x20FROM\x20stats\x20WHERE\x20prop\x20=\x20?",
    "UPDATE\x20groups\x20SET\x20",
    "UPDATE\x20config\x20SET\x20",
    "\x20=\x20?",
    "2080516ZWyNMp",
    "update",
    "configHandler",
    "UPDATE\x20users\x20SET\x20",
  ];
  _0xcb79 = function () {
    return _0x2f1673;
  };
  return _0xcb79();
}
(function (_0x118e60, _0x538f4e) {
  const _0x342598 = _0x363e,
    _0x144a0f = _0x118e60();
  while (!![]) {
    try {
      const _0x6e164f =
        -parseInt(_0x342598(0x162)) / 0x1 +
        -parseInt(_0x342598(0x149)) / 0x2 +
        (parseInt(_0x342598(0x150)) / 0x3) *
          (parseInt(_0x342598(0x158)) / 0x4) +
        -parseInt(_0x342598(0x14f)) / 0x5 +
        (parseInt(_0x342598(0x141)) / 0x6) *
          (parseInt(_0x342598(0x135)) / 0x7) +
        -parseInt(_0x342598(0x14d)) / 0x8 +
        parseInt(_0x342598(0x163)) / 0x9;
      if (_0x6e164f === _0x538f4e) break;
      else _0x144a0f["push"](_0x144a0f["shift"]());
    } catch (_0x247956) {
      _0x144a0f["push"](_0x144a0f["shift"]());
    }
  }
})(_0xcb79, 0x88bb2);
const sqlite3 = require("sqlite3")[_0x22a198(0x157)](),
  path = require(_0x22a198(0x138)),
  dbPath = path[_0x22a198(0x15e)](__dirname, _0x22a198(0x16a)),
  db = new sqlite3[_0x22a198(0x156)](dbPath, (_0x4a5a82) => {
    const _0x704762 = _0x22a198;
    _0x4a5a82
      ? console[_0x704762(0x13b)](_0x704762(0x160), _0x4a5a82[_0x704762(0x14e)])
      : (console[_0x704762(0x139)](_0x704762(0x161)),
        db[_0x704762(0x13a)](_0x704762(0x165)),
        db[_0x704762(0x13a)](
          "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20groups\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antilink\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mute\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leveling\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewonce\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20games\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pokemon\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20extranjeros\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antidelete\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20nsfw\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20welcome\x20TEXT\x20DEFAULT\x20\x27Welcome\x20@user\x20in\x20group\x20{title}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leave\x20TEXT\x20DEFAULT\x20\x27Goodbye\x20@user\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
        ),
        db[_0x704762(0x13a)](_0x704762(0x15f)),
        db[_0x704762(0x13a)](_0x704762(0x15a)),
        db[_0x704762(0x13a)](
          "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20users\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20name\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20profile\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20level\x20INTEGER\x20DEFAULT\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20balance\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20time\x20TEXT\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20now\x20TEXT\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20xp\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20banned\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20bloq\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20warning\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20married_boolean\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20married_id\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20mine\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20gold\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20diamonds\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20three\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20palm\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20pines\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fish\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20marucha\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20squid\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20apple\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20orange\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20lemon\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20mine_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fished_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fell_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20harvest_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20bank\x20INTEGER\x20DEFAULT\x200\x0a\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20",
        ));
  });
function _0x363e(_0x2b8413, _0x592bce) {
  const _0xcb79e5 = _0xcb79();
  return (
    (_0x363e = function (_0x363eef, _0xfc2c4f) {
      _0x363eef = _0x363eef - 0x134;
      let _0x4df451 = _0xcb79e5[_0x363eef];
      return _0x4df451;
    }),
    _0x363e(_0x2b8413, _0x592bce)
  );
}
(exports[_0x22a198(0x14b)] = {
  get: async () => {
    return new Promise((_0x138ea0, _0x5cdf7) => {
      const _0x5c25b1 = _0x363e;
      db["get"](_0x5c25b1(0x15b), [], (_0x317759, _0x1e0eb0) => {
        if (_0x317759) _0x5cdf7(_0x317759);
        else _0x138ea0(_0x1e0eb0 || {});
      });
    });
  },
  update: async (_0x178a64, _0x34e5b9) => {
    return new Promise((_0x477307, _0x153375) => {
      const _0xc27d45 = _0x363e;
      db["run"](
        _0xc27d45(0x147) + _0x178a64 + _0xc27d45(0x148),
        [_0x34e5b9],
        function (_0x57be62) {
          const _0x560ce4 = _0xc27d45;
          if (_0x57be62) _0x153375(_0x57be62);
          else _0x477307(this[_0x560ce4(0x155)] > 0x0);
        },
      );
    });
  },
}),
  (exports[_0x22a198(0x136)] = async (_0x475126, _0x3469ab = 0x1) => {
    return new Promise((_0x1a9994, _0x2ada63) => {
      const _0x3ec6f9 = _0x363e;
      db["get"](_0x3ec6f9(0x145), [_0x475126], (_0x5a75e9, _0x31f86f) => {
        const _0x202383 = _0x3ec6f9;
        if (_0x5a75e9) _0x2ada63(_0x5a75e9);
        !_0x31f86f
          ? db[_0x202383(0x13a)](
              "INSERT\x20INTO\x20stats\x20(prop,\x20count)\x20VALUES\x20(?,\x20?)",
              [_0x475126, 0x0],
              (_0x444335) => {
                const _0x542bbb = _0x202383;
                if (_0x444335) _0x2ada63(_0x444335);
                else
                  db[_0x542bbb(0x13a)](
                    _0x542bbb(0x134),
                    [_0x3469ab, _0x475126],
                    (_0xf773c9) => {
                      if (_0xf773c9) _0x2ada63(_0xf773c9);
                      else _0x1a9994(!![]);
                    },
                  );
              },
            )
          : db["run"](
              "UPDATE\x20stats\x20SET\x20count\x20=\x20count\x20+\x20?\x20WHERE\x20prop\x20=\x20?",
              [_0x3469ab, _0x475126],
              (_0x4562ca) => {
                if (_0x4562ca) _0x2ada63(_0x4562ca);
                else _0x1a9994(!![]);
              },
            );
      });
    });
  }),
  (exports[_0x22a198(0x142)] = async (_0x6362ef) => {
    return new Promise((_0x54b1b2, _0x275208) => {
      const _0x12b2b6 = _0x363e;
      db[_0x12b2b6(0x166)](
        "SELECT\x20*\x20FROM\x20" + _0x6362ef,
        [],
        (_0x246281, _0x303645) => {
          const _0x5e1521 = _0x12b2b6;
          if (_0x246281) _0x275208(_0x246281);
          else {
            const _0x5d9fd0 = {};
            _0x303645[_0x5e1521(0x13f)]((_0x1b8e4d) => {
              const _0x328e3b = _0x5e1521;
              _0x5d9fd0[_0x1b8e4d[_0x328e3b(0x13e)]] =
                _0x1b8e4d[_0x328e3b(0x144)];
            }),
              _0x54b1b2({ stats: _0x5d9fd0 });
          }
        },
      );
    });
  }),
  (exports[_0x22a198(0x168)] = {
    add: async (_0x11c7b8, _0xe1addc) => {
      return new Promise((_0x2e3477, _0x234102) => {
        const _0x21aa7c = _0x363e;
        db[_0x21aa7c(0x13a)](
          _0x21aa7c(0x164),
          [_0x11c7b8, _0xe1addc],
          (_0x55c77c) => {
            if (_0x55c77c) _0x234102(_0x55c77c);
            else _0x2e3477(!![]);
          },
        );
      });
    },
    update: async (_0xe73e8d, _0x6895d1) => {
      return new Promise((_0x8cddcf, _0x70a849) => {
        const _0x3efe35 = _0x363e,
          _0x3631d2 = Object[_0x3efe35(0x169)](_0x6895d1);
        let _0x31ae29 = _0x3631d2[_0x3efe35(0x151)]((_0x590e20) => {
          return new Promise((_0x2ecf61, _0x25e1c0) => {
            const _0x8d268e = _0x363e;
            db["run"](
              _0x8d268e(0x146) +
                _0x590e20 +
                "\x20=\x20?\x20WHERE\x20id\x20=\x20?",
              [_0x6895d1[_0x590e20], _0xe73e8d],
              (_0x59b3f8) => {
                if (_0x59b3f8) _0x25e1c0(_0x59b3f8);
                else _0x2ecf61(!![]);
              },
            );
          });
        });
        Promise[_0x3efe35(0x166)](_0x31ae29)
          [_0x3efe35(0x167)](() => _0x8cddcf(!![]))
          [_0x3efe35(0x15d)](_0x70a849);
      });
    },
    get: async (_0x48b23b) => {
      return new Promise((_0x1c83e9, _0x3bab22) => {
        const _0x423a13 = _0x363e;
        db[_0x423a13(0x15c)](
          _0x423a13(0x153),
          [_0x48b23b],
          (_0x2de295, _0x5e49bc) => {
            if (_0x2de295) _0x3bab22(_0x2de295);
            else _0x1c83e9(_0x5e49bc || {});
          },
        );
      });
    },
  }),
  (exports["AFK"] = {
    add: async (_0x3d9f1d, _0x274d18, _0xcfb439, _0x14218b, _0x1a435e) => {
      return new Promise((_0x13a4e8, _0x3762e0) => {
        const _0x1b766a = _0x363e;
        db["run"](
          _0x1b766a(0x143),
          [_0x3d9f1d, _0x274d18, _0xcfb439, _0x14218b, _0x1a435e],
          (_0x8e779) => {
            if (_0x8e779) _0x3762e0(_0x8e779);
            else _0x13a4e8(!![]);
          },
        );
      });
    },
    check: async (_0xf971c5, _0x286be6) => {
      return new Promise((_0x2a2607, _0x3030e9) => {
        const _0x11d13d = _0x363e;
        db[_0x11d13d(0x15c)](
          _0x11d13d(0x159),
          [_0xf971c5, _0x286be6],
          (_0xec5db3, _0x194af4) => {
            if (_0xec5db3) _0x3030e9(_0xec5db3);
            else _0x2a2607(!!_0x194af4);
          },
        );
      });
    },
    get: async (_0x2fa2f7, _0x4c6d8a) => {
      return new Promise((_0x50126c, _0x25009b) => {
        const _0x528c3a = _0x363e;
        db[_0x528c3a(0x15c)](
          _0x528c3a(0x140),
          [_0x2fa2f7, _0x4c6d8a],
          (_0x19cd98, _0x1a21e8) => {
            if (_0x19cd98) _0x25009b(_0x19cd98);
            else _0x50126c(_0x1a21e8 || {});
          },
        );
      });
    },
    delete: async (_0x39aa04, _0x232390) => {
      return new Promise((_0x3f227c, _0x253fa8) => {
        const _0x27e358 = _0x363e;
        db["run"](
          _0x27e358(0x13c),
          [_0x39aa04, _0x232390],
          function (_0x24e462) {
            const _0x4dda0a = _0x27e358;
            if (_0x24e462) _0x253fa8(_0x24e462);
            else _0x3f227c(this[_0x4dda0a(0x155)] > 0x0);
          },
        );
      });
    },
    getAll: async () => {
      return new Promise((_0x4690bd, _0x3f89b9) => {
        const _0x3fd314 = _0x363e;
        db["all"](_0x3fd314(0x13d), [], (_0x285ffa, _0x51c33b) => {
          if (_0x285ffa) _0x3f89b9(_0x285ffa);
          else _0x4690bd(_0x51c33b || []);
        });
      });
    },
  }),
  (exports["Users"] = {
    add: async (
      _0x539532,
      _0x409d71,
      _0x22371b = null,
      _0x3a4eac = 0x0,
      _0x4c4d5f = 0x0,
      _0x2e29c3 = 0x0,
      _0x12d6c5 = 0x0,
      _0x2f4e30 = 0x0,
      _0x580fc6 = ![],
      _0x5a79ca = ![],
      _0x4f78b6 = ![],
      _0x4502e6 = ![],
      _0x3ad88a = null,
      _0xbb4c9c = 0x0,
      _0x34fc6b = 0x0,
      _0x5de4ce = 0x0,
      _0x3fbf28 = 0x0,
      _0x523c34 = 0x0,
      _0x35cfe1 = 0x0,
      _0x50a0dc = 0x0,
      _0x549992 = 0x0,
      _0x40b82f = 0x0,
      _0x16dcaa = 0x0,
      _0x3da5f5 = 0x0,
      _0x5231f3 = 0x0,
      _0x36346f = 0x0,
      _0x1cd2d1 = 0x0,
      _0x20b66e = 0x0,
      _0x21ac8a = 0x0,
      _0x153924 = 0x0,
    ) => {
      return new Promise((_0x50f998, _0xe0a9c4) => {
        const _0x1f3564 = _0x363e;
        db["get"](_0x1f3564(0x154), [_0x539532], (_0x133947, _0x100396) => {
          const _0x681277 = _0x1f3564;
          if (_0x133947) _0xe0a9c4(_0x133947);
          else
            _0x100396
              ? _0x50f998(![])
              : db[_0x681277(0x13a)](
                  "INSERT\x20INTO\x20users\x20(id,\x20name,\x20profile,\x20level,\x20balance,\x20time,\x20now,\x20xp,\x20banned,\x20bloq,\x20warning,\x20married_boolean,\x20married_id,\x20mine,\x20gold,\x20diamonds,\x20three,\x20palm,\x20pines,\x20fish,\x20marucha,\x20squid,\x20apple,\x20orange,\x20lemon,\x20mine_time,\x20fished_time,\x20fell_time,\x20harvest_time,\x20bank)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?)",
                  [
                    _0x539532,
                    _0x409d71,
                    _0x22371b,
                    _0x3a4eac,
                    _0x4c4d5f,
                    _0x2e29c3,
                    _0x12d6c5,
                    _0x2f4e30,
                    _0x580fc6,
                    _0x5a79ca,
                    _0x4f78b6,
                    _0x4502e6,
                    _0x3ad88a,
                    _0xbb4c9c,
                    _0x34fc6b,
                    _0x5de4ce,
                    _0x3fbf28,
                    _0x523c34,
                    _0x35cfe1,
                    _0x50a0dc,
                    _0x549992,
                    _0x40b82f,
                    _0x16dcaa,
                    _0x3da5f5,
                    _0x5231f3,
                    _0x36346f,
                    _0x1cd2d1,
                    _0x20b66e,
                    _0x21ac8a,
                    _0x153924,
                  ],
                  (_0x50ea9b) => {
                    if (_0x50ea9b) _0xe0a9c4(_0x50ea9b);
                    else _0x50f998(!![]);
                  },
                );
        });
      });
    },
    get: async (_0x4bd0b5) => {
      return new Promise((_0x4f6ebb, _0x13c018) => {
        const _0x5b3420 = _0x363e;
        db[_0x5b3420(0x15c)](
          "SELECT\x20*\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
          [_0x4bd0b5],
          (_0x33018f, _0x3643e7) => {
            if (_0x33018f) _0x13c018(_0x33018f);
            else _0x4f6ebb(_0x3643e7 || {});
          },
        );
      });
    },
    update: async (_0x4393ab, _0x302131) => {
      return new Promise((_0x4bf498, _0x2b429f) => {
        const _0x1b9393 = _0x363e,
          _0x5840e2 = Object[_0x1b9393(0x169)](_0x302131);
        let _0x4cc84f = _0x5840e2["map"]((_0x3d7aef) => {
          return new Promise((_0x5c6268, _0x3b652d) => {
            const _0xb19fa9 = _0x363e,
              _0x10a1f4 =
                typeof _0x302131[_0x3d7aef] === "boolean"
                  ? _0x302131[_0x3d7aef]
                    ? 0x1
                    : 0x0
                  : _0x302131[_0x3d7aef];
            db[_0xb19fa9(0x13a)](
              _0xb19fa9(0x14c) + _0x3d7aef + _0xb19fa9(0x137),
              [_0x10a1f4, _0x4393ab],
              (_0x1f4fd5) => {
                if (_0x1f4fd5) _0x3b652d(_0x1f4fd5);
                else _0x5c6268(!![]);
              },
            );
          });
        });
        Promise[_0x1b9393(0x166)](_0x4cc84f)
          [_0x1b9393(0x167)](() => _0x4bf498(!![]))
          [_0x1b9393(0x15d)](_0x2b429f);
      });
    },
    delete: async (_0x137540) => {
      return new Promise((_0x14526f, _0x267b75) => {
        const _0x467328 = _0x363e;
        db[_0x467328(0x13a)](
          "DELETE\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
          [_0x137540],
          function (_0x54f491) {
            if (_0x54f491) _0x267b75(_0x54f491);
            else _0x14526f(this["changes"] > 0x0);
          },
        );
      });
    },
    all: async () => {
      return new Promise((_0x222357, _0x29c2ff) => {
        const _0x3b8c44 = _0x363e;
        db[_0x3b8c44(0x166)](_0x3b8c44(0x152), [], (_0x3e726e, _0x2e5caa) => {
          if (_0x3e726e) _0x29c2ff(_0x3e726e);
          else _0x222357(_0x2e5caa || []);
        });
      });
    },
    ban: async (_0x47d018) => {
      return this["update"](_0x47d018, { banned: !![] });
    },
    unban: async (_0x2034c4) => {
      const _0x1ac0a1 = _0x22a198;
      return this[_0x1ac0a1(0x14a)](_0x2034c4, { banned: ![] });
    },
    block: async (_0x4ae9ce) => {
      const _0x4ec5c0 = _0x22a198;
      return this[_0x4ec5c0(0x14a)](_0x4ae9ce, { bloq: !![] });
    },
    unblock: async (_0x5164e8) => {
      const _0xb0de54 = _0x22a198;
      return this[_0xb0de54(0x14a)](_0x5164e8, { bloq: ![] });
    },
  });
