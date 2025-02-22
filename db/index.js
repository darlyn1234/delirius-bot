const _0x254ddb = _0x4cd9;
function _0x4cd9(_0x37e4ef, _0x3b285c) {
  const _0x33c40a = _0x33c4();
  return (
    (_0x4cd9 = function (_0x4cd9ca, _0x594a7b) {
      _0x4cd9ca = _0x4cd9ca - 0x1ec;
      let _0x4ac74b = _0x33c40a[_0x4cd9ca];
      return _0x4ac74b;
    }),
    _0x4cd9(_0x37e4ef, _0x3b285c)
  );
}
(function (_0x3e8710, _0x2650ea) {
  const _0x32b6fd = _0x4cd9,
    _0x190e63 = _0x3e8710();
  while (!![]) {
    try {
      const _0x39712d =
        (-parseInt(_0x32b6fd(0x1f5)) / 0x1) *
          (-parseInt(_0x32b6fd(0x20c)) / 0x2) +
        -parseInt(_0x32b6fd(0x21a)) / 0x3 +
        (-parseInt(_0x32b6fd(0x208)) / 0x4) *
          (-parseInt(_0x32b6fd(0x20d)) / 0x5) +
        -parseInt(_0x32b6fd(0x1f0)) / 0x6 +
        (-parseInt(_0x32b6fd(0x1f8)) / 0x7) *
          (parseInt(_0x32b6fd(0x212)) / 0x8) +
        -parseInt(_0x32b6fd(0x1fe)) / 0x9 +
        parseInt(_0x32b6fd(0x216)) / 0xa;
      if (_0x39712d === _0x2650ea) break;
      else _0x190e63["push"](_0x190e63["shift"]());
    } catch (_0x13a3fd) {
      _0x190e63["push"](_0x190e63["shift"]());
    }
  }
})(_0x33c4, 0x92030);
const sqlite3 = require(_0x254ddb(0x201))[_0x254ddb(0x1f4)](),
  path = require(_0x254ddb(0x215)),
  dbPath = path[_0x254ddb(0x20a)](__dirname, _0x254ddb(0x200)),
  db = new sqlite3["Database"](dbPath, (_0x21a6ef) => {
    const _0x316071 = _0x254ddb;
    _0x21a6ef
      ? console["error"](_0x316071(0x1fc), _0x21a6ef[_0x316071(0x21c)])
      : (console[_0x316071(0x1ee)](
          "Base\x20de\x20datos\x20SQLite\x20conectada.",
        ),
        db["run"](_0x316071(0x20f)),
        db["run"](_0x316071(0x21b)),
        db[_0x316071(0x205)](_0x316071(0x1ec)),
        db[_0x316071(0x205)](
          "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20config\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20session_id\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20removeBG\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20musixMatch\x20TEXT\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
        ),
        db[_0x316071(0x205)](_0x316071(0x219)));
  });
