import { useEffect, useState } from "react"

const Airlines = () => {
    
    const [userInput, setUserInput] = useState('');
    const [searchFlight, setSearchFlight] = useState('');
    const [filteredFlights, setFilteredFlights] = useState([])

    useEffect(() => {
        const getAirlines = async () => {
            const url = 'https://my.api.mockaroo.com/flight_logs.json?key=5776e910';
            const data = await fetch(url).then((response) => response.json());
            setSearchFlight(data);
        };
        getAirlines();
    }, []);

    const handleClick = () => {
        if (userInput) {
            const filtered = searchFlight.filter(flight => 
                flight.airline?.toLowerCase().includes(userInput.toLowerCase())
            );
            setFilteredFlights(filtered);
        } else {
            setFilteredFlights([])
        }
        [userInput, searchFlight];
    }

    return (
        <>
            <h1>Flight Plan Submission</h1>
            <div className="flightPlanForm">
                <div className="inputDiv">
                    <label>Airline: <input type="text" 
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Search by airline" required/>
                    
                    </label>
                </div>
                
                
                <button type="submit" onClick={handleClick}>Submit Flight Plan</button>
            </div>
        
            <h3>Submitted Flight Plan:</h3>
            
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                    <th>Airline</th>
                    <th>Flight Number</th>
                    <th>Departure Airport</th>
                    <th>Arrival Airport</th>
                    <th>Departure Date</th>
                    <th>Arrival Date</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFlights.length > 0 ? (
                    filteredFlights.map((flight, index) => (
                        <tr key={index}>
                        <td>{flight.airline}</td>
                        <td>{flight.flight_number}</td>
                        <td>{flight.departure_airport}</td>
                        <td>{flight.arrival_airport}</td>
                        <td>{flight.departure_date}</td>
                        <td>{flight.arrival_date}</td>
                        <td>{flight.departure_time}</td>
                        <td>{flight.arrival_time}</td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="8">No matching flights found.</td>
                    </tr>
                    )}
                </tbody>
            </table>

        </>
    )
}

export default Airlines;