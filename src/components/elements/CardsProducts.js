import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


function CardsProducts() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1)


  const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data.photos)
    console.log(data);
}

const URL = 'https://api.slingacademy.com/v1/sample-data/photos'

useEffect(() => {
    fetchData(URL)
  }, []);


 
  return (
    <>
    <div className='wrapper-card'>
       {records.map((dataObj, index) => {
             return (
      <div key={index} className='card-product'>
        <div className='image-section'>
          <img src={dataObj.url} alt='' />
        </div>
        <div className='content-card'>
          <h2>{dataObj.title}</h2>
          <p>{dataObj.description}</p>
        </div>
      </div>
         )
        })}
    </div>
    <nav>
      <ul className='pagination'>
        <li className='page-item'>
          <a href='#' className='page-link' onClick={prePage}><i class="fa-solid fa-backward"></i></a>
        </li>
        {
          numbers.map((n, i) => (
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <a href='#' className='page-item' onClick={() => changeCPage(n)}>{n}</a>
            </li>
          ))
        }
         <li className='page-item'>
          <a href='#' className='page-link' onClick={nextPage}><i class="fa-solid fa-forward"></i></a>
        </li>
      </ul>
    </nav>
    </>
  )
  function prePage() {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id) {
    setCurrentPage(id)
  }
  function nextPage() {
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }
}

export default CardsProducts