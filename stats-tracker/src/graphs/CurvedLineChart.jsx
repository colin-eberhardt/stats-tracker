import React from 'react';
import weeklyMileage from "../data/weeklyMileage.json";

const CurvedLineChart = () => {
    return (
        <div>
            {
                weeklyMileage.map(day => {
                    return (
                        <div>
                            <p>{day.mileage}</p>
                            <p>{day.activityDate}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CurvedLineChart;
