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
