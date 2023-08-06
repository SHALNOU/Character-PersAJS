import Swordsman from './class/Swordsman.js';
import CopyOrderObject from './object/CopyOrderObject.js';
import extractAttacks from './Destructuring/Destructuring.js'


const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

const mySwordsman = new Swordsman('Arthur');
mySwordsman.attack = 70;
mySwordsman.defence = 25;

const sortedPropsArray = CopyOrderObject(mySwordsman, types);
console.log(sortedPropsArray);


const character = {
	name: 'Лучник',
	type: 'Bowman',
	health: 50,
	level: 3,
	attack: 40,
	defence: 10,
	special: [
		{
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон'
		},
		{
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...'
			// <- обратите внимание, описание "засекречено"
		}
	]
};

let extractedAttacks = extractAttacks(character);
console.log(extractedAttacks);