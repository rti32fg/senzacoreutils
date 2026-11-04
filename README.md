[comment]: <> (SPDX-License-Identifier: AGPL-3.0)

[comment]: <> (------------------------------------------------------)
[comment]: <> (Copyright © 2018, 2019, 2020)
[comment]: <> (            2021, 2022, 2023)
[comment]: <> (            2024, 2025, 2026)
[comment]: <> (            Souta Ozaki)
[comment]: <> (          © 2026)
[comment]: <> (            Pellegrino Prevete)
[comment]: <> (All rights reserved)
[comment]: <> (------------------------------------------------------)

[comment]: <> (This program is free software: you can redistribute)
[comment]: <> (it and/or modify it under the terms of the GNU Affero)
[comment]: <> (General Public License as published by the Free)
[comment]: <> (Software Foundation, either version 3 of the License.)

[comment]: <> (This program is distributed in the hope that it will be)
[comment]: <> (useful, but WITHOUT ANY WARRANTY; without even the)
[comment]: <> (implied warranty of MERCHANTABILITY or FITNESS FOR)
[comment]: <> (A PARTICULAR PURPOSE. See the)
[comment]: <> (See the GNU Affero General Public License for)
[comment]: <> (more details.)

[comment]: <> (You should have received a copy of the GNU Affero)
[comment]: <> (General Public License along with this program.)
[comment]: <> (If not, see <https://www.gnu.org/licenses/>.)


# senzacoreutils

As a partial replacement of GNU Coreutils,
The Martian Company's `senzacoreutils` are
a core component of the
[DogeOS Android base](
  https://github.com/themartiancompany/android).

#### `sha256sum`

> Simply return an `sha256` sum of a given file.
  If using async version (by including callback),
  it will stream; successfully tested on files 4 GB+.

Adapted to be imported as an ES6 module in web browsers
by coupling with
[`tmcfs`](
  https://github.com/themartiancompany/tmcfs).

### Installation

```console
$ npm \
    install \
      "senzacoreutils"
```

__Test:__

```
$ npm \
    test
```

### API

__sha26sum(
   path,
   [callback])__

```javascript
const
  _senza_core_utils =
    await import(
      "senzacoreutils");
const
  _sha256sum =
    _senza_core_utils._sha256sum;

// sync (no callback)
_sha256sum(
  "./path/to/a_file");
// es. '345eec8796c03e90b9185e4ae3fc12c1e8ebafa540f7c7821fb5da7a54edc704'

// async/streamed (if using callback)
_sha256sum(
  "./path/to/a_file",
  function (
    _error,
    _sum) {
    if ( _error ) {
      return console.log(
               _error);
    }
    console.log(
      _sum)
    // '345eec8796c03e90b9185e4ae3fc12c1e8ebafa540f7c7821fb5da7a54edc704'
  });
```

### License

This program is released under the terms of
the GNU Affero General Public License version 3.

### Thanks
The `@themartiancompany/sha256-file`
Javascript ES6 module is based on
[sha256-file](
  https://github.com/so-ta/sha256-file)
and
[sha1-file](
  https://github.com/roryrjb/sha1-file).
