import { useEffect, useState } from "react"

const Airlines = () => {
    
    const [userInput, setUserInput] = useState('');
    const [randomIndex, setRandomIndex] = useState('');

    return (
        <>
            <h1>Flight Plan Submission</h1>
            <div className="flightPlanForm">
                <label>Airline: <input type="text" name="aircraftType" className="airline" required/></label><br/><br/>
                <label>Flight Number: <input type="text" name="flightNumber"/></label><br/><br/>
                <label>Departure Airport: <input type="text" name="departureAirport"/></label><br/><br/>
                <label>Arrival Airport: <input type="text" name="arrivalAirport"/></label><br/><br/>
                <label>Departure Date: <input type="date" name="departureDate"/></label><br/><br/>
                <label>Arrival Date: <input type="date" name="arrivalDate"/></label><br/><br/>
                <label>Departure Time: <input type="time" name="departureTime"/></label><br/><br/>
                <label>Arrival Time: <input type="time" name="arrivalTime"/></label><br/><br/>
                
                <button type="submit">Submit Flight Plan</button>
            </div>
        
            <h3>Submitted Flight Plan:</h3>
            <div className="output"></div>
        </>
    )
}

export default Airlines