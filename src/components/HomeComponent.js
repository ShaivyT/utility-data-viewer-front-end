import React from 'react';
import {Link} from 'react-router-dom';

class HomeComponent extends React.PureComponent {

    render() {
        return(
            <div>
                <Link to={"/bar"}>
                    <button type={"button"} className={"btn btn-outline-info"}>
                        Bar Graph
                    </button>
                </Link>
                <Link to={"/line"}>
                    <button type={"button"} className={"btn btn-outline-info"}>
                        Line Graph
                    </button>
                </Link>
                <Link to={"/pie"}>
                    <button type={"button"} className={"btn btn-outline-info"}>
                        Pie Chart
                    </button>
                </Link>
            </div>
        )
    }

}

export default HomeComponent;