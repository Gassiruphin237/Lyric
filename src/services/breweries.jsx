import axios from 'axios';

const API_BASE_URL = 'https://api.openbrewerydb.org/v1/breweries';

const apiService = axios.create({
    baseURL: API_BASE_URL,
});

export const getAllBreweries = async () => {
    try {
        const response = await apiService.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching breweries:', error);
        throw error;
    }
};