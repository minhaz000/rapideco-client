"use client";
type Props = {
  headerBg: string;
};
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";
const SearchForm = ({ headerBg }: Props) => {
  const [isSearchResult, setIsSearchResult] = useState("");
  return (
    <div className="basis-8/12 lg:basis-1/2 relative">
      <form className="flex">
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-s-md px-2 md:px-3 py-[6px] md:py-[10px] outline-none"
          onChange={(e) => setIsSearchResult(e.target.value)}
        />
        <button className={`bg-[${headerBg}] text-white px-3 rounded-e-md`}>
          <FaSearch />
        </button>
      </form>
      {/* Search data show */}
      {isSearchResult === "" ? "" : <SearchResult />}
    </div>
  );
};

export default SearchForm;
