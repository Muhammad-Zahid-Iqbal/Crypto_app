import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'x-rapidapi-key': '269256da50msh5ba9c11c12fbea7p1bdad0jsn019777a7d5f6',
    'x-rapidapi-host': 'cryptonews16.p.rapidapi.com'
}

const baseUrl = 'https://cryptonews16.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews: builder.query({
            query: (count) => createRequest(`/coindesk?limit=${count}`)
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;