(exports[_0x254ddb(0x1ed)] = {
  get: async () => {
    return new Promise((_0x742065, _0x1eebbd) => {
      const _0x330fcc = _0x4cd9;
      db["get"](_0x330fcc(0x1f1), [], (_0x3d77c, _0x5ee85d) => {
        if (_0x3d77c) _0x1eebbd(_0x3d77c);
        else _0x742065(_0x5ee85d || {});
      });
    });
  },
  update: async (_0x453e49, _0x18300d) => {
    return new Promise((_0x57be8e, _0x40818f) => {
      const _0x27a115 = _0x4cd9;
      db[_0x27a115(0x205)](
        _0x27a115(0x20b) + _0x453e49 + "\x20=\x20?",
        [_0x18300d],
        function (_0x2bfc52) {
          const _0xe6613b = _0x27a115;
          if (_0x2bfc52) _0x40818f(_0x2bfc52);
          else _0x57be8e(this[_0xe6613b(0x217)] > 0x0);
        },
      );
    });
  },
}),
  (exports[_0x254ddb(0x21d)] = async (_0x3e73e8, _0x12909a = 0x1) => {
    return new Promise((_0x4d2c8a, _0x4695e1) => {
      const _0x186784 = _0x4cd9;
      db[_0x186784(0x1f3)](
        "SELECT\x20count\x20FROM\x20stats\x20WHERE\x20prop\x20=\x20?",
        [_0x3e73e8],
        (_0x1a97ba, _0x332cdf) => {
          const _0x37f9ea = _0x186784;
          if (_0x1a97ba) _0x4695e1(_0x1a97ba);
          !_0x332cdf
            ? db[_0x37f9ea(0x205)](
                "INSERT\x20INTO\x20stats\x20(prop,\x20count)\x20VALUES\x20(?,\x20?)",
                [_0x3e73e8, 0x0],
                (_0x586f7f) => {
                  const _0x259959 = _0x37f9ea;
                  if (_0x586f7f) _0x4695e1(_0x586f7f);
                  else
                    db[_0x259959(0x205)](
                      _0x259959(0x1ef),
                      [_0x12909a, _0x3e73e8],
                      (_0x56d22f) => {
                        if (_0x56d22f) _0x4695e1(_0x56d22f);
                        else _0x4d2c8a(!![]);
                      },
                    );
                },
              )
            : db["run"](
                "UPDATE\x20stats\x20SET\x20count\x20=\x20count\x20+\x20?\x20WHERE\x20prop\x20=\x20?",
                [_0x12909a, _0x3e73e8],
                (_0x5580ac) => {
                  if (_0x5580ac) _0x4695e1(_0x5580ac);
                  else _0x4d2c8a(!![]);
                },
              );
        },
      );
    });
  }),
  (exports[_0x254ddb(0x1fa)] = async (_0x2d4463) => {
    return new Promise((_0x22171a, _0x5dfc08) => {
      const _0x2982c5 = _0x4cd9;
      db["all"](_0x2982c5(0x1f7) + _0x2d4463, [], (_0x1d9740, _0x56ed55) => {
        const _0x2365bf = _0x2982c5;
        if (_0x1d9740) _0x5dfc08(_0x1d9740);
        else {
          const _0x56417b = {};
          _0x56ed55[_0x2365bf(0x210)]((_0x12625a) => {
            _0x56417b[_0x12625a["prop"]] = _0x12625a["count"];
          }),
            _0x22171a({ stats: _0x56417b });
        }
      });
    });
  }),
  (exports[_0x254ddb(0x203)] = {
    add: async (_0x3490cd, _0x45534a) => {
      return new Promise((_0x43c449, _0x5b1dda) => {
        const _0x5e276b = _0x4cd9;
        db[_0x5e276b(0x205)](
          _0x5e276b(0x214),
          [_0x3490cd, _0x45534a],
          (_0xa11842) => {
            if (_0xa11842) _0x5b1dda(_0xa11842);
            else _0x43c449(!![]);
          },
        );
      });
    },
    update: async (_0x4032f1, _0x50c285) => {
      return new Promise((_0x5e6705, _0x40df40) => {
        const _0x343e14 = _0x4cd9,
          _0x5a765a = Object[_0x343e14(0x20e)](_0x50c285);
        let _0x13fbba = _0x5a765a[_0x343e14(0x218)]((_0x3c55c1) => {
          return new Promise((_0x27869b, _0x26d23e) => {
            const _0x2fd2c2 = _0x4cd9;
            db[_0x2fd2c2(0x205)](
              _0x2fd2c2(0x206) + _0x3c55c1 + _0x2fd2c2(0x1f9),
              [_0x50c285[_0x3c55c1], _0x4032f1],
              (_0x52a64d) => {
                if (_0x52a64d) _0x26d23e(_0x52a64d);
                else _0x27869b(!![]);
              },
            );
          });
        });
        Promise["all"](_0x13fbba)
          [_0x343e14(0x213)](() => _0x5e6705(!![]))
          [_0x343e14(0x1f2)](_0x40df40);
      });
    },
    get: async (_0x5c1283) => {
      return new Promise((_0x551fa6, _0x452c93) => {
        const _0x3f1c6b = _0x4cd9;
        db[_0x3f1c6b(0x1f3)](
          "SELECT\x20*\x20FROM\x20groups\x20WHERE\x20id\x20=\x20?",
          [_0x5c1283],
          (_0x10fb0b, _0x266438) => {
            if (_0x10fb0b) _0x452c93(_0x10fb0b);
            else _0x551fa6(_0x266438 || {});
          },
        );
      });
    },
  }),
  (exports["AFK"] = {
    add: async (_0x239636, _0x38a37a, _0x137942, _0x5d4aa5, _0x4f2a9f) => {
      return new Promise((_0x3f82aa, _0x479116) => {
        const _0x4db23c = _0x4cd9;
        db["run"](
          _0x4db23c(0x211),
          [_0x239636, _0x38a37a, _0x137942, _0x5d4aa5, _0x4f2a9f],
          (_0x4cfa71) => {
            if (_0x4cfa71) _0x479116(_0x4cfa71);
            else _0x3f82aa(!![]);
          },
        );
      });
    },
    check: async (_0x2eb4ea, _0x426691) => {
      return new Promise((_0x3884a9, _0x319cdb) => {
        db["get"](
          "SELECT\x201\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
          [_0x2eb4ea, _0x426691],
          (_0x5184d1, _0x2a2d90) => {
            if (_0x5184d1) _0x319cdb(_0x5184d1);
            else _0x3884a9(!!_0x2a2d90);
          },
        );
      });
    },
    get: async (_0x319f27, _0x2360d7) => {
      return new Promise((_0x397d22, _0x1c22e3) => {
        const _0x18dc8a = _0x4cd9;
        db["get"](
          _0x18dc8a(0x202),
          [_0x319f27, _0x2360d7],
          (_0x1eddf4, _0x147f99) => {
            if (_0x1eddf4) _0x1c22e3(_0x1eddf4);
            else _0x397d22(_0x147f99 || {});
          },
        );
      });
    },
    delete: async (_0x4d411e, _0x4cd7f3) => {
      return new Promise((_0x27801a, _0x2eb4a4) => {
        const _0x50adfd = _0x4cd9;
        db[_0x50adfd(0x205)](
          "DELETE\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
          [_0x4d411e, _0x4cd7f3],
          function (_0x45e5a3) {
            const _0x2e4588 = _0x50adfd;
            if (_0x45e5a3) _0x2eb4a4(_0x45e5a3);
            else _0x27801a(this[_0x2e4588(0x217)] > 0x0);
          },
        );
      });
    },
    getAll: async () => {
      return new Promise((_0x11c596, _0x164c81) => {
        const _0xf332c3 = _0x4cd9;
        db["all"](_0xf332c3(0x1f6), [], (_0x2c204e, _0xdafbbb) => {
          if (_0x2c204e) _0x164c81(_0x2c204e);
          else _0x11c596(_0xdafbbb || []);
        });
      });
    },
  }),
  (exports[_0x254ddb(0x1fd)] = {
    add: async (
      _0x3c21ef,
      _0x27f185,
      _0x5e1b3c = null,
      _0x2f4b21 = 0x0,
      _0x3e473b = 0x0,
      _0x3dd9b5 = 0x0,
      _0x552796 = 0x0,
      _0x36a8e0 = 0x0,
      _0x3b705a = ![],
      _0x2f7b21 = ![],
      _0x2eadcb = ![],
      _0xd4147b = ![],
      _0x29361f = null,
      _0x277dd4 = 0x0,
      _0x35139c = 0x0,
      _0x11b894 = 0x0,
      _0x404cfe = 0x0,
      _0x2f76ed = 0x0,
      _0x20d1ea = 0x0,
      _0x47637e = 0x0,
      _0x12bb5c = 0x0,
      _0x45e7db = 0x0,
      _0xb9db04 = 0x0,
      _0x54d500 = 0x0,
      _0xdd8958 = 0x0,
      _0x3e3caa = 0x0,
      _0x366f6a = 0x0,
      _0x48234c = 0x0,
      _0x44f343 = 0x0,
      _0x17cd40 = 0x0,
      _0x1e3bd9 = 0x0,
      _0x1a3fee = null,
    ) => {
      return new Promise((_0x44430f, _0x479283) => {
        const _0x2f5380 = _0x4cd9;
        db[_0x2f5380(0x1f3)](
          "SELECT\x20*\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
          [_0x3c21ef],
          (_0x152015, _0x5120c9) => {
            const _0x46b8a9 = _0x2f5380;
            if (_0x152015) _0x479283(_0x152015);
            else
              _0x5120c9
                ? _0x44430f(![])
                : db[_0x46b8a9(0x205)](
                    _0x46b8a9(0x21e),
                    [
                      _0x3c21ef,
                      _0x27f185,
                      _0x5e1b3c,
                      _0x2f4b21,
                      _0x3e473b,
                      _0x3dd9b5,
                      _0x552796,
                      _0x36a8e0,
                      _0x3b705a,
                      _0x2f7b21,
                      _0x2eadcb,
                      _0xd4147b,
                      _0x29361f,
                      _0x277dd4,
                      _0x35139c,
                      _0x11b894,
                      _0x404cfe,
                      _0x2f76ed,
                      _0x20d1ea,
                      _0x47637e,
                      _0x12bb5c,
                      _0x45e7db,
                      _0xb9db04,
                      _0x54d500,
                      _0xdd8958,
                      _0x3e3caa,
                      _0x366f6a,
                      _0x48234c,
                      _0x44f343,
                      _0x17cd40,
                      _0x1e3bd9,
                      _0x1a3fee,
                    ],
                    (_0x3006cf) => {
                      if (_0x3006cf) _0x479283(_0x3006cf);
                      else _0x44430f(!![]);
                    },
                  );
          },
        );
      });
    },
    get: async (_0x114487) => {
      return new Promise((_0x505536, _0x512a20) => {
        const _0x235683 = _0x4cd9;
        db[_0x235683(0x1f3)](
          _0x235683(0x1ff),
          [_0x114487],
          (_0x343cdf, _0x3698ae) => {
            if (_0x343cdf) _0x512a20(_0x343cdf);
            else _0x505536(_0x3698ae || {});
          },
        );
      });
    },
    update: async (_0x46104e, _0x3dd5e5) => {
      return new Promise((_0x57deba, _0x197956) => {
        const _0x40a5a6 = _0x4cd9,
          _0x72fa9f = Object[_0x40a5a6(0x20e)](_0x3dd5e5);
        let _0x1ccebd = _0x72fa9f[_0x40a5a6(0x218)]((_0x140974) => {
          return new Promise((_0x5e536a, _0x2945d1) => {
            const _0x34661c = _0x4cd9,
              _0x442b2a =
                typeof _0x3dd5e5[_0x140974] === _0x34661c(0x204)
                  ? _0x3dd5e5[_0x140974]
                    ? 0x1
                    : 0x0
                  : _0x3dd5e5[_0x140974];
            db[_0x34661c(0x205)](
              "UPDATE\x20users\x20SET\x20" + _0x140974 + _0x34661c(0x1f9),
              [_0x442b2a, _0x46104e],
              (_0x1a14de) => {
                if (_0x1a14de) _0x2945d1(_0x1a14de);
                else _0x5e536a(!![]);
              },
            );
          });
        });
        Promise[_0x40a5a6(0x209)](_0x1ccebd)
          [_0x40a5a6(0x213)](() => _0x57deba(!![]))
          [_0x40a5a6(0x1f2)](_0x197956);
      });
    },
    delete: async (_0x1d6efa) => {
      return new Promise((_0x463daf, _0x457503) => {
        const _0x586aee = _0x4cd9;
        db[_0x586aee(0x205)](
          "DELETE\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
          [_0x1d6efa],
          function (_0x3b3c53) {
            const _0x547a61 = _0x586aee;
            if (_0x3b3c53) _0x457503(_0x3b3c53);
            else _0x463daf(this[_0x547a61(0x217)] > 0x0);
          },
        );
      });
    },
    all: async () => {
      return new Promise((_0x4094f6, _0x3ffff7) => {
        const _0xfd0801 = _0x4cd9;
        db[_0xfd0801(0x209)](_0xfd0801(0x207), [], (_0x522689, _0x2f4c5a) => {
          if (_0x522689) _0x3ffff7(_0x522689);
          else _0x4094f6(_0x2f4c5a || []);
        });
      });
    },
    ban: async (_0x1c60f6) => {
      const _0x3a4b30 = _0x254ddb;
      return this[_0x3a4b30(0x1fb)](_0x1c60f6, { banned: !![] });
    },
    unban: async (_0x41fa13) => {
      const _0xffe0c = _0x254ddb;
      return this[_0xffe0c(0x1fb)](_0x41fa13, { banned: ![] });
    },
    block: async (_0x4ba5e1) => {
      return this["update"](_0x4ba5e1, { bloq: !![] });
    },
    unblock: async (_0x4da7a8) => {
      return this["update"](_0x4da7a8, { bloq: ![] });
    },
  });
