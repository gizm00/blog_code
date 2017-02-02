var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

export default class WeatherDatePicker extends React.Component {

  checkDate(selectedDate) {

    console.log(selectedDate.format("YYYY-MM-DD"))
    let referenceDT = Date.parse(this.props.currentDate)
    if (selectedDate.isBefore(referenceDT)) {
      alert("Please pick a date in the future.")
      return this.props.currentDate
    }
    else {
      return selectedDate.format("YYYY-MM-DD")
    }
  }

 // onChange = {this.props.getWeather(this.props.weatherDate)}
 // selected = {this.props.weatherDate}
 // original" selected={this.state.startDate}
  render() {

    return (
      <div>
        Select Date:{'\u00a0\u00a0'}
        <DatePicker
          dateFormat = "YYYY-MM-DD"
          onChange={(selectedDate) => this.props.getWeather(this.checkDate(selectedDate))}/>
        {'\u00a0\u00a0\u00a0\u00a0'}Forecast:{'\u00a0\u00a0'}{this.props.weatherSummary}
      </div>
    );
  }
}
