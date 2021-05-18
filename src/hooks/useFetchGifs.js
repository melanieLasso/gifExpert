import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = ( categoria ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(categoria)
            .then( imgs => {
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                    })
                }, 1000);
            }); 
    }, [ categoria ]);

    return state;
}