import React, { useState, useEffect } from "react";
import Logo from "../static/images/header/Logo.png";
import LanguageIcon from "../static/images/header/LanguageIcon.png";
import closer from "../static/images/header/closer.svg";
import { FaBars } from "react-icons/fa";
import "./Header.scss";
import { useTranslation } from "react-i18next";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const { t, i18n } = useTranslation("translation", { keyPrefix: "header" });
	const langEn = "en-US";
	const langEs = "es-ES";
	// const { walletAddress, isAuthenticated } = useSelector((state) => state?.auth);
	// const { nft } = useSelector((state) => state?.nft);
	// const dispatch = useDispatch();
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 100) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	window.addEventListener("scroll", handleScroll);
	let x = ["nav-top"];
	if (scrolled) {
		x.push("scrolled stick");
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);

	const toggleSideMenu = () => {
		console.log("menu active");
		document.getElementById("nav").classList.toggle("active");
	};

	const scrollTo = (ancla, offset = 0) => {
		let x = document.querySelector("#" + ancla);
		if (x) {
			//x.scrollIntoView({ block: 'start', behavior: 'smooth' });
			const y =
				x.getBoundingClientRect().top + window.pageYOffset - offset;
			window.scrollTo({ top: y, behavior: "smooth" });
			toggleSideMenu();
		}
		return false;
	};

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		toggleSideMenu();
	};

	return (
		<>
			<section className="banner">
				{/*<div className="gradient"></div>*/}
				<div className={x.join(" nav-top ")}>
					<div className="container-xl">
						<div className="nav-container">
							<div className="nav-brand">
								<div className="navbar-brand">
									<a href="/">
										<img
											src={Logo}
											className="img-fluid"
											alt="Logo"
										/>
									</a>
								</div>
							</div>
							<ul className="nav" id="nav">
								<li className="nav-item pt-3 d-flex d-md-none justify-content-end closer">
									<button
										className="btn btn-clear"
										id="menu-toggle"
										onClick={() => toggleSideMenu()}
									>
										<img src={closer} alt="closer" />
									</button>
								</li>
								<li className="nav-item nav-item-lang">
									<img
										src={LanguageIcon}
										alt="lang selector"
										id="lang-selector"
										className="lang-selector"
									/>
									&nbsp;
									<span className="lang-options">
										<span
											className={
												"lang-en " +
												(i18n.language === langEn
													? "active"
													: "")
											}
											id="lang-en"
											onClick={() =>
												changeLanguage(langEn)
											}
										>
											EN
										</span>
										<span className="separator">
											&nbsp; / &nbsp;
										</span>
										<span
											className={
												"lang-es " +
												(i18n.language === langEs
													? "active"
													: "")
											}
											id="lang-es"
											onClick={() =>
												changeLanguage(langEs)
											}
										>
											ES
										</span>
									</span>
								</li>
								<li className="nav-item">
									<div
										className="nav-link"
										onClick={() =>
											scrollTo("main-home-slider", 20)
										}
									>
										{t("nav.first_option.item")}
									</div>
								</li>
								<li className="nav-item">
									<div
										className="nav-link"
										onClick={() =>
											scrollTo("mint-card", 100)
										}
									>
										{t("nav.second_option.item")}
									</div>
								</li>
								<li className="nav-item dropdown">
									<div
										className="nav-link dropdown-toggle"
										id="navbarDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										{t("nav.third_option.item")}
									</div>
									<div
										className="dropdown-menu "
										aria-labelledby="navbarDropdown"
									>
										<div
											className="dropdown-item nav-link p-2 text-capitalize"
											onClick={() =>
												scrollTo("propertyholders", 100)
											}
										>
											{t(
												"nav.third_option.dropdown.propertyHolders"
											)}
										</div>
										<div
											className="dropdown-item nav-link p-2 text-capitalize"
											onClick={() =>
												scrollTo("lounge", 100)
											}
										>
											{t(
												"nav.third_option.dropdown.lounge"
											)}
										</div>
										<div
											className="dropdown-item nav-link p-2 text-capitalize"
											onClick={() =>
												scrollTo("bidsarena", 100)
											}
										>
											{t(
												"nav.third_option.dropdown.arena"
											)}
										</div>
										<div
											className="dropdown-item nav-link p-2 text-capitalize"
											onClick={() =>
												scrollTo("exchange", 100)
											}
										>
											{t(
												"nav.third_option.dropdown.exchange"
											)}
										</div>
										<div
											className="dropdown-item nav-link p-2 text-capitalize"
											onClick={() =>
												scrollTo("nft-lab", 100)
											}
										>
											{t(
												"nav.third_option.dropdown.nftlab"
											)}
										</div>
										<div
											className="dropdown-item nav-link p-2 text-capitalize"
											onClick={() =>
												scrollTo("silvershop", 100)
											}
										>
											{t(
												"nav.third_option.dropdown.ecommerce"
											)}
										</div>
										<div
											className="dropdown-item nav-link p-2 text-capitalize"
											onClick={() =>
												scrollTo("vault", 100)
											}
										>
											{t(
												"nav.third_option.dropdown.vault"
											)}
										</div>
										<div
											className="dropdown-item nav-link p-2 text-capitalize"
											onClick={() =>
												scrollTo("staking", 100)
											}
										>
											{t(
												"nav.third_option.dropdown.staking"
											)}
										</div>
									</div>
								</li>
								<li
									className="nav-item"
									onClick={() =>
										scrollTo("metaverse-story", 50)
									}
								>
									<div className="nav-link">
										{t("nav.fourth_option.item")}
									</div>
								</li>
								{/* IMPORTANT: BUTTONS HIDDEN WITH d-none CLASS */}
								<li
									className="nav-item d-none"
									id="problematic-button"
								>
									<div
										className="ml-auto d-flex flex-wrap "
										style={{
											gap: "1rem",
										}}
									>
										<ul className="navbar-nav ml-auto d-flex justify-content-center align-items-center">
											<li className="nav-item m-0">
												{
													/*isAuthenticated && walletAddress ? (
                          <div className="button-container">
                            <button className="btn btn-outline-danger ml-3 " onClick={() => dispatch(actions.authActions.logOutUser())}>
                              Disconect
                            </button>
                          </div>
                        ) : (*/
													<div className="button-container">
														<button
															type="button"
															className="btn "
															onClick={() =>
																/*dispatch(actions.blockChainActions.connectToMetaMask)*/ null
															}
														>
															{t(
																"nav.first_button"
															)}
														</button>
													</div>
													/*)*/
												}
											</li>
										</ul>
										<div className="nav-item m-0">
											<div className="button-container">
												<button
													type="button"
													className="btn "
													onClick={() =>
														/*dispatch(actions.blockChainActions.connectToMetaMask)*/ null
													}
												>
													{t("nav.second_button")}
												</button>
											</div>
										</div>
									</div>
								</li>
								<div className="header-buttons">
									<div className="button-container nav-item">
										<button onClick={() => alert(2)}>
											{t("nav.first_button")}
										</button>
									</div>
									<div className="button-container nav-item">
										<button onClick={() => alert(1)}>
											{t("nav.second_button")}
										</button>
									</div>
								</div>
							</ul>

							<button
								className="btn btn-clear px-0 d-block d-md-none"
								id="menu-toggle"
								onClick={() => toggleSideMenu()}
							>
								<div className="navbar-toggler-icon">
									<FaBars />
								</div>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
