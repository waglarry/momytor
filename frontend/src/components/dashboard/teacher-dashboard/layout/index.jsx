import React, { useEffect, useLayoutEffect, useState } from "react";
import Styles from "./TeacherDashboardLayout.module.css";
import { Divider } from "@mantine/core";
import axios from "axios";
import TableActionsTab from "../tableactions";
import FilterBar from "../filterbar";
import StudentStatusTab from "../statustab";
import TableContent from "../tablecontent";
import TeacherStudentDetails from "../teacher-student-details";
import Header from "../header";
import { BASE_URL } from "../../../../urls/auth";

const TeacherDashboardLayout = () => {
  const [childData, setChildData] = useState([]);
  const [initailChildData, setInitialChildData] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);

  const getChildDetails = async () => {
    await axios
      .get(`${BASE_URL}/findAllChildren`)
      .then((response) => {
        setChildData(response.data.child);
        setInitialChildData(response.data.child);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelectedChild = (data) => {
    setSelectedChild(data);
  };

  const handleSearchTerm = (value) => {
    const newArr = [...childData];

    const searchResult = newArr?.filter((obj) =>
      obj.firstName?.toLowerCase().includes(value?.toLowerCase()) || 
      obj.lastName.toLowerCase().includes(value?.toLowerCase()) || 
      obj.gender?.toLowerCase() === value?.toLowerCase() 
    );

    if (!value || value === "") {
      setChildData(initailChildData);
    } else {
      setChildData(searchResult);
    }
  };

  useLayoutEffect(() => {
    getChildDetails();
  }, []);

  return (
    <section className={Styles.layout}>
      <div className={Styles.content}>
        <Header />
        <div className={Styles.card}>
          <TableActionsTab childData={childData} />
          <Divider size="xs" />
          <FilterBar childData={childData} setSearchTerm={handleSearchTerm} />
          <Divider size="xs" />
          <StudentStatusTab childData={childData} />
          <TableContent childData={childData} onSelect={handleSelectedChild} />
        </div>
      </div>
      <TeacherStudentDetails childData={selectedChild} />
    </section>
  );
};

export default TeacherDashboardLayout;
