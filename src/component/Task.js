import React, {useState} from 'react'
import './Task.css'

function Task(props) {
    const {task} = props;
    const options = ["Done", "In progress", "Not started"]
    const [selectedOption, setSelectedOption] = useState(task.status);
    return (
        <tr className={selectedOption.trim().toLowerCase()}>
        <td data-label="ID">{task.id}</td>
        <td data-label="Description">{task.title}</td>
        <td data-label="Status">
        <select
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}>
        {options.map((o, i) => (
          <option value={o} key={i}>{o}</option>
        ))}
      </select>
        </td>
        </tr>
    );
}

export default Task