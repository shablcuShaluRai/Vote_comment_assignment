import { FILTER_ARR, SORTING_ARR } from "./constants";
export default function Filter({
  setSelectedFilter,
  selectedFilter,
  setSelectSortBy
}) {
  return (
    <div>
      <div className="filter-container">
        {FILTER_ARR.map((filter, index) => (
          <span
            key={index.toString()}
            className={`filter-text-gap ${
              selectedFilter === filter ? "selected" : ""
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="margin-top-20">
        {SORTING_ARR.map((sorting, id) => (
          <button
            key={id.toString()}
            onClick={() => setSelectSortBy(sorting)}
            className="bubble btn-wrap typography"
          >
            {sorting}
          </button>
        ))}
      </div>
    </div>
  );
}
