import Swordsman from "./class/Swordsman";
import CopyOrderObject from "./object/CopyOrderObject";


const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

const mySwordsman = new Swordsman('Arthur');
mySwordsman.attack = 70;
mySwordsman.defence = 25;

const sortedPropsArray = CopyOrderObject(mySwordsman, types);
console.log(sortedPropsArray);
