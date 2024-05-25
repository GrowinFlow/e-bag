import React from 'react';
import { useFilterContext } from '../../../context/FilterContext';

const FilterSection = () => {

  const { all_products, updateFilterValue } = useFilterContext();

  const getUniqueData = (data, property) => {
    if (!data) {
      return [];
    }
    const uniqueValues = [...new Set(data.map(item => item[property]))];
    return ['All', ...uniqueValues];
  };

  const uniqueCategories = getUniqueData(all_products, 'category');

  const filterProductsByCategory = (category) => {
    if (category === 'All') {
      updateFilterValue({ target: { name: 'category', value: '' } });
    } else {
      updateFilterValue({ target: { name: 'category', value: category } });
    }
  };



  return (
    <>
      <div className='w-full md:w-[300px] block transition-all ease-linear duration-300'>
        <div className="text-sm md:text-md lg:text-lg  md:flex flex-col overflow-hidden">
          <ul className="flex py-1 md:py-4 text-xs md:text-lg flex-wrap md:flex-nowrap md:flex-col w-full gap-2 rounded-md">
     
            {uniqueCategories.map((category, index) => (
              <React.Fragment key={index}>
                <li>

                <button
                  type="button"
                  name="category"
                  aria-label='category'
                  value={category}
                  onClick={() => filterProductsByCategory(category)}
                  className="md:p-2 p-2 hover:underline md:bg-gray-100 md:w-full rounded-lg shadow-md active:text-teal-700 active:underline"
                >
                  {category}
                </button>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
