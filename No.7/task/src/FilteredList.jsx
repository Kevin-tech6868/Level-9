import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from './data';

const FilteredList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const minPrice = parseFloat(searchParams.get('minPrice')) || 0;
  const maxPrice = parseFloat(searchParams.get('maxPrice')) || Infinity;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    setSearchParams(params);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category ? product.category === category : true;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Product Filter</h2>
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <select
          name="category"
          value={category}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={searchParams.get('minPrice') || ''}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={searchParams.get('maxPrice') || ''}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2"
        />
      </form>
      <ul className="space-y-2">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="border p-3 rounded shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <p className="text-lg font-semibold text-blue-600">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
