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
            <th colSpan="1">Monday</th>
            <th colSpan="1">Tuesday</th>
            <th colSpan="1">Wednesday</th>
            <th colSpan="1">Thursday</th>
            <th colSpan="1">Friday</th>
            <th colSpan="1">Saturday</th>
            <th colSpan="1">Sunday</th>

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