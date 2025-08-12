import React from "react";

/* -------- Example 1: Filterable Product Table -------- */
function SearchBar({ filterText, inStockOnly }) {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Search..." value={filterText} />
      <p>
        <input type="checkbox" checked={inStockOnly} readOnly /> Only show
        products in stock
      </p>
    </form>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2" className="category">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className="out-of-stock">{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((p) => {
    if (p.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={p.category} category={p.category} />);
    }
    rows.push(<ProductRow key={p.name} product={p} />);
    lastCategory = p.category;
  });

  return (
    <table className="product-table">
      <thead>
        <tr><th>Name</th><th>Price</th></tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div className="example-block">
      <SearchBar filterText="" inStockOnly={false} />
      <ProductTable products={products} />
    </div>
  );
}

/* -------- Example 2: Fruits & Vegetables List -------- */
function FoodItem({ name, calories }) {
  return <p>{name}: <strong>{calories}</strong></p>;
}

function CategoryColumn({ title, items }) {
  return (
    <div className="food-column">
      <h3>{title}</h3>
      {items.map((item) => (
        <FoodItem key={item.name} name={item.name} calories={item.calories} />
      ))}
    </div>
  );
}

function FoodList({ data }) {
  return (
    <div className="food-list">
      {Object.entries(data).map(([title, items]) => (
        <CategoryColumn key={title} title={title} items={items} />
      ))}
    </div>
  );
}

/* -------- Example 3: Animal Cards -------- */
function AnimalCard({ name, species, weight, diet }) {
  return (
    <div className="animal-card">
      <h4>{name}</h4>
      <p><em>{species}</em></p>
      <p><strong>{weight}</strong></p>
      <p>{diet}</p>
    </div>
  );
}

function AnimalList({ animals }) {
  return (
    <div className="animal-list">
      {animals.map((a) => (
        <AnimalCard key={a.name} {...a} />
      ))}
    </div>
  );
}

/* -------- Main App Component -------- */
export default function App() {
  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const FOOD_DATA = {
    Fruits: [
      { name: "apple", calories: 95 },
      { name: "orange", calories: 45 },
      { name: "banana", calories: 105 },
      { name: "coconut", calories: 159 },
      { name: "pineapple", calories: 37 },
    ],
    Vegetables: [
      { name: "potatoes", calories: 110 },
      { name: "celery", calories: 15 },
      { name: "carrots", calories: 25 },
      { name: "corn", calories: 63 },
      { name: "broccoli", calories: 50 },
    ],
  };

  const ANIMALS = [
    { name: "Lion", species: "Panthero leo", weight: "140kg", diet: "meat" },
    { name: "Gorilla", species: "Gorilla beringei", weight: "205kg", diet: "plants, insects" },
    { name: "Zebra", species: "Equus quagga", weight: "322kg", diet: "plants" },
  ];

  return (
    <div>
      <h2>Filterable Product Table</h2>
      <FilterableProductTable products={PRODUCTS} />

      <h2>Fruits & Vegetables</h2>
      <FoodList data={FOOD_DATA} />

      <h2>Animals</h2>
      <AnimalList animals={ANIMALS} />
    </div>
  );
}

