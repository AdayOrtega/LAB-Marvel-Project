import React from "react";
import './ComicCard.css'
import getOneComic from "../../Services/getOneComic";


function ComicCard (result){
   console.log(result)
   return (
     <div className="result">
       {result.result.id}
     </div>
   )
}

export default ComicCard