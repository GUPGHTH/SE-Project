import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css";
import { FaSearch } from "react-icons/fa";
function Navbar() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	
	return (
		<header>
			<h1 className="System_Name"> SanookkidSanookarn</h1>
			
			<nav ref={navRef}>
				<a href="/Book_shelf">หนังสือ</a>
				<a href="/#">เกี่ยวกับ</a>
				<a href="/Contact">ติดต่อ</a>
				<a href="/#">การสั่งซื้อ</a> 
				<a href="/login">เข้าสู่ระบบ</a> 
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;