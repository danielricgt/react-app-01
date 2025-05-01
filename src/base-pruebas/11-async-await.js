// Import and configure dotenv
import dotenv from 'dotenv';
dotenv.config();

const getImagen = async () => {
    try {
        console.log('Environment variables:', process.env); // Debugging
        const apiKey = process.env.API_KEY; // Access the API key
        console.log('API Key:', apiKey); // Debugging

        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        console.log('GIF URL:', url); // Debugging
    } catch (error) {
        // Error handling
        console.error('Error:', error);
    }
};

getImagen();