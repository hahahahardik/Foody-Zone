/*import "./Navbar.css"

const Navbar = ({searchFood, filterFood, filterBtns, selectedBtn}) => {
  return (
    <nav>
        <div className="nav-r1">
            <div className="logo">Foody Zone</div> 
            <div className="search">
                <input onChange={searchFood} type="search" name="search" placeholder="Search Food..." />
            </div>
        </div>
        <div className="nav-r2">
          {
            filterBtns.map ((value)=>(
              <button isSelected={selectedBtn === value.type} key={value.name} onClick={()=>filterFood(value.type)} className="nav-btn">{value.name}</button>
            ))
          }
           
        </div>
    </nav>
  )
}

export default Navbar*/

import "./Navbar.css";

const Navbar = ({ searchFood, filterFood, filterBtns, selectedBtn }) => {
  return (
    <nav>
      <div className="nav-r1">
        <div className="logo">Foody Zone</div>
        <div className="search">
          <input
            onChange={searchFood}
            type="search"
            name="search"
            placeholder="Search Food..."
          />
        </div>
      </div>
      <div className="nav-r2">
        {filterBtns.map((value) => (
          <button
            key={value.name}
            onClick={() => filterFood(value.type)}
            className={`nav-btn ${selectedBtn === value.type ? "selected" : ""}`}
          >
            {value.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
