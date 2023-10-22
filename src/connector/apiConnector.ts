import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { BE_API_CONFIG } from "./ApiConfig";

class AxiosConnector {
    private instance: AxiosInstance;

    constructor(baseUrl: string) {
        this.instance = axios.create({
            baseURL: baseUrl
        });
    }

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.instance.get(url, config);
            return response.data;
        } catch(error) {
            throw error;
        }
    }

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.instance.delete(url, config);
            return response.data;
        } catch(error) {
            throw error;
        }
    }

    async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.instance.post(url, data, config);
            return response.data;
        } catch(error) {
            throw error;
        }
    }

    async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.instance.put(url, data, config);
            return response.data;
        } catch(error) {
            throw error;
        }
    }
}

export const axiosConnector = new AxiosConnector(BE_API_CONFIG.baseUrl);