import React from 'react';
import UtilityDataService from "../services/utilityData.client.service";
import LineGraphComponent from "../components/LineGraphComponent";

class LineGraphContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            lineGraphData: {}
        }
    }

    async componentWillMount() {
        const service = UtilityDataService.instance;
        const bills = await service.getBillsData();
        const kwhs = await service.getKwhsData();
        this.setLineGraphData(bills, kwhs);
    }

    setLineGraphData(bills, kwhs) {
        this.setState({
            lineGraphData: {
                labels: bills,
                datasets: [
                    {
                        label: 'Yearly Electricity Savings wrt Consumption',
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
                <LineGraphComponent lineGraphData = {this.state.lineGraphData}/>
            </div>
        )
    }
}

export default LineGraphContainer;
