import React from "react";

function pagination({
  pagination,
  setPagination,
}: {
  pagination: any;
  setPagination: any;
}) {
  const handlePage = (e: any) => {
    e.preventDefault();
    setPagination((pre: any) => {
      return { ...pre, page: parseInt(e?.target?.value) };
    });
  };
  const handlePerPage = (e: any) => {
    e.preventDefault();
    setPagination((pre: any) => {
      return { ...pre, limit: parseInt(e?.target?.value) };
    });
  };
  const Pages = Array?.from(
    { length: pagination?.total_page },
    (_, index) => index + 1
  );
  return (
    <div className="">
      <div className="join mt-6">
        {Pages.map((item) => (
          <button
            onClick={handlePage}
            key={item}
            value={item}
            className={
              "join-item btn " +
              `${pagination?.page == item && `bg-slate-700 text-white`}`
            }
          >
            {item}
          </button>
        ))}

        <select
          onChange={handlePerPage}
          defaultValue={pagination?.limit}
          name="per_page"
          className="select select-bordered w-full max-w-xs"
        >
          <option value="1">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
}

export default pagination;
