import { Fragment } from "react";

export default function OpeningHoursTable(props) {

return (
<Fragment>

<table class="opening-hours-table">
    <thead>
        <tr>
            <th colspan="7">Available Hours:</th>
        </tr>
        <tr>
            <th colspan="1">Monday</th>
            <th colspan="1">Tuesday</th>
            <th colspan="1">Wednesday</th>
            <th colspan="1">Thursday</th>
            <th colspan="1">Friday</th>
            <th colspan="1">Saturday</th>
            <th colspan="1">Sunday</th>

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