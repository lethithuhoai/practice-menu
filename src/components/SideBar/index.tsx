import "./style.css"


export const SideBar = () => {
    return (
        <div className='side-bar'>

            <ul className="list-menu">
                <li className="menu-item">
                    <a href="#">SH:FINANCIAL</a>
                    <i className="fa-solid fa-bars"></i>
                </li>
                <li className="menu-item">
                    <i className="fa-solid fa-house"></i>
                    <a href="#">Dashboard</a>
                </li>
                <li className="menu-item">
                    <i className="fa-solid fa-wallet"></i>
                    <a href="#">Wallet</a></li>
                <li className="menu-item">
                    <i className="fa-solid fa-money-bill-transfer"></i>
                    <a href="#">Transfers</a></li>
                <li className="menu-item">
                    <i className="fa-solid fa-credit-card"></i>
                    <a href="#">Cards</a>
                    <ul className="multi-card">
                        <li className="menu-item" id="sidebar-menu">
                            <i className="fa-solid fa-credit-card"></i>
                            <a href="#">My Cards</a></li>
                        <li className="menu-item">
                            <i className="fa-solid fa-credit-card" id="sidebar-menu"></i>
                            <a href="#">Card Issuance</a></li>
                    </ul>
                </li>
                <li className="menu-item">
                    <i className="fa-solid fa-file"></i>
                    <a href="#">Expenses</a></li>
                <li className="menu-item">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <a href="#">Payments</a></li>
                <li className="menu-item">
                    <i className="fa-regular fa-file"></i>
                    <a href="#">Reports</a></li>
                <li className="menu-item">
                    <i className="fa-solid fa-link"></i>
                    <a href="#">Connections</a></li>
                <li className="menu-item">
                    <i className="fa-solid fa-trophy"></i>
                    <a href="#">Rewards</a></li>
                <li className="menu-item">
                    <i className="fa-solid fa-desktop"></i>
                    <a href="#">Developer</a></li>
            </ul>

        </div>
    )
}
