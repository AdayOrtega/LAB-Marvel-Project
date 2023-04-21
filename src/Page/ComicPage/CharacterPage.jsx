import getOneCharacter from '../../Services/getOneCharacter';
import './CharacterPage.css'
import { useEffect,useState } from "react";
import MediaCard from "../../Components/ComicCard/CharacterCard";

const OneChar = ()=>{
const [characterState, setCharacterState] = useState ([])

 
 useEffect(()=>{
    getCharacterList()
 }, [])


 async function getCharacterList(){
    const data = await getOneCharacter()
    setCharacterState(data.results)
    
 }
 

 return (
   <div className="comic">
   {characterState.map((char)=>{
      return <MediaCard character={char} key={char.id}/>
   })}
      
   </div>
 )
}
export default OneChar
