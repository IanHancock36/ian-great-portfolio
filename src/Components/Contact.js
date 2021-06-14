import React from 'react'

const Contact = () => {
    return (
        <div>
          <form>
              <input type='text' placeholder='First Name'/>
              <input type='text' placeholder='Last Name'/>
              <input type='text' placeholder='Email Address'/>
              <input type='text' placeholder='Phone Number'/>
              <input type='text-area' placeholder='Enter your message here'/>
              <button>Submit</button>
            
          </form>
        </div>
    )
}

export default Contact
