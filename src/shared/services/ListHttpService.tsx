import { AxiosResponse } from 'axios';

import { HttpService } from 'shared/services/HttpService';

export default abstract class ListHttpService extends HttpService {
    static listPokemonByType(typeUrl: any): Promise<AxiosResponse> {
        return this.get(`${typeUrl}`);
    }

    static getPokemonByUrl(url: string): Promise<AxiosResponse> {
        return this.get(`${url}`);
    }
}