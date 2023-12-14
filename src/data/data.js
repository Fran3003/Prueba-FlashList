const PEXELS_API_KEY = '6iVP4htGfcrRCWYMIxRZLMhzFCwK2vf5nCPkSW76WyhD77oI3juMdOg8';  

export async function obtenerImagenes(query, cantidad) {
    try {
        const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${cantidad}`;
        const headers = { 'Authorization': PEXELS_API_KEY };

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener imágenes:', error);
    }
}

export async function obtenerVideos(query, cantidad) {
    try {
        const url = `https://api.pexels.com/videos/search?query=${query}&per_page=${cantidad}`;
        const headers = { 'Authorization': PEXELS_API_KEY };

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener videos:', error);
    }
}