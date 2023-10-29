import { axiosConnector } from './apiConnector';
import { dpStore } from '../store';

const store = dpStore();
const token = store.getAuthToken;

const errorHandler = (error:any) => {
    if(error.response) {
        alert(error.response.data.message)
    } else {
        alert(error);
    }
    console.error('Error:', error);
}

export const fetchArticles = async () => {
    try {
        const config: AxiosRequestConfig = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        },
    };
    const articles = await axiosConnector.get<any>(
        '/article/',
        config
    );
        return articles;
    } catch (error) {
        errorHandler(error);
    }
}

export const fetchArticle = async (articleId:number) => {
    try {
        const config: AxiosRequestConfig = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        },
    };
    const article = await axiosConnector.get<any>(
        '/article/' + articleId,
        config
    );
        return article;
    } catch (error) {
        errorHandler(error);
    }
}

export const createArticle = async(data:any) => {
    try {
        const config: AxiosRequestConfig = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        },
    };
    const article = await axiosConnector.post<any>(
        '/article/create',
        data,
        config
    );
        return article;
    } catch (error) {
        errorHandler(error);
    }
}

export const updateArticle = async(data:any) => {
    try {
        const config: AxiosRequestConfig = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        },
    };
    const article = await axiosConnector.post<any>(
        '/article/' + data.id + "/update",
        data,
        config
    );
        return article;
    } catch (error) {
        errorHandler(error);
    }
}

export const deleteArticle = async(articleId:number) => {
    try {
        const config: AxiosRequestConfig = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        },
    };
    const response = await axiosConnector.delete<any>(
        '/article/' + articleId,
        config
    );
        return response;
    } catch (error) {
        errorHandler(error);
    }
}