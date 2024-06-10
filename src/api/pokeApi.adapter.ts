/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";


export interface HttpAdapter {
    get<T>( url:string ):Promise<T>;
}


export class PokeApiFetchAdapter implements HttpAdapter {

    async get<T>(url: string): Promise<T> { // T significa que es generico
        const response = await fetch(url);
        const data: T= await response.json();
        return data;
    }

}

export class pokeApiAdapter implements HttpAdapter {

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