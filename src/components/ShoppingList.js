

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";

import Filter from "./Filter";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search,setSearch]=useState("");
  const [list, setList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === "") return true;

    return item.category === selectedCategory || item.name.indexOf(search)> -1;
  });
  const handleSearchChange=(event)=>{
    setSearch(event.target.value);

  }
  function updateList(newInput){
    setList([...list, newInput])
}

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={updateList}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}


export default ShoppingList;
