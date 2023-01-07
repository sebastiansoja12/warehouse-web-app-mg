import {Link} from "react-router-dom";


export default function Header() {
    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn m-1">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="normal-case text-xl">inParcel</a>
                    </label>
                    <ul tabIndex="0"
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/depots'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>Depots</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a>Logout</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <label tabIndex="0" className="btn m-1">Shipment</label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a>Ship a parcel</a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a>Change parcels data</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <label tabIndex="0" className="btn m-1">Warehouse</label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>
                        <li><button className="btn">Routes</button></li>
                        </Link>
                        <li><button className="btn">Register worker</button></li>

                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><button className="btn">Register a parcel</button></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><button className="btn">Find a parcel</button></li>
                        <li><button className="btn">Generate label</button></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                    <form method="GET">
                        <div className="relative text-gray-600 focus-within:text-gray-400">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                       viewBox="0 0 24 24" className="w-6 h-6"><path
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                              </span>
                            <input type="search" name="q"
                                   className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none"
                                   placeholder="Find your parcel" autoComplete="off"/>
                        </div>
                    </form>
            </div>
            <div className="navbar-end">
                <div className="tooltip tooltip-bottom" data-tip="Depots">
                <button className="btn btn-white btn-circle">
                    <Link to="/depots">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    </Link>
                </button>
                </div>

                <button className="btn btn-white btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
                <button className="btn btn-white btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <Link to="/login">
                    <button className="btn btn-outline btn-accent">Log in</button>
                </Link>
            </div>
        </div>
    )
}
