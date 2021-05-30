const SearchBox = ({handleSearch}) =>  {
  return (
    <input
      type="search"
      defaultValue=""
      placeholder="Type to search products"
      onChange={handleSearch}
    />
  )
}

export default SearchBox;