const SearchBox = ({handleSearch}) =>  {
  return (
    <input
      type="search"
      placeholder="Type to search products"
      onChange={handleSearch}
    />
  )
}

export default SearchBox;