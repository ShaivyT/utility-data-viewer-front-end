import React from 'react';
import UtilityDataService from "../services/utilityData.client.service";
import BarGraphComponent from "../components/BarGraphComponent";

class BarGraphContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            barGraphData: {}
        }
    }

    async componentWillMount() {
        const service = UtilityDataService.instance;
        const bills = await service.getBillsData();
        const kwhs = await service.getKwhsData();
        this.setBarGraphData(bills, kwhs);
    }

    setBarGraphData(bills, kwhs) {
        this.setState({
            barGraphData: {
                labels: bills,
                datasets: [
                    {
                        label: 'Yearly Electricity Bills wrt Consumption',
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
            <div className={"container"}>
                <BarGraphComponent barGraphData = {this.state.barGraphData}/>
            </div>
        )
    }
}

export default BarGraphContainer;