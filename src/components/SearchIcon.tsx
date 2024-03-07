import React, { useState } from "react";
import SearchModal from "./SearchModal";
import { FaSearch } from "react-icons/fa";

const SearchIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <FaSearch color="#E74B1A" onClick={handleSearchIconClick} />
      <SearchModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default SearchIcon;
