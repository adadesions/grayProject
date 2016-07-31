import React from 'react';
import Highcharts from 'highcharts';

export default class Profile extends React.Component {

  componentDidMount() {
    $(function () {
      $(document).ready(function () {
          Highcharts.setOptions({
              global: {
                  useUTC: false,
              }
          });

          $('#container').highcharts({
              chart: {
                  type: 'spline',
                  animation: Highcharts.svg, // don't animate in old IE
                  marginRight: 10,
                  events: {
                      load: function () {

                          // set up the updating of the chart each second
                          var series = this.series[0];
                          setInterval(function () {
                              var x = (new Date()).getTime(), // current time
                                  y = Math.random();
                              series.addPoint([x, y], true, true);
                          }, 1000);
                      }
                  }
              },
              title: {
                  text: 'Live random data'
              },
              xAxis: {
                  type: 'datetime',
                  tickPixelInterval: 150
              },
              yAxis: {
                  title: {
                      text: 'Value'
                  },
                  plotLines: [{
                      value: 0,
                      width: 1,
                      color: '#808080'
                  }]
              },
              tooltip: {
                  formatter: function () {
                      return '<b>' + this.series.name + '</b><br/>' +
                          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                          Highcharts.numberFormat(this.y, 2);
                  }
              },
              legend: {
                  enabled: false
              },
              exporting: {
                  enabled: false
              },
              series: [{
                  name: 'Random data',
                  data: (function () {
                      // generate an array of random data
                      var data = [],
                          time = (new Date()).getTime(),
                          i;

                      for (i = -19; i <= 0; i += 1) {
                          data.push({
                              x: time + i * 1000,
                              y: Math.random()
                          });
                      }
                      return data;
                  }())
              }]
          });
      });
  });
  }

  render() {
    return(
      <div className="row profile">
        <div id="container" className="col l12"></div>
        <div className="col l6 withdraw">
          <h4>Withdraw</h4>
          <div className="input-field col l12">
           <input id="amount-withdraw" type="text" className="validate"/>
           <label for="amount-withdraw">Amount</label>
          </div>
          <div className="input-field col l12">
           <input id="passwordTransaction" type="password" className="validate"/>
           <label for="passwordTransaction">Transactions Password</label>
          </div>
        </div>
        <div className="col l6 deposit">
          <h4>deposit</h4>
          <div className="input-field col l12">
           <input id="amount-deposit" type="text" className="validate"/>
           <label for="amount-deposit">Amount</label>
          </div>
          <div className="input-field col l12">
           <input id="passwordTransaction" type="password" className="validate"/>
           <label for="passwordTransaction">Transactions Password</label>
          </div>
        </div>
      </div>
    )
  }
}
