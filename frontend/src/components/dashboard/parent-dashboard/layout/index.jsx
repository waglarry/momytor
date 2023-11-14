import React from 'react'
import Styles from './Layout.module.css'
import Attendace from '../table/Attendace'
import Assessment from '../table/Assessment'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const ParentDashboardLayout = () => {
  return (
    <>
        <header className={Styles.header}>
            <h3>Hello <br /> <span>Mr Emmanuel</span></h3>
        </header>
        <div className={Styles.topBox}>
            <div className={Styles.cuurentAssignment}>
                <h3 className={Styles.cardTile}>Current Assessment</h3>
                <div className={Styles.flexWrap}>
                    <div className={Styles.course}>
                        <h3 className={Styles.title}>MATHEMATICS</h3>
                        <p className={Styles.date}>7th November,2023</p>
                        <div className={Styles.stateRow}>
                            <div className={Styles.state}>
                                <span>7</span>
                                <p>Submitted</p>
                            </div>
                            <div className={Styles.state}>
                                <span>7</span>
                                <p>Not Submitted</p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.course}>
                        <h3 className={Styles.title}>ENGLISH LANGUAGE</h3>
                        <p className={Styles.date}>7th November,2023</p>
                        <div className={Styles.stateRow}>
                            <div className={Styles.state}>
                                <span>7</span>
                                <p>Submitted</p>
                            </div>
                            <div className={Styles.state}>
                                <span>7</span>
                                <p>Not Submitted</p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.course}>
                        <h3 className={Styles.title}>INTEGRATED SCIENCE</h3>
                        <p className={Styles.date}>7th November,2023</p>
                        <div className={Styles.stateRow}>
                            <div className={Styles.state}>
                                <span>7</span>
                                <p>Submitted</p>
                            </div>
                            <div className={Styles.state}>
                                <span>7</span>
                                <p>Not Submitted</p>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.course}>
                        <h3 className={Styles.title}>SOCIAL STUDIES</h3>
                        <p className={Styles.date}>7th November,2023</p>
                        <div className={Styles.stateRow}>
                            <div className={Styles.state}>
                                <span>7</span>
                                <p>Submitted</p>
                            </div>
                            <div className={Styles.state}>
                                <span>7</span>
                                <p>Not Submitted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.upcommingEvents}>
                <h3 className={Styles.eventCardTile}>Upcoming Events</h3>
                <ul className={Styles.coursesEvent}>
                    <li>
                        <div className={Styles.date}>7th <span>November</span></div>
                        <p className={Styles.title}>Mathematics test</p>
                        <div></div>
                    </li>
                    <li>
                        <div className={Styles.date}>7th <span>November</span></div>
                        <p className={Styles.title}>English test</p>
                        <div></div>
                    </li>
                    <li>
                        <div className={Styles.date}>7th <span>November</span></div>
                        <p className={Styles.title}>Science test</p>
                        <div></div>
                    </li>
                    <li>
                        <div className={Styles.date}>7th <span>November</span></div>
                        <p className={Styles.title}>Creative Skills Training</p>
                        <div></div>
                    </li>
                </ul>
            </div>
            <div className={Styles.calender}>
                <div className={Styles.calenderBox}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                        <DemoItem>
                            <DateCalendar defaultValue={dayjs('2022-04-17')} readOnly />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
                </div>
            </div>
        </div>
        <div className={Styles.bottomBox}>
            <div>
                <h4>Atendance</h4>
                <Attendace />
            </div>
            <div className={Styles.assessment}>
                <h4>Assesment</h4>
                <Assessment />
            </div>
        </div>
    </>
  )
}

export default ParentDashboardLayout