const SearchForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = e.target.elements.search.value
    if(!searchValue) return
    console.log(searchValue)
  };
  return (
    <section>
      <h1 className="title">Unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        ></input>
        <button type="submit">search</button>
      </form>
    </section>
  );
};

export default SearchForm;
