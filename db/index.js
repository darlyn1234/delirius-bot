const _0x9a5265 = _0x4cf8;
(function (_0x12e261, _0x45fa64) {
  const _0x178638 = _0x4cf8,
    _0x3c633a = _0x12e261();
  while (!![]) {
    try {
      const _0x393c7e =
        (-parseInt(_0x178638(0x14e)) / 0x1) *
          (parseInt(_0x178638(0x157)) / 0x2) +
        (-parseInt(_0x178638(0x15e)) / 0x3) *
          (parseInt(_0x178638(0x152)) / 0x4) +
        parseInt(_0x178638(0x15d)) / 0x5 +
        (-parseInt(_0x178638(0x12e)) / 0x6) *
          (-parseInt(_0x178638(0x15f)) / 0x7) +
        parseInt(_0x178638(0x13e)) / 0x8 +
        (parseInt(_0x178638(0x135)) / 0x9) *
          (-parseInt(_0x178638(0x142)) / 0xa) +
        parseInt(_0x178638(0x130)) / 0xb;
      if (_0x393c7e === _0x45fa64) break;
      else _0x3c633a["push"](_0x3c633a["shift"]());
    } catch (_0x1f117c) {
      _0x3c633a["push"](_0x3c633a["shift"]());
    }
  }
})(_0x1049, 0x81d5b);
function _0x4cf8(_0x32de9e, _0x46ecda) {
  const _0x1049b4 = _0x1049();
  return (
    (_0x4cf8 = function (_0x4cf850, _0x458b09) {
      _0x4cf850 = _0x4cf850 - 0x12c;
      let _0x314b4d = _0x1049b4[_0x4cf850];
      return _0x314b4d;
    }),
    _0x4cf8(_0x32de9e, _0x46ecda)
  );
}
const sqlite3 = require(_0x9a5265(0x160))[_0x9a5265(0x154)](),
  path = require(_0x9a5265(0x141)),
  dbPath = path[_0x9a5265(0x15a)](__dirname, _0x9a5265(0x155)),
  db = new sqlite3[_0x9a5265(0x14d)](dbPath, (_0x40d23e) => {
    const _0xb47d7 = _0x9a5265;
    _0x40d23e
      ? console[_0xb47d7(0x133)](_0xb47d7(0x14a), _0x40d23e["message"])
      : (console["log"]("Base\x20de\x20datos\x20SQLite\x20conectada."),
        db["run"](_0xb47d7(0x138)),
        db[_0xb47d7(0x156)](_0xb47d7(0x151)),
        db["run"](
          "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20afk\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupId\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timestamp\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20reason\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(jid,\x20groupId)\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
        ),
        db[_0xb47d7(0x156)](_0xb47d7(0x137)),
        db["run"](_0xb47d7(0x140)));
  });
