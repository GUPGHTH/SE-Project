import { useRef } from "react";
import * as React from 'react';
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

	const show_login = () =>{
		if (sessionStorage.getItem("login_status") == "true"){
			return(
				<a href="/">{sessionStorage.getItem("usernamelogin")}</a> 

			);
		}
		else{
			return(
				<a href="/login">เข้าสู่ระบบ</a> 
			);
		}
	}

	
	
	return (
		<header>
			<h1 className="System_Name"> SanookkidSanookarn</h1>
			
			<nav ref={navRef}>
				<a href="/Book_shelf">หนังสือ</a>
				<a href="/Contact">ติดต่อ</a>
				<a href="/#">การสั่งซื้อ</a> 
				<a href="/#">ตะกร้าสินค้า</a>
				{show_login()}
				
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