import React, { Component} from 'react';
import Clock from "react-live-clock";
import moment from "moment";


class ClockComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            todaysDate: false 
        }
    }

    toggleSwitch = () => {
    this.setState({
        todaysDate: !this.setState.todaysDate 
    })
  }

    render() {
        return (
            <div className='time'>
                <div className="togglebutton">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" onClick={this.toggleSwitch} />
                    </div>
                </div>    
                <Clock format='h:mm:s a' ticking={true} timezone={'PST'} />
                <div className="toggleDate">
                    {this.state.todaysDate ? moment().format('MMMM Do YYYY') : ''}
                </div>
            </div>
        )
    }
}

export default ClockComponent;