import React from 'react';
import { useFilterContext } from '../../../context/FilterContext';

const Sort = () => {
    const { grid_view, setGridView, setListView, filter_products, setSortValue, sort_value } = useFilterContext();

    return (
        <div className="container mx-auto px-4 py-2 md:p-4 transition-all ease-linear duration-300 ">
            <div className="flex gap-4">
                <div className=' w-[300px]  hidden md:flex  items-center'>
                    <div className="heading hidden md:flex text-2xl gap-4  items-center font-bold px-2">
                        Filters <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"/></svg>
                    </div>
                </div>

                <div className="w-full">
                    <div className="md:pl-4 flex justify-between items-center">
                        <div className="previwBtns flex gap-4">
                        <button aria-label='listView' type="button" className={grid_view ? " p-1 md:p-2 font-medium focus:outline-none rounded-md border border-gray-200 bg-gray-100 text-teal-700 focus:z-10 ring-1 ring-teal-700" : " p-1 md:p-2 font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-teal-700 focus:z-10"} onClick={setGridView}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-' height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>
                            </button>
                            <button aria-label='listView' type="button" className={grid_view ? " p-1 md:p-2 font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-teal-700 focus:z-10" : " p-1 md:p-2 font-medium focus:outline-none rounded-md border border-gray-200 bg-gray-100 text-teal-700 focus:z-10 ring-1 ring-teal-700"} onClick={setListView}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"/></svg>
                            </button>
                           
                        </div>
                        <div className="search-text text-gray-400 font-mono w-24 md:w-44 text-md md:text-xl hidden md:flex">
                            find items <span className='text-gray-500'>&nbsp;{filter_products.length}</span>
                        </div>
                        <div className="sortBtn">
                            <form action="#">
                                <div className="max-w-sm mx-auto">
                                    <label htmlFor="sort"></label>
                                    <select 
                                    aria-label='sort'
                                        id="sort"
                                        name='sort'
                                        className="transition-all ease-linear duration-500 bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-md md:rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-1 py-2 md:p-2.5"
                                        value={sort_value} 
                                        onChange={(e) => setSortValue(e.target.value)}
                                    >
                                        <option disabled></option>
                                        <option value="highest">Price (highest)</option>
                                        <option disabled></option>
                                        <option value="lowest">Price (lowest)</option>
                                        <option disabled></option>
                                        <option value="a-z">A-Z</option>

                                        <option disabled></option>
                                        <option value="z-a">Z-A</option>
                                        <option disabled></option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="search-text text-gray-400 font-mono p-2 text-xs bg-white md:hidden flex items-center justify-center">
                            find items <span className='text-gray-500'>&nbsp;{filter_products.length}</span>
                        </div>
        </div>
    );
};

export default Sort;
