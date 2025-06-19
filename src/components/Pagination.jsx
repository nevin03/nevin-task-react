import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="d-flex justify-content-center mt-4 gap-2 flex-wrap">
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            className={`btn btn-sm ${
              currentPage === page ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
