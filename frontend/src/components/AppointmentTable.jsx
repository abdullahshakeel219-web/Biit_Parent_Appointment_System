
import "./AppointmentTable.css";
import StatusBadge from "./StatusBadge";

function AppointmentTable({ appointments = [] }) {

    return (
        <div className="appointment-table">

            <h3>Next Appointments</h3>

            <table>
                <thead>
                    <tr>
                        <th>Teacher</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {appointments.map((a) => (
                        <tr key={a.id}>
                            <td>{a.teacher}</td>
                            <td>{a.date}</td>
                            <td>{a.time}</td>
                            <td>
                                <StatusBadge status={a.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}

export default AppointmentTable;
