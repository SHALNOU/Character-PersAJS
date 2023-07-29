import Swordsman from '../class/Swordsman';

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
