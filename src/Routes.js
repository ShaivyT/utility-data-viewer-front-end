import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import BarGraphContainer from "./containers/BarGraphContainer";
import LineGraphContainer from "./containers/LineGraphContainer";
import PieChartContainer from "./containers/PieChartContainer";
import HomeComponent from "./components/HomeComponent";

export default class Routes extends Component{

    render() {
        return (
          <div>
              <HomeComponent/>
              <div className={"container"} width="100" height="200">
                  <Route exact path={"/bar"} component={BarGraphContainer}/>
                  <Route exact path={"/line"} component={LineGraphContainer}/>
                  <Route exact path={"/pie"} component={PieChartContainer}/>
              </div>
          </div>
        );
    }
}