import React from 'react';
import UtilityDataService from "../services/utilityData.client.service";
import PieChartComponent from "../components/PieChartComponent";

class PieChartContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            pieChartData: {}
        }
    }
    async componentWillMount() {
        const service = UtilityDataService.instance;
        const months = await service.getMonthsData();
        const kwhs = await service.getKwhsData();
        this.setPieChartData(months, kwhs);
    }

    setPieChartData(months, kwhs) {
        this.setState({
            pieChartData: {
                labels: months,
                datasets: [
                    {
                        label: 'Monthly Electricity Consumption',
                        data: kwhs,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return(
            <div>
                <PieChartComponent pieChartData = {this.state.pieChartData}/>
            </div>
        )
    }
}

export default PieChartContainer;
