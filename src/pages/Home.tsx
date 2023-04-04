import { createSignal } from "solid-js";
import genShorturl from "../db/functions/genShorturl";
import Cookies from "js-cookie";

const Home = () => {
    const [url, setUrl] = createSignal<string>('');
  const handleShorten = () => {
    const user_url = document.getElementById('user_url') as HTMLInputElement;
    setUrl(user_url.value);
    if (Cookies.get('url') !== undefined) {
      alert('You can only shorten one URL at a time!');
    } else {
      genShorturl(url()).then((res) => {
        if (res.error !== null) {
          alert('An error occured while shortening your URL!');
        } else {
          setUrl(res.data.to);
          Cookies.set('url', url(), { expires: 1 });
          const short_url = document.getElementById('short_url')
          short_url.setAttribute('placeholder', 'https://shorten.vertixx.lol/' + res.data.to);
          short_url.setAttribute('value', 'https://shorten.vertixx.lol/' + res.data.to);
        }
      });
    };
  };
  return (
    <div class='h-screen w-screen bg-[#121212]'>
      <div class='h-full w-full flex justify-center items-center'>
        <div class='h-96 w-96 bg-[#1e1e1e] rounded-2xl flex flex-col justify-start items-center'>
          <h1 class='text-4xl text-[#f5f5f5] font-bold mt-4'>Shortern URL</h1>
          <div class='h-1/2 w-full flex flex-col justify-center items-center'>
            <input id='user_url' class='h-10 w-3/4 rounded-md bg-transparent border text-center text-white' type='text' placeholder='Paste your URL here' />
            <button class='h-10 w-40 rounded-md bg-inherit border text-white mt-4 hover:bg-[#1b1a1a] hover:text-white' onClick={handleShorten}>Shorten</button>
          </div>
          <span class='h-1 w-3/4 bg-[#f5f5f5] mt-2'></span>
          <div class='h-1/2 w-full flex flex-col justify-center items-center gap-4'>
            <h1 class='text-2xl text-[#f5f5f5] font-bold'>Your Shortened URL</h1>
            <input id='short_url' class='h-10 w-3/4 rounded-md bg-transparent border text-center text-white' type='text' placeholder='https://shorten.vertixx.lol/<>' disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
