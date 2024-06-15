// ** RTK
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

// ** Store
import { RootState } from "@/app/store";

// ** Features
import { Music } from "./apiSlice";

interface MusicState {
    searchTerm: string;
    songs: Music[];
}

const initialState: MusicState = {
    searchTerm: '',
    songs: [],
};


const musicSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        setMusic(state, action: PayloadAction<Music[]>) {
            state.songs = action.payload;
        },
    },
});


export const { setSearchTerm, setMusic } = musicSlice.actions;

export const selectSearchTerm = (state: RootState) => state.songs.searchTerm;
export const selectMusic = (state: RootState) => state.songs.songs;

export const selectFilteredSongs = createSelector(
    [selectSearchTerm, selectMusic],
    (searchTerm, songs) => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        return songs.filter(song => song.title.toLowerCase().includes(lowercasedSearchTerm));
    }
);

export default musicSlice.reducer;