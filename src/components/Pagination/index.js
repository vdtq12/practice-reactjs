import React, { useState } from "react";
import PropTypes from "prop-types";
import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from "@phosphor-icons/react";

Pagination.propTypes = {};

function Pagination(props) {
  const { onRowChange, onPageChange, filter, devicesData } = props;
  const { labelSearch, pageSize, page } = filter;
  const { hasNext, totalElements, totalPages } = devicesData;
  const hasPrev = page !== 0;

  const handleRowClick = (e) => {
    if (e.target.value !== pageSize) {
      onRowChange(e.target.value);
    }

  };

  // const handlePageClick = (e) => {
  //   if (e?.target?.value) {
  //     const newPage = Number(e.target.value);
  //     onPageChange(newPage);
  //   }
  // };

  const handleToNext = () => {
    onPageChange(page + 1);
  };

  const handleToPrev = () => {
    onPageChange(page - 1);
  };

  const handleToFirst = () => {
    onPageChange(0)
  }

  const handleToLast = () => {
    onPageChange(totalPages - 1)
  }

  return (
    <div className="flex flex-row-reverse m-[1.5rem] gap-[1.5rem]">
      {/* <div>
        {hasPrev && (
          <Button
            onClick={() => handleToPrev()}
            className="bg-transparent text-primary w-[1rem] p-0 shadow-transparent hover:shadow-transparent"
          >
            <CaretLeft className="text-[1rem] font-bold" />
          </Button>
        )}
        {Array.from(Array(totalPages).keys()).map((key) => {
          return (
            <Button
              value={key}
              onClick={(e) => handlePageClick(e)}
              className="bg-primary h-[2rem] w-[2rem] p-0 m-[0.25rem] rounded-[0.25rem] font-thin shadow-transparent hover:shadow-transparent border border-primary"
              style={{
                backgroundColor: page === key ? "" : "transparent",
                color: page === key ? "" : "#216CE3",
              }}
            >
              {key + 1}
            </Button>
          );
        })}
        {hasNext && (
          <Button
            onClick={() => handleToNext()}
            className="bg-transparent text-primary w-[1rem] p-0 shadow-transparent hover:shadow-transparent"
          >
            <CaretRight className="text-[1rem] font-bold" />
          </Button>
        )}
      </div> */}

      <div className="text-firsttext h-[2rem] flex items-center">
        {hasPrev && <button onClick={() => handleToFirst()} className="m-[0.5rem] hover:text-white"><CaretDoubleLeft /></button>}
        {hasPrev && <button onClick={() => handleToPrev()} className="m-[0.35rem] hover:text-white"><CaretLeft /></button>}
        <span className="text-white">{page * pageSize + 1} - {(page + 1) === totalPages ? totalElements : (page + 1) * pageSize} <span className="text-firsttext">of</span> {totalElements}</span>
        {hasNext && <button onClick={() => handleToNext()} className="m-[0.35rem] hover:text-white"><CaretRight /></button>}
        {hasNext && <button onClick={() => handleToLast()} className="m-[0.5rem] hover:text-white"><CaretDoubleRight /></button>}
      </div>

      <div className="flex flex-row">
        <p className="text-firsttext flex items-center mx-[1rem]">
          Rows per page
        </p>
        <select
          defaultValue="10"
          className=" rounded-[0.24rem] bg-fifthbg text-white px-[0.5rem] my-[0.25rem]"
          onClick={(e) => handleRowClick(e)}
        >
          {Array.from(Array(10).keys()).map((key) => {
            return <option value={(key + 1) * 5}>{(key + 1) * 5}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Pagination;
