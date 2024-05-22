function Pokemon (nome, stats) {
    let _nome = nome;
    let _stats = stats;

    this.getNome = function () {
        return _nome;
    }

    this.getStats = function () {
        return _stats;
    }
}

function Pichu (golpes, nickname) {
    Pokemon.call (this, 'Pichu', [20,40,15,35,35,60]);

    this.golpes = golpes;
    this.nickname = nickname;
}

function Pikachu (golpes, nickname) {
    Pokemon.call (this, 'Pikachu', [35,55,40,50,50,90]);

    this.golpes = golpes;
    this.nickname = nickname;
}

function Raichu (golpes, nickname) {
    Pokemon.call (this, 'Raichu', [60,90,55,90,80,110]);

    this.golpes = golpes;
    this.nickname = nickname;
}

const pokemon1 = new Pichu (['Thunder Shock', 'Volt Switch', 'Nasty Plot', 'Surf'], 'Amarelinho');
const pokemon2 = new Pikachu (['Thunderbolt', 'Volt Switch', 'Nasty Plot', 'Surf'], 'Amarelo');
const pokemon3 = new Raichu (['Thunder', 'Volt Switch', 'Nasty Plot', 'Surf'], 'Amarelão');

console.log(pokemon1.getNome(), pokemon1.nickname, pokemon1.getStats(), pokemon1.golpes);
console.log(pokemon2.getNome(), pokemon2.nickname, pokemon2.getStats(), pokemon2.golpes);
console.log(pokemon3.getNome(), pokemon3.nickname, pokemon3.getStats(), pokemon3.golpes);