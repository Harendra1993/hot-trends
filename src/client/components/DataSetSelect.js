import React from 'react';

export default function({dataSet, onChange}) {
  return (
    <div className="dataSet">
      Showing latest hot searches in
      <div className="dataSetSelect">
        <select defaultValue={dataSet} onChange={onChange}>
          <option value="all_regions">All Regions</option>
          <option value="argentina">Argentina</option>
          <option value="australia">Australia</option>
          <option value="austria">Austria</option>
          <option value="belgium">Belgium</option>
          <option value="brazil">Brazil</option>
          <option value="canada">Canada</option>
          <option value="chile">Chile</option>
          <option value="colombia">Colombia</option>
          <option value="czech_republic">Czech Republic</option>
          <option value="denmark">Denmark</option>
          <option value="egypt">Egypt</option>
          <option value="finland">Finland</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="greece">Greece</option>
          <option value="hong_kong">Hong Kong</option>
          <option value="hungary">Hungary</option>
          <option value="ireland">Ireland</option>
          <option value="india">India</option>
          <option value="indonesia">Indonesia</option>
          <option value="israel">Israel</option>
          <option value="italy">Italy</option>
          <option value="japan">Japan</option>
          <option value="kenya">Kenya</option>
          <option value="malaysia">Malaysia</option>
          <option value="mexico">Mexico</option>
          <option value="netherlands">Netherlands</option>
          <option value="nigeria">Nigeria"</option>
          <option value="norway">Norway</option>
          <option value="philippines">Philippines</option>
          <option value="poland">Poland</option>
          <option value="portugal">Portugal</option>
          <option value="romania">Romania</option>
          <option value="russia">Russia</option>
          <option value="saudi_arabia">Saudi Arabia</option>
          <option value="singapore">Singapore</option>
          <option value="south_africa">South Africa</option>
          <option value="south_korea">South Korea</option>
          <option value="sweden">Sweden</option>
          <option value="switzerland">Switzerland</option>
          <option value="taiwan">Taiwan</option>
          <option value="thailand">Thailand</option>
          <option value="turkey">Turkey</option>
          <option value="ukraine">Ukraine</option>
          <option value="united_kingdom">United Kingdom</option>
          <option value="united_states">United States</option>
          <option value="vietnam">Vietnam</option>
        </select>
      </div>
    </div>
  );
}
