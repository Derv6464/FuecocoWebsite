import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <dialog open>
          <article>
            <h2>Search</h2>
            <form>
              <input
                type="search"
                name="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <footer>
              <form>
                <button onClick={onClose}>Done</button>
              </form>
            </footer>
          </article>
        </dialog>
      )}
    </>
  );
};

export default SearchModal;
