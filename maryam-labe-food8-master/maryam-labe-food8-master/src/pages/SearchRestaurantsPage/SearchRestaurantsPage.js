import React from "react"
import useProtectedPage from '../../hooks/useProtectedPage'


const SearchRestaurantsPage = () =>{
    useProtectedPage()
    return(
        <div>
            SearchRestaurantsPage
        </div>
    )
}

export default SearchRestaurantsPage