(exports["configHandler"] = {
  get: async () => {
    return new Promise((_0x1718bf, _0x44ce0b) => {
      const _0x2843c7 = _0x4cf8;
      db[_0x2843c7(0x15b)](_0x2843c7(0x14b), [], (_0x11c167, _0x54f5a1) => {
        if (_0x11c167) _0x44ce0b(_0x11c167);
        else _0x1718bf(_0x54f5a1 || {});
      });
    });
  },
  update: async (_0x2c4504, _0x47f869) => {
    return new Promise((_0x109c36, _0x252f13) => {
      const _0x41f373 = _0x4cf8;
      db[_0x41f373(0x156)](
        _0x41f373(0x148) + _0x2c4504 + _0x41f373(0x131),
        [_0x47f869],
        function (_0x5a92c4) {
          const _0x2f6af9 = _0x41f373;
          if (_0x5a92c4) _0x252f13(_0x5a92c4);
          else _0x109c36(this[_0x2f6af9(0x15c)] > 0x0);
        },
      );
    });
  },
}),
  (exports[_0x9a5265(0x132)] = async (_0xcbf2f5, _0x476d83 = 0x1) => {
    return new Promise((_0x458f8d, _0x121e15) => {
      const _0x5638c1 = _0x4cf8;
      db[_0x5638c1(0x15b)](
        _0x5638c1(0x158),
        [_0xcbf2f5],
        (_0x2ee40a, _0x52a19a) => {
          const _0x55de1a = _0x5638c1;
          if (_0x2ee40a) _0x121e15(_0x2ee40a);
          !_0x52a19a
            ? db[_0x55de1a(0x156)](
                _0x55de1a(0x159),
                [_0xcbf2f5, 0x0],
                (_0x30801b) => {
                  const _0x3ded1d = _0x55de1a;
                  if (_0x30801b) _0x121e15(_0x30801b);
                  else
                    db[_0x3ded1d(0x156)](
                      "UPDATE\x20stats\x20SET\x20count\x20=\x20count\x20+\x20?\x20WHERE\x20prop\x20=\x20?",
                      [_0x476d83, _0xcbf2f5],
                      (_0x2c9690) => {
                        if (_0x2c9690) _0x121e15(_0x2c9690);
                        else _0x458f8d(!![]);
                      },
                    );
                },
              )
            : db[_0x55de1a(0x156)](
                _0x55de1a(0x12c),
                [_0x476d83, _0xcbf2f5],
                (_0x2e4ff0) => {
                  if (_0x2e4ff0) _0x121e15(_0x2e4ff0);
                  else _0x458f8d(!![]);
                },
              );
        },
      );
    });
  }),
  (exports[_0x9a5265(0x134)] = async (_0x391aa4) => {
    return new Promise((_0x5c819d, _0x468713) => {
      const _0x2cd65a = _0x4cf8;
      db[_0x2cd65a(0x162)](
        _0x2cd65a(0x144) + _0x391aa4,
        [],
        (_0xdc81ab, _0x8a8f1d) => {
          if (_0xdc81ab) _0x468713(_0xdc81ab);
          else {
            const _0x271bc9 = {};
            _0x8a8f1d["forEach"]((_0x18d707) => {
              const _0x2fc68f = _0x4cf8;
              _0x271bc9[_0x18d707[_0x2fc68f(0x136)]] = _0x18d707["count"];
            }),
              _0x5c819d({ stats: _0x271bc9 });
          }
        },
      );
    });
  }),
  (exports[_0x9a5265(0x153)] = {
    add: async (_0x27c1e1, _0x4ed6ea) => {
      return new Promise((_0x560419, _0x249a52) => {
        const _0x1813e5 = _0x4cf8;
        db[_0x1813e5(0x156)](
          _0x1813e5(0x13a),
          [_0x27c1e1, _0x4ed6ea],
          (_0x2d236c) => {
            if (_0x2d236c) _0x249a52(_0x2d236c);
            else _0x560419(!![]);
          },
        );
      });
    },
    update: async (_0x583270, _0x4ebde2) => {
      return new Promise((_0x9580a2, _0x54f342) => {
        const _0x5b3a32 = _0x4cf8,
          _0x5efb18 = Object[_0x5b3a32(0x14f)](_0x4ebde2);
        let _0x4763bb = _0x5efb18[_0x5b3a32(0x14c)]((_0xeb61fd) => {
          return new Promise((_0x8bfc7b, _0x3841b7) => {
            const _0x1e73d2 = _0x4cf8;
            db[_0x1e73d2(0x156)](
              _0x1e73d2(0x13c) + _0xeb61fd + _0x1e73d2(0x150),
              [_0x4ebde2[_0xeb61fd], _0x583270],
              (_0x4719f4) => {
                if (_0x4719f4) _0x3841b7(_0x4719f4);
                else _0x8bfc7b(!![]);
              },
            );
          });
        });
        Promise[_0x5b3a32(0x162)](_0x4763bb)
          ["then"](() => _0x9580a2(!![]))
          [_0x5b3a32(0x143)](_0x54f342);
      });
    },
    get: async (_0x28ad7b) => {
      return new Promise((_0x5df685, _0x156f88) => {
        const _0x4eac8b = _0x4cf8;
        db[_0x4eac8b(0x15b)](
          _0x4eac8b(0x12f),
          [_0x28ad7b],
          (_0x6e0c73, _0x650e1a) => {
            if (_0x6e0c73) _0x156f88(_0x6e0c73);
            else _0x5df685(_0x650e1a || {});
          },
        );
      });
    },
  }),
  (exports[_0x9a5265(0x13b)] = {
    add: async (_0x22fe73, _0x35e1df, _0x47241a, _0x427a4d, _0x306ffa) => {
      return new Promise((_0x1efb95, _0x328240) => {
        const _0x392b36 = _0x4cf8;
        db[_0x392b36(0x156)](
          "INSERT\x20INTO\x20afk\x20(jid,\x20groupId,\x20groupName,\x20timestamp,\x20reason)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(jid,\x20groupId)\x20DO\x20UPDATE\x20SET\x20timestamp\x20=\x20excluded.timestamp,\x20reason\x20=\x20excluded.reason",
          [_0x22fe73, _0x35e1df, _0x47241a, _0x427a4d, _0x306ffa],
          (_0x24b385) => {
            if (_0x24b385) _0x328240(_0x24b385);
            else _0x1efb95(!![]);
          },
        );
      });
    },
    check: async (_0x31dd31, _0xf62118) => {
      return new Promise((_0x7ce132, _0xeb8fd9) => {
        const _0x2c0573 = _0x4cf8;
        db[_0x2c0573(0x15b)](
          _0x2c0573(0x147),
          [_0x31dd31, _0xf62118],
          (_0x2dbd2d, _0x2add1d) => {
            if (_0x2dbd2d) _0xeb8fd9(_0x2dbd2d);
            else _0x7ce132(!!_0x2add1d);
          },
        );
      });
    },
    get: async (_0x5b088f, _0x437ab2) => {
      return new Promise((_0x272e0c, _0x12c8b3) => {
        db["get"](
          "SELECT\x20*\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
          [_0x5b088f, _0x437ab2],
          (_0x3ae0e3, _0x298f00) => {
            if (_0x3ae0e3) _0x12c8b3(_0x3ae0e3);
            else _0x272e0c(_0x298f00 || {});
          },
        );
      });
    },
    delete: async (_0x282b40, _0x568bcf) => {
      return new Promise((_0xb0c737, _0x1cd599) => {
        const _0x2548b4 = _0x4cf8;
        db[_0x2548b4(0x156)](
          _0x2548b4(0x145),
          [_0x282b40, _0x568bcf],
          function (_0x223f97) {
            const _0x259aa0 = _0x2548b4;
            if (_0x223f97) _0x1cd599(_0x223f97);
            else _0xb0c737(this[_0x259aa0(0x15c)] > 0x0);
          },
        );
      });
    },
    getAll: async () => {
      return new Promise((_0x59d704, _0x13018d) => {
        const _0x59852e = _0x4cf8;
        db[_0x59852e(0x162)](
          "SELECT\x20*\x20FROM\x20afk",
          [],
          (_0x4e88a6, _0x35ac38) => {
            if (_0x4e88a6) _0x13018d(_0x4e88a6);
            else _0x59d704(_0x35ac38 || []);
          },
        );
      });
    },
  }),
  (exports[_0x9a5265(0x13f)] = {
    add: async (
      _0x3a6eaa,
      _0x20610b,
      _0x26b664 = null,
      _0x2b313e = 0x0,
      _0x4056cd = 0x0,
      _0x36af6b = 0x0,
      _0x2220d8 = 0x0,
      _0x135b08 = 0x0,
      _0xa503f1 = ![],
      _0x1ac65c = ![],
      _0x3e585a = ![],
      _0x5bd718 = ![],
      _0x2b3d70 = null,
    ) => {
      return new Promise((_0x4776b5, _0x25dd8d) => {
        const _0xb05015 = _0x4cf8;
        db[_0xb05015(0x15b)](
          "SELECT\x20*\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
          [_0x3a6eaa],
          (_0x5e265e, _0xf1f213) => {
            const _0x203b43 = _0xb05015;
            if (_0x5e265e) _0x25dd8d(_0x5e265e);
            else
              _0xf1f213
                ? _0x4776b5(![])
                : db["run"](
                    _0x203b43(0x161),
                    [
                      _0x3a6eaa,
                      _0x20610b,
                      _0x26b664,
                      _0x2b313e,
                      _0x4056cd,
                      _0x36af6b,
                      _0x2220d8,
                      _0x135b08,
                      _0xa503f1,
                      _0x1ac65c,
                      _0x3e585a,
                      _0x5bd718,
                      _0x2b3d70,
                    ],
                    (_0x56015) => {
                      if (_0x56015) _0x25dd8d(_0x56015);
                      else _0x4776b5(!![]);
                    },
                  );
          },
        );
      });
    },
    get: async (_0x3da03c) => {
      return new Promise((_0xab53c0, _0x5dfa76) => {
        db["get"](
          "SELECT\x20*\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
          [_0x3da03c],
          (_0x50cb60, _0x15206d) => {
            if (_0x50cb60) _0x5dfa76(_0x50cb60);
            else _0xab53c0(_0x15206d || {});
          },
        );
      });
    },
    update: async (_0x41c695, _0x2fa957) => {
      return new Promise((_0x1be1e7, _0x3fa1c9) => {
        const _0x42be4f = _0x4cf8,
          _0x5ba7b7 = Object["keys"](_0x2fa957);
        let _0x2f4852 = _0x5ba7b7[_0x42be4f(0x14c)]((_0x42cfe9) => {
          return new Promise((_0x50b96b, _0x19468c) => {
            const _0x91da7 = _0x4cf8,
              _0x15409e =
                typeof _0x2fa957[_0x42cfe9] === _0x91da7(0x146)
                  ? _0x2fa957[_0x42cfe9]
                    ? 0x1
                    : 0x0
                  : _0x2fa957[_0x42cfe9];
            db[_0x91da7(0x156)](
              _0x91da7(0x13d) + _0x42cfe9 + _0x91da7(0x150),
              [_0x15409e, _0x41c695],
              (_0x4192cd) => {
                if (_0x4192cd) _0x19468c(_0x4192cd);
                else _0x50b96b(!![]);
              },
            );
          });
        });
        Promise["all"](_0x2f4852)
          [_0x42be4f(0x12d)](() => _0x1be1e7(!![]))
          [_0x42be4f(0x143)](_0x3fa1c9);
      });
    },
    delete: async (_0x449ce4) => {
      return new Promise((_0x16ba3c, _0x5e1ef9) => {
        db["run"](
          "DELETE\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
          [_0x449ce4],
          function (_0x5963ee) {
            if (_0x5963ee) _0x5e1ef9(_0x5963ee);
            else _0x16ba3c(this["changes"] > 0x0);
          },
        );
      });
    },
    all: async () => {
      return new Promise((_0x12d4f7, _0x536769) => {
        const _0x5d9229 = _0x4cf8;
        db[_0x5d9229(0x162)](_0x5d9229(0x149), [], (_0x59cf9e, _0x3d3a37) => {
          if (_0x59cf9e) _0x536769(_0x59cf9e);
          else _0x12d4f7(_0x3d3a37 || []);
        });
      });
    },
    ban: async (_0x1b55a1) => {
      const _0x4196a6 = _0x9a5265;
      return this[_0x4196a6(0x139)](_0x1b55a1, { banned: !![] });
    },
    unban: async (_0x58e69a) => {
      const _0x4799bf = _0x9a5265;
      return this[_0x4799bf(0x139)](_0x58e69a, { banned: ![] });
    },
    block: async (_0x28f170) => {
      const _0x2c8073 = _0x9a5265;
      return this[_0x2c8073(0x139)](_0x28f170, { bloq: !![] });
    },
    unblock: async (_0x4e46df) => {
      return this["update"](_0x4e46df, { bloq: ![] });
    },
  });
