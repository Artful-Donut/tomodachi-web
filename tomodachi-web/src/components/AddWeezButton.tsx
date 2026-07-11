import React from 'react';


function AddWeezButton() {
    return(
        <button
            className="bg-pink-300"
            type="button"
            onClick={() => {
                alert("Add button clicked");
                
            }}
            disabled={false}
        >
            ADD WEEZ
        </button>
    );

    
}


export default AddWeezButton