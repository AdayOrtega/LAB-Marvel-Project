import getOneComic from "../../Services/getOneComic";
import './ComicPage.css'
import { useEffect,useState } from "react";
import MediaCard from "../../Components/ComicCard/ComicCard";

const OneComic = ()=>{
const [comicstate, setComicState] = useState ([])

 
 useEffect(()=>{
    getComicList()
 }, [])


 async function getComicList(){
    const data = await getOneComic()
    setComicState(data.results)
    
 }
 

 return (
   <div className="comic">
   {comicstate.map((char)=>{
      return <MediaCard character={char} key={char.id}/>
   })}
      
   </div>
 )
}
export default OneComic
