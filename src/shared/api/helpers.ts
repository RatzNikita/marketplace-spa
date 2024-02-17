import {Product} from "../../gql/graphql";
import notFound from 'shared/images/image-not-found.jpg'


export const toBase64 = async (files: File[]) => {
    const result = []
    for (const file of files) {
        result.push(
            await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result as string)
                reader.onerror = () => reject(new Error('Error reading file'));
            })
        )
    }

    return result
}


export const getProductImages = (product: Product) => {
    const images = product.images
    const productImages: string[] = []
    if (images && images.length > 0) {
        for (const image of images) {
            if (image) {
                productImages.push(image.image)
            }
        }
        return productImages
    }
    return [notFound]
}
