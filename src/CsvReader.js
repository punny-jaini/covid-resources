import React, {useState} from 'react';
import { CSVReader } from 'react-papaparse';
import {
  Button
} from 'antd';
import { addData } from './actions';

const Reader = () => {
    const buttonRef = React.createRef();
    const labelRef = React.createRef();
    
    const handleOpenDialog = (e) => {
        // Note that the ref is set async, so it might be null at some point
        if (buttonRef.current) {
          buttonRef.current.open(e)
        }
      }
     
    const handleOnError = (err, file, inputElem, reason) => {
      console.log(err)
    }
    const handleOnUpload = (result) => {
        addData(result.data);
    }

    const customConfigs = {
        header: true,
        complete: handleOnUpload
    }

    return(
      <CSVReader
          ref={buttonRef}
          onError={handleOnError}
          noClick
          noDrag
          config={customConfigs}
      >
        {({ file }) => (
          <aside className="mb-1">
              <h2>Upload CSV:</h2>
            <Button color="primary" onClick={handleOpenDialog}>
                Browse files
            </Button>
          </aside>
        )}
      </CSVReader>
  )
}

export default Reader;