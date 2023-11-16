import React from 'react'
import Styles from './StudentPerformanceLayout.module.css'
import { Progress, RingProgress, Text } from '@mantine/core'
import { PieChart } from '@mui/x-charts/PieChart';

const StudentPerformanceLayout = () => {
  return (
    <main className={Styles.mainBox}>
        <div className={Styles.cardsConteiner}>
            <div className={Styles.card}>
                <div className={Styles.header}>
                    <p className={Styles.title}>Subject Progress</p>
                </div>

                <div className={Styles.content}>
                    <div className={Styles.progressRow}>
                        <div className={Styles.progress}>
                            <Progress color='blue' value={50} />
                        </div>
                        <div className="label">
                            <span style={{
                                width: 10,
                                height: 10,
                                borderRadius: 100,
                                background: 'red',
                            }}></span>
                            <label htmlFor="progressBar">Mathematics</label>
                        </div>
                    </div>
                    <div className={Styles.progressRow}>
                        <div className={Styles.progress}>
                            <Progress color='yellow' value={50} />
                        </div>
                        <div className="label">
                            <span style={{
                                width: 10,
                                height: 10,
                                borderRadius: 100,
                                background: 'red',
                            }}></span>
                            <label htmlFor="progressBar">Mathematics</label>
                        </div>
                    </div>
                    <div className={Styles.progressRow}>
                        <div className={Styles.progress}>
                            <Progress color='red' value={50} />
                        </div>
                        <div className="label">
                            <span style={{
                                width: 10,
                                height: 10,
                                borderRadius: 100,
                                background: 'red',
                            }}></span>
                            <label htmlFor="progressBar">Mathematics</label>
                        </div>
                    </div>
                    <div className={Styles.progressRow}>
                        <div className={Styles.progress}>
                            <Progress color='green' value={50} />
                        </div>
                        <div className="label">
                            <span style={{
                                width: 10,
                                height: 10,
                                borderRadius: 100,
                                background: 'red',
                            }}></span>
                            <label htmlFor="progressBar">Mathematics</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Styles.card}>
                <div className={Styles.header}>
                    <p className={Styles.title}>Total Performance</p>
                </div>

                <div className={Styles.content}>
                <RingProgress
                    size={180}
                    sections={[{ value: 80, color: '#4D5FFF' }]}
                    label={
                    <Text c="#4D5FFF" fw={700} ta="center" size="xl">
                        80%
                    </Text>
                    }
                />
                </div>
            </div>

            <div className={Styles.card}>
                <div className={Styles.header}>
                    <p className={Styles.title}>Total Performance</p>
                </div>

                <div className={Styles.content}>
                <RingProgress
                    size={180}
                    sections={[{ value: 80, color: '#4D5FFF' }]}
                    label={
                    <Text c="#4D5FFF" fw={700} ta="center" size="xl">
                        80%
                    </Text>
                    }
                />
                </div>
            </div>

            <div className={Styles.card}>
                <div className={Styles.header}>
                    <p className={Styles.title}>Total Performance</p>
                </div>

                <div className={Styles.content}>
                <PieChart
                    series={[
                        {
                        data: [
                            { id: 0, value: 60, label: 'Sociable' },
                            { id: 1, value: 20, label: 'Actractivness' },
                            { id: 2, value: 5, label: 'Contribution' },
                            { id: 3, value: 15, label: 'Communication' },
                        ],
                        },
                    ]}
                    width={500}
                    height={200}
                />
                </div>
            </div>
        </div>
        <div className={Styles.commentSection}></div>
    </main>
  )
}

export default StudentPerformanceLayout