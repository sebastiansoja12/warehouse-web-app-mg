import { useEffect, useState } from 'react';

export default function AllDepots() {
    const [depots, setDepot] = useState([])


    function loadDepots() {
        fetch("http://localhost:8080/depot/depotCode/KT3")
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
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>company</th>
                    <th>location</th>
                    <th>Last Login</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <td>{depots.depotCode}</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                    <td>12/16/2020</td>
                    <td>Blue</td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}
