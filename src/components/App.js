// create your App component here
import React, {useEffect, useState} from "react";


function App(){
    const [dogImage, setDogImage] = useState("")
    useEffect(()=>{
        fetch ('https://dog.ceo/api/breeds/image/random')
        .then ((response)=> response.json())
        .then((returnedDogImage)=>
        setDogImage(<img alt = "A Random Dog" src = {returnedDogImage.message}></img>),
        // setIsLoaded(true)
        )
    }, [])

    if (!dogImage) return <p>Loading...</p>;

    return <div>{dogImage}</div>
}

export default App;