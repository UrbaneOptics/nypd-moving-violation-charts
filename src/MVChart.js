import 'whatwg-fetch'
import React from 'react';
import {Bar} from 'react-chartjs-2';


const VIOLATION_TYPES = [
  "TOTAL Movers",
  "Backing Unsafely",
  "Bike Lane",
  "Brake Lights (Defect.or Improper)",
  "Bus Lane",
  "Bus Lane, Driving in",
  "Cell Phone",
  "Commercial Veh on Pkwy",
  "Cruising For Passengers",
  "Defective Brakes",
  "Disobey Sign",
  "Disobey Steady Red Signal",
  "Disobey Traffic Control Device",
  "Driving Too Slow",
  "Equipment",
  "Equipment (Other)",
  "Excessive Noise",
  "Fail to Keep Right",
  "Fail to Signal",
  "Fail to Stop on Signal",
  "Fail to yield Right of Way to Pedestrian",
  "Failure to Signal",
  "Failure to yield Right of Way to Vehicle",
  "Following Too Closely",
  "Headlights (Defect. or Improper)",
  "Improper Lights",
  "Improper Passing",
  "Improper Taxi Pickup",
  "Improper Turn",
  "Improper/Missing Plates",
  "Lamps and Other Equipment on Bicycle",
  "Motorcycle (Other)",
  "Not Giving R of W to Pedes.",
  "Not Giving R of W to Veh.",
  "OBSTRUCTED PLATE",
  "Obstructed Plate",
  "One Way Street",
  "Other Movers",
  "Overheight",
  "Overlength",
  "Overweight",
  "Overwidth",
  "Pavement Markings",
  "Red Light",
  "Safety Belt",
  "School Bus",
  "School Bus, Passing Stopped",
  "Scooter In NYC",
  "Seat Belt",
  "Speeding",
  "Spillback",
  "TBTA Rule",
  "TLC (Other)",
  "Tinted Windows",
  "Tints",
  "Truck Route",
  "Truck Routes",
  "U-Turn",
  "Uninspected",
  "Uninsured",
  "Unlicensed Operator",
  "Unregistered",
  "Unsafe Lane Change",
  ]

