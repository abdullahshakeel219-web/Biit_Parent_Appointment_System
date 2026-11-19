
import "./AppointmentTable.css";

function AppointmentTable() {

    const appointments = [
        {
            id: 1,
            teacher: "Ali Ahmed",
            date: "20 Nov 2026",
            time: "10:00 AM",
            status: "Approved"
        },
        {
            id: 2,
            teacher: "Usman Khan",
            date: "21 Nov 2026",
            time: "11:30 AM",
            status: "Pending"
        },
        {
            id: 3,
            teacher: "Ahmed Hassan",
            date: "22 Nov 2026",
            time: "02:00 PM",
            status: "Completed"
        }
    ];

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
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td>{appointment.teacher}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>
                                <span className={`status ${appointment.status.toLowerCase()}`}>
                                    {appointment.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default AppointmentTable;
