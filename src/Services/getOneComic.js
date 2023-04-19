import api from "./config";

const getOneComic = async(query)=>{
const comics = await api.get(
  `https://gateway.marvel.com/v1/public/comics/82967?ts=1&apikey=ab1dbdd9aa8e6587f193f4fa030fd1c4&hash=381e52d4b00cd315f519eb4f56481697`
  /* {
    params: {
      apikey: 'ab1dbdd9aa8e6587f193f4fa030fd1c4',
      ts: '1',
      hash: '381e52d4b00cd315f519eb4f56481697',
    },
  } */
)
return comics.data.data.results[0]
}

export default getOneComic
