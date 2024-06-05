// clases son representaciones de objetos en el mundo real
export class Pokemon {

    constructor(public readonly id: number, public name: string) {}
    // readOnly es una propiedad que no se puede modificar, solo se puede leer
}

export const pikachu = new Pokemon(1, 'pikachu');
export const charmander = new Pokemon(2, 'charmander');
export const bulbasaur = new Pokemon(3, 'bulbasaur');