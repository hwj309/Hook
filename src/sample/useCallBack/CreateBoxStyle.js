import React, { useState, useCallback } from 'react';
import Box from './Box';

function CreateBoxStyle() {
    const [size,setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'skyblue',
            width: `${size}px`,
            height: `${size}px`,
        };
    }, [size]);

    return (
        <div style={{
            backgroundColor: isDark ? 'black' : 'white',
        }}>
            <input 
                type="number"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
            />
            <button onClick={ () =>  setIsDark(!isDark) }>Change Theme</button>
            <Box createBoxStyle={createBoxStyle} />
        </div>
    );
}

export default CreateBoxStyle;