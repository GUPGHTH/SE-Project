import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css";
import { Fa500Px } from "react-icons/fa";
function Navbar() {
	
	return (
		<header>
			<nav >
				<a href="/Book_shelf"><Fa500Px/></a>
				<a href="/#">เกี่ยวกับ</a>
				<a href="/#">ติดต่อ</a>
				<a href="/#">การสั่งซื้อ</a> 
				<a href="/login">เข้าสู่ระบบ</a> 
			</nav>
		</header>
	);
}

export default Navbar;