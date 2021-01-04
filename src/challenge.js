// buat sebuah object Hero , type (melee atau range), attack, hp
// method serang, healing, armor

// serang, hp berkurang
// healing, hp bertambah

// armor melee per point di bagi 10
// armor range per point di bagi 8

// attack range 120
// attack melee 80
// oop , bikin kelas hero

const Hero = function (type, attack, hp) {
    this.type = type;
    this.attack = attack;
    this.hp = hp;
    // Ga ngerti maksudnya armor, ini sepenangkapan saya ya
    if (this.type === 'melee') {
        this.attack >= 0 && this.attack <= 80;
        this.armor = function(points) {
            return (`Remaining attacks: ${this.attack -= points / 10}`);
        }
    } else if (this.type === 'range') {
        this.attack >= 0 && this.attack <= 120;
        this.armor = function(points) {
            return (`Remaining attacks: ${this.attack -= points / 8}`);
        }
    }

    this.diserang = function(serangan) {
        return (`Remaining HP: ${this.hp -= serangan}`);
    }
    this.healing = function(obat) {
        return (`Remaining HP: ${this.hp += obat}`);
    }
}

const melee = new Hero('melee', 100, 100);
const range = new Hero('range', 50, 100);