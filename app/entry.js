'use strict';

// jQuery を使ったコード
import $ from 'jquery';   // jqueryモジュールを読み込み、$ という名前の変数に代入

const block = $('#block');  // id="block" が設定された div 要素を取得し、変数に代入
const scalingButton = $('#scaling-button');   // id="scaling-button" が設定された button 要素を取得し、変数に代入

/**
 * jQuery で取得した要素の jQuery オブジェクトの click 関数の第一引数に、無名関数を渡し、
 * 　要素がクリックされた際に、この click 関数に渡された animate 関数が呼び出される。
 * animate 関数は、CSS の style を JavaScript のオブジェクトとして定義したものを第一引数に、
 * 　第二引数にアニメーションをする時間をミリ秒の整数で設定する。
 */
scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});