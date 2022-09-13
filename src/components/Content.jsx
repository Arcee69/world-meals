import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Content = ({ mode }) => {
    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const options = {
        url: `https://themealdb.com/api/json/v1/1/filter.php?a=${text}`,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
      };
      

    const fetchApi = () => {
        setLoading(true);
        axios(options)
        .then(response => { 
          if(response) {
            setData(response?.data);
            setLoading(false);
          };
          
        });

    };

    const handleSearch = (e) => {
      e.preventDefault();
    } 
    
  function handleChange(e) {
    setText(e.target.value);
  }
    
    useEffect(() => {
        fetchApi()
    }, [text]) //

  return (
    <>
        <div className='w-full'>
          <form className='sm:w-full xs:mx-5 sm:mx-0 lg:mx-0 flex flex-row xs:justify-between sm:justify-center mt-5' onSubmit={handleSearch}>
              <input 
                type="text"
                value={text}
                onChange={handleChange}
                placeholder='Ex Canadian, American, Chinese...' 
                className='p-1.5 xs:w-40 sm:w-96  text-black' 
                style={{ border: "1px solid black"}} 
              />
              <button type='submit' value="Submit" className="ml-3 border w-32 text-sm bg-blue-500 text-white" >Search By Area</button>     
          </form>

            {loading && (<Spinner />)}
            {!!!loading && (data?.meals ? 
                <ul className='w-full xs:flex xs:flex-col sm:grid sm:grid-cols-5 mt-14 '>
                  {data?.meals.map((item) => (
                    <li key={item?.meals?.idMeal} className="w-12/12 p-5 mx-5 cursor-pointer">
                      <Link to={`${item?.idMeal}`} state={item}>
                        <img src={item.strMealThumb} alt="Meal pic" className='xs:w-full sm:w-44 sm:h-44' />
                        <div className={mode === true ? "text-white" : "text-black"}>{item.strMeal}</div>
                      </Link>  
                    </li>    
              ))}
            </ul> :
            <div className='w-full flex flex-row justify-center'>
              <div className={`${mode === true ? "text-white" : "text-black"} w-8/12 xs:text-lg sm:text-xl text-center mt-6 text-black font-medium`}>
                Meals From This Region Are Not Available
              </div>
            </div>)}
            
            
        </div>
    </>
  )
}

export default Content