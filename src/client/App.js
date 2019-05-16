import React, {
  Component
} from 'react';
import {
  DataSetSelect,
  Tile
} from './components';
import './App.css';
const axios = require('axios');

export default class App extends Component {
  state = {
    dataSet: 'animals',
    gridSize: [5, 5],
    tiles: []
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI();

    this.initializeTiles();
    window.addEventListener('resize', this.setGridSize);
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = () => {
    axios.get('/api/trends')
      .then(res=> {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentWillMount() {
    this.setGridSize();
  }

  // componentDidMount() {
  //   this.initializeTiles();
  //   window.addEventListener('resize', this.setGridSize);
  // }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setGridSize);
  }

  setGridSize = () => {
    let columns = 5;
    let rows = 5;

    if (window.innerWidth < 400) {
      columns = 1;
      rows = 2;
    } else if (window.innerWidth < 600) {
      columns = 2;
      rows = 3;
    } else if (window.innerWidth < 1000) {
      columns = 3;
      rows = 3;
    } else if (window.innerWidth < 1200) {
      columns = 4;
      rows = 4;
    }

    return this.setState({
      gridSize: [columns, rows]
    }, this.initializeTiles);
  };

  onChangeDataSet = ({
    target
  }) => {
    this.setState({
      dataSet: target.value,
      tiles: []
    }, this.initializeTiles);
  };

  getGridStyles = () => {
    const {
      gridSize
    } = this.state;
    const columns = gridSize[0];
    const rows = gridSize[1];
    const columnWidth = 100 / columns;
    const rowWidth = 100 / rows;

    return {
      gridTemplateColumns: `repeat(${columns}, ${columnWidth}vw)`,
      gridTemplateRows: `repeat(${rows}, ${rowWidth}vh)`
    };
  };

  initializeTiles = () => {
    const {
      dataSet,
      gridSize
    } = this.state;
    const totalTiles = gridSize[0] * gridSize[1];
    const newTiles = [];

    for (let i = 0; i < totalTiles; i++) {
      newTiles.push(
        ( < Tile dataSet = {
            dataSet
          }
          key = {
            `tile-${i}`
          }
          />)
        );
      }

      this.setState({
        tiles: newTiles
      });
    };

    render() {
      const {
        dataSet,
        tiles
      } = this.state;

      return ( < div className = "app" >
        <
        DataSetSelect dataSet = {
          dataSet
        }
        onChange = {
          this.onChangeDataSet
        }
        />  <
        div className = "tiles"
        style = {
          this.getGridStyles()
        } > {
          tiles
        } < /div> </div >
      );
    }
  }