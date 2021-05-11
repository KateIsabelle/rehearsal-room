import React from "react";


export default function SearchForm(props) {
  return (
    <tag>
      <form>
        <label>
          Keyword Search:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Search" />
        <input type="submit" value="Advanced Search" />
      </form>

      <h1>Amenities</h1>

      <form>
        <label>
          Wifi:
          <input type="checkbox"/>
        </label>
      </form>

      <form>
        <label>
          Sound Proofing:
          <input type="checkbox"/>
        </label>
      </form>

      <form>
        <label>
          Sprung Floor:
          <input type="checkbox"/>
        </label>
      </form>

      <form>
        <label>
          Kitchenette:
          <input type="checkbox"/>
        </label>
      </form>

      <form>
        <label>
          Mirrors:
          <input type="checkbox"/>
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Sound System
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Bathroom <img src="https://www.flaticon.com/premium-icon/icons/svg/1739/1739040.svg" width="14px" height="14px"></img>
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Indoor Space
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Outdoor Space
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Bike Parking
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Street Parking
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Private Parking
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Piano
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Natural Light
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Air Conditioning
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : 10 ft plus Ceiling
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Private
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Semi-private
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Wheelchair Accessible
        </label>
      </form>

      <form>
        <label>
          <input type="checkbox"/>
          : Self-entry
        </label>
      </form>

    </tag>


  )

}
