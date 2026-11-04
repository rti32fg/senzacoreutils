'use strict';

const
  _crypto =
    await import(
      "crypto");
const
  _create_hash =
    _crypto.createHash;
const
  _fs =
    await import(
      "fs");
const
  _create_read_stream =
    _fs.createReadStream;
const
  _read_file_sync =
    _fs.readFileSync;

function
  _sha256sum(
    _file_path,
    _callback) {
  var
    _sum =
      _create_hash(
        'sha256');
  const
    _callback_type =
      typeof(
        _callback);
  if ( _callback &&
       _callback_type === "function" ) {
    var
      _file_stream =
        _create_read_stream(
          _file_path);
    _file_stream.on(
      'error',
      function (
        _error) {
      return _callback(
               _error,
               null)
      });
    _file_stream.on(
      'data',
      function (
        _chunk) {
        try {
          _sum.update(
            _chunk)
        }
        catch (
          _ex) {
          return _callback(
                   _ex,
                   null)
        }
      });
    _file_stream.on(
      'end',
      function () {
        return _callback(
                 null,
                 _sum.digest(
                   'hex'))
    })
  }
  else {
    _sum.update(
      _read_file_sync(
        _file_path));
    return _sum.digest('hex')
  }
}

export {
  _sha256sum
};
