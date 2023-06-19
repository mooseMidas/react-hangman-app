import React from 'react'

/*Component below will toggle the classname value based on prop
if prop.showNotification is true, then the notification will be displayed  */

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification