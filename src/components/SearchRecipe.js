import PropTypes from "prop-types";

export default function Search({ handleSearch }) {
  return (
    <div className="search">
      <input type="text" placeholder="Search for recipe by name" onChange={event => handleSearch(event)} />
    </div>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};