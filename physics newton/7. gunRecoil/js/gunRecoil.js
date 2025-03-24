/*
	name exercise: gunRecoil
	description: the seventh excercise of newton made with js
	autor: unArvol
	date: march 15th of 2025
*/


let gunMass= 85;
let bulletMass=135;
let bulletVelocity=970;
let recoilVelocity;

recoilVelocity= (bulletMass*bulletVelocity)/gunMass;

console.log("The recoil after shoot the gun is: "+recoilVelocity+ " m/s^2";
