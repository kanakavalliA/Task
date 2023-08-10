 import { TextField } from '@mui/material';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
 
const DragAndDropExample: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleAddItem = () => {
        if (inputValue.trim() === '') return;

        // Add the new item to the 'items' array
        setItems([...items, inputValue]);
        setInputValue('');
    };

    const handleDrop = (event: any, target:  'right'  | 'left'  ) => {
        event.preventDefault();
        const text = event.dataTransfer.getData(' ');
        if (target === 'right') {
            setSelectedItems([...selectedItems, text]);
        } else {
            setItems([...items, text]);
        }
    };

    const handleDragStart = (event: any, text: string) => {
        event.dataTransfer.setData(' ', text);
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
    };

    return (
        <div>
            <h2 style={{color:"green",textDecoration:"underline"}}>
                Drag and Drop</h2>
                <div className='mt-5'>
            <TextField
                type="text"
                value={inputValue}
                label='Enter Name'
                 onChange={handleInputChange}
            /> &nbsp; &nbsp;
            <button onClick={handleAddItem} className='btn btn-outline-primary'>Add Item</button>
            </div>
            <div className='d-flex mt-5' style={{ display: 'flex', marginTop: '20px' }}>
                <div
                    onDrop={event => handleDrop(event, 'right')}
                    onDragOver={handleDragOver}
                    style={{ border: '1px solid #ccc',  flex: 1 }}
                >
                    <h3>Selected Items</h3>
                    {selectedItems.map((item, index) => (
                        <div
                            key={index}
                            draggable
                            onDragStart={event => handleDragStart(event, item)}
                            style={{ padding: '8px', margin: '4px', backgroundColor: 'lightgreen' }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div
                    onDrop={event => handleDrop(event, 'left')}
                    onDragOver={handleDragOver}
                    style={{ border: '1px solid #ccc', flex: 1 }}
                >
                    <h3>Available Items</h3>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            draggable
                            onDragStart={event => handleDragStart(event, item)}
                            style={{ padding: '8px', margin: '4px', backgroundColor: 'lightgray' }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
         </div>
      );
  };

export default DragAndDropExample;
                
           
