import React from "react";
import { Line } from "react-chartjs-2";
import { CalendarItem } from "../calendartypes";


type ChartTypes = {
    calendar: CalendarItem[]
    globalTotal: number
    isMonthly: boolean
    weekTotal: number
}

const MyChart = ({ calendar, globalTotal, isMonthly, weekTotal }: ChartTypes) => {

    React.useEffect(() => {
        let totalArr = calendar.map((elem) => elem.total)
        let newLabels = calendar.map((elem) => elem.date);
        setTitle('Month')
        if (isMonthly === false) {
            totalArr = totalArr.slice(28)
            newLabels = newLabels.slice(28)
            setTitle('Week')
        }
        setLabels(newLabels)
        setDayTotal(totalArr)
    }, [globalTotal, isMonthly])

    const [dayTotal ,setDayTotal] = React.useState([0])
    const [labels ,setLabels] = React.useState([0])
    const [title, setTitle] = React.useState('Month')

    const data = {
        labels: labels,
        datasets: [
            {
                label: title,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: dayTotal
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="w-full flex-1" > 
            <Line data={data} options={options} />
        </div>
    );
};

export default MyChart;