export default class MVChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      precinct: 'city',
      violation: 'TOTAL Movers',
      parsedData: {},
      data: {
        labels: [],
        datasets: [
          {
            label: '',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
          }
        ]
      }
    }
  }
  
  componentDidMount() {
    fetch(`https://urbaneoptics.github.io/nyc-moving-violation-data/data/json/aggregates/city_aggregate.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({parsedData: data});
        const newDatasets = [...this.state.data.datasets];
        const months = Object.keys(data);
        newDatasets[0].data = months.map((month) => data[month][this.state.violation]);
        newDatasets[0].label = `${this.state.precinct} Precinct/Bureau ${this.state.violation} violations written`
        this.setState({data: {...this.state.data, labels: months, datasets: newDatasets }})
      })
  }

  handlePrecinctSelection(e) {
    const precinct = e.target.value;
    this.setState({precinct});
    fetch(`https://urbaneoptics.github.io/nyc-moving-violation-data/data/json/aggregates/${e.target.value}_aggregate.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({parsedData: data});
        const newDatasets = [...this.state.data.datasets];
        const months = Object.keys(data);
        newDatasets[0].data = months.map((month) => data[month][this.state.violation]);
        newDatasets[0].label = `${precinct} Precinct/Bureau ${this.state.violation} violations written`
        this.setState({data: {...this.state.data, labels: months, datasets: newDatasets }})
      })
  }

  handleViolationTypeSelection(e) {
    this.setState({violation: e.target.value});
    const newDatasets = [...this.state.data.datasets];
    const months = this.state.data.labels;
    newDatasets[0].data = months.map((month) => this.state.parsedData[month][e.target.value]);
    newDatasets[0].label = `${this.state.precinct} Precinct/Bureau ${e.target.value} violations written`
  }

  render() {
    return (
      <React.Fragment>
        <select onChange={(e) => this.handlePrecinctSelection(e)}>
          <option value="city">Citywide</option>
          <option value="001">Precinct 001</option>
          <option value="005">Precinct 005</option>
          <option value="006">Precinct 006</option>
          <option value="007">Precinct 007</option>
          <option value="009">Precinct 009</option>
          <option value="010">Precinct 010</option>
          <option value="013">Precinct 013</option>
          <option value="014">Precinct 014</option>
          <option value="017">Precinct 017</option>
          <option value="018">Precinct 018</option>
          <option value="019">Precinct 019</option>
          <option value="020">Precinct 020</option>
          <option value="022">Precinct 022</option>
          <option value="023">Precinct 023</option>
          <option value="024">Precinct 024</option>
          <option value="025">Precinct 025</option>
          <option value="026">Precinct 026</option>
          <option value="028">Precinct 028</option>
          <option value="030">Precinct 030</option>
          <option value="032">Precinct 032</option>
          <option value="033">Precinct 033</option>
          <option value="034">Precinct 034</option>
          <option value="040">Precinct 040</option>
          <option value="041">Precinct 041</option>
          <option value="042">Precinct 042</option>
          <option value="043">Precinct 043</option>
          <option value="044">Precinct 044</option>
          <option value="045">Precinct 045</option>
          <option value="046">Precinct 046</option>
          <option value="047">Precinct 047</option>
          <option value="048">Precinct 048</option>
          <option value="049">Precinct 049</option>
          <option value="050">Precinct 050</option>
          <option value="052">Precinct 052</option>
          <option value="060">Precinct 060</option>
          <option value="061">Precinct 061</option>
          <option value="062">Precinct 062</option>
          <option value="063">Precinct 063</option>
          <option value="066">Precinct 066</option>
          <option value="067">Precinct 067</option>
          <option value="068">Precinct 068</option>
          <option value="069">Precinct 069</option>
          <option value="070">Precinct 070</option>
          <option value="071">Precinct 071</option>
          <option value="072">Precinct 072</option>
          <option value="073">Precinct 073</option>
          <option value="075">Precinct 075</option>
          <option value="076">Precinct 076</option>
          <option value="077">Precinct 077</option>
          <option value="078">Precinct 078</option>
          <option value="079">Precinct 079</option>
          <option value="081">Precinct 081</option>
          <option value="083">Precinct 083</option>
          <option value="084">Precinct 084</option>
          <option value="088">Precinct 088</option>
          <option value="090">Precinct 090</option>
          <option value="094">Precinct 094</option>
          <option value="100">Precinct 100</option>
          <option value="101">Precinct 101</option>
          <option value="102">Precinct 102</option>
          <option value="103">Precinct 103</option>
          <option value="104">Precinct 104</option>
          <option value="105">Precinct 105</option>
          <option value="106">Precinct 106</option>
          <option value="107">Precinct 107</option>
          <option value="108">Precinct 108</option>
          <option value="109">Precinct 109</option>
          <option value="110">Precinct 110</option>
          <option value="111">Precinct 111</option>
          <option value="112">Precinct 112</option>
          <option value="113">Precinct 113</option>
          <option value="114">Precinct 114</option>
          <option value="115">Precinct 115</option>
          <option value="120">Precinct 120</option>
          <option value="121">Precinct 121</option>
          <option value="122">Precinct 122</option>
          <option value="123">Precinct 123</option>
          <option value="cot">Transportation Bureau</option>
          <option value="housing">Housing Bureau</option>
          <option value="patrol">Patrol Bureau</option>
          <option value="pbbn">Brooklyn North</option>
          <option value="pbbs">Brooklyn South</option>
          <option value="pbbx">Bronx</option>
          <option value="pbmn">Manhattan North</option>
          <option value="pbms">Manhattan South</option>
          <option value="pbqn">Queens North</option>
          <option value="pbqs">Queens South</option>
          <option value="pbsi">Staten Island</option>
          <option value="transit">Transit Bureau</option>
        </select>
        <select value={VIOLATION_TYPES.last} onChange={(e) => this.handleViolationTypeSelection(e)}>
          {VIOLATION_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
        <div>
          <Bar data={this.state.data} height={500} width={1000}/>
        </div>
      </React.Fragment>
    );
  }
}