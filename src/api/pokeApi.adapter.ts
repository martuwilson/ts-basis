import axios from "axios";


export class PokeApiFetchAdapter {

    async get<T>(url: string): Promise<T> { // T significa que es generico
        const response = await fetch(url);
        const data: T= await response.json();
        return data;
    }

}

export class pokeApiAdapter {

    private readonly axios = axios;

    async get<T>(url: string){ // T significa que es generico
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    async post(url: string, data: any){

    }

    async put(url: string, data: any){

    }

    async delete(url: string){

    }

}