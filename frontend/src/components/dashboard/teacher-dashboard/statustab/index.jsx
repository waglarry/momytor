import React from 'react'

const StudentStatusTab = ({ childData }) => {

    let numberOfPresentStudents = 0;
    let numberOfAbsentStudent = 0;

    childData && childData?.map((data) => {
        if(data.attendance === true){
            numberOfPresentStudents += 1;
        }

        if(data.attendance === false){
            numberOfAbsentStudent += 1;
        }
    })

  return (
    <div style={{
        margin: '1rem .5rem',
        display: 'flex',
        gap: '2.5rem'
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.5rem',
            fontStyle: 'normal',
            fontWeight: '700',
            color: 'rgba(35, 50, 85, 0.90)',
            borderBottom: '2px solid #1976D2'            
        }}>
            <p>ALL</p>
            <span style={{
                background: '#1976D2',
                color: "#fff",
                width: '1rem',
                height: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                borderRadius: 3
            }}>{childData?.length}</span>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.5rem',
            fontStyle: 'normal',
            fontWeight: '700',
            color: 'rgba(35, 50, 85, 0.90)',
        }}>
            <p>PRESENT</p>
            <span style={{
                background: '#CFCDCD',
                color: '#000',
                width: '1rem',
                height: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                borderRadius: 3
            }}>{numberOfPresentStudents}</span>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.5rem',
            fontStyle: 'normal',
            fontWeight: '700',
            color: 'rgba(35, 50, 85, 0.90)',
        }}>
            <p>ABSENT</p>
            <span style={{
                background: '#CFCDCD',
                color: '#000',
                width: '1rem',
                height: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                borderRadius: 3
            }}>{numberOfAbsentStudent}</span>
        </div>
    </div>
  )
}

export default StudentStatusTab