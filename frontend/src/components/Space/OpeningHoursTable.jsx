import { Fragment } from "react";

export default function OpeningHoursTable(props) {

return (
<Fragment>

<table className="opening-hours-table">
    <thead>
        <tr>
            <th colSpan="7">Available Hours:</th>
        </tr>
        <tr>
            <th colSpan="1">Mon</th>
            <th colSpan="1">Tues</th>
            <th colSpan="1">Weds</th>
            <th colSpan="1">Thurs</th>
            <th colSpan="1">Fri</th>
            <th colSpan="1">Sat</th>
            <th colSpan="1">Sun</th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <td>10am - 8pm</td>
            <td>10am - 8pm</td>
            <td>10am - 8pm</td>
            <td>10am - 8pm</td>
            <td>10am - 8pm</td>
            <td>10am - 8pm</td>
            <td>10am - 8pm</td>
        </tr>
    </tbody>
</table>
</Fragment>
  )
}