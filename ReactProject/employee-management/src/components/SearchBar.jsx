function SearchBar({
  search,
  setSearch,
  department,
  setDepartment,
}) {
  return (
    <div className="search-bar">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Department Filter */}
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">
          All Departments
        </option>

        <option value="Development">
          Development
        </option>

        <option value="Testing">
          Testing
        </option>

        <option value="HR">
          HR
        </option>
      </select>

    </div>
  );
}

export default SearchBar;