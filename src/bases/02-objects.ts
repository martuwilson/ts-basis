export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pokemonIds.push(+'11') // el + es necesario para convertir el string a number


interface Pokemon{
    id: number,
    name: string,
    age?: number
}
export const animalito:Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export default Pokemon


export const pokemons: Pokemon[] = [];

pokemons.push(animalito);