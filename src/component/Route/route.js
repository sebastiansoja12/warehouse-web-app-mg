import {useEffect, useState} from "react";
import {globalUrl} from "../../url";


export default function AllRoutes() {

    const [routes, setRoute] = useState([])


    function loadRoutes() {
        fetch(globalUrl.url + "/v2/api/routes/by-parcel")
            .then((res) => res.json())
            .then((res) => setRoute(res));
    }
    console.log(routes);
    useEffect(() => {loadRoutes()}, []);

    return(
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Created</th>
                    <th>Parcel ID</th>
                    <th>User</th>
                    <th>Supplier</th>
                    <th>Depot</th>
                </tr>
                </thead>
                <tbody>
                {routes.map((route) => (
                    <tr>
                        <td></td>
                        <td>{route.id}</td>
                        <td>{route.created}</td>
                        <td>{route.parcel.id}</td>
                        <td>{route.user.username}</td>
                        <td>{route.supplier.supplierCode}</td>
                        <td>{route.depot.depotCode}</td>
                    </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    )

}
