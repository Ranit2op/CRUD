import { useState } from "react";

interface ABC {
  id: number;
  name: string;
  loc: string;
  dept: string;
  gen: string;
  design: string;
}

const obj: ABC[] = [
  {
    id: 1,
    name: "Ranit",
    loc: "Alipurduar",
    dept: "Tech",
    gen: "Male",
    design: "AB",
  },
  {
    id: 2,
    name: "AKASH",
    loc: "Madarihat",
    dept: "Tech",
    gen: "Male",
    design: "ABCD",
  },
  {
    id: 3,
    name: "bikram",
    loc: "Madarihat",
    dept: "Tech",
    gen: "Male",
    design: "ABC",
  },
  {
    id: 4,
    name: "john",
    loc: "jaipur",
    dept: "Tech",
    gen: "male",
    design: "EE",
  },
];

const Search = () => {
  const [data] = useState<ABC[]>(obj);
  const [filteredData, setFilteredData] = useState<ABC[]>(obj); 
  const [searchText, setSearchText] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [designFilter, setDesignFilter] = useState("");

  const handleFilter = () => {
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (locationFilter === "" || item.loc.toLowerCase() === locationFilter.toLowerCase()) &&
        (designFilter === "" || item.design.toLowerCase() === designFilter.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="container">
        <div>
          <input type="text"placeholder="Filter by name"value={searchText}onChange={(e) => setSearchText(e.target.value)} />
          <input type="text"placeholder="Filter by location"value={locationFilter}onChange={(e) => setLocationFilter(e.target.value)}/>
          <input type="text"placeholder="Filter by designation"value={designFilter}onChange={(e) => setDesignFilter(e.target.value)} />
          <button onClick={handleFilter}>Search</button>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Department</th>
              <th>Gender</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.loc}</td>
                <td>{item.dept}</td>
                <td>{item.gen}</td>
                <td>{item.design}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Search;