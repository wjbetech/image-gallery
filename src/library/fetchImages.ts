import type { ImageResults } from '@/models/images';
import { ImagesSchemaWithPhotos } from '@/models/images';
import env from './env';

export default async function fetchImages(url: string): Promise<ImageResults | undefined> {
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: env.PEXELS_API_KEY
            }
        })
        if(!response.ok) throw new Error("Error fetching images!\n")
        const imageResults: ImageResults = await response.json()
        console.log(imageResults);
        // parse with Zod schema
        const parsedData = ImagesSchemaWithPhotos.parse(imageResults)
        if(parsedData.total_results === 0) return undefined
        return parsedData
    } 
    catch (error) {
        if(error instanceof Error) {
            console.log(error.stack)
        }
    }
}