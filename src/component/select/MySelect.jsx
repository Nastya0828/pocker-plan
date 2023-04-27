import React, { useState } from 'react';
import './MySelect.css';

const MySelect = ({updateMap}) => {
  const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21];
  const tShirts = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
  const powersOf2 = [0, 1, 2, 4, 8, 16, 32];
  const alignments = [fibonacci, tShirts, powersOf2]
  const [map, setMap] = useState(fibonacci)
  
  return (
    <div className="mapLayout">
        Изменить раскладку
        <select className="select" onChange= {(e) => {
            setMap(e.target.value.split(','))
            updateMap(e.target.value.split(','))}}>
            {alignments.map((alignment, index) =>
                <option
                    key = {index}
                    value= {alignment}>
                    {alignment.join(', ')}
                </option>
            )}
        </select>
    </div>
  );
}

export default MySelect;