/* eslint-disable @typescript-eslint/no-unused-vars */

import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiFetchAdapter, pokeApiAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter // no importa que clase sea por ejemplo pokeApiFetch o pokeApi, mientras tenga la interface HttpAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
       
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        console.log(data.moves);
        
        return data.moves;
    }

}

const pokeApi = new pokeApiAdapter(); // CREACION DE INSTACIA NUEVA DEL ADAPTER
const pokeApiFetch = new PokeApiFetchAdapter();


export const charmander = new Pokemon( 4, 'Charmander', pokeApiFetch );

charmander.getMoves();