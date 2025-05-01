import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('asycn await functions test', () => {
    test(' getimage should return an url from the image  ', async () => {
        // prepare the test subject
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
    });
    
});
