import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://news-dragon-server-nadim017.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);

  return (
    <div>
      <h4>All Categories</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-black"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
