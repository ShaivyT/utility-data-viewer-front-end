import React from 'react';
import {Bar} from 'react-chartjs-2';

class BarGraphComponent extends React.PureComponent {

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
                <Bar
                    data={this.props.barGraphData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Solar Power Electricity Bills',
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

export default BarGraphComponent;
