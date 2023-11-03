import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DataTable from "../../components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { getDeviceThunk } from "../../redux/reducer/device";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import { Bug, Warning, Pencil, TrashSimple } from "@phosphor-icons/react";
import LogOut from "../../components/LogOut";

Device.propTypes = {};

function Device(props) {
  const dispatch = useDispatch();
  const { devicesData } = useSelector((state) => state.device);
  const [devicesDataAfter, setDevicesDataAfter] = useState(null);
  const [filter, setFilter] = useState({
    labelSearch: "",
    pageSize: 10,
    page: 0,
  });

  useEffect(() => {
    dispatch(getDeviceThunk(filter));
  }, [filter]);

  useEffect(() => {
    if (!devicesData) return;
    const final = devicesData.data.map(
      ({ image, type, name, id, state, health, projectName }, key) => ({
        "#": filter.pageSize * filter.page + key + 1,
        avatar: image,
        type: type,
        name: name,
        id: id,
        status: handleStatusCell(state),
        problem: handleProblemCell(health),
        project: projectName,
        action: handleActionCell(),
      })
    );
    setDevicesDataAfter(final);
  }, [devicesData]);

  const handleRowChanged = (rowNum) => {
    setFilter({
      ...filter,
      pageSize: rowNum,
      page: 0,
    });
  };

  const handleFilterChange = (searchTerm) => {
    setFilter({
      ...filter,
      labelSearch: searchTerm,
      page: 0,
    });
  };

  const handlePageChange = (page) => {
    setFilter({
      ...filter,
      page: page,
    });
  };

  const handleProblemCell = (val) => {
    return (
      <div className="flex flex-row justify-center">
        <div className="flex flex-row text-secondtext border-secondtext border rounded-[3.125rem] mx-[0.25rem]">
          <Bug className="m-[0.3125rem]" />
          <p className="mr-[0.3125rem]">
            {val?.state === "critical" ? val.value : "0"}
          </p>
        </div>
        <div className="flex flex-row text-thirdtext border-thirdtext border rounded-[3.125rem] mx-[0.25rem]">
          <Warning className="m-[0.3125rem]" />
          <p className="mr-[0.3125rem]">
            {val?.state === "warning" ? val.value : "0"}
          </p>
        </div>
      </div>
    );
  };

  const handleActionCell = (val) => {
    return (
      <div className="flex flex-row justify-center gap-[0.5rem]">
        <button className="border border-fourthbg/[.2] rounded-full p-[0.5rem]">
          <Pencil onClick={() => alert("triggered editting")} />
        </button>
        <button className="border border-fourthbg/[.2] rounded-full p-[0.5rem]">
          <TrashSimple onClick={() => alert("triggered delete")} />
        </button>
      </div>
    );
  };

  const handleStatusCell = (val) => {
    return (
      <div
        className="rounded-full w-3 h-3 m-auto"
        style={{
          backgroundColor: val ? "#21E334" : "#3E5579",
        }}
      ></div>
    );
  };

  return (
    <div className="grid grid-cols-12 gap-[1rem] bg-thirdbg rounded-[0.5rem] min-h-screen">
      <div className="col-start-1 col-end-3 bg-secondbg text-white">
        <p>This is navbar</p>
        <LogOut />
      </div>
      <div className="bg-secondbg text-white col-start-3 col-end-13 m-[1rem] h-fit border border-transparent rounded-[0.5rem]">
        <Header onFilterChange={handleFilterChange} />
        {devicesDataAfter && <DataTable devicesDataAfter={devicesDataAfter} />}
        {devicesData && (
          <Pagination
            onRowChange={handleRowChanged}
            onPageChange={handlePageChange}
            filter={filter}
            devicesData={devicesData}
          />
        )}
      </div>
    </div>
  );
}

export default Device;
