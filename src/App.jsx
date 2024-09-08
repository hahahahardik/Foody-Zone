import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const FoodList = () => {
  const [filteredData, setFilteredData] = useState([]); // Update: initialize as an empty array
  const [foods, setFoods] = useState([]);
  const [selectedBtn, setselectedBtn] = useState("all")
 
  useEffect(() => {
    const fetchFoodData = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setFoods(data.meals || []);
      setFilteredData(data.meals || []); // Update: also set filtered data initially
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive search
    const filtered = foods.filter(food => 
      food.strMeal.toLowerCase().includes(searchValue) // Filter based on food name
    );
    setFilteredData(filtered); // Update the filteredData state
  }

  const filterFood = (type) => {
    if(type === "all"){
      setFilteredData(foods)
      setselectedBtn("all")
      return;
    }

    const filter = foods.filter(food => 
      food.strCategory.toLowerCase().includes(type.toLowerCase()) // Filter based on food name
    );

    setFilteredData(filter)
    setselectedBtn(type)
  }

  const filterBtns = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "SeaFood",
      type: "seafood"
    },
    {
      name: "Side",
      type: "side"
    },
    {
      name: "Beef",
      type: "beef"
    },
    {
      name: "Veg",
      type: "veg"
    },
    {
      name: "Pork",
      type: "pork"
    },
    {
      name: "Pasta",
      type: "pasta"
    },
    {
      name: "Misc",
      type: "misc"
    },
    {
      name: "Dessert",
      type: "dessert"
    },
    {
      name: "Lamb",
      type: "lamb"
    },
    {
      name: "Chicken",
      type: "chicken"
    },
  ]

  return (
    <>
      <Navbar selectedBtn={selectedBtn} filterBtns={filterBtns} filterFood={filterFood} searchFood={searchFood} />  
      <Hero foods={filteredData} />
    </>
  );
};

export default FoodList;
