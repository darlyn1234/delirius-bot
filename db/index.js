const _0x55b40d = _0x5904;
function _0x5c1c() {
  const _0xfe959c = [
    "error",
    "verbose",
    "groupManage",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20afk\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupId\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timestamp\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20reason\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(jid,\x20groupId)\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "configHandler",
    "then",
    "database.db",
    "INSERT\x20INTO\x20afk\x20(jid,\x20groupId,\x20groupName,\x20timestamp,\x20reason)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(jid,\x20groupId)\x20DO\x20UPDATE\x20SET\x20timestamp\x20=\x20excluded.timestamp,\x20reason\x20=\x20excluded.reason",
    "keys",
    "get",
    "SELECT\x20*\x20FROM\x20config",
    "SELECT\x20*\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "441196JZIoQf",
    "catch",
    "SELECT\x20*\x20FROM\x20",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20groups\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antilink\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mute\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leveling\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewonce\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20games\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pokemon\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20extranjeros\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antidelete\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20nsfw\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20raid\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20welcome_status\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20welcome_text\x20TEXT\x20DEFAULT\x20\x27🍟\x20Bienvenido/a\x20@user\x20al\x20grupo:\x20*{title}*\x20{foto}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leave_status\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leave_text\x20TEXT\x20DEFAULT\x20\x27*🧃\x20Adios*\x20@user\x20{foto}\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "SELECT\x20*\x20FROM\x20afk",
    "30360533FFxYoP",
    "SELECT\x20*\x20FROM\x20users",
    "Base\x20de\x20datos\x20SQLite\x20conectada.",
    "\x20=\x20?\x20WHERE\x20id\x20=\x20?",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20users\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20name\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20profile\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20level\x20INTEGER\x20DEFAULT\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20balance\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20time\x20TEXT\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20now\x20TEXT\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20xp\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20banned\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20bloq\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20warning\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20married_boolean\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20married_id\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20mine\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20gold\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20diamonds\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20three\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20palm\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20pines\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fish\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20marucha\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20squid\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20apple\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20orange\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20lemon\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20mine_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fished_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fell_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20harvest_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20bank\x20INTEGER\x20DEFAULT\x200\x0a\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20",
    "message",
    "statistics",
    "UPDATE\x20stats\x20SET\x20count\x20=\x20count\x20+\x20?\x20WHERE\x20prop\x20=\x20?",
    "\x20=\x20?",
    "UPDATE\x20config\x20SET\x20",
    "sqlite3",
    "1237236YpWnDQ",
    "log",
    "run",
    "all",
    "AFK",
    "count",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20stats\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20prop\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20count\x20INTEGER\x20DEFAULT\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "Database",
    "forEach",
    "update",
    "4185444DYlLEy",
    "map",
    "info",
    "4023812LQuovG",
    "INSERT\x20INTO\x20users\x20(id,\x20name,\x20profile,\x20level,\x20balance,\x20time,\x20now,\x20xp,\x20banned,\x20bloq,\x20warning,\x20married_boolean,\x20married_id,\x20mine,\x20gold,\x20diamonds,\x20three,\x20palm,\x20pines,\x20fish,\x20marucha,\x20squid,\x20apple,\x20orange,\x20lemon,\x20mine_time,\x20fished_time,\x20fell_time,\x20harvest_time,\x20bank)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?)",
    "DELETE\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "SELECT\x20count\x20FROM\x20stats\x20WHERE\x20prop\x20=\x20?",
    "1736328nTiSSr",
    "UPDATE\x20users\x20SET\x20",
    "changes",
    "6050260RCPNhf",
    "SELECT\x201\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
  ];
  _0x5c1c = function () {
    return _0xfe959c;
  };
  return _0x5c1c();
}
(function (_0x42d8fb, _0x525e5a) {
  const _0x1efa97 = _0x5904,
    _0x45322c = _0x42d8fb();
  while (!![]) {
    try {
      const _0x2f6582 =
        parseInt(_0x1efa97(0x1d3)) / 0x1 +
        -parseInt(_0x1efa97(0x1b1)) / 0x2 +
        -parseInt(_0x1efa97(0x1bb)) / 0x3 +
        -parseInt(_0x1efa97(0x1be)) / 0x4 +
        -parseInt(_0x1efa97(0x1c5)) / 0x5 +
        parseInt(_0x1efa97(0x1c2)) / 0x6 +
        parseInt(_0x1efa97(0x1d8)) / 0x7;
      if (_0x2f6582 === _0x525e5a) break;
      else _0x45322c["push"](_0x45322c["shift"]());
    } catch (_0x2ea9d4) {
      _0x45322c["push"](_0x45322c["shift"]());
    }
  }
})(_0x5c1c, 0xcc990);
const sqlite3 = require(_0x55b40d(0x1b0))[_0x55b40d(0x1c8)](),
  path = require("path"),
  dbPath = path["join"](__dirname, _0x55b40d(0x1cd)),
  db = new sqlite3[_0x55b40d(0x1b8)](dbPath, (_0x19962f) => {
    const _0x2615c3 = _0x55b40d;
    _0x19962f
      ? console[_0x2615c3(0x1c7)](
          "Error\x20al\x20abrir\x20la\x20base\x20de\x20datos",
          _0x19962f[_0x2615c3(0x1dd)],
        )
      : (console[_0x2615c3(0x1b2)](_0x2615c3(0x1da)),
        db[_0x2615c3(0x1b3)](_0x2615c3(0x1b7)),
        db[_0x2615c3(0x1b3)](_0x2615c3(0x1d6)),
        db[_0x2615c3(0x1b3)](_0x2615c3(0x1ca)),
        db[_0x2615c3(0x1b3)](
          "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20config\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20session_id\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20removeBG\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20musixMatch\x20TEXT\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
        ),
        db[_0x2615c3(0x1b3)](_0x2615c3(0x1dc)));
  });
