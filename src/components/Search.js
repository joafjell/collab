import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

export default function Search({setSearch, getRecipes}){

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

<<<<<<< HEAD
    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Eggsbenedict.." onChange={handleSearch}/>
            <button type="submit" onClick={getRecipes}><MagnifyingGlassIcon className="searchIcon"/></button>
=======
    const handleSearch = (event) =>{
        setSearch(event.target.value)
        console.log(event.target.value)

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Pannekaker.." onChange={handleSearch} />
            <button type="submit" onClick={getRecipes}><MagnifyingGlassIcon/></button>
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
        </form>
    )
}