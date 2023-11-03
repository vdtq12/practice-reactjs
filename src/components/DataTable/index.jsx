import React, { useState } from "react";
import PropTypes from "prop-types";
import { Spinner } from "@material-tailwind/react";
import { useSelector } from "react-redux";

DataTable.propTypes = {};

function DataTable(props) {
  const { devicesDataAfter } = props;
  const { isLoading } = useSelector((state) => state.device);

  return (
    <div>
      <table className="border-separate border-spacing-x-0 border-spacing-y-1 m-auto">
        <thead>
          <tr className="bg-fourthbg/[.2] h-[3.5rem] text-fourthbg">
            {Object.keys(devicesDataAfter[0]).map((val, key) => {
              return (
                <th className='first:rounded-l-[0.5rem] last:rounded-r-[0.5rem]' key={key}>{val}</th>
              )
            })}
          </tr>
        </thead>
        {isLoading ? (
          <div className="absolute right-[40rem] top-[11rem]">
            <Spinner className="text-secondbg"></Spinner>
          </div>
        ) : (
          <tbody>
            {devicesDataAfter.map((val, key) => {
              return (
                <tr key={key} className="h-[3.5rem] text-center">
                  {Object.values(devicesDataAfter[key]).map((val, key) => {
                    return (<td className="px-[1.135rem] border-b border-fourthbg/[.2]" key={key}>{val}</td>)
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default DataTable;
