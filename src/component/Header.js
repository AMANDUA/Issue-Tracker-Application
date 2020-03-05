import React, {useState} from 'react'
import './Task.css'

function Header() {
    const defaultHeader = 'Issue Tracker Application';
    const [header, updateHeader] = useState(defaultHeader);
    const [isEditing, updateEditingState] = useState(false);

    return (
        <div className="app-header">
        {isEditing  ? 
        <div className="input-field-container">
            <input value={header} onChange={e => updateHeader(e.target.value)}></input>
        </div> :
        <div className="ui clearing segment">
         <h3 className="ui right floated header">
            {header}
        </h3>
        </div>
        }
        <button className="ui primary button" onClick={() => updateEditingState(!isEditing)}>
            {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    );
}

export default Header;