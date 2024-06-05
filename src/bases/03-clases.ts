import axios from "axios";

// clases son representaciones de objetos en el mundo real
export class Pokemon {
    //getters - sirven para obtener un valor de una propiedad privada
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(
        public readonly id: number,
        public name: string,
        ) {}
    // readOnly es una propiedad que no se puede modificar, solo se puede leer

        // metodos - son acciones que hace un objeto
    public scream() {
        console.log(`GO ${this.name}!`)
    }
    public speak() {
        console.log(`Hello, I'm ${this.name}`)
    }

    async getMoves() {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        console.log(data.moves)

        return data.moves
    }
}

export const pikachu = new Pokemon(1, 'pikachu');