// SPDX-License-Identifier: AGPL-3.0-or-later

/**    ----------------------------------------------------------
 *     test.js
 *     ----------------------------------------------------------
 *     Copyright ©
 *       Souta Ozaki
 *         2018, 2019, 2020
 *         2021, 2022, 2023
 *         2024, 2025, 2026
 *       Pellegrino Prevete
 *         2026
 * 
 *     All rights reserved
 *     ----------------------------------------------------------
 * 
 *     This program is free software: you can redistribute it
 *     and/or modify it under the terms of the GNU General
 *     Public License as published by the Free Software
 *     Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 * 
 *     This program is distributed in the hope that it will
 *     be useful, but WITHOUT ANY WARRANTY; without even the
 *     implied warranty of MERCHANTABILITY or FITNESS FOR A
 *     PARTICULAR PURPOSE.
 *     See the GNU General Public License for more details.
 * 
 *     You should have received a copy of the
 *     GNU General Public License
 *     along with this program.
 *     If not, see <https://www.gnu.org/licenses/>.
 */


'use strict';

const
  _libsha256sum =
    await import(
      './libsha256sum');
const
  _sha256sum =
    _libsha256sum._sha256sum;
var
  _assert =
    await import(
      'assert');
var
  _filename =
    'LICENSE.md';
var
  _pre_checked_sum =
    '345eec8796c03e90b9185e4ae3fc12c1e8ebafa540f7c7821fb5da7a54edc704';

_sha256sum(
  _filename,
  function (
    _error,
    _sum) {
  console.log(
    'sum = ' + _sum);
  _assert(
    _error === null);
  _assert(
    _sum === _pre_checked_sum);
  console.log(
    'Pass 2/2');
  });

const
  _sync_sum =
    _sha256sum(
      _filename);
assert(
  _sync_sum === _pre_checked_sum);
console.log(
  'sum = ' + sync_sum);
console.log(
  'Pass 1/2');

// errors
_sha256sum(
  'does not exist',
  function (
    _error,
    _sum) {
  assert(
    _error);
  assert(
    !_sum)
});
