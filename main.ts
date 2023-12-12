// :D

let mode = {_2blade:false,_4blade:true}
namespace agdt { export function init(){pins.servoWritePin(AnalogPin.P0, 0);basic.showIcon(IconNames.Happy)} export function opendoor(){if (mode._4blade||mode._2blade){pins.servoWritePin(AnalogPin.P0, 0)}} export function closedoor(){pins.servoWritePin(AnalogPin.P0, 90)} export function send(a:number){radio.sendNumber(a)} export function group(a:number){radio.setGroup(a)}}

agdt.group(255)
agdt.init()
let Opened = false;

input.onButtonPressed(Button.A,function(){
    if (Opened == false) {
        agdt.send(1)
        Opened = true
    } else {
        agdt.send(0)
        Opened = false
    }
})

radio.onReceivedNumber(function(a){
    if (a == 1) {
        agdt.opendoor()
    } else {
        agdt.closedoor()
    }
})