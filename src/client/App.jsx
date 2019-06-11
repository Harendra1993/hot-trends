import React, { Component } from 'react';
import { DataSetSelect, Tile, SizeSetter } from './components';
import { getGridSize, isArrayEqual, isUndefined } from './helpers/utils';
import SplashScreen from './components/SplashScreen.jsx';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSets: {},
      dataSet: 'saudi_arabia',
      maxGridSize: [5, 5],
      gridSize: [5, 5],
      tiles: []
    };

    this.setGridSize = this.setGridSize.bind(this);
  }

  componentWillMount() {
    this.setGridSize();
  }

  componentDidMount() {
    const gridSize = getGridSize(window.innerWidth, window.innerHeight);
    this.setState({
      gridSize
    });

    this.initializeTiles();
    window.addEventListener('resize', this.setGridSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setGridSize);
  }

  setGridSize(size = []) {
    if (
      Array.isArray(size) &&
      size.length === 2 &&
      !isArrayEqual(size, this.state.gridSize)
    ) {
      const [columns, rows] = size;
      //this.updateTrendPositions(size);
      console.log(size)
      this.setState({
        gridSize: [size[1], size[0]],
        trendItemCount: columns * rows,
      });
    }
  }

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
    // console.log(this.state);
    if (!isUndefined(this.props.dataSets)) {
      if (this.props && Object.keys(this.props.dataSets).length !== 0 && this.props.dataSets.constructor === Object) {
        for (let i = 0; i < totalTiles; i++) {
          newTiles.push(
            (< Tile dataSet={
              dataSet
            }
              dataSets={
                this.props.dataSets
              }
              key={
                `tile-${i}`
              }
            />)
          );
        }
      }
    } else {
      window.location.reload();
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

    return (<div className="app">
      <SizeSetter
        maxGridSize={this.state.maxGridSize}
        setGridSize={this.setGridSize}
      />
      <DataSetSelect dataSet={
        dataSet
      }
        onChange={
          this.onChangeDataSet
        }
      />
      <div className="tiles"
        style={
          this.getGridStyles()
        } > {
          tiles
        } </div>

      <div className="logo">
        <img src="./logo.png" alt="World Trends" />
      </div>

    </div >

    );
  }
}

export default SplashScreen(App);