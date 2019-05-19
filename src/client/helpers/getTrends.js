const axios = require('axios');

export function getTrends(callback, errorcallback) {
    axios.get('/api/trends')
        .then(res => {
            if (callback != null) {
                callback(res.data);
            }
        })
        .catch(err => {
            // catch error
            if (errorcallback != null) {
                errorcallback(err);
            }
        })
};