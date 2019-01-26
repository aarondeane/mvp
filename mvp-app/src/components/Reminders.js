import React from 'react';

const Reminders = (props) => {
  return (
    <div className="reminders">
      <form>
        <label>What Would You Like To Accomplish Today?</label>
        <input type="text" name="Goal" />
        <input type="submit" name="Submit" />
      </form>
      <ul className="reminder-list">
      </ul>
    </div>
    
  )
}

export default Reminders;