function _0x5904(_0x8f5d90, _0x59d340) {
  const _0x5c1c1e = _0x5c1c();
  return (
    (_0x5904 = function (_0x59049a, _0x266ba8) {
      _0x59049a = _0x59049a - 0x1ae;
      let _0x409c16 = _0x5c1c1e[_0x59049a];
      return _0x409c16;
    }),
    _0x5904(_0x8f5d90, _0x59d340)
  );
}
(exports[_0x55b40d(0x1cb)] = {
  get: async () => {
    return new Promise((_0x34296a, _0x34db74) => {
      const _0x36ecf2 = _0x5904;
      db[_0x36ecf2(0x1d0)](_0x36ecf2(0x1d1), [], (_0x5d267f, _0x132d78) => {
        if (_0x5d267f) _0x34db74(_0x5d267f);
        else _0x34296a(_0x132d78 || {});
      });
    });
  },
  update: async (_0x91b224, _0x26a08f) => {
    return new Promise((_0x17ac86, _0x2fbf2b) => {
      const _0x2474a9 = _0x5904;
      db[_0x2474a9(0x1b3)](
        _0x2474a9(0x1af) + _0x91b224 + _0x2474a9(0x1ae),
        [_0x26a08f],
        function (_0x5d3297) {
          const _0xab84cb = _0x2474a9;
          if (_0x5d3297) _0x2fbf2b(_0x5d3297);
          else _0x17ac86(this[_0xab84cb(0x1c4)] > 0x0);
        },
      );
    });
  },
}),
  (exports[_0x55b40d(0x1de)] = async (_0x129214, _0x5f5370 = 0x1) => {
    return new Promise((_0x1bb43a, _0x387699) => {
      const _0x27b922 = _0x5904;
      db["get"](_0x27b922(0x1c1), [_0x129214], (_0x2a959c, _0x48288e) => {
        const _0x3901af = _0x27b922;
        if (_0x2a959c) _0x387699(_0x2a959c);
        !_0x48288e
          ? db["run"](
              "INSERT\x20INTO\x20stats\x20(prop,\x20count)\x20VALUES\x20(?,\x20?)",
              [_0x129214, 0x0],
              (_0x5271bd) => {
                const _0x582c6a = _0x5904;
                if (_0x5271bd) _0x387699(_0x5271bd);
                else
                  db[_0x582c6a(0x1b3)](
                    _0x582c6a(0x1df),
                    [_0x5f5370, _0x129214],
                    (_0x32ec54) => {
                      if (_0x32ec54) _0x387699(_0x32ec54);
                      else _0x1bb43a(!![]);
                    },
                  );
              },
            )
          : db[_0x3901af(0x1b3)](
              "UPDATE\x20stats\x20SET\x20count\x20=\x20count\x20+\x20?\x20WHERE\x20prop\x20=\x20?",
              [_0x5f5370, _0x129214],
              (_0x382394) => {
                if (_0x382394) _0x387699(_0x382394);
                else _0x1bb43a(!![]);
              },
            );
      });
    });
  }),
  (exports[_0x55b40d(0x1bd)] = async (_0x919e14) => {
    return new Promise((_0x2e09ac, _0x46c186) => {
      const _0x4db53a = _0x5904;
      db[_0x4db53a(0x1b4)](
        _0x4db53a(0x1d5) + _0x919e14,
        [],
        (_0x4a52e2, _0x4c9f57) => {
          const _0x62e60 = _0x4db53a;
          if (_0x4a52e2) _0x46c186(_0x4a52e2);
          else {
            const _0x40ba06 = {};
            _0x4c9f57[_0x62e60(0x1b9)]((_0x2d1b53) => {
              const _0x2e7882 = _0x62e60;
              _0x40ba06[_0x2d1b53["prop"]] = _0x2d1b53[_0x2e7882(0x1b6)];
            }),
              _0x2e09ac({ stats: _0x40ba06 });
          }
        },
      );
    });
  }),
  (exports[_0x55b40d(0x1c9)] = {
    add: async (_0xaa7d2d, _0x3b76b0) => {
      return new Promise((_0x3e0c48, _0x1931cc) => {
        const _0x442eda = _0x5904;
        db[_0x442eda(0x1b3)](
          "INSERT\x20INTO\x20groups\x20(id,\x20groupName)\x20VALUES\x20(?,\x20?)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(id)\x20DO\x20NOTHING",
          [_0xaa7d2d, _0x3b76b0],
          (_0x54a273) => {
            if (_0x54a273) _0x1931cc(_0x54a273);
            else _0x3e0c48(!![]);
          },
        );
      });
    },
    update: async (_0x24dfab, _0x5c3330) => {
      return new Promise((_0x8543db, _0x111d4e) => {
        const _0x46b496 = _0x5904,
          _0x15a2aa = Object["keys"](_0x5c3330);
        let _0x30cead = _0x15a2aa[_0x46b496(0x1bc)]((_0x525f64) => {
          return new Promise((_0x294a93, _0x2e08fe) => {
            const _0xd7945c = _0x5904;
            db["run"](
              "UPDATE\x20groups\x20SET\x20" + _0x525f64 + _0xd7945c(0x1db),
              [_0x5c3330[_0x525f64], _0x24dfab],
              (_0x53935a) => {
                if (_0x53935a) _0x2e08fe(_0x53935a);
                else _0x294a93(!![]);
              },
            );
          });
        });
        Promise[_0x46b496(0x1b4)](_0x30cead)
          ["then"](() => _0x8543db(!![]))
          [_0x46b496(0x1d4)](_0x111d4e);
      });
    },
    get: async (_0x262ad3) => {
      return new Promise((_0x30aa42, _0x5ca994) => {
        const _0x4360c5 = _0x5904;
        db[_0x4360c5(0x1d0)](
          "SELECT\x20*\x20FROM\x20groups\x20WHERE\x20id\x20=\x20?",
          [_0x262ad3],
          (_0x245110, _0x535c85) => {
            if (_0x245110) _0x5ca994(_0x245110);
            else _0x30aa42(_0x535c85 || {});
          },
        );
      });
    },
  }),
  (exports[_0x55b40d(0x1b5)] = {
    add: async (_0x3386aa, _0x2aa25e, _0x3dc98b, _0xa90de4, _0x202ef3) => {
      return new Promise((_0x24e548, _0x1e145d) => {
        const _0x1d7716 = _0x5904;
        db[_0x1d7716(0x1b3)](
          _0x1d7716(0x1ce),
          [_0x3386aa, _0x2aa25e, _0x3dc98b, _0xa90de4, _0x202ef3],
          (_0x1452bf) => {
            if (_0x1452bf) _0x1e145d(_0x1452bf);
            else _0x24e548(!![]);
          },
        );
      });
    },
    check: async (_0x2be9eb, _0x40937d) => {
      return new Promise((_0x5739b1, _0x9b541c) => {
        const _0x566b86 = _0x5904;
        db[_0x566b86(0x1d0)](
          _0x566b86(0x1c6),
          [_0x2be9eb, _0x40937d],
          (_0xa76cd6, _0x47750f) => {
            if (_0xa76cd6) _0x9b541c(_0xa76cd6);
            else _0x5739b1(!!_0x47750f);
          },
        );
      });
    },
    get: async (_0x1525a8, _0x1b9638) => {
      return new Promise((_0x5f4a5d, _0x2f85d3) => {
        const _0x428c4e = _0x5904;
        db[_0x428c4e(0x1d0)](
          _0x428c4e(0x1d2),
          [_0x1525a8, _0x1b9638],
          (_0x34f818, _0x36a96b) => {
            if (_0x34f818) _0x2f85d3(_0x34f818);
            else _0x5f4a5d(_0x36a96b || {});
          },
        );
      });
    },
    delete: async (_0x4606da, _0x23edc6) => {
      return new Promise((_0x32e38d, _0x1a6bec) => {
        const _0xae19c6 = _0x5904;
        db[_0xae19c6(0x1b3)](
          _0xae19c6(0x1c0),
          [_0x4606da, _0x23edc6],
          function (_0x22e2a4) {
            const _0x1f64de = _0xae19c6;
            if (_0x22e2a4) _0x1a6bec(_0x22e2a4);
            else _0x32e38d(this[_0x1f64de(0x1c4)] > 0x0);
          },
        );
      });
    },
    getAll: async () => {
      return new Promise((_0x5f34f6, _0x426647) => {
        const _0x3d5823 = _0x5904;
        db[_0x3d5823(0x1b4)](_0x3d5823(0x1d7), [], (_0x61447c, _0x2d6a4a) => {
          if (_0x61447c) _0x426647(_0x61447c);
          else _0x5f34f6(_0x2d6a4a || []);
        });
      });
    },
  }),
  (exports["Users"] = {
    add: async (
      _0x56dc63,
      _0x29e681,
      _0x5a9e9d = null,
      _0x565b91 = 0x0,
      _0x5029dc = 0x0,
      _0x535bd9 = 0x0,
      _0x16aed6 = 0x0,
      _0x987424 = 0x0,
      _0x146c66 = ![],
      _0x1cbe38 = ![],
      _0x2d2970 = ![],
      _0x570fd8 = ![],
      _0x38d3c1 = null,
      _0x4f129e = 0x0,
      _0x30681b = 0x0,
      _0x17fbf9 = 0x0,
      _0x1a1bd5 = 0x0,
      _0x3313ee = 0x0,
      _0x55a8c5 = 0x0,
      _0x380763 = 0x0,
      _0x215080 = 0x0,
      _0x19efb1 = 0x0,
      _0x5c42cb = 0x0,
      _0x652295 = 0x0,
      _0xb3992e = 0x0,
      _0x2b62d2 = 0x0,
      _0x14108f = 0x0,
      _0xdd772a = 0x0,
      _0x22badc = 0x0,
      _0x5b6b54 = 0x0,
    ) => {
      return new Promise((_0x596264, _0xc5ee7c) => {
        const _0x30d422 = _0x5904;
        db[_0x30d422(0x1d0)](
          "SELECT\x20*\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
          [_0x56dc63],
          (_0x520455, _0x183519) => {
            const _0x2519b0 = _0x30d422;
            if (_0x520455) _0xc5ee7c(_0x520455);
            else
              _0x183519
                ? _0x596264(![])
                : db["run"](
                    _0x2519b0(0x1bf),
                    [
                      _0x56dc63,
                      _0x29e681,
                      _0x5a9e9d,
                      _0x565b91,
                      _0x5029dc,
                      _0x535bd9,
                      _0x16aed6,
                      _0x987424,
                      _0x146c66,
                      _0x1cbe38,
                      _0x2d2970,
                      _0x570fd8,
                      _0x38d3c1,
                      _0x4f129e,
                      _0x30681b,
                      _0x17fbf9,
                      _0x1a1bd5,
                      _0x3313ee,
                      _0x55a8c5,
                      _0x380763,
                      _0x215080,
                      _0x19efb1,
                      _0x5c42cb,
                      _0x652295,
                      _0xb3992e,
                      _0x2b62d2,
                      _0x14108f,
                      _0xdd772a,
                      _0x22badc,
                      _0x5b6b54,
                    ],
                    (_0x260ffc) => {
                      if (_0x260ffc) _0xc5ee7c(_0x260ffc);
                      else _0x596264(!![]);
                    },
                  );
          },
        );
      });
    },
    get: async (_0x16da16) => {
      return new Promise((_0xf11852, _0x1f26fb) => {
        db["get"](
          "SELECT\x20*\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
          [_0x16da16],
          (_0x4c1342, _0x46cd38) => {
            if (_0x4c1342) _0x1f26fb(_0x4c1342);
            else _0xf11852(_0x46cd38 || {});
          },
        );
      });
    },
    update: async (_0x1a1480, _0x30fcdc) => {
      return new Promise((_0x5e1aed, _0x404975) => {
        const _0x4b2ab0 = _0x5904,
          _0x2c26ac = Object[_0x4b2ab0(0x1cf)](_0x30fcdc);
        let _0x2b434e = _0x2c26ac["map"]((_0x16a8bb) => {
          return new Promise((_0x1ede1f, _0x3eaeaa) => {
            const _0x3802ae = _0x5904,
              _0x551316 =
                typeof _0x30fcdc[_0x16a8bb] === "boolean"
                  ? _0x30fcdc[_0x16a8bb]
                    ? 0x1
                    : 0x0
                  : _0x30fcdc[_0x16a8bb];
            db[_0x3802ae(0x1b3)](
              _0x3802ae(0x1c3) + _0x16a8bb + _0x3802ae(0x1db),
              [_0x551316, _0x1a1480],
              (_0xdbbd87) => {
                if (_0xdbbd87) _0x3eaeaa(_0xdbbd87);
                else _0x1ede1f(!![]);
              },
            );
          });
        });
        Promise["all"](_0x2b434e)
          [_0x4b2ab0(0x1cc)](() => _0x5e1aed(!![]))
          ["catch"](_0x404975);
      });
    },
    delete: async (_0x2f28b7) => {
      return new Promise((_0x198a20, _0x90f52b) => {
        const _0x48c7bb = _0x5904;
        db[_0x48c7bb(0x1b3)](
          "DELETE\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
          [_0x2f28b7],
          function (_0x289da8) {
            const _0x2fef34 = _0x48c7bb;
            if (_0x289da8) _0x90f52b(_0x289da8);
            else _0x198a20(this[_0x2fef34(0x1c4)] > 0x0);
          },
        );
      });
    },
    all: async () => {
      return new Promise((_0x2ee17d, _0x59bb72) => {
        const _0x12be60 = _0x5904;
        db[_0x12be60(0x1b4)](_0x12be60(0x1d9), [], (_0x44f13f, _0x1df7f3) => {
          if (_0x44f13f) _0x59bb72(_0x44f13f);
          else _0x2ee17d(_0x1df7f3 || []);
        });
      });
    },
    ban: async (_0x18f484) => {
      const _0x413c54 = _0x55b40d;
      return this[_0x413c54(0x1ba)](_0x18f484, { banned: !![] });
    },
    unban: async (_0x56c97d) => {
      const _0x4de24b = _0x55b40d;
      return this[_0x4de24b(0x1ba)](_0x56c97d, { banned: ![] });
    },
    block: async (_0x3f49d5) => {
      return this["update"](_0x3f49d5, { bloq: !![] });
    },
    unblock: async (_0x4666d6) => {
      const _0x3e5fa7 = _0x55b40d;
      return this[_0x3e5fa7(0x1ba)](_0x4666d6, { bloq: ![] });
    },
  });
