import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Styles from "./TeacherDashboardLayout.module.css";
import { Divider, Pagination } from "@mantine/core";
import axios from "axios";
import TableActionsTab from "../tableactions";
import FilterBar from "../filterbar";
import StudentStatusTab from "../statustab";
import TableContent from "../tablecontent";
import TeacherStudentDetails from "../teacher-student-details";
import Header from "../header";
import { BASE_URL } from "../../../../urls/auth";
import ReactToPrint from 'react-to-print';

const TeacherDashboardLayout = () => {
  const [childData, setChildData] = useState([]);
  const [initailChildData, setInitialChildData] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);


  // Fetch Children Data 
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

  useEffect(() => {
    getChildDetails();
  }, []);


  // Function to handle and view a selected child details
  const handleSelectedChild = (data) => {
    setSelectedChild(data);
  };

  //  Function to handle searchTerm of user input
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


  // Function to print out Table Content
  const componentRef = useRef(null);

  const handlePrint = () => {
    // Check if the component reference has content before printing
    if (componentRef.current) {
      // Call the ReactToPrint component with the ComponentToPrint and its ref
      ReactToPrint({
        content: () => componentRef.current,
      });
    } else {
      console.log('No content to print'); // Handle case where content is not available
      alert('No content to print')
    }
  }


  return (
    <section className={Styles.layout}>
      <div className={Styles.content}>
        <Header />
        <div className={Styles.card}>
          <TableActionsTab childData={childData} printTable={handlePrint} />
          <Divider size="xs" />
          <FilterBar childData={childData} setSearchTerm={handleSearchTerm} />
          <Divider size="xs" />
          <StudentStatusTab childData={childData} />
          <TableContent ref={componentRef} childData={childData} onSelect={handleSelectedChild} />
          <div className={Styles.pagination}>
            <Pagination total={childData?.length} color="#1976D2 " size="sm" withEdges />
          </div>
        </div>
      </div>
      <TeacherStudentDetails childData={selectedChild} />
    </section>
  );
};

export default TeacherDashboardLayout;
