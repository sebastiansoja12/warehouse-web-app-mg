import { useEffect, useState } from 'react';
import {globalUrl} from "../../url";

export default function AllDepots() {
    const [depots, setDepot] = useState([])


    function loadDepots() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/depots/all`)
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
                </tr>
                </thead>
                <tbody>
                    {depots.map((depot) => (
                        <tr>
                        <td>{depot.depotCode}</td>
                        <td>{depot.city}</td>
                        <td>{depot.street}</td>
                        <td>{depot.country}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}
