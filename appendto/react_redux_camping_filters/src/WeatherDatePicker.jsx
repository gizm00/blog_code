var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');
//require('react-datepicker/dist/react-datepicker.css');
require('react-datepicker/dist/react-datepicker-cssmodules.css');


export default class WeatherDatePicker extends React.Component {

  checkDate(selectedDate) {
    if (selectedDate.isBefore(this.props.currentDate)) {
      alert("Please pick a date in the future.")
      return null
    }
    else {
      return selectedDate.format("YYYY-MM-DD")
    }
  }

  render() {
    return (
      <div>
        Travel Date:{'\u00a0\u00a0'}
        <DatePicker
          placeholderText="Select a date..."
          selected={this.props.selectedDate}
          dateFormat = "YYYY-MM-DD"
          onChange={(selectedDate) => {
            let newDate = this.checkDate(selectedDate)
            if (newDate) {
              this.props.fetchWeather(this.checkDate(selectedDate), this.props.currentLat,this.props.currentLong)
            }
          }}/>
        {'\u00a0\u00a0\u00a0\u00a0'}Forecast:{'\u00a0\u00a0'}{this.props.weatherSummary}
      </div>
    );
  }
}
