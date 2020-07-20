import axios from 'axios';
import config from '../constants';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

// set token 
// TO-DO

/**
 * Get all languages with a specific format
 */

const getAll = async () => {
    const {data, error} = await axios.get(`${baseUrl}/languages/`);
    const result = data.results.map(lang => {
        return {
            name: lang.name,
            walsCode: lang.walsCode,
            family: lang.family.name,
            genus: lang.genus.name,
            lemmas: getRandomInt(10000, 50000),
            words: getRandomInt(50000, 500000) // number of words and lemmas are mocked for this iteration
        }
    });

    return { 
        result,
        error
    };
};

export default {
    getAll
}