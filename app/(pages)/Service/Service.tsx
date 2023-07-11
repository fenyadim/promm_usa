import { FC } from 'react'

import './service.scss'

const Service: FC = () => (
	<div className="service__conteiner">
		<section className="service__banner">
			<div className="service__wrapper">
				<h1 className="service__heading">Promminer Service Center</h1>
			</div>
		</section>
		<section className="service__content">
			<div className="wrapper">
				<ul className="service__content-list">
					<li className="service__content-item">
						<svg
							width="40"
							height="43"
							viewBox="0 0 40 43"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="service__content-svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M1.9041 10.2342C6.30533 5.18695 12.7799 2 19.9999 2C27.2201 2 33.6947 5.18706 38.096 10.2345C38.4589 10.6508 39.0906 10.694 39.5069 10.331C39.9231 9.96804 39.9663 9.33635 39.6034 8.92009C34.8385 3.45558 27.8221 0 19.9999 0C12.1778 0 5.1616 3.45546 0.396709 8.91979C0.0337346 9.33605 0.0769273 9.96774 0.493182 10.3307C0.909438 10.6937 1.54113 10.6505 1.9041 10.2342ZM19.9991 8C14.5823 8 9.72518 10.3915 6.42382 14.1796C6.06096 14.5959 5.42928 14.6393 5.01292 14.2764C4.59657 13.9136 4.5532 13.2819 4.91606 12.8655C8.58108 8.66016 13.98 6 19.9991 6C26.017 6 31.4151 8.65917 35.08 12.8632C35.443 13.2795 35.3997 13.9112 34.9834 14.2741C34.5671 14.637 33.9354 14.5938 33.5725 14.1775C30.2712 10.3906 25.4149 8 19.9991 8ZM10.9528 18.1155C13.1541 15.592 16.3902 14 19.9993 14C23.61 14 26.8473 15.5934 29.0487 18.1188C29.4116 18.5351 30.0433 18.5784 30.4596 18.2155C30.8759 17.8526 30.9192 17.221 30.5563 16.8046C27.9913 13.862 24.2122 12 19.9993 12C15.7883 12 12.0107 13.8604 9.44566 16.8008C9.08261 17.217 9.12568 17.8487 9.54186 18.2117C9.95805 18.5748 10.5897 18.5317 10.9528 18.1155ZM18 20.5815C18 20.249 17.8347 19.9382 17.5589 19.7523C17.2832 19.5665 16.9331 19.5298 16.6248 19.6546C13.3283 20.989 11 24.2214 11 28C11 31.5352 13.038 34.5923 16 36.0642V42C16 42.5523 16.4477 43 17 43C17.5523 43 18 42.5523 18 42V35.4185C18 35.0111 17.7529 34.6444 17.3752 34.4916C14.808 33.4524 13 30.9362 13 28C13 25.6223 14.1857 23.52 16 22.2544V26C16 27.6569 17.3432 29 19 29H21C22.6569 29 24 27.6569 24 26V22.2544C25.8144 23.52 27 25.6223 27 28C27 30.9362 25.192 33.4524 22.6248 34.4916C22.2472 34.6444 22 35.0111 22 35.4185V42C22 42.5523 22.4477 43 23 43C23.5523 43 24 42.5523 24 42V36.0642C26.9621 34.5923 29 31.5352 29 28C29 24.2214 26.6717 20.989 23.3752 19.6546C23.067 19.5298 22.7169 19.5665 22.4411 19.7523C22.1653 19.9382 22 20.249 22 20.5815V26C22 26.5523 21.5523 27 21 27H19C18.4477 27 18 26.5523 18 26V20.5815Z"
								fill="#5820F6"
							></path>
						</svg>
						<div className="service__content-text-position">
							<strong className="service__content-heading">
								Remote solution of most problems
							</strong>
							<p className="service__content-description">
								Our service center is available 24 hours a day. Service
								specialists are happy to help solve most problems: the initial
								diagnostics by video call (most problems can be solved
								remotely).
							</p>
						</div>
					</li>
					<li className="service__content-item">
						<svg
							width="36"
							height="35"
							viewBox="0 0 36 35"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="service__content-svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M16.0896 9.95089L18.1157 11.977L16.7015 13.3913L14.2279 10.9176C13.9425 10.6322 13.8566 10.2033 14.0102 9.83003C14.8303 7.83656 14.4291 5.46196 12.8124 3.84524C11.6053 2.63818 9.97577 2.10866 8.39782 2.25914L11.0446 4.9059C11.4351 5.29643 11.4351 5.92959 11.0446 6.32011L7.50905 9.85565C7.11853 10.2462 6.48536 10.2462 6.09484 9.85565L3.44808 7.20888C3.2976 8.78683 3.82712 10.4164 5.03418 11.6234C6.6509 13.2401 9.0255 13.6414 11.019 12.8212C11.3922 12.6677 11.8212 12.7535 12.1065 13.0389L13.166 14.0984L11.7518 15.5126L11.1398 14.9006C8.57001 15.6932 5.65604 15.0737 3.61997 13.0376C1.41272 10.8304 0.870293 7.59144 1.98677 4.87768C2.114 4.56843 2.3874 4.34324 2.7153 4.2776C3.0432 4.21197 3.38221 4.31459 3.61867 4.55105L6.80195 7.73433L8.92327 5.61301L5.73999 2.42973C5.50353 2.19327 5.40091 1.85426 5.46654 1.52636C5.53218 1.19846 5.75737 0.925061 6.06662 0.797829C8.78038 -0.318647 12.0193 0.223785 14.2266 2.43103C16.2626 4.4671 16.8821 7.38107 16.0896 9.95089ZM23.7726 17.6339L22.3584 19.0481L24.832 21.5217C25.1173 21.8071 25.5463 21.8929 25.9195 21.7394C27.913 20.9192 30.2876 21.3205 31.9043 22.9372C33.1114 24.1443 33.6409 25.7738 33.4904 27.3517L30.8437 24.705C30.4531 24.3144 29.82 24.3144 29.4294 24.705L25.8939 28.2405C25.5034 28.631 25.5034 29.2642 25.8939 29.6547L28.5407 32.3015C26.9627 32.452 25.3332 31.9224 24.1261 30.7154C22.5094 29.0987 22.1082 26.7241 22.9283 24.7306C23.0819 24.3574 22.996 23.9284 22.7106 23.643L21.6513 22.5837L20.2371 23.9979L20.8489 24.6097C20.0564 27.1795 20.6759 30.0935 22.7119 32.1296C24.9192 34.3368 28.1581 34.8793 30.8719 33.7628C31.1811 33.6356 31.4063 33.3622 31.472 33.0343C31.5376 32.7064 31.435 32.3674 31.1985 32.1309L28.0152 28.9476L30.1366 26.8263L33.3198 30.0096C33.5563 30.246 33.8953 30.3486 34.2232 30.283C34.5511 30.2174 34.8245 29.9922 34.9517 29.6829C36.0682 26.9692 35.5258 23.7302 33.3185 21.523C31.2825 19.4869 28.3685 18.8675 25.7987 19.66L23.7726 17.6339ZM31.7203 0.526793C32.1157 0.275161 32.6328 0.331928 32.9643 0.663348L35.0856 2.78467C35.417 3.11609 35.4738 3.63323 35.2221 4.02865L32.7473 7.91774C32.6392 8.08751 32.4825 8.22074 32.2975 8.30001L29.9997 9.28481L19.8828 19.4017L20.9434 20.4623C21.334 20.8529 21.334 21.486 20.9434 21.8766L8.21552 34.6045C7.825 34.995 7.19184 34.995 6.80131 34.6045L1.14446 28.9476C0.753932 28.5571 0.753933 27.9239 1.14446 27.5334L13.8724 14.8055C14.2629 14.415 14.8961 14.415 15.2866 14.8055L16.3473 15.8661L26.4641 5.74927L27.4489 3.45141C27.5282 3.26645 27.6614 3.1097 27.8312 3.00167L31.7203 0.526793ZM28.7216 7.73442L18.4686 17.9875L17.7615 17.2804L28.0145 7.02731C28.1045 6.93735 28.1764 6.83105 28.2266 6.71412L29.1655 4.52316L32.1173 2.64478L33.1041 3.63166L31.2258 6.58339L29.0348 7.52238C28.9179 7.57249 28.8116 7.64446 28.7216 7.73442ZM17.7615 20.1088L15.6401 17.9875L14.5795 16.9268L3.26578 28.2405L7.50842 32.4832L18.8221 21.1694L17.7615 20.1088ZM15.6401 21.523C16.0307 21.1325 16.0307 20.4993 15.6401 20.1088C15.2496 19.7183 14.6165 19.7183 14.2259 20.1088L6.44776 27.887C6.05723 28.2775 6.05723 28.9106 6.44776 29.3012C6.83828 29.6917 7.47145 29.6917 7.86197 29.3012L15.6401 21.523Z"
								fill="#5820F6"
							></path>
						</svg>
						<div className="service__content-text-position">
							<strong className="service__content-heading">
								Free warranty service
							</strong>
							<p className="service__content-description">
								In the case of any machine breakage during the warranty period,
								we will eliminate all malfunctions for free.
							</p>
						</div>
					</li>
					<li className="service__content-item">
						<svg
							width="36"
							height="37"
							viewBox="0 0 36 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="service__content-svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M9 0C7.34315 0 6 1.34315 6 3H5C2.23858 3 0 5.23858 0 8V12V32C0 34.7614 2.23858 37 5 37H31C33.7614 37 36 34.7614 36 32V12V8C36 5.23858 33.7614 3 31 3H30C30 1.34315 28.6569 0 27 0C25.3431 0 24 1.34315 24 3H12C12 1.34315 10.6569 0 9 0ZM34 11V8C34 6.34315 32.6569 5 31 5H30C30 6.65685 28.6569 8 27 8C25.3431 8 24 6.65685 24 5H12C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5H5C3.34315 5 2 6.34315 2 8V11H34ZM2 13H34V32C34 33.6569 32.6569 35 31 35H5C3.34315 35 2 33.6569 2 32V13ZM27 2C27.5523 2 28 2.44772 28 3V5C28 5.55228 27.5523 6 27 6C26.4477 6 26 5.55228 26 5V3C26 2.44772 26.4477 2 27 2ZM10 3C10 2.44772 9.55228 2 9 2C8.44771 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6C9.55228 6 10 5.55228 10 5V3ZM9 19C8.44772 19 8 19.4477 8 20C8 20.5523 8.44772 21 9 21C9.55228 21 10 20.5523 10 20C10 19.4477 9.55228 19 9 19ZM6 20C6 18.3431 7.34315 17 9 17C10.6569 17 12 18.3431 12 20C12 21.6569 10.6569 23 9 23C7.34315 23 6 21.6569 6 20ZM17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20ZM18 17C16.3431 17 15 18.3431 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17ZM27 19C26.4477 19 26 19.4477 26 20C26 20.5523 26.4477 21 27 21C27.5523 21 28 20.5523 28 20C28 19.4477 27.5523 19 27 19ZM24 20C24 18.3431 25.3431 17 27 17C28.6569 17 30 18.3431 30 20C30 21.6569 28.6569 23 27 23C25.3431 23 24 21.6569 24 20ZM8 28C8 27.4477 8.44772 27 9 27C9.55228 27 10 27.4477 10 28C10 28.5523 9.55228 29 9 29C8.44772 29 8 28.5523 8 28ZM9 25C7.34315 25 6 26.3431 6 28C6 29.6569 7.34315 31 9 31C10.6569 31 12 29.6569 12 28C12 26.3431 10.6569 25 9 25ZM18 27C17.4477 27 17 27.4477 17 28C17 28.5523 17.4477 29 18 29C18.5523 29 19 28.5523 19 28C19 27.4477 18.5523 27 18 27ZM15 28C15 26.3431 16.3431 25 18 25C19.6569 25 21 26.3431 21 28C21 29.6569 19.6569 31 18 31C16.3431 31 15 29.6569 15 28ZM26 28C26 27.4477 26.4477 27 27 27C27.5523 27 28 27.4477 28 28C28 28.5523 27.5523 29 27 29C26.4477 29 26 28.5523 26 28ZM27 25C25.3431 25 24 26.3431 24 28C24 29.6569 25.3431 31 27 31C28.6569 31 30 29.6569 30 28C30 26.3431 28.6569 25 27 25Z"
								fill="#5820F6"
							></path>
						</svg>
						<div className="service__content-text-position">
							<strong className="service__content-heading">
								Average repair duration 1 week
							</strong>
							<p className="service__content-description">
								We try to repair all the equipment that comes to us promptly, so
								the repair time is so short.
							</p>
						</div>
					</li>
					<li className="service__content-item">
						<svg
							width="42"
							height="40"
							viewBox="0 0 42 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="service__content-svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M41.4915 4.96721C41.495 4.93316 41.4968 4.89871 41.4968 4.86396C41.4968 4.45575 41.2486 4.08851 40.8699 3.93619L32.506 0.572228C32.2665 0.475924 31.9991 0.475924 31.7597 0.572228L23.3957 3.93619C23.017 4.08851 22.7689 4.45575 22.7689 4.86396C22.7689 4.89871 22.7707 4.93316 22.7742 4.9672C22.7707 5.00132 22.7689 5.03594 22.7689 5.07099L22.7688 16.8639C22.7688 17.2721 23.017 17.6394 23.3957 17.7917L31.7597 21.1556C31.9991 21.2519 32.2665 21.2519 32.506 21.1556L40.8699 17.7917C41.2487 17.6394 41.4968 17.2721 41.4968 16.8639L41.4968 5.07099C41.4968 5.03595 41.495 5.00132 41.4915 4.96721ZM39.4968 6.34401L33.1328 8.90358V18.7478L39.4968 16.1883L39.4968 6.34401ZM26.4488 4.86396L31.9694 7.08434C32.0226 7.07559 32.0772 7.07104 32.1328 7.07104C32.1885 7.07104 32.2431 7.07559 32.2963 7.08434L37.8169 4.86396L32.1328 2.57785L26.4488 4.86396ZM31.1328 18.7478V8.90358L24.7689 6.34401L24.7688 16.1883L31.1328 18.7478ZM8.82753 8C8.82753 5.79086 10.6184 4 12.8275 4H17.8275C18.3798 4 18.8275 4.44772 18.8275 5C18.8275 5.55228 18.3798 6 17.8275 6H12.8275C11.723 6 10.8275 6.89543 10.8275 8V12.1559L12.655 10.3284C13.0455 9.9379 13.6787 9.9379 14.0692 10.3284C14.4597 10.719 14.4597 11.3521 14.0692 11.7426L10.5337 15.2782C10.1431 15.6687 9.50997 15.6687 9.11944 15.2782L5.58391 11.7426C5.19338 11.3521 5.19338 10.719 5.58391 10.3284C5.97443 9.9379 6.6076 9.9379 6.99812 10.3284L8.82753 12.1578V8ZM27.9273 28.2541C27.5368 28.6446 27.5368 29.2778 27.9273 29.6683C28.3178 30.0588 28.951 30.0588 29.3415 29.6683L31.1699 27.8399V31.9968C31.1699 33.1013 30.2745 33.9968 29.1699 33.9968H24.1699C23.6176 33.9968 23.1699 34.4445 23.1699 34.9968C23.1699 35.5491 23.6176 35.9968 24.1699 35.9968H29.1699C31.3791 35.9968 33.1699 34.2059 33.1699 31.9968V27.8399L34.9983 29.6683C35.3889 30.0588 36.022 30.0588 36.4126 29.6683C36.8031 29.2778 36.8031 28.6446 36.4126 28.2541L32.877 24.7186C32.4865 24.328 31.8533 24.328 31.4628 24.7186L27.9273 28.2541ZM19.2196 23.2466C19.2238 23.2095 19.226 23.1719 19.226 23.1339C19.226 22.7257 18.9778 22.3585 18.5991 22.2062L10.2352 18.8422C9.99572 18.7459 9.72831 18.7459 9.48886 18.8422L1.1249 22.2062C0.746174 22.3585 0.498051 22.7257 0.498051 23.1339C0.498051 23.1655 0.499532 23.1968 0.502439 23.2277C0.498249 23.2649 0.496098 23.3027 0.496098 23.341L0.496094 35.1339C0.496094 35.5421 0.744216 35.9093 1.12295 36.0617L9.48691 39.4256C9.72635 39.5219 9.99376 39.5219 10.2332 39.4256L18.5972 36.0617C18.9759 35.9093 19.224 35.5421 19.224 35.1339L19.224 23.341C19.224 23.3092 19.2225 23.2777 19.2196 23.2466ZM17.224 24.6148L10.8601 27.1743V37.0178L17.224 34.4582L17.224 24.6148ZM4.17796 23.1339L9.698 25.3541C9.75075 25.3455 9.80488 25.341 9.86006 25.341C9.9162 25.341 9.97126 25.3457 10.0249 25.3545L15.5461 23.1339L9.86201 20.8478L4.17796 23.1339ZM8.86006 37.0178V27.1728L2.4961 24.6132L2.49609 34.4582L8.86006 37.0178Z"
								fill="#5820F6"
							></path>
						</svg>
						<div className="service__content-text-position">
							<strong className="service__content-heading">
								We pick up the equipment for repair ourselves
							</strong>
							<p className="service__content-description">
								You do not have to worry about how to bring a faulty device. Our
								company will gladly arrange everything and will pick up the
								device and bring it back at a convenient time for you.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section className="services">
			<div className="wrapper">
				<h2 className="services__heading">Services</h2>
				<ul className="services__list">
					<li className="services__item">
						<img
							src="/image/service/Profilaktika-pylevogo-zagryazneniya.jpg"
							alt=""
							className="services__img"
						/>
						<div className="services__text-position">
							<strong className="services__item-heading">
								Prevention of dust pollution
							</strong>
							<p className="services__item-description">
								The service includes thorough cleaning and maintenance of the
								device to prevent accumulation of dust and debris on the surface
								and in the components of the device.
							</p>
						</div>
					</li>
					<li className="services__item">
						<img
							src="/image/service/Udalennaya-diagnostika.jpg"
							alt=""
							className="services__img"
						/>
						<div className="services__text-position">
							<strong className="services__item-heading">
								Remote troubleshooting
							</strong>
							<p className="services__item-description">
								Our experienced technicians can remotely diagnose and, if
								possible, repair most of the problems associated with the
								malfunction of your machines.
							</p>
						</div>
					</li>
					<li className="services__item">
						<img
							src="/image/service/Obnovlenie-proshivki.jpg"
							alt=""
							className="services__img"
						/>
						<div className="services__text-position">
							<strong className="services__item-heading">
								Updating the factory firmware
							</strong>
							<p className="services__item-description">
								A firmware update will provide you with benefits such as
								improved device performance, new features, bug fixes, and
								security improvements.
							</p>
						</div>
					</li>
					<li className="services__item">
						<img
							src="/image/service/Zamena-neispravnykh-komplektuyushchikh.jpg"
							alt=""
							className="services__img"
						/>
						<div className="services__text-position">
							<strong className="services__item-heading">
								Replacing defective components
							</strong>
							<p className="services__item-description">
								We offer quick and reliable replacement of defective components
								to keep your machines running at peak performance.
							</p>
						</div>
					</li>
					<li className="services__item">
						<img
							src="/image/service/Pervichnaya-diagnostika-neispravnostey.jpg"
							alt=""
							className="services__img"
						/>
						<div className="services__text-position">
							<strong className="services__item-heading">
								Initial fault diagnosis
							</strong>
							<p className="services__item-description">
								Our specialists can quickly identify major problems with your
								equipment and provide you with recommendations for repair or
								replacement.
							</p>
						</div>
					</li>
					<li className="services__item">
						<img
							src="/image/service/Podgotovka-k-immersii.jpg"
							alt=""
							className="services__img"
						/>
						<div className="services__text-position">
							<strong className="services__item-heading">
								Preparing the ASIC Miner for Immersion
							</strong>
							<p className="services__item-description">
								Our service will help you prepare your ASIC miner for immersion
								in a special cooling liquid, ensuring that your equipment will
								work more efficiently.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section className="service-step">
			<div className="wrapper">
				<div className="service-step__content">
					<div className="service-step__left">
						<img
							src="/image/service/process.png"
							alt=""
							className="service-step__img"
						/>
					</div>
					<div className="service-step__right">
						<h3 className="service-step__heading">How does it all happen?</h3>
						<ol className="service-step__list">
							<li className="service-step__item">
								<strong className="service-step__item-heading">
									Remote Initial Examination
								</strong>
								<p className="service-step__item-description">
									To avoid bothering you unnecessarily, our technicians will
									conduct an initial inspection via video link to assess the
									need to take your equipment in for service.
								</p>
							</li>
							<li className="service-step__item">
								<strong className="service-step__item-heading">
									If necessary, we will take your equipment to the service
								</strong>
								<p className="service-step__item-description">
									We use the services of reliable logistics companies, so you do
									not have to worry about the safety of devices.
								</p>
							</li>
							<li className="service-step__item">
								<strong className="service-step__item-heading">
									We repair your equipment
								</strong>
								<p className="service-step__item-description">
									Repairs will be made as quickly and efficiently as possible,
									so the machines don't sit idle. The average repair takes only
									one week.
								</p>
							</li>
							<li className="service-step__item">
								<strong className="service-step__item-heading">
									Sending equipment back
								</strong>
								<p className="service-step__item-description">
									In the same way we send already working equipment back to you.
								</p>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	</div>
)

export default Service
