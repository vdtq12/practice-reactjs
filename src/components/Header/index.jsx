import React, { useRef } from "react";
import PropTypes from "prop-types";
import { MagnifyingGlass } from "@phosphor-icons/react";

Header.propTypes = {};

function Header(props) {
  const { onFilterChange } = props;
  const typingTimeOut = useRef(null);

  const handleSearchChange = (e) => {
    const val = e.target.value;

    if (typingTimeOut.current) clearTimeout(typingTimeOut.current);

    typingTimeOut.current = setTimeout(() => {
      onFilterChange(val);
    }, 500);
  };

  return (
    <div className="my-[1.5rem] mx-[3rem]">
      <div className="flex flex-row text-firsttext p-[0.5rem] w-[18.75rem] bg-thirdbg rounded-[0.5rem]">
        <MagnifyingGlass className="text-[1.5rem] mx-[0.5rem]" />
        <input
          placeholder="Search..."
          className="bg-transparent text-[0.875rem] outline-none"
          onChange={(e) => handleSearchChange(e)}
        />
      </div>
    </div>
  );
}

export default Header;
