import angleLeft from "../assets/angleleft.svg";
import angleRight from "../assets/angleRight.svg";
import { useState } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (page === "next" && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (typeof page === "number") {
      setCurrentPage(page);
    }
  };

  const pageNumber = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex  justify-center items-center gap-6 ">
      <div
        className="flex py-[6px] pr-3 pl-[6px] rounded-[4px] border border-1-[#D9D9D9] bg-[#FFF] cursor-pointer "
        onClick={() => handlePageChange("prev")}
      >
        <img src={angleLeft} alt="/angleIcon" className="w-[18px] h-[18px]" />
        <p className="text-[#4D4D4D] font-Inter text-[14px] font-medium leading-5">
          Previous
        </p>
      </div>

      <div className="flex items-start gap-2">
        {pageNumber.map((page) => (
          <div
            key={page}
            className={`flex w-7 h-7 py-[2px] px-0 flex-col justify-center items-center gap-2 rounded-[4px] ${
              currentPage === page
                ? "bg-[#146EB4] text-white"
                : "bg-white text-gray-600"
            }`}
            onClick={() => handlePageChange(page)}
          >
            <p className="text-[14px] font-normal leading-5">{page}</p>
          </div>
        ))}
      </div>

      <div
        className="flex py-[6px] pr-3 pl-[6px] rounded-[4px] border border-1-[#D9D9D9] bg-[#FFF] cursor-pointer "
        onClick={() => handlePageChange("next")}
      >
        <p className="text-[#4D4D4D] font-Inter text-[14px] font-medium leading-5">
          Next
        </p>
        <img src={angleRight} alt="/angleIcon" className="w-[18px] h-[18px]" />
      </div>
    </div>
  );
}

export default Pagination;
