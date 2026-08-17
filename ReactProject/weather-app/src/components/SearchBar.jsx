function SearchBar({ city, setCity, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      return;
    }

    onSearch();
  };

  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={city}
        placeholder="Enter City...."
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;