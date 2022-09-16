// ==UserScript==
// @name           Bangumi重定向2019
// @version        1.0
// @author         Kafka' K
// @description    重定向bangumi域名
// @match        *://bgm.tv/*
// @match        *//bangumi.tv/*
// @match        *//www.bangumi.tv/*
// @run-at         document-idle
// ==/UserScript==

if (location.protocol == 'http:') {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}