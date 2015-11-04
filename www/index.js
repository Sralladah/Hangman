// JavaScript Document

var usedLetters = [];
var index;
var queuedLetter;
var image;

function hideLetter() {
	for(index=0; index < usedLetters.length; index++){
		queuedLetter = usedLetters[index];
		image = document.getElementById(queuedLetter);
		image.src = "images/btnUsed.jpg";
	}
}
function aClick() {
    usedLetters.push("A");
    hideLetter();
}
function bClick() {
    usedLetters.push("B");
    hideLetter();
}
function cClick() {
    usedLetters.push("C");
    hideLetter();
}
function dClick() {
    usedLetters.push("D");
    hideLetter();
}
function eClick() {
    usedLetters.push("E");
    hideLetter();
}
function fClick() {
    usedLetters.push("F");
    hideLetter();
}
function gClick() {
    usedLetters.push("G");
    hideLetter();
}
function hClick() {
    usedLetters.push("H");
    hideLetter();
}
function iClick() {
    usedLetters.push("I");
    hideLetter();
}
function jClick() {
    usedLetters.push("J");
    hideLetter();
}
function kClick() {
    usedLetters.push("K");
    hideLetter();
}
function lClick() {
    usedLetters.push("L");
    hideLetter();
}
function mClick() {
    usedLetters.push("M");
    hideLetter();
}
function nClick() {
    usedLetters.push("N");
    hideLetter();
}
function oClick() {
    usedLetters.push("O");
    hideLetter();
}
function pClick() {
    usedLetters.push("P");
    hideLetter();
}
function qClick() {
    usedLetters.push("Q");
    hideLetter();
}
function rClick() {
    usedLetters.push("R");
    hideLetter();
}
function sClick() {
    usedLetters.push("S");
    hideLetter();
}
function tClick() {
    usedLetters.push("T");
    hideLetter();
}
function uClick() {
    usedLetters.push("U");
    hideLetter();
}
function vClick() {
    usedLetters.push("V");
    hideLetter();
}
function wClick() {
    usedLetters.push("W");
    hideLetter();
}
function xClick() {
    usedLetters.push("X");
    hideLetter();
}
function yClick() {
    usedLetters.push("Y");
    hideLetter();
}
function zClick() {
    usedLetters.push("Z");
    hideLetter();
}
