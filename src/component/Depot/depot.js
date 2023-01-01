import { useEffect, useState } from 'react';

export default function AllDepots() {
    const [depots, setDepot] = useState([])


    function loadDepots() {
        fetch("http://localhost:8080/v2/api/depots/depotCode/KT3")
            .then((res) => res.json())
            .then((res) => setDepot(res));
    }
    console.log(depots);
    useEffect(() => {loadDepots()}, []);



    return(
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                <tr>
                    <th>Depot code</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Country</th>
                    <th>Lat</th>
                    <th>Lon</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{depots.depotCode}</td>
                    <td>{depots.city}</td>
                    <td>{depots.street}</td>
                    <td>{depots.country}</td>
                    <td>{depots.coordinates.lat}</td>
                    <td>{depots.coordinates.lon}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}
