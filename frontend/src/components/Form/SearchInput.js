import React from 'react'
import { useSearch } from '../../context/Search'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../styles/searchicon.css'
import { API_URL } from '../helper/apiUrl'


const SearchInput = () => {
    const [values,setValues] = useSearch()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
           const {data} = await axios.get(`${API_URL}/api/v1/product/search/${values.keyword}`)
           setValues({...values, results: data})
           navigate("/search")
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div>
      <form className="search" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={values.keyword}
                onChange={(e)=> setValues({...values, keyword:e.target.value})}
              />
            </form>   

    </div>
  )
}

export default SearchInput
