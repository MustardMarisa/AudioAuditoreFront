export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "d8077fcf73b140768c92577d3d231dee";
export const redirectUri = "http://localhost:3000/";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];

export const contenedorCancion = "contenedorCancion";
export const contenedorArtista = "contenedorArtista";
export const contenedorPlaylist = "contenedorPlaylist";

export const queryCancion = "track";
export const queryArtista = "artist";
export const queryPlaylist = "playlist";
export const queryAlbum  = "album";

export const textoCancion = "Cancion";
export const textoArtista = "Artista";
export const textoPlaylist = "Playlist";
export const textoAlbum  = "Album";

export const listaTipoCarousel = "listaTipoCarousel";
export const listaTipoList = "listaTipoList";

export const contenidoListaDisplay = "contenidoListaDisplay";
export const contenidoListaComentarios = "contenidoListaComentarios";

export const urlBack = "contenidoListaComentarios";
export const urlSpotifySearch = "https://api.spotify.com/v1/search";
