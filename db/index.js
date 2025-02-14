const _0xeb39a1 = _0x2409;
function _0x16d4() {
  const _0x43704c = [
    "SELECT\x20*\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
    "keys",
    "database.db",
    "249597FgBwrz",
    "SELECT\x201\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "\x20=\x20?",
    "21159870IxbwZX",
    "2652782NdBHOh",
    "Users",
    "forEach",
    "42591ZfxUDf",
    "statistics",
    "DELETE\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
    "SELECT\x20*\x20FROM\x20users",
    "get",
    "join",
    "Error\x20al\x20abrir\x20la\x20base\x20de\x20datos",
    "SELECT\x20count\x20FROM\x20stats\x20WHERE\x20prop\x20=\x20?",
    "1494gYRVow",
    "path",
    "all",
    "UPDATE\x20stats\x20SET\x20count\x20=\x20count\x20+\x20?\x20WHERE\x20prop\x20=\x20?",
    "104wVrQDA",
    "SELECT\x20*\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "then",
    "1074397bGQxMy",
    "SELECT\x20*\x20FROM\x20groups\x20WHERE\x20id\x20=\x20?",
    "configHandler",
    "Base\x20de\x20datos\x20SQLite\x20conectada.",
    "172PxLQyj",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20config\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20session_id\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20removeBG\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20musixMatch\x20TEXT\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "INSERT\x20INTO\x20users\x20(id,\x20name,\x20profile,\x20level,\x20balance,\x20time,\x20now,\x20xp,\x20banned,\x20bloq,\x20warning,\x20married_boolean,\x20married_id,\x20mine,\x20gold,\x20diamonds,\x20three,\x20palm,\x20pines,\x20fish,\x20marucha,\x20squid,\x20apple,\x20orange,\x20lemon,\x20mine_time,\x20fished_time,\x20fell_time,\x20harvest_time,\x20bank)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?)",
    "UPDATE\x20config\x20SET\x20",
    "SELECT\x20*\x20FROM\x20",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20afk\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupId\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timestamp\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20reason\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(jid,\x20groupId)\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "Database",
    "\x20=\x20?\x20WHERE\x20id\x20=\x20?",
    "error",
    "map",
    "run",
    "verbose",
    "sqlite3",
    "SELECT\x20*\x20FROM\x20config",
    "46039qNKavL",
    "6791585wNlpBx",
    "prop",
    "DELETE\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "changes",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20groups\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antilink\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mute\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leveling\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewonce\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20games\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pokemon\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20extranjeros\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antidelete\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20welcome\x20TEXT\x20DEFAULT\x20\x27Welcome\x20@user\x20in\x20group\x20{title}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leave\x20TEXT\x20DEFAULT\x20\x27Goodbye\x20@user\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "message",
    "boolean",
    "groupManage",
    "update",
    "INSERT\x20INTO\x20groups\x20(id,\x20groupName)\x20VALUES\x20(?,\x20?)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(id)\x20DO\x20NOTHING",
    "log",
  ];
  _0x16d4 = function () {
    return _0x43704c;
  };
  return _0x16d4();
}
(function (_0x294262, _0x1dc8dc) {
  const _0x834aa6 = _0x2409,
    _0x5b186d = _0x294262();
  while (!![]) {
    try {
      const _0x268b12 =
        -parseInt(_0x834aa6(0x128)) / 0x1 +
        -parseInt(_0x834aa6(0x14d)) / 0x2 +
        (parseInt(_0x834aa6(0x150)) / 0x3) *
          (parseInt(_0x834aa6(0x12c)) / 0x4) +
        -parseInt(_0x834aa6(0x13b)) / 0x5 +
        (parseInt(_0x834aa6(0x121)) / 0x6) *
          (parseInt(_0x834aa6(0x13a)) / 0x7) +
        (parseInt(_0x834aa6(0x125)) / 0x8) *
          (parseInt(_0x834aa6(0x149)) / 0x9) +
        parseInt(_0x834aa6(0x14c)) / 0xa;
      if (_0x268b12 === _0x1dc8dc) break;
      else _0x5b186d["push"](_0x5b186d["shift"]());
    } catch (_0x4f5a9e) {
      _0x5b186d["push"](_0x5b186d["shift"]());
    }
  }
})(_0x16d4, 0xebbb3);
const sqlite3 = require(_0xeb39a1(0x138))[_0xeb39a1(0x137)](),
  path = require(_0xeb39a1(0x122)),
  dbPath = path[_0xeb39a1(0x155)](__dirname, _0xeb39a1(0x148)),
  db = new sqlite3[_0xeb39a1(0x132)](dbPath, (_0x2b2258) => {
    const _0x4469a5 = _0xeb39a1;
    _0x2b2258
      ? console[_0x4469a5(0x134)](_0x4469a5(0x11f), _0x2b2258[_0x4469a5(0x140)])
      : (console[_0x4469a5(0x145)](_0x4469a5(0x12b)),
        db[_0x4469a5(0x136)](
          "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20stats\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20prop\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20count\x20INTEGER\x20DEFAULT\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
        ),
        db[_0x4469a5(0x136)](_0x4469a5(0x13f)),
        db[_0x4469a5(0x136)](_0x4469a5(0x131)),
        db[_0x4469a5(0x136)](_0x4469a5(0x12d)),
        db[_0x4469a5(0x136)](
          "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20users\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20name\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20profile\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20level\x20INTEGER\x20DEFAULT\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20balance\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20time\x20TEXT\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20now\x20TEXT\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20xp\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20banned\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20bloq\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20warning\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20married_boolean\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20married_id\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20mine\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20gold\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20diamonds\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20three\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20palm\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20pines\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fish\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20marucha\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20squid\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20apple\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20orange\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20lemon\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20mine_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fished_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fell_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20harvest_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20bank\x20INTEGER\x20DEFAULT\x200\x0a\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20",
        ));
  });
