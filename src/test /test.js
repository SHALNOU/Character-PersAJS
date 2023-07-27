import Daemon from '../class/Daemon';
import Zombie from '../class/Zombie';
import Bowerman from '../class/bowerman';
import Undead from '../class/Undead';
import Magician from '../class/Magician';
import Swordsman from '../class/Swordsman';

describe('test use heroies', () => {
  describe('peronality test default', () => {
    it('name and type return default heroies', () => {
      const pers = new Daemon('igor', 'Daemon');
      expect(pers.name).toBe('igor');
      expect(pers.type).toBe('Daemon');
      expect(pers.level).toBe(1);
      expect(pers.health).toBe(100);
    });

    it('name < 2 symbol or name > 10 symbol', () => {
      expect(() => new Daemon('', 'Bowerman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
      expect(() => new Daemon(123, 'Swordsman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
      expect(() => new Daemon('gamburger-bilder-big', 'Magician')).toThrow('Имя должно быть строкой от 2 до 10 символов');
      expect(() => new Daemon('a', 'Undead')).toThrow('Имя должно быть строкой от 2 до 10 символов');
      expect(() => new Daemon('-', 'Zombie')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    });
  });

  describe('Bowerman class', () => {
    it('should create a new Bowerman instance', () => {
      const bow = new Bowerman('Bowerman1');
      bow.attack = 25;
      bow.defence = 25;
      expect(bow.name).toBe('Bowerman1');
      expect(bow.type).toBe('Bowerman');
      expect(bow.health).toBe(100);
      expect(bow.level).toBe(1);
      expect(bow.attack).toBe(25);
      expect(bow.defence).toBe(25);
    });
  });
  describe('Swordsman class', () => {
    it('should create a new Swordsman instance', () => {
      const swor = new Swordsman('Swordsman1');
      swor.attack = 40;
      swor.defence = 10;
      expect(swor.name).toBe('Swordsman1');
      expect(swor.type).toBe('Swordsman');
      expect(swor.health).toBe(100);
      expect(swor.level).toBe(1);
      expect(swor.attack).toBe(40);
      expect(swor.defence).toBe(10);
    });
  });

  describe('Magician class', () => {
    it('should create a new Magician instance', () => {
      const magi = new Magician('Magician1');
      magi.attack = 10;
      magi.defence = 40;
      expect(magi.name).toBe('Magician1');
      expect(magi.type).toBe('Magician');
      expect(magi.health).toBe(100);
      expect(magi.level).toBe(1);
      expect(magi.attack).toBe(10);
      expect(magi.defence).toBe(40);
    });
  });

  describe('Daemon class', () => {
    it('should create a new Daemon instance', () => {
      const dae = new Daemon('Daemon1');
      dae.attack = 10;
      dae.defence = 40;
      expect(dae.name).toBe('Daemon1');
      expect(dae.type).toBe('Daemon');
      expect(dae.health).toBe(100);
      expect(dae.level).toBe(1);
      expect(dae.attack).toBe(10);
      expect(dae.defence).toBe(40);
    });
  });

  describe('Undead class', () => {
    it('should create a new Undead instance', () => {
      const undead = new Undead('Undead1');
      undead.attack = 25;
      undead.defence = 25;
      expect(undead.name).toBe('Undead1');
      expect(undead.type).toBe('Undead');
      expect(undead.health).toBe(100);
      expect(undead.level).toBe(1);
      expect(undead.attack).toBe(25);
      expect(undead.defence).toBe(25);
    });
  });

  describe('Zombie class', () => {
    it('should create a new Zombie instance', () => {
      const zombie = new Zombie('Zombie1');
      zombie.attack = 25;
      zombie.defence = 25;
      expect(zombie.name).toBe('Zombie1');
      expect(zombie.type).toBe('Zombie');
      expect(zombie.health).toBe(100);
      expect(zombie.level).toBe(1);
      expect(zombie.attack).toBe(25);
      expect(zombie.defence).toBe(25);
    });
  });
  describe('test levelUp() and damage()', () => {
    it('should increase level and reset health, attack, and defence on levelUp()', () => {
      const swordsmanCharacter = new Swordsman('Swordsman1');
      swordsmanCharacter.levelUp();

      expect(swordsmanCharacter.level).toBe(2);
      expect(swordsmanCharacter.health).toBe(100);
      expect(swordsmanCharacter.attack).toBeCloseTo(48, 0); // Проверка на увеличение атаки на 20%
      expect(swordsmanCharacter.defence).toBeCloseTo(12, 0); // Проверка на увеличение защиты на 20%
    });

    it('should throw an error if trying to levelUp() a dead character', () => {
      const swordsmanCharacter = new Swordsman('Swordsman1');
      swordsmanCharacter.health = 0;

      expect(() => swordsmanCharacter.levelUp()).toThrow('Нельзя повысить уровень умершего');
    });

    it('should reduce health based on points and defence on damage()', () => {
      const swordsmanCharacter = new Swordsman('Swordsman1');
      const initialHealth = swordsmanCharacter.health;
      const damageAmount = 30;
      const expectedHealth = initialHealth - damageAmount * (1 - swordsmanCharacter.defence / 100);
      swordsmanCharacter.damage(damageAmount);

      expect(swordsmanCharacter.health).toBeCloseTo(expectedHealth, 0);
    });

    it('should not reduce health below 0 on damage()', () => {
      const swordsmanCharacter = new Swordsman('Swordsman1');
      swordsmanCharacter.health = 10;
      const damageAmount = 20;
      swordsmanCharacter.damage(damageAmount);

      expect(swordsmanCharacter.health).toBe(0);
    });

    it('should throw an error if points are not a number or less than 0 on damage()', () => {
      const swordsmanCharacter = new Swordsman('Swordsman1');

      expect(() => swordsmanCharacter.damage(-10)).toThrow('is not symbol or not return up and min zero');
      expect(() => swordsmanCharacter.damage('invalid')).toThrow('is not symbol or not return up and min zero');
    });
  });
});