function _0x1049() {
  const _0x502275 = [
    "groupManage",
    "verbose",
    "database.db",
    "run",
    "7208StvNmy",
    "SELECT\x20count\x20FROM\x20stats\x20WHERE\x20prop\x20=\x20?",
    "INSERT\x20INTO\x20stats\x20(prop,\x20count)\x20VALUES\x20(?,\x20?)",
    "join",
    "get",
    "changes",
    "4421305AnoAge",
    "93417PHZceo",
    "364sXgOCy",
    "sqlite3",
    "INSERT\x20INTO\x20users\x20(id,\x20name,\x20profile,\x20level,\x20balance,\x20time,\x20now,\x20xp,\x20banned,\x20bloq,\x20warning,\x20married_boolean,\x20married_id)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?)",
    "all",
    "UPDATE\x20stats\x20SET\x20count\x20=\x20count\x20+\x20?\x20WHERE\x20prop\x20=\x20?",
    "then",
    "103518oYSfdU",
    "SELECT\x20*\x20FROM\x20groups\x20WHERE\x20id\x20=\x20?",
    "8779342nFoQhT",
    "\x20=\x20?",
    "statistics",
    "error",
    "info",
    "1431TkxPmh",
    "prop",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20config\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20session_id\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20removeBG\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20musixMatch\x20TEXT\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20stats\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20prop\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20count\x20INTEGER\x20DEFAULT\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "update",
    "INSERT\x20INTO\x20groups\x20(id,\x20groupName)\x20VALUES\x20(?,\x20?)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(id)\x20DO\x20NOTHING",
    "AFK",
    "UPDATE\x20groups\x20SET\x20",
    "UPDATE\x20users\x20SET\x20",
    "1653136bMPjFx",
    "Users",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20users\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20name\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20profile\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20level\x20INTEGER\x20DEFAULT\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20balance\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20time\x20TEXT\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20now\x20TEXT\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20xp\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20banned\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20bloq\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20warning\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20married_boolean\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20married_id\x20TEXT\x0a\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20",
    "path",
    "42930pkSdbv",
    "catch",
    "SELECT\x20*\x20FROM\x20",
    "DELETE\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "boolean",
    "SELECT\x201\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "UPDATE\x20config\x20SET\x20",
    "SELECT\x20*\x20FROM\x20users",
    "Error\x20al\x20abrir\x20la\x20base\x20de\x20datos",
    "SELECT\x20*\x20FROM\x20config",
    "map",
    "Database",
    "151JCLKaN",
    "keys",
    "\x20=\x20?\x20WHERE\x20id\x20=\x20?",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20groups\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antilink\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mute\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leveling\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewonce\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20games\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pokemon\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20extranjeros\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antidelete\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20welcome\x20TEXT\x20DEFAULT\x20\x27Welcome\x20@user\x20in\x20group\x20{title}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leave\x20TEXT\x20DEFAULT\x20\x27Goodbye\x20@user\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "132cJYwlf",
  ];
  _0x1049 = function () {
    return _0x502275;
  };
  return _0x1049();
}