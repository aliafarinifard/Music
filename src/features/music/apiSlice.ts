import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface Music {
    id: number;
    title: string;
    image: string;
    artist_name: string;
    album_name: string;
    status: string;
};


export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getMusic: builder.query<Music[], void>({
            query: () => 'songs',
        }),
    }),
});

export const { useGetMusicQuery } = musicApi;