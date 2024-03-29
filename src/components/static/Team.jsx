import Vicente from "../../static/images/team/vicente.jpg";
import Teresa from "../../static/images/team/teresa.jpg";
/*<!--import Jose from '../../static/images/team/Jose.jpg';--> */
import JoseDeJesus from "../../static/images/team/jose-dejesus.jpg";
import David from "../../static/images/team/david.jpg";
import Pablo from "../../static/images/team/pablo.jpg";
import Omar from "../../static/images/team/omar.jpg";
import Ozodjon from "../../static/images/team/ozodjon.jpg";
import Christopher from "../../static/images/team/christopher.jpg";
import Ignacio from "../../static/images/team/ignacio.jpg";
import Carlos from "../../static/images/team/carlos.jpg";
/*<!--import Niraj from '../../static/images/team/niraj.jpg';--> */
import Jamal from "../../static/images/team/jamal.jpg";

import { useTranslation } from "react-i18next";

const Team = () => {
	const { t } = useTranslation("translation", { keyPrefix: "team" });

	return (
		<>
			<section className="container-fluid py-5 bg-purple">
				<div className="container">
					<div className="row">
						<div className="col text-center">
							<h2
								className="txt-color-mint fw-600"
								data-aos="fade-up"
								data-aos-delay="300"
								data-aos-offset="50"
								data-aos-duration="500"
							>
								{t("main_title")}
							</h2>
							<p
								className="fs-16 mb-5 text-white"
								data-aos="fade"
								data-aos-delay="100"
								data-aos-offset="50"
								data-aos-duration="1000"
							>
								{t("description")}
							</p>
						</div>
					</div>
					<div className="row justify-content-center">
						{/*<!-- Team 1-->*/}
						<div className="col-md-3 mb-4">
							<div className="team d-flex flex-column align-items-center">
								<div
									className="mb-3"
									data-aos="flip-left"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<div className="image-box">
										<img src={Vicente} />
									</div>
								</div>
								<div
									className="text-center team-info"
									data-aos="fade-zoom-in"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<h3 className="card-title">{t("member.Vicente.name")}</h3>
									<h2 className="card-subtitle mb-2 text-muted">
										{t("member.Vicente.jobTitle")}
									</h2>
									<a
										href="https://www.linkedin.com/in/vicentebenlloch/"
										target="_blank"
										className=""
									>
										<i className="fab fa-linkedin fa-lg"></i>
									</a>
								</div>
							</div>
						</div>
						{/*<!-- Team 2-->*/}
						<div className="col-md-3 mb-4">
							<div className="team d-flex flex-column align-items-center">
								<div
									className="mb-3"
									data-aos="flip-left"
									data-aos-delay="300"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<div className="image-box">
										<img src={Teresa} />
									</div>
								</div>
								<div
									className="text-center team-info"
									data-aos="fade-zoom-in"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<h3 className="card-title">{t("member.Teresa.name")}</h3>
									<h2 className="card-subtitle mb-2 text-muted">
										{t("member.Teresa.jobTitle")}
									</h2>
									<a
										href="https://www.linkedin.com/in/teresadejesus/"
										target="_blank"
										className=""
									>
										<i className="fab fa-linkedin fa-lg"></i>
									</a>
								</div>
							</div>
						</div>
						{/*<!-- Team 6-->*/}
						<div className="col-md-3 mb-4">
							<div className="team d-flex flex-column align-items-center">
								<div
									className="mb-3"
									data-aos="flip-left"
									data-aos-delay="300"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<div className="image-box">
										<img src={Pablo} />
									</div>
								</div>
								<div
									className="text-center team-info"
									data-aos="fade-zoom-in"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<h3 className="card-title">{t("member.Pablo.name")}</h3>
									<h2 className="card-subtitle mb-2 text-muted">
										{t("member.Pablo.jobTitle")}
									</h2>
									<a
										href="https://www.linkedin.com/in/pablo-palau-garcer%C3%A1-81ba0292/"
										target="_blank"
										className=""
									>
										<i className="fab fa-linkedin fa-lg"></i>
									</a>
								</div>
							</div>
						</div>

						{/*<!-- Team 4-->*/}
						<div className="col-md-3 mb-4">
							<div className="team d-flex flex-column align-items-center">
								<div
									className="mb-3"
									data-aos="flip-left"
									data-aos-delay="300"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<div className="image-box">
										<img src={JoseDeJesus} />
									</div>
								</div>
								<div
									className="text-center team-info"
									data-aos="fade-zoom-in"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<h3 className="card-title">{t("member.JoseDeJesus.name")}</h3>
									<h2 className="card-subtitle mb-2 text-muted">
										{t("member.JoseDeJesus.jobTitle")}
									</h2>
									<a
										href="https://www.linkedin.com/in/jdejesus-ibm/"
										target="_blank"
										className=""
									>
										<i className="fab fa-linkedin fa-lg"></i>
									</a>
								</div>
							</div>
						</div>

						{/*<!-- Team 5-->*/}
						<div className="col-md-3 mb-4">
							<div className="team d-flex flex-column align-items-center">
								<div
									className="mb-3"
									data-aos="flip-left"
									data-aos-delay="300"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<div className="image-box">
										<img src={David} />
									</div>
								</div>
								<div
									className="text-center team-info"
									data-aos="fade-zoom-in"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<h3 className="card-title">{t("member.David.name")}</h3>
									<h2 className="card-subtitle mb-2 text-muted">
										{t("member.David.jobTitle")}
									</h2>
									<a
										href="https://www.linkedin.com/in/david-miquel-castells-855424123/"
										target="_blank"
										className=""
									>
										<i className="fab fa-linkedin fa-lg"></i>
									</a>
								</div>
							</div>
						</div>

						{/*<!-- Team 9-->*/}
						<div className="col-md-3 mb-4">
							<div className="team d-flex flex-column align-items-center">
								<div
									className="mb-3"
									data-aos="flip-left"
									data-aos-delay="300"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<div className="image-box">
										<img src={Ignacio} />
									</div>
								</div>
								<div
									className="text-center team-info"
									data-aos="fade-zoom-in"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<h3 className="card-title">{t("member.Ignacio.name")}</h3>
									<h2 className="card-subtitle mb-2 text-muted">
										{t("member.Ignacio.jobTitle")}
									</h2>
									<a
										href="https://www.linkedin.com/in/iolmosclemades/"
										target="_blank"
										className=""
									>
										<i className="fab fa-linkedin fa-lg"></i>
									</a>
								</div>
							</div>
						</div>
						{/*<!-- Team 9-->*/}
						<div className="col-md-3 mb-4">
							<div className="team d-flex flex-column align-items-center">
								<div
									className="mb-3"
									data-aos="flip-left"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<div className="image-box">
										<img src={Omar} />
									</div>
								</div>
								<div
									className="text-center team-info"
									data-aos="fade-zoom-in"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<h3 className="card-title">{t("member.Omar.name")}</h3>
									<h2 className="card-subtitle mb-2 text-muted">
										{t("member.Omar.jobTitle")}
									</h2>
									<a
										href="https://www.linkedin.com/in/omar-hammad-b488b41a/"
										target="_blank"
										className=""
									>
										<i className="fab fa-linkedin fa-lg"></i>
									</a>
								</div>
							</div>
						</div>
						{/*<!-- Team 9-->*/}
						<div className="col-md-3 mb-4">
							<div className="team d-flex flex-column align-items-center">
								<div
									className="mb-3"
									data-aos="flip-left"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<div className="image-box ">
										<img className="developer" src={Ozodjon} />
									</div>
								</div>
								<div
									className="text-center team-info"
									data-aos="fade-zoom-in"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<h3 className="card-title">{t("member.Ozodjon.name")}</h3>
									<h2 className="card-subtitle mb-2 text-muted">
										{t("member.Ozodjon.jobTitle")}
									</h2>
									<a
										href="http://linkedin.com/in/ozodjon-asadullayev-17044b1a7"
										target="_blank"
										className=""
									>
										<i className="fab fa-linkedin fa-lg"></i>
									</a>
								</div>
							</div>
						</div>
						{/*<!-- Team 9-->*/}
						<div className="col-md-3 mb-4">
							<div className="team d-flex flex-column align-items-center">
								<div
									className="mb-3"
									data-aos="flip-left"
									data-aos-delay="300"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<div className="image-box">
										<img src={Carlos} />
									</div>
								</div>
								<div
									className="text-center team-info"
									data-aos="fade-zoom-in"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<h3 className="card-title">{t("member.Carlos.name")}</h3>
									<h2 className="card-subtitle mb-2 text-muted">
										{t("member.Carlos.jobTitle")}
									</h2>
									<a
										href="https://www.linkedin.com/in/carlos-moreno-fontana/"
										target="_blank"
										className=""
									>
										<i className="fab fa-linkedin fa-lg"></i>
									</a>
								</div>
							</div>
						</div>

						{/*<!-- Team 9-->*/}
						<div className="col-md-3 mb-4">
							<div className="team d-flex flex-column align-items-center">
								<div
									className="mb-3"
									data-aos="flip-left"
									data-aos-delay="300"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<div className="image-box">
										<img src={Jamal} />
									</div>
								</div>
								<div
									className="text-center team-info"
									data-aos="fade-zoom-in"
									data-aos-delay="100"
									data-aos-offset="50"
									data-aos-duration="1000"
								>
									<h3 className="card-title">{t("member.Jamal.name")}</h3>
									<h2 className="card-subtitle mb-2 text-muted">
										{t("member.Jamal.jobTitle")}
									</h2>
									<a
										href="https://www.linkedin.com/in/jamal-ramjohn23/"
										target="_blank"
										className=""
									>
										<i className="fab fa-linkedin fa-lg"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Team;
