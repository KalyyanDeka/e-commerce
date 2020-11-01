import React, {useState} from 'react';
import "./SearchBox.scss"

const SearchBox = ({history}) => {

    const [keyword, setKeyword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
       
            <form onSubmit={submitHandler} className="search">
          <input
          onChange={(e) => setKeyword(e.target.value)}
            type="text"
            className="search__input"
            placeholder="Search for Products, brands and more"
          />
          <button className="search__button">
            <span className="search__icon">
              <i className="fas fa-search"></i>
            </span>
          </button>
        </form>
       
    )
}

export default SearchBox
