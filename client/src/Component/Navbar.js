import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div  className="logo">LOGO</div>
			<form className="search">
			<input type="text" name="search" placeholder="Search.." className="input_navbar"/>
			</form>
			<nav ref={navRef}>
				<a href="/Book_shelf">หนังสือ</a>
				<a href="/#">เกี่ยวกับ</a>
				<a href="/#">ติดต่อ</a>
				<a href="/#">การสั่งซื้อ</a> 
				
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