import React from "react";

export default function RequestForm(props) {
  return (
    <tag>

      <h1>Rental Request Form</h1>

      <form>
        <label>
          Brief description of activity
          <input type="text" name="name" />
        </label>
      </form>

      <li>timeslot</li>

      <form>
          <label>
            Have you rented this space before?
            <input type="checkbox"/>
          </label>
        </form>

      <form>
        <label>
          Is this a multi-day rental?
          <input type="checkbox"/>
        </label>
      </form>

      <li>request date</li>
      <li>request time</li>

      <form>
          <label>
          Host (insert-host-name-here), acknowledges the diverse realities of local artists. If you are interested in future alternative workexchange options to offset space rental rates please check here.
          <input type="checkbox"/>
          </label>
        </form>

        <form>
        <label>
          Please confirm your email below (required)
          <input type="text" name="name" />
        </label>
      </form>

    </tag>
    
    
  )

}


