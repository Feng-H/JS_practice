// ==UserScript==
// @name         hidden sth do not want
// @namespace    https://feng-h.github.io/
// @version      0.1
// @description  first Tampermonkey Script and practice JavaScript
// @author       Feng-H
// @match        https://www.baidu.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 删除百度首页热榜
    let firstPage =document.querySelector('#s-hotsearch-wrapper');
    firstPage.remove();

    // 删除搜索页面的热榜
    let secondPage =document.querySelector('#content_right');
    console.log(secondPage); // 输出null 无法进行移除，需要找到热榜所对应的 ID
    // secondPage.remove();

})();