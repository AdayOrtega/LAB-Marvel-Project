import api from "./config";

const getOneComic = async(query)=>{
const comics = await api.get(`/character`)
  /* {
    params: {
      apikey: 'ab1dbdd9aa8e6587f193f4fa030fd1c4',
      ts: '1',
      hash: '381e52d4b00cd315f519eb4f56481697',
    },
  } */

return comics.data
}

export default getOneComic
