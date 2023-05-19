import "./Filters.css"
import { useEffect, useState } from "react";

export default function Filters({allData, setData}) {
  const [filters, setFilters] = useState({
    lgbt: false,
    poc: false,
    disability: false,
    sort:""
  });

  const handleSort = (event) => {
    setFilters({...filters, [event.target.id]: event.target.value});
  }

  const handleCheckChange = (event) => {
    setFilters({...filters, [event.target.id]: event.target.checked});
  }

  useEffect(() => {

    let sortedArr = [...allData];

    if (filters.sort) {
      
      if(filters.sort === "nameAsc") {
        sortedArr = sortedArr.sort((a, b) => {
          if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1;
          } else if(a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });

      } else if(filters.sort === "nameDesc") {
        sortedArr = sortedArr.sort((a, b) => {
          if(a.name.toLowerCase() > b.name.toLowerCase()){
            return -1;
          } else if(a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        })

      }
    }
    let filteredArr = [...sortedArr]
    if(filters.lgbt){
      filteredArr = filteredArr.filter((value)=> {
        return value.lgbt;
      })
    }

    if(filters.poc){
      filteredArr = filteredArr.filter((value)=> {
        return value.poc;
      })
    }

    if(filters.disability){
      filteredArr = filteredArr.filter((value)=> {
        return value.disability;
      })
    }

    setData(filteredArr);
  }, [filters, setData, allData]);

  return (<aside className="Filters">

    <select id="sort" className="btn btn-secondary" onChange={handleSort}>
      <option value="">Sort By:</option>
      <option value="nameAsc">Name: asc</option>
      <option value="nameDesc">Name: desc</option>
    </select>

    <div className="filter-span">
      <h5>Filter:</h5>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="lgbt" onChange={handleCheckChange} checked={filters.lgbt}/>
        <label className="form-check-label" htmlFor="lgbt">LGBTQ</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="poc" onChange={handleCheckChange} checked={filters.poc}/>
        <label className="form-check-label" htmlFor="poc">Person of Color</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="disability" onChange={handleCheckChange} checked={filters.disability}/>
        <label className="form-check-label" htmlFor="disability">Disability</label>
      </div>
    </div>

  </aside>)
}