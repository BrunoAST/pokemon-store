import axios, { AxiosResponse } from 'axios';

export class HttpService {
    static post(url: string, data: any): Promise<AxiosResponse> {
        return axios.post(url, data);
    }

    static get(url: string): Promise<AxiosResponse> {
        return axios.get(url);
    }
}
