import React from 'react'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 const tagMemenurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}$tag={tag}`;
const useGif = () => {
  const [loading,setloading]=useState("false");
  async function fetchData() {
    setloading(true);
    
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
}

export default useGif
