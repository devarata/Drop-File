import React from 'react';
import DropZone from './dropzone/Dropzone';
import './App.css';

function App() {
  return (

    <div className="body">
            <p className="title">React Drag and Drop Image Upload</p>
            <div className="content">
              <DropZone/>
            </div>
        </div>
  );
}
export default App;
