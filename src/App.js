import React from 'react';
import { useState, useEffect } from 'react';
import "./index.css";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayImg, setDisplayImg] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://pixabay.com/api/?key=33210548-a864ffc91c6ab46bdc776cebf&q=" + searchTerm);
      const response = await data.json();
      const error = await console.error(response);
      setDisplayImg(response.hits);
    }
    fetchData()
  }, [searchTerm]);

  const h = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="flex-row space-y-4">
      <div className='w-48 mt-4 mx-auto'>
        <form>
          <input className='border-solid border-2 border-black rounded' type="text" name="search" value={searchTerm} onChange={event => { setSearchTerm(event.target.value); }} placeholder="Search" />
        </form>
      </div>
      <div className='container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3'>
        {displayImg.map((img, i) => (
          <div className='w-full rounded'>
            <img key={i} src={img.webformatURL} />
          </div>
        )
        )

        }
      </div>
    </div>
  );
};

export default App;



