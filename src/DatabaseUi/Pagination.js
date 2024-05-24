import React, { useState, useEffect } from 'react';

const Pagination = ({ paginationData, handleGetSplicedData }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [colors, setColor] = useState(0)
  const itemsPerPageOptions = [5, 10, 25, 50, 100, "all"];
  const totalPages = Math.ceil(paginationData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paginationData.slice(indexOfFirstItem, indexOfLastItem);

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setColor(currentPage)
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setColor(prev => prev - 1)//important
  };

  const goToPage = (page) => {
    console.log(page)//index
    setColor(page - 1)
    setCurrentPage(page);
  };

  useEffect(() => {
    if (currentItems.length === 0) {
      handleGetSplicedData(paginationData, 0);
    } else {
      const selectedStart = (currentPage - 1) * itemsPerPage + 1;
      handleGetSplicedData(currentItems, selectedStart);
    }
  }, [currentPage, itemsPerPage, paginationData]);

  useEffect(() => {
    handlePageChange(1);
  }, []);

  return (
    <div>
      <div className='one'>
        <label>Total :</label>
        <input
          type="text"
          className="selectPagination1"
          value={paginationData.length ? paginationData.length : "0"}
          readOnly
        />
        <label htmlFor=""> Show Per Page: &nbsp;</label>
        <select
          value={itemsPerPage}
          className="selectPagination"
          onChange={handleItemsPerPageChange}
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} className={colors === index ? 'color' : ''} onClick={() => goToPage(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;