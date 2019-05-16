import React from 'react';

export default function({dataSet, onChange}) {
  return (
    <div className="dataSet">
      Showing latest hot searches in
      <div className="dataSetSelect">
        <select defaultValue={dataSet} onChange={onChange}>
          <option value="animals">Animal Names</option>
          <option value="plants">Plant Families</option>
        </select>
      </div>
    </div>
  );
}
