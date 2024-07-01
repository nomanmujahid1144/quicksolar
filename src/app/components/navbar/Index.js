export const Navbar = () => {
    return (
        <div className="navbar fixed grid grid-cols-3 md:px-60 bg-slate-50">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Solar</a>
            </div>
            <div className="flex justify-center">
                <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
                    <li><a>Home</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Profile</a></li>
                </ul>
            </div>
            <div className="flex justify-end">
                <button className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}