function _0x33c4() {
  const _0x382266 = [
    "changes",
    "map",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20users\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20name\x20TEXT\x20NOT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20profile\x20TEXT\x20DEFAULT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20level\x20INTEGER\x20DEFAULT\x201,\x0a\x20\x20\x20\x20\x20\x20\x20\x20balance\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20time\x20TEXT\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20now\x20TEXT\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20xp\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20banned\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20bloq\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20warning\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20married_boolean\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20married_id\x20TEXT\x20DEFAULT\x20NULL,\x0a\x20\x20\x20\x20\x20\x20\x20\x20mine\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20gold\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20diamonds\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20three\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20palm\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20pines\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fish\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20marucha\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20squid\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20apple\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20orange\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20lemon\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20mine_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fished_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20fell_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20harvest_time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20bank\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20register\x20INTEFER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20register_time\x20TEXT\x20DEFAULT\x20NULL\x0a\x20\x20\x20\x20\x20\x20)\x0a\x20\x20\x20\x20",
    "624366XEfCSh",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20groups\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antilink\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20mute\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leveling\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20viewonce\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20games\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pokemon\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20extranjeros\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20antidelete\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20nsfw\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20raid\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20time\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20welcome_status\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20welcome_text\x20TEXT\x20DEFAULT\x20\x27🍟\x20Bienvenido/a\x20@user\x20al\x20grupo:\x20*{title}*\x20{foto}\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leave_status\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20leave_text\x20TEXT\x20DEFAULT\x20\x27*🧃\x20Adios*\x20@user\x20{foto}\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "message",
    "statistics",
    "INSERT\x20INTO\x20users\x20(id,\x20name,\x20profile,\x20level,\x20balance,\x20time,\x20now,\x20xp,\x20banned,\x20bloq,\x20warning,\x20married_boolean,\x20married_id,\x20mine,\x20gold,\x20diamonds,\x20three,\x20palm,\x20pines,\x20fish,\x20marucha,\x20squid,\x20apple,\x20orange,\x20lemon,\x20mine_time,\x20fished_time,\x20fell_time,\x20harvest_time,\x20bank,\x20register,\x20register_time)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?,\x20?)",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20afk\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20jid\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupId\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20groupName\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timestamp\x20INTEGER,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20reason\x20TEXT,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20PRIMARY\x20KEY\x20(jid,\x20groupId)\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "configHandler",
    "log",
    "UPDATE\x20stats\x20SET\x20count\x20=\x20count\x20+\x20?\x20WHERE\x20prop\x20=\x20?",
    "5246646RCswfD",
    "SELECT\x20*\x20FROM\x20config",
    "catch",
    "get",
    "verbose",
    "9003uqBjam",
    "SELECT\x20*\x20FROM\x20afk",
    "SELECT\x20*\x20FROM\x20",
    "154eKdYNr",
    "\x20=\x20?\x20WHERE\x20id\x20=\x20?",
    "info",
    "update",
    "Error\x20al\x20abrir\x20la\x20base\x20de\x20datos",
    "Users",
    "8774091ukClCq",
    "SELECT\x20*\x20FROM\x20users\x20WHERE\x20id\x20=\x20?",
    "database.db",
    "sqlite3",
    "SELECT\x20*\x20FROM\x20afk\x20WHERE\x20jid\x20=\x20?\x20AND\x20groupId\x20=\x20?",
    "groupManage",
    "boolean",
    "run",
    "UPDATE\x20groups\x20SET\x20",
    "SELECT\x20*\x20FROM\x20users",
    "204100LmmhAY",
    "all",
    "join",
    "UPDATE\x20config\x20SET\x20",
    "108vgqDHr",
    "115UKMyOE",
    "keys",
    "CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20stats\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20prop\x20TEXT\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20count\x20INTEGER\x20DEFAULT\x201\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "forEach",
    "INSERT\x20INTO\x20afk\x20(jid,\x20groupId,\x20groupName,\x20timestamp,\x20reason)\x20VALUES\x20(?,\x20?,\x20?,\x20?,\x20?)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(jid,\x20groupId)\x20DO\x20UPDATE\x20SET\x20timestamp\x20=\x20excluded.timestamp,\x20reason\x20=\x20excluded.reason",
    "257560QQLJUX",
    "then",
    "INSERT\x20INTO\x20groups\x20(id,\x20groupName)\x20VALUES\x20(?,\x20?)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT(id)\x20DO\x20NOTHING",
    "path",
    "17040790UwXOFt",
  ];
  _0x33c4 = function () {
    return _0x382266;
  };
  return _0x33c4();
}