function _0x2409(_0x31a510, _0x24c883) {
  const _0x16d4c0 = _0x16d4();
  return (
    (_0x2409 = function (_0x2409b0, _0x7b1ae2) {
      _0x2409b0 = _0x2409b0 - 0x11f;
      let _0x1ae24a = _0x16d4c0[_0x2409b0];
      return _0x1ae24a;
    }),
    _0x2409(_0x31a510, _0x24c883)
  );
}
(exports[_0xeb39a1(0x12a)] = {
  get: async () => {
    return new Promise((_0x82f8da, _0x3f0f67) => {
      const _0x4a0eb0 = _0x2409;
      db[_0x4a0eb0(0x154)](_0x4a0eb0(0x139), [], (_0x3d0f52, _0x1f94b2) => {
        if (_0x3d0f52) _0x3f0f67(_0x3d0f52);
        else _0x82f8da(_0x1f94b2 || {});
      });
    });
  },
  update: async (_0x2f5c7c, _0x3df3e5) => {
    return new Promise((_0x2c23bf, _0x4c476b) => {
      const _0x53a42f = _0x2409;
      db[_0x53a42f(0x136)](
        _0x53a42f(0x12f) + _0x2f5c7c + _0x53a42f(0x14b),
        [_0x3df3e5],
        function (_0x25a18) {
          const _0x4818eb = _0x53a42f;
          if (_0x25a18) _0x4c476b(_0x25a18);
          else _0x2c23bf(this[_0x4818eb(0x13e)] > 0x0);
        },
      );
    });
  },
}),
  (exports[_0xeb39a1(0x151)] = async (_0x6bc46d, _0x16a7ae = 0x1) => {
    return new Promise((_0x49f7ed, _0x45557b) => {
      const _0x5945a9 = _0x2409;
      db["get"](_0x5945a9(0x120), [_0x6bc46d], (_0x4c4c92, _0xcfc492) => {
        const _0x29fcf6 = _0x5945a9;
        if (_0x4c4c92) _0x45557b(_0x4c4c92);
        !_0xcfc492
          ? db[_0x29fcf6(0x136)](
              "INSERT\x20INTO\x20stats\x20(prop,\x20count)\x20VALUES\x20(?,\x20?)",
              [_0x6bc46d, 0x0],
              (_0x277f77) => {
                const _0x15f42c = _0x29fcf6;
                if (_0x277f77) _0x45557b(_0x277f77);
                else
                  db[_0x15f42c(0x136)](
                    "UPDATE\x20stats\x20SET\x20count\x20=\x20count\x20+\x20?\x20WHERE\x20prop\x20=\x20?",
                    [_0x16a7ae, _0x6bc46d],
                    (_0x3cf02a) => {
                      if (_0x3cf02a) _0x45557b(_0x3cf02a);
                      else _0x49f7ed(!![]);
                    },
                  );
              },
            )
          : db["run"](_0x29fcf6(0x124), [_0x16a7ae, _0x6bc46d], (_0x284c3b) => {
              if (_0x284c3b) _0x45557b(_0x284c3b);
              else _0x49f7ed(!![]);
            });
      });
    });
  }),
  (exports["info"] = async (_0x4ed269) => {
    return new Promise((_0x16e6b8, _0x1c5c74) => {
      const _0x17e42a = _0x2409;
      db[_0x17e42a(0x123)](
        _0x17e42a(0x130) + _0x4ed269,
        [],
        (_0x36240b, _0x124541) => {
          const _0x377728 = _0x17e42a;
          if (_0x36240b) _0x1c5c74(_0x36240b);
          else {
            const _0x2d147f = {};
            _0x124541[_0x377728(0x14f)]((_0x402d4b) => {
              const _0xbf299a = _0x377728;
              _0x2d147f[_0x402d4b[_0xbf299a(0x13c)]] = _0x402d4b["count"];
            }),
              _0x16e6b8({ stats: _0x2d147f });
          }
        },
      );
    });
  }),
  (exports[_0xeb39a1(0x142)] = {
    add: async (_0xbe2e38, _0x28f1c5) => {
      return new Promise((_0x40c4c6, _0x18bacf) => {
        const _0x4a7252 = _0x2409;
        db[_0x4a7252(0x136)](
          _0x4a7252(0x144),
          [_0xbe2e38, _0x28f1c5],
          (_0x44ddd4) => {
            if (_0x44ddd4) _0x18bacf(_0x44ddd4);
            else _0x40c4c6(!![]);
          },
        );
      });
    },
    update: async (_0x150564, _0x2f7985) => {
      return new Promise((_0x165a51, _0xbe6dfb) => {
        const _0x24fd68 = _0x2409,
          _0x129fc0 = Object["keys"](_0x2f7985);
        let _0x2f6453 = _0x129fc0[_0x24fd68(0x135)]((_0x559b6b) => {
          return new Promise((_0x15b927, _0x1a36e8) => {
            const _0x310a9c = _0x2409;
            db[_0x310a9c(0x136)](
              "UPDATE\x20groups\x20SET\x20" + _0x559b6b + _0x310a9c(0x133),
              [_0x2f7985[_0x559b6b], _0x150564],
              (_0x28ef30) => {
                if (_0x28ef30) _0x1a36e8(_0x28ef30);
                else _0x15b927(!![]);
              },
            );
          });
        });
        Promise["all"](_0x2f6453)
          [_0x24fd68(0x127)](() => _0x165a51(!![]))
          ["catch"](_0xbe6dfb);
      });
    },
    get: async (_0x2489ff) => {
      return new Promise((_0xce66dc, _0x14fcd5) => {
        const _0x32ae07 = _0x2409;
        db[_0x32ae07(0x154)](
          _0x32ae07(0x129),
          [_0x2489ff],
          (_0xe7e1ee, _0x392a3b) => {
            if (_0xe7e1ee) _0x14fcd5(_0xe7e1ee);
            else _0xce66dc(_0x392a3b || {});
          },
        );
      });
    },
  }),
  (exports["AFK"] = {
    add: async (_0x310611, _0x5e58a9, _0x9465b7, _0x62e93, _0x3afb34) => {
      return new Promise((_0x1053d1, _0x231f4d) => {
        const _0x2663c5 = _0x2409;
        db[_0x2663c5(0x136)](
          "INSERT\x20INTO\x20afk\x20(jid,\x20groupId,\x20groupName,\x20timestamp,\x20reason)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(jid,\x20groupId)\x20DO\x20UPDATE\x20SET\x20timestamp\x20=\x20excluded.timestamp,\x20reason\x20=\x20excluded.reason",
          [_0x310611, _0x5e58a9, _0x9465b7, _0x62e93, _0x3afb34],
          (_0x3effb3) => {
            if (_0x3effb3) _0x231f4d(_0x3effb3);
            else _0x1053d1(!![]);
          },
        );
      });
    },
    check: async (_0x421019, _0x2a43f4) => {
      return new Promise((_0x22987d, _0x33e97f) => {
        const _0x5e519f = _0x2409;
        db[_0x5e519f(0x154)](
          _0x5e519f(0x14a),
          [_0x421019, _0x2a43f4],
          (_0x2f8318, _0x5030a5) => {
            if (_0x2f8318) _0x33e97f(_0x2f8318);
            else _0x22987d(!!_0x5030a5);
          },
        );
      });
    },
    get: async (_0x159caa, _0x43499f) => {
      return new Promise((_0x5e1b76, _0x35e947) => {
        const _0x1dda39 = _0x2409;
        db[_0x1dda39(0x154)](
          _0x1dda39(0x126),
          [_0x159caa, _0x43499f],
          (_0x3275b8, _0x2d2a3b) => {
            if (_0x3275b8) _0x35e947(_0x3275b8);
            else _0x5e1b76(_0x2d2a3b || {});
          },
        );
      });
    },
    delete: async (_0x1aac1c, _0x2e11cc) => {
      return new Promise((_0x54cc5d, _0x1d1ba5) => {
        const _0x11b5e3 = _0x2409;
        db[_0x11b5e3(0x136)](
          _0x11b5e3(0x13d),
          [_0x1aac1c, _0x2e11cc],
          function (_0x5f5d24) {
            const _0x39a15e = _0x11b5e3;
            if (_0x5f5d24) _0x1d1ba5(_0x5f5d24);
            else _0x54cc5d(this[_0x39a15e(0x13e)] > 0x0);
          },
        );
      });
    },
    getAll: async () => {
      return new Promise((_0x4dd40b, _0x429296) => {
        const _0x574939 = _0x2409;
        db[_0x574939(0x123)](
          "SELECT\x20*\x20FROM\x20afk",
          [],
          (_0x4725dc, _0x4ffdd0) => {
            if (_0x4725dc) _0x429296(_0x4725dc);
            else _0x4dd40b(_0x4ffdd0 || []);
          },
        );
      });
    },
  }),
  (exports[_0xeb39a1(0x14e)] = {
    add: async (
      _0x1daaad,
      _0x31edf2,
      _0x1e8e85 = null,
      _0x2e55bb = 0x0,
      _0x4ee1d1 = 0x0,
      _0x440075 = 0x0,
      _0x1798da = 0x0,
      _0x4f1ae9 = 0x0,
      _0x236e5f = ![],
      _0x100a63 = ![],
      _0x728f4c = ![],
      _0x18bc9a = ![],
      _0x19bc1d = null,
      _0x5331ea = 0x0,
      _0x4d8da2 = 0x0,
      _0x58d97a = 0x0,
      _0x3ebd7c = 0x0,
      _0x2f4612 = 0x0,
      _0x1cf046 = 0x0,
      _0x587776 = 0x0,
      _0x353f09 = 0x0,
      _0x284ce0 = 0x0,
      _0x49fd9b = 0x0,
      _0x16fe2f = 0x0,
      _0x54f801 = 0x0,
      _0x1ec4e0 = 0x0,
      _0x928645 = 0x0,
      _0x136754 = 0x0,
      _0x5480ae = 0x0,
      _0x4da81d = 0x0,
    ) => {
      return new Promise((_0x5aaa45, _0x4e5dad) => {
        const _0x55a877 = _0x2409;
        db[_0x55a877(0x154)](
          _0x55a877(0x146),
          [_0x1daaad],
          (_0x425bfe, _0x3b9b72) => {
            const _0xfa0362 = _0x55a877;
            if (_0x425bfe) _0x4e5dad(_0x425bfe);
            else
              _0x3b9b72
                ? _0x5aaa45(![])
                : db["run"](
                    _0xfa0362(0x12e),
                    [
                      _0x1daaad,
                      _0x31edf2,
                      _0x1e8e85,
                      _0x2e55bb,
                      _0x4ee1d1,
                      _0x440075,
                      _0x1798da,
                      _0x4f1ae9,
                      _0x236e5f,
                      _0x100a63,
                      _0x728f4c,
                      _0x18bc9a,
                      _0x19bc1d,
                      _0x5331ea,
                      _0x4d8da2,
                      _0x58d97a,
                      _0x3ebd7c,
                      _0x2f4612,
                      _0x1cf046,
                      _0x587776,
                      _0x353f09,
                      _0x284ce0,
                      _0x49fd9b,
                      _0x16fe2f,
                      _0x54f801,
                      _0x1ec4e0,
                      _0x928645,
                      _0x136754,
                      _0x5480ae,
                      _0x4da81d,
                    ],
                    (_0x44307f) => {
                      if (_0x44307f) _0x4e5dad(_0x44307f);
                      else _0x5aaa45(!![]);
                    },
                  );
          },
        );
      });
    },
    get: async (_0x337b7a) => {
      return new Promise((_0x16d0ba, _0x10d947) => {
        const _0xc9b4f9 = _0x2409;
        db[_0xc9b4f9(0x154)](
          _0xc9b4f9(0x146),
          [_0x337b7a],
          (_0x317278, _0x116c4b) => {
            if (_0x317278) _0x10d947(_0x317278);
            else _0x16d0ba(_0x116c4b || {});
          },
        );
      });
    },
    update: async (_0x3e046d, _0x18a27a) => {
      return new Promise((_0xe831b5, _0x3f9508) => {
        const _0x110438 = _0x2409,
          _0x4562c3 = Object[_0x110438(0x147)](_0x18a27a);
        let _0x236736 = _0x4562c3[_0x110438(0x135)]((_0x13ee90) => {
          return new Promise((_0x2f036d, _0x1adc6a) => {
            const _0x98bb7b = _0x2409,
              _0xcfb33b =
                typeof _0x18a27a[_0x13ee90] === _0x98bb7b(0x141)
                  ? _0x18a27a[_0x13ee90]
                    ? 0x1
                    : 0x0
                  : _0x18a27a[_0x13ee90];
            db[_0x98bb7b(0x136)](
              "UPDATE\x20users\x20SET\x20" + _0x13ee90 + _0x98bb7b(0x133),
              [_0xcfb33b, _0x3e046d],
              (_0x4dc913) => {
                if (_0x4dc913) _0x1adc6a(_0x4dc913);
                else _0x2f036d(!![]);
              },
            );
          });
        });
        Promise[_0x110438(0x123)](_0x236736)
          ["then"](() => _0xe831b5(!![]))
          ["catch"](_0x3f9508);
      });
    },
    delete: async (_0x1acec6) => {
      return new Promise((_0xcd2f3, _0x447abd) => {
        const _0x5ad1e1 = _0x2409;
        db[_0x5ad1e1(0x136)](
          _0x5ad1e1(0x152),
          [_0x1acec6],
          function (_0x5dbbfc) {
            const _0x32e422 = _0x5ad1e1;
            if (_0x5dbbfc) _0x447abd(_0x5dbbfc);
            else _0xcd2f3(this[_0x32e422(0x13e)] > 0x0);
          },
        );
      });
    },
    all: async () => {
      return new Promise((_0x3ed41d, _0x3b5573) => {
        const _0x2fec3b = _0x2409;
        db[_0x2fec3b(0x123)](_0x2fec3b(0x153), [], (_0x4add1b, _0x2005a9) => {
          if (_0x4add1b) _0x3b5573(_0x4add1b);
          else _0x3ed41d(_0x2005a9 || []);
        });
      });
    },
    ban: async (_0x7fba66) => {
      const _0x3d7916 = _0xeb39a1;
      return this[_0x3d7916(0x143)](_0x7fba66, { banned: !![] });
    },
    unban: async (_0x18131e) => {
      return this["update"](_0x18131e, { banned: ![] });
    },
    block: async (_0x2faec6) => {
      const _0x2b09a4 = _0xeb39a1;
      return this[_0x2b09a4(0x143)](_0x2faec6, { bloq: !![] });
    },
    unblock: async (_0x44ce26) => {
      return this["update"](_0x44ce26, { bloq: ![] });
    },
  });
