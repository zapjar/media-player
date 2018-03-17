(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function MediaPlayer(video) {

  console.log('MediaPlayer created');

  function play() {
    console.log('play');
    video.play();
  }

  function pause() {
    console.log('pause');
    video.pause();
  }

  function setSource(src) {
    console.log('setSource');
    video.src = src;
  }

  return {
    setSource: setSource,
    play: play,
    pause: pause
  };
}

window.MediaPlayer = MediaPlayer;

exports.default = MediaPlayer;

},{}]},{},[1]);
