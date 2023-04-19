import getOneComic from "../../Services/getOneComic";
import './ComicPage.css'
import { useEffect,useState } from "react";
import ComicCard from "../../Components/ComicCard/ComicCard";

const OneComic = ()=>{
const [comicstate, setComicState] = useState ([])

 
 useEffect(()=>{
    getComicList()
 }, [])


 async function getComicList(){
    const data = await getOneComic()
    
    setComicState(data)
 }
 
 
 return (
     
     <div className="comic">
        <ComicCard 
        result={comicstate}/>
    </div>
)

}
export default OneComic
