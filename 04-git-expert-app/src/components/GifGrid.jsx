/* eslint-disable react/prop-types */
import { GifItem } from "./GifItem";
import { useFecthGifs } from "../hooks/useFecthGifs";


export const GifGrid = ({category}) => {

    const {images,isLoading} = useFecthGifs( category );
    console.log({images,isLoading})
 

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((image) =>(
                        <GifItem 
                            key={image.id}
                            // title={image.title}
                            // url = {image.url}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}