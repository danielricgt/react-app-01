export const getImagen = async () => {
  try {
    const apiKey = process.env.VITE_API_KEY;
    console.log('API Key:', apiKey);

    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const jsonResponse = await resp.json();
    console.log('Full API response:', jsonResponse);

    const { data } = jsonResponse;

    if (!data || !data.images || !data.images.original) {
      throw new Error('Invalid API response structure');
      console.log('Invalid API response structure');
    }

    const { url } = data.images.original;
    return url;
  } catch (error) {
    console.error(error.message);
    return 'no se pudo encontrar la imagen';
  }
};
getImagen();