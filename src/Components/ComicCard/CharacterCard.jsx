import React from "react";
import './CharacterCard.css';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'


export default function MediaCard({character}) {
  console.log(character)
  return (
    <Card  sx={{ maxWidth: 450, }}>
      <CardMedia
        sx={{ height: 250 }}
        image={character.image} 
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      
        {character.name}
        
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.status} {character.species}
        </Typography>
      </CardContent>
     
    </Card>
  );
}



