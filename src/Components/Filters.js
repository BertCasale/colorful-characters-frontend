import "./Filters.css"

export default function Filters() {
  return (<aside className="Filters">

    <select id="Sort" className="btn btn-secondary">
      <option value="" defaultValue>Sort By:</option>
      <option value="nameAsc">Name: asc</option>
      <option value="nameDesc">Name: desc</option>
      <option value="gameAsc">Game: asc</option>
      <option value="gameDesc">Game: desc</option>
    </select>

    <div className="filter-span">
      <h5>Filter:</h5>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="lgbt"/>
        <label className="form-check-label" htmlFor="lgbt">LGBTQ</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="poc"/>
        <label className="form-check-label" htmlFor="poc">Person of Color</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="disability"/>
        <label className="form-check-label" htmlFor="disability">Disability</label>
      </div>
    </div>

  </aside>)
}