import { useState } from 'react'

export const Search = ({ searchMovies }) => {
    const [keyword, setKeyword] = useState("");
    const handleSearch = () => {
        searchMovies(keyword);
    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    }
    return (
        <>
            <input
                type="text"
                placeholder="Search for Movies..."
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </>
    )
}
