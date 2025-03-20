function _0x1d67() {
    var _0x257f0f = [
      '231160oFSPUy',
      '4434570UnarUM',
      '1088780kVJxex',
      '95727vJLWDt',
      '153420lSLLAr',
      'hash',
      '193608KXxFbz',
      'verify',
      'compare',
      '905iyqQlT',
      'genSalt',
      '6IHongK',
      '20WfJzyM',
      'assign',
      'sign',
    ]
    _0x1d67 = function () {
      return _0x257f0f
    }
    return _0x1d67()
  }
  ;(function (_0x14649d, _0x47ae66) {
    var _0x27c6d7 = _0x34e2,
      _0x107060 = _0x14649d()
    while (!![]) {
      try {
        var _0x243049 =
          -parseInt(_0x27c6d7(0x124)) / 0x1 +
          (parseInt(_0x27c6d7(0x129)) / 0x2) *
            (-parseInt(_0x27c6d7(0x121)) / 0x3) +
          (-parseInt(_0x27c6d7(0x12a)) / 0x4) *
            (-parseInt(_0x27c6d7(0x127)) / 0x5) +
          parseInt(_0x27c6d7(0x122)) / 0x6 +
          -parseInt(_0x27c6d7(0x120)) / 0x7 +
          parseInt(_0x27c6d7(0x11e)) / 0x8 +
          parseInt(_0x27c6d7(0x11f)) / 0x9
        if (_0x243049 === _0x47ae66) break
        else _0x107060['push'](_0x107060['shift']())
      } catch (_0x502158) {
        _0x107060['push'](_0x107060['shift']())
      }
    }
  })(_0x1d67, 0x19339)
  import _0x3b4d07 from 'jsonwebtoken'
  function _0x34e2(_0x5a4e36, _0x4b773b) {
    var _0x1d673b = _0x1d67()
    return (
      (_0x34e2 = function (_0x34e295, _0x527969) {
        _0x34e295 = _0x34e295 - 0x11e
        var _0x12b80a = _0x1d673b[_0x34e295]
        return _0x12b80a
      }),
      _0x34e2(_0x5a4e36, _0x4b773b)
    )
  }
  import _0x6ab89b from 'bcrypt'
  export function createSalt(_0x23b773) {
    var _0x405673 = _0x34e2
    return _0x6ab89b[_0x405673(0x128)](_0x23b773)
  }
  export function hashPassword(_0x355fdb, _0x381c3f) {
    var _0x1c9996 = _0x34e2
    return _0x6ab89b[_0x1c9996(0x123)](_0x355fdb, _0x381c3f)
  }
  export function comparePassword(_0x14277e, _0x170729) {
    var _0x9a42e = _0x34e2
    return _0x6ab89b[_0x9a42e(0x126)](_0x14277e, _0x170729)
  }
  export function generateToken(
    _0x12c914,
    _0x4e222b,
    _0x480778,
    _0x2c9979,
    _0x336d42
  ) {
    var _0x282537 = _0x34e2
    return _0x3b4d07[_0x282537(0x12c)](
      _0x12c914,
      _0x4e222b,
      Object[_0x282537(0x12b)](Object[_0x282537(0x12b)]({}, _0x336d42), {
        expiresIn: _0x480778,
        algorithm: _0x2c9979,
      })
    )
  }
  export function verifyToken(_0x397c19, _0xc4aea5, _0x2de447) {
    var _0x371415 = _0x34e2
    return _0x3b4d07[_0x371415(0x125)](_0x397c19, _0xc4aea5, _0x2de447)
  }
  