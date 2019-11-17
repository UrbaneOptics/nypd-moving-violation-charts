import 'whatwg-fetch';
import React from 'react';
import {Bar} from 'react-chartjs-2';
import { VIOLATION_TYPES, PRECINCTS, COLORS } from './utils/constants';

const generateDataset = (num) => (
  {
    label: num,
    type: 'line',
    backgroundColor: COLORS[num],
    borderColor: COLORS[num],
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(0,99,132,0.4)',
    hoverBorderColor: 'rgba(0,99,132,1)',
    data: []
  }
)

export default class MVChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      violation: 'TOTAL Movers',
      parsedData: [],
      data: {
        labels: [],
        datasets: [generateDataset(0)]
      }
    }
  }
  
  componentDidMount() {
    // fetch(`https://urbaneoptics.github.io/nyc-moving-violation-data/data/json/aggregates/${PRECINCTS[0].value}_aggregate.json`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({parsedData: [data]});
    //     const newDatasets = [...this.state.data.datasets];
    //     const months = Object.keys(data);
    //     newDatasets[0].data = months.map((month) => data[month][this.state.violation]);
    //     newDatasets[0].label = `${PRECINCTS[0].title}`
    //     this.setState({data: {...this.state.data, labels: months, datasets: newDatasets }})
    //   })
  }

  handlePrecinctSelection(e, index) {
    const precinctText = e.target.options[e.target.selectedIndex].text;
    fetch(`https://urbaneoptics.github.io/nyc-moving-violation-data/data/json/aggregates/${e.target.value}_aggregate.json`)
      .then((response) => response.json())
      .then((data) => {
        let newParsedData = [...this.state.parsedData];
        newParsedData[index] = data
        this.setState({parsedData: newParsedData});
        const newDatasets = [...this.state.data.datasets];
        const months = Object.keys(data);
        newDatasets[index].data = months.map((month) => data[month][this.state.violation]);
        newDatasets[index].label = precinctText;
        this.setState({data: {...this.state.data, labels: months, datasets: newDatasets }})
      })
  }

  handleAddPrecinct(e) {
    e.preventDefault();
    const newDatasets = [...this.state.data.datasets];
    this.setState({data: {...this.state.data, datasets: [...newDatasets, generateDataset(newDatasets.length)] }})
  }

  handleRemovePrecinct(e) {
    e.preventDefault();
    const newDatasets = [...this.state.data.datasets];
    const newParsedData = [...this.state.parsedData];
    newParsedData.pop();
    newDatasets.pop();
    this.setState({parsedData: newParsedData, data: {...this.state.data, datasets: [...newDatasets]}})
  }

  handleViolationTypeSelection(e) {
    this.setState({violation: e.target.value});
    const newDatasets = [...this.state.data.datasets];
    const months = this.state.data.labels;
    newDatasets.map((d, index) => {
      d.data = months.map((month) => this.state.parsedData[index][month][e.target.value]);
    });
  }

  render() {
    return (
      <React.Fragment>
        <p>
          Select a Precinct or Bureau to get started
        </p>
        <div>
          {
            
            this.state.data.datasets.map((_, index) => {
              return (
                <select key={index} onChange={(e) => this.handlePrecinctSelection(e, index)} defaultValue={index === 0 ? "city" : ""}>
                  {PRECINCTS.map((p) => <option key={p.value} value={p.value}>{p.title}</option>)}
                </select>
              )
            })
          }
        </div>
        <div>
        {this.state.data.datasets.length < 5 && <button onClick={(e) => this.handleAddPrecinct(e)}>Add a precinct</button>}
        {this.state.data.datasets.length > 1 && <button onClick={(e) => this.handleRemovePrecinct(e)}>Remove last precinct</button>}
        </div>
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