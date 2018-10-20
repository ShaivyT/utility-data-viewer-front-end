import React from 'react';
import {Pie} from 'react-chartjs-2';

class PieChartComponent extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render() {
        return(
            <div className={"chart"}>
                <Pie
                    data={this.props.pieChartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Solar Power Monthly Consumption',
                            fontSize: 25
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        );
    }
}

export default PieChartComponent;
