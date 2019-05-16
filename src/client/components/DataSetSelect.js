import React from 'react';

export default function({dataSet, onChange}) {
  return (
    <div className="dataSet">
      Showing latest hot searches in
      <div className="dataSetSelect">
        <select defaultValue={dataSet} onChange={onChange}>
          <option value="Saudi Arabia">Saudi Arabia</option>
        </select>
      </div>
    </div>
  );
}
