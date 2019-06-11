import React, { Component } from "react";
import PropTypes from "prop-types";
import gridIcon from "../assets/matrix.png";
import "../assets/SizeSetter.css";

const style = {};

export default class SizeSetter extends Component {
    constructor(props) {
        super(props);
        const [columns, rows] = this.props.maxGridSize;

        this.state = {
            gridItemCount: columns * rows,
            isGridActive: false,
        };

        this.handleMouseToggleGridButton = this.handleMouseToggleGridButton.bind(
            this
        );
    }

    handleMouseToggleGridButton() {
        this.setState(state => ({ isGridActive: !state.isGridActive }));
    }

    render() {
        const sizeSetterItemElements = [];
        let count = 0;

        while (count < this.state.gridItemCount) {
            const row = Math.floor(count / this.props.maxGridSize[0]);

            // eslint-disable-next-line
            let gridSize = [1, 1].map((size, index) => {
                if (index === 0) {
                    return row + 1;
                }

                return (count % this.props.maxGridSize[0]) + 1;
            });

            const sizeSetterItemElement = (
                <div
                    className="Size-Setter_item"
                    key={`size-setter-item-${count}`}
                    onClick={() => {
                        this.props.setGridSize(gridSize);
                    }}
                />
            );

            sizeSetterItemElements.push(sizeSetterItemElement);
            count += 1;
        }

        return (
            <div className="Size-Setter" style={style}>
                <div
                    className={`Size-Setter_grid ${this.state.isGridActive &&
                        "is-active"}`}
                    onMouseLeave={this.handleMouseToggleGridButton}
                >
                    {sizeSetterItemElements}
                </div>

                <div
                    className={`Size-Setter_button ${!this.state.isGridActive &&
                        "is-active"}`}
                    onMouseEnter={this.handleMouseToggleGridButton}
                >
                <img src={gridIcon} className="Size-Setter_button-icon"
                    alt="grid activator"
                />
                </div>
            </div>
        );
    }
}

SizeSetter.propTypes = {
    maxGridSize: PropTypes.array.isRequired,
    setGridSize: PropTypes.func.isRequired,
};

