import React from 'react';
import {Line} from 'react-chartjs-2';

class LineGraphComponent extends React.PureComponent {

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
                <Line
                    data={this.props.lineGraphData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: 'Solar Power Savings Yearly',
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

export default LineGraphComponent;
