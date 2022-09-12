import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation, Link } from 'react-router-dom';


const SinglePage = () => {
  const [mode, setMode] = useState(false);
  const [singleData, setSingleData] = useState([]);

  const handleToggle = () => setMode(!mode);

  const id = useLocation();

  const pageData = id?.state?.idMeal;

  const navigate = useNavigate();


  const fetchSinglePageApi = async () => {
    const res = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${pageData}`);
    setSingleData(res.data?.meals[0]);
  };

  useEffect(() => {
    fetchSinglePageApi();
  }, [pageData]);

  console.log(singleData, "Hello");

  return (
    <div className={mode === true ? "bg-slate-700 w-full h-screen overflow-y-auto overflow-x-hidden" : "bg-white overflow-x-hidden h-screen w-full" }>
      <div className=' xs:mx-5 sm:mx-10 h-14 flex flex-row items-center justify-between'>
          <div className={mode === true ? "text-white font-semibold text-3xl" : "text-black font-semibold text-3xl"} >
              Explore Meals
          </div>
          <button className={mode === true ? "text-white font-semibold text-sm" : "text-black font-semibold text-sm"} onClick={handleToggle}>
            {mode === true ? <FontAwesomeIcon icon={faMoon}/>  : <FontAwesomeIcon icon={faSun} />} 
            {mode === true ? " Dark Mode" : " Light Mode" }
          </button>  
      </div>

      <hr />

      <div className={mode === true ? 'mx-10 mt-5 text-white' : "mx-10 mt-5 text-black" }>
        <div 
          className={mode === true ? 'w-24 p-1 bg-gray-500 cursor-pointer mb-3 shadow-outline shadow-2xl' 
                                  : "w-24 p-1 bg-white cursor-pointer mb-3 shadow-outline shadow-2xl "}
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mx-3" />
          <button> Back</button>
        </div>

        <div className='flex xs:flex-col sm:flex-row sm:justify-between w-12/12 xs:p-2 sm:p-14 items-center'>
          <div className='xs:w-12/12 sm:w-12/12'>
            <div className='w-full flex flex-row justify-between'>
              <div className='w-6/12'>
                <img src={singleData?.strMealThumb} alt="food Pic" className='w-4/6'/>
                <div className='text-lg font-medium '>{singleData?.strMeal}</div>
              </div>
              <div className='w-6/12'>
                <div className='flex flex-row items-center'>
                  <div className='text-xl font-medium'>Area: </div>
                  <div className='text-lg mt-1 ml-16 '>{singleData?.strArea}</div>  
                </div>
                <div className='flex flex-row items-center'>
                  <div className='text-xl font-medium'>Category: </div>
                  <div className='text-lg mt-1 ml-6'>{singleData?.strCategory}</div>  
                </div> 
                <div className='flex flex-row'>
                  <div className='text-xl font-medium'>Ingredients: </div>
                  <div className='text-lg mt-0.5 ml-1'>
                    {
                    `${singleData?.strIngredient1}, ${singleData?.strIngredient2}, ${singleData?.strIngredient3},
                    ${singleData?.strIngredient4}, ${singleData?.strIngredient5}, ${singleData?.strIngredient6},
                    ${singleData?.strIngredient7}, ${singleData?.strIngredient8}, ${singleData?.strIngredient9},
                    ${singleData?.strIngredient10},${singleData?.strIngredient11}, ${singleData?.strIngredient12},
                    ${singleData?.strIngredient13}, ${singleData?.strIngredient14}, ${singleData?.strIngredient15},
                    ${singleData?.strIngredient16}, ${singleData?.strIngredient17}, ${singleData?.strIngredient18},
                    ${singleData?.strIngredient19}, ${singleData?.strIngredient20}`
                    }
                  </div>  
                </div>
                <div className='flex flex-row'>
                  <div className='text-xl font-medium'>Measures:</div>
                  <div className='text-lg mt-0.5 ml-5'>
                    {
                    `${singleData?.strMeasure1}, ${singleData?.strMeasure2}, ${singleData?.strMeasure3},
                    ${singleData?.strMeasure4}, ${singleData?.strMeasure5}, ${singleData?.strMeasure6},
                    ${singleData?.strMeasure7}, ${singleData?.strMeasure8}, ${singleData?.strMeasure9},
                    ${singleData?.strMeasure10},${singleData?.strMeasure11}, ${singleData?.strMeasure12},
                    ${singleData?.strMeasure13}, ${singleData?.strMeasure14}, ${singleData?.strMeasure15},
                    ${singleData?.strMeasure16}, ${singleData?.strMeasure17}, ${singleData?.strMeasure18},
                    ${singleData?.strMeasure19}, ${singleData?.strMeasure20}`
                    }
                  </div>  
                </div>
                {/* <div className='flex flex-row'>
                  <div className='text-xl font-medium'>Instructions: </div>
                  <div className='text-lg mt-1 ml-2 '>{singleData?.strInstructions}</div>  
                </div> */}
              </div>
            </div>

            <div className='w-full mt-4'>
              <div className='flex flex-row'>
                  <div className='text-xl font-medium mt-0.5'>Instructions: </div>
                  <div className='text-lg mt-1 ml-2 '>{singleData?.strInstructions}</div>  
              </div>
              <div className='flex flex-row'>
                <div className='text-xl font-medium'>Youtube: </div>
                <div className='text-lg mt-0.5 ml-1'>
                  <a href={singleData?.strYoutube} target="_blank" className='underline'>{singleData?.strYoutube}</a>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='text-xl font-medium'>Source:</div> 
                <div className='text-lg mt-0.5 ml-4'>
                  <a href={singleData?.strSource} target="_blank" className='underline'>{singleData?.strSource}</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    

    </div>
  )
}

export default SinglePage