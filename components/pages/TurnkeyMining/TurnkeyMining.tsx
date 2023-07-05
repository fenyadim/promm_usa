import Image from 'next/image'
import { FC } from 'react'

import './turnkey-mining.scss'

const TurnkeyMining: FC = () => {
	return (
		<div className="turnkey__wrapper">
			<section className="turnkey-mining">
				<div className="wrapper turnkey-mining__wrapper">
					<h1 className="turnkey-mining__header">Turnkey Mining</h1>
					<p className="turnkey-mining__description">
						Turnkey mining from the #1 company in the U.S. and Asia
					</p>
				</div>
			</section>
			<section className="turnkey-begin">
				<div className="wrapper">
					<h2 className="turnkey-begin__heading">
						How to start mining cryptocurrency
					</h2>
					<ul className="turnkey-begin__list">
						<li className="turnkey-begin__item">
							<svg
								width="40"
								height="37"
								viewBox="0 0 40 37"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11 2.5C10.4477 2.5 10 2.94772 10 3.5V5H30V3.5C30 2.94771 29.5523 2.5 29 2.5H11ZM8 3.5V5.10002C5.71776 5.56329 4 7.58104 4 10H1.5C0.947715 10 0.5 10.4477 0.5 11V31C0.5 31.5523 0.947715 32 1.5 32H4C4 34.7614 6.23858 37 9 37H31C33.7614 37 36 34.7614 36 32H38.5C39.0523 32 39.5 31.5523 39.5 31V11C39.5 10.4477 39.0523 10 38.5 10H36C36 7.58104 34.2822 5.56329 32 5.10002V3.5C32 1.84315 30.6569 0.5 29 0.5H11C9.34315 0.5 8 1.84315 8 3.5ZM37.5 30H36V12H37.5V30ZM34 10V11V31V32C34 33.6569 32.6569 35 31 35H9C7.34315 35 6 33.6569 6 32V31V11V10C6 8.34315 7.34315 7 9 7H31C32.6569 7 34 8.34315 34 10ZM4 30H2.5V12H4V30ZM12.9609 12.5467C14.8684 10.9566 17.3225 10 20 10C22.6775 10 25.1316 10.9566 27.0391 12.5467L27.0372 12.5486L26.9932 12.5926L26.9493 12.6365L26.9054 12.6803L26.8617 12.7241L26.8179 12.7678L26.7743 12.8115L26.7307 12.8551L26.6871 12.8986L26.6437 12.9421L26.6002 12.9855L26.5569 13.0289L26.5136 13.0722L26.4704 13.1154L26.4272 13.1586L26.3841 13.2017L26.341 13.2448L26.298 13.2878L26.255 13.3307L26.2122 13.3736L26.1693 13.4165L26.1266 13.4592L26.0838 13.502L26.0412 13.5446L25.9986 13.5872L25.956 13.6298L25.9135 13.6723L25.8711 13.7147L25.8287 13.7571L25.7863 13.7994L25.7441 13.8417L25.7018 13.8839L25.6597 13.9261L25.6177 13.9681C24.078 12.7365 22.125 12 20 12C17.875 12 15.922 12.7365 14.3823 13.9681L12.9609 12.5467ZM11.5418 11.1276L10.1005 9.68629C9.70998 9.29577 9.07682 9.29577 8.68629 9.6863C8.29577 10.0768 8.29577 10.71 8.68629 11.1005L10.1276 12.5418C8.1779 14.8153 7 17.7701 7 21C7 24.2299 8.1779 27.1847 10.1276 29.4582L10.1065 29.4793L10.0603 29.5255L10.014 29.5718L9.96759 29.6182L9.92114 29.6646L9.87462 29.7112L9.82802 29.7578L9.78135 29.8044L9.7346 29.8512L9.68778 29.898L9.64088 29.9449L9.5939 29.9919L9.54684 30.0389L9.49971 30.0861L9.4525 30.1333L9.40521 30.1806L9.35784 30.2279L9.3104 30.2754L9.26287 30.3229L9.21527 30.3705L9.16759 30.4182L9.11982 30.466L9.07198 30.5138L9.02405 30.5617L8.97605 30.6097L8.92796 30.6578L8.87979 30.706L8.83154 30.7542L8.78321 30.8026L8.73479 30.851L8.68629 30.8995C8.29577 31.29 8.29577 31.9232 8.68629 32.3137C9.07681 32.7042 9.70998 32.7042 10.1005 32.3137L10.149 32.2652L10.1974 32.2168L10.2458 32.1685L10.294 32.1202L10.3422 32.072L10.3903 32.0239L10.4383 31.9759L10.4862 31.928L10.534 31.8802L10.5818 31.8324L10.6295 31.7847L10.6771 31.7371L10.7246 31.6896L10.7721 31.6422L10.8194 31.5948L10.8667 31.5475L10.9139 31.5003L10.9611 31.4532L11.0081 31.4061L11.0551 31.3591L11.102 31.3122L11.1488 31.2654L11.1956 31.2186L11.2422 31.172L11.2888 31.1254L11.3354 31.0789L11.3818 31.0324L11.4282 30.986L11.4745 30.9397L11.5207 30.8935L11.5418 30.8724C13.8153 32.8221 16.7701 34 20 34C23.2299 34 26.1847 32.8221 28.4582 30.8724L29.8995 32.3137C30.29 32.7042 30.9232 32.7042 31.3137 32.3137C31.7042 31.9232 31.7042 31.29 31.3137 30.8995L29.8724 29.4582C31.8221 27.1847 33 24.2299 33 21C33 17.7701 31.8221 14.8153 29.8724 12.5418L29.8935 12.5207L29.9397 12.4745L29.986 12.4282L30.0324 12.3818L30.0789 12.3354L30.1254 12.2888L30.172 12.2422L30.2186 12.1956L30.2654 12.1488L30.3122 12.102L30.3591 12.0551L30.4061 12.0081L30.4532 11.9611L30.5003 11.9139L30.5475 11.8667L30.5948 11.8194L30.6422 11.7721L30.6896 11.7246L30.7371 11.6771L30.7847 11.6295L30.8324 11.5818L30.8802 11.534L30.928 11.4862L30.9759 11.4383L31.024 11.3903L31.072 11.3422L31.1202 11.294L31.1685 11.2458L31.2168 11.1974L31.2652 11.149L31.3137 11.1005C31.7042 10.71 31.7042 10.0768 31.3137 9.68629C30.9232 9.29577 30.29 9.29577 29.8995 9.68629L29.851 9.73479L29.8026 9.78321L29.7542 9.83154L29.706 9.87979L29.6578 9.92796L29.6097 9.97605L29.5617 10.0241L29.5138 10.072L29.466 10.1198L29.4182 10.1676L29.3705 10.2153L29.3229 10.2629L29.2754 10.3104L29.2279 10.3578L29.1806 10.4052L29.1333 10.4525L29.0861 10.4997L29.0389 10.5468L28.9919 10.5939L28.9449 10.6409L28.898 10.6878L28.8512 10.7346L28.8044 10.7814L28.7578 10.828L28.7112 10.8746L28.6646 10.9211L28.6182 10.9676L28.5718 11.014L28.5255 11.0603L28.4793 11.1065L28.4582 11.1276C26.1847 9.1779 23.2299 8 20 8C16.7701 8 13.8153 9.1779 11.5418 11.1276ZM28.4533 28.0391C30.0434 26.1316 31 23.6775 31 21C31 18.3225 30.0434 15.8684 28.4533 13.9609L28.4514 13.9628L28.4074 14.0068L28.3635 14.0507L28.3197 14.0946L28.2759 14.1383L28.2321 14.1821L28.1885 14.2257L28.1449 14.2693L28.1014 14.3129L28.0579 14.3563L28.0145 14.3997L27.9711 14.4431L27.9278 14.4864L27.8846 14.5296L27.8414 14.5728L27.7983 14.6159L27.7552 14.659L27.7122 14.702L27.6693 14.745L27.6264 14.7878L27.5835 14.8307L27.5408 14.8734L27.498 14.9162L27.4554 14.9588L27.4128 15.0014L27.3702 15.044L27.3277 15.0865L27.2853 15.1289L27.2429 15.1713L27.2006 15.2137L27.1583 15.2559L27.1161 15.2982L27.0739 15.3403L27.0319 15.3823C28.2635 16.922 29 18.875 29 21C29 23.125 28.2635 25.078 27.0319 26.6177L28.4533 28.0391ZM25.6064 25.1922C26.4816 24.0236 27 22.5723 27 21C27 19.4277 26.4816 17.9764 25.6064 16.8078L25.5882 16.826L25.5477 16.8665L25.5073 16.9069L25.467 16.9472L25.4267 16.9875L25.3864 17.0278L25.3462 17.0681L25.306 17.1083L25.2658 17.1484L25.2257 17.1885L25.1856 17.2286L25.1455 17.2687L25.1055 17.3087L25.0655 17.3487L25.0256 17.3886L24.9857 17.4285L24.9458 17.4684L24.906 17.5082L24.8662 17.548L24.8265 17.5877L24.7867 17.6275L24.7471 17.6672L24.7074 17.7068L24.6678 17.7464L24.6282 17.786L24.5886 17.8256L24.5491 17.8651L24.5096 17.9046L24.4702 17.944L24.4307 17.9835L24.3914 18.0229L24.352 18.0622L24.3127 18.1016L24.2734 18.1409L24.2341 18.1801L24.1948 18.2194L24.1716 18.2426C24.6951 19.033 25 19.9809 25 21C25 22.0191 24.6951 22.967 24.1716 23.7574L25.6064 25.1922ZM22.7574 25.1716L24.1922 26.6064C23.0236 27.4816 21.5723 28 20 28C18.4277 28 16.9764 27.4816 15.8078 26.6064L15.826 26.5882L15.8665 26.5477L15.9069 26.5073L15.9472 26.467L15.9875 26.4267L16.0278 26.3864L16.0681 26.3461L16.1083 26.3059L16.1484 26.2658L16.1885 26.2257L16.2286 26.1856L16.2687 26.1455L16.3087 26.1055L16.3487 26.0655L16.3886 26.0256L16.4285 25.9857L16.4684 25.9458L16.5082 25.906L16.548 25.8662L16.5877 25.8265L16.6275 25.7867L16.6672 25.747L16.7068 25.7074L16.7464 25.6678L16.786 25.6282L16.8256 25.5886L16.8651 25.5491L16.9046 25.5096L16.944 25.4702L16.9835 25.4307L17.0229 25.3913L17.0622 25.352L17.1016 25.3127L17.1409 25.2734L17.1801 25.2341L17.2194 25.1948L17.2426 25.1716C18.033 25.6951 18.9809 26 20 26C21.0191 26 21.967 25.6951 22.7574 25.1716ZM22.7076 22.2934C22.895 21.9018 23 21.4631 23 21C23 20.5369 22.895 20.0982 22.7076 19.7066L22.6844 19.7298L22.6461 19.7681L22.6078 19.8064L22.5695 19.8447L22.5312 19.883L22.493 19.9212L22.4548 19.9594L22.4165 19.9977L22.3783 20.0359L22.3402 20.0741L22.302 20.1122L22.2638 20.1504L22.2257 20.1885L22.1876 20.2267L22.1494 20.2648L22.1113 20.3029L22.0732 20.341L22.0352 20.3791L21.9971 20.4171L21.959 20.4552L21.921 20.4932L21.8829 20.5313L21.8449 20.5693L21.8069 20.6073L21.7689 20.6453L21.7309 20.6833L21.6929 20.7213L21.6549 20.7593L21.6169 20.7973L21.579 20.8353L21.541 20.8732L21.503 20.9112L21.4651 20.9491L21.4272 20.9871L21.4142 21L22.7076 22.2934ZM20 22.4142L21.2934 23.7076C20.9018 23.895 20.4631 24 20 24C19.5369 24 19.0982 23.895 18.7066 23.7076L18.7298 23.6844L18.7681 23.6461L18.8064 23.6078L18.8447 23.5695L18.883 23.5312L18.9212 23.493L18.9595 23.4548L18.9977 23.4165L19.0359 23.3783L19.0741 23.3402L19.1122 23.302L19.1504 23.2638L19.1885 23.2257L19.2267 23.1876L19.2648 23.1494L19.3029 23.1113L19.341 23.0732L19.3791 23.0352L19.4171 22.9971L19.4552 22.959L19.4932 22.921L19.5313 22.8829L19.5693 22.8449L19.6073 22.8069L19.6453 22.7689L19.6833 22.7309L19.7213 22.6929L19.7593 22.6549L19.7973 22.6169L19.8353 22.579L19.8732 22.541L19.9112 22.503L19.9491 22.4651L19.9871 22.4272L20 22.4142ZM20 19.5858L20.0129 19.5728L20.0509 19.5349L20.0888 19.497L20.1268 19.459L20.1647 19.421L20.2027 19.3831L20.2407 19.3451L20.2787 19.3071L20.3167 19.2691L20.3547 19.2311L20.3927 19.1931L20.4307 19.1551L20.4687 19.1171L20.5068 19.079L20.5448 19.041L20.5829 19.0029L20.6209 18.9648L20.659 18.9268L20.6971 18.8887L20.7352 18.8506L20.7733 18.8124L20.8115 18.7743L20.8496 18.7362L20.8878 18.698L20.9259 18.6598L20.9641 18.6217L21.0023 18.5835L21.0405 18.5452L21.0788 18.507L21.117 18.4688L21.1553 18.4305L21.1936 18.3922L21.2319 18.3539L21.2702 18.3156L21.2934 18.2924C20.9018 18.105 20.4631 18 20 18C19.5369 18 19.0982 18.105 18.7066 18.2924L20 19.5858ZM17.2924 19.7066L18.5858 21L18.5728 21.0129L18.5349 21.0509L18.497 21.0888L18.459 21.1268L18.421 21.1647L18.3831 21.2027L18.3451 21.2407L18.3071 21.2787L18.2691 21.3167L18.2311 21.3547L18.1931 21.3927L18.1551 21.4307L18.1171 21.4687L18.079 21.5068L18.041 21.5448L18.0029 21.5829L17.9648 21.6209L17.9268 21.659L17.8887 21.6971L17.8506 21.7352L17.8124 21.7733L17.7743 21.8115L17.7362 21.8496L17.698 21.8878L17.6598 21.9259L17.6217 21.9641L17.5835 22.0023L17.5452 22.0405L17.507 22.0788L17.4688 22.117L17.4305 22.1553L17.3922 22.1936L17.3539 22.2318L17.3156 22.2702L17.2924 22.2934C17.105 21.9018 17 21.4631 17 21C17 20.5369 17.105 20.0982 17.2924 19.7066ZM17.2426 16.8284C18.033 16.3049 18.9809 16 20 16C21.0191 16 21.967 16.3049 22.7574 16.8284L22.7806 16.8051L22.8199 16.7659L22.8591 16.7266L22.8984 16.6873L22.9378 16.648L22.9771 16.6086L23.0165 16.5693L23.056 16.5298L23.0954 16.4904L23.1349 16.4509L23.1744 16.4114L23.214 16.3718L23.2536 16.3322L23.2932 16.2926L23.3328 16.2529L23.3725 16.2133L23.4123 16.1735L23.452 16.1338L23.4918 16.094L23.5316 16.0542L23.5715 16.0143L23.6114 15.9744L23.6513 15.9345L23.6913 15.8945L23.7313 15.8545L23.7714 15.8144L23.8114 15.7743L23.8516 15.7342L23.8917 15.694L23.9319 15.6538L23.9722 15.6136L24.0125 15.5733L24.0528 15.533L24.0931 15.4926L24.1335 15.4522L24.174 15.4118L24.1922 15.3936C23.0236 14.5184 21.5723 14 20 14C18.4277 14 16.9764 14.5184 15.8078 15.3936L17.2426 16.8284ZM14.3936 16.8078L15.8284 18.2426C15.3049 19.033 15 19.9809 15 21C15 22.0191 15.3049 22.967 15.8284 23.7574L15.8052 23.7806L15.7659 23.8199L15.7266 23.8591L15.6873 23.8984L15.648 23.9378L15.6086 23.9771L15.5693 24.0165L15.5298 24.056L15.4904 24.0954L15.4509 24.1349L15.4114 24.1744L15.3718 24.214L15.3322 24.2536L15.2926 24.2932L15.2529 24.3328L15.2133 24.3725L15.1735 24.4122L15.1338 24.452L15.094 24.4918L15.0542 24.5316L15.0143 24.5715L14.9744 24.6114L14.9345 24.6513L14.8945 24.6913L14.8545 24.7313L14.8144 24.7714L14.7743 24.8114L14.7342 24.8516L14.694 24.8917L14.6538 24.9319L14.6136 24.9722L14.5733 25.0125L14.533 25.0528L14.4926 25.0931L14.4522 25.1335L14.4118 25.174L14.3936 25.1922C13.5184 24.0236 13 22.5723 13 21C13 19.4277 13.5184 17.9764 14.3936 16.8078ZM12.9681 15.3823C11.7365 16.922 11 18.875 11 21C11 23.125 11.7365 25.078 12.9681 26.6177L12.9261 26.6597L12.8839 26.7018L12.8417 26.7441L12.7994 26.7863L12.7571 26.8287L12.7147 26.8711L12.6723 26.9135L12.6298 26.956L12.5872 26.9986L12.5446 27.0412L12.502 27.0838L12.4592 27.1265L12.4165 27.1693L12.3736 27.2122L12.3307 27.255L12.2878 27.298L12.2448 27.341L12.2017 27.3841L12.1586 27.4272L12.1154 27.4704L12.0722 27.5136L12.0289 27.5569L11.9855 27.6002L11.9421 27.6437L11.8986 27.6871L11.8551 27.7307L11.8115 27.7743L11.7678 27.8179L11.7241 27.8617L11.6803 27.9054L11.6365 27.9493L11.5926 27.9932L11.5486 28.0372L11.5467 28.0391C9.95662 26.1316 9 23.6775 9 21C9 18.3225 9.95662 15.8684 11.5467 13.9609L12.9681 15.3823ZM25.6177 28.0319L27.0391 29.4533C25.1316 31.0434 22.6775 32 20 32C17.3225 32 14.8684 31.0434 12.9609 29.4533L12.9628 29.4514L13.0068 29.4074L13.0507 29.3635L13.0946 29.3196L13.1383 29.2759L13.1821 29.2321L13.2257 29.1885L13.2693 29.1449L13.3129 29.1014L13.3563 29.0579L13.3997 29.0145L13.4431 28.9711L13.4864 28.9278L13.5296 28.8846L13.5728 28.8414L13.6159 28.7983L13.659 28.7552L13.702 28.7122L13.745 28.6693L13.7878 28.6264L13.8307 28.5835L13.8734 28.5408L13.9162 28.498L13.9588 28.4554L14.0014 28.4128L14.044 28.3702L14.0865 28.3277L14.1289 28.2853L14.1713 28.2429L14.2137 28.2006L14.2559 28.1583L14.2982 28.116L14.3403 28.0739L14.3823 28.0319C15.922 29.2635 17.875 30 20 30C22.125 30 24.078 29.2635 25.6177 28.0319ZM15.75 4.5C16.1642 4.5 16.5 4.16421 16.5 3.75C16.5 3.33579 16.1642 3 15.75 3C15.3358 3 15 3.33579 15 3.75C15 4.16421 15.3358 4.5 15.75 4.5ZM20.75 3.75C20.75 4.16421 20.4142 4.5 20 4.5C19.5858 4.5 19.25 4.16421 19.25 3.75C19.25 3.33579 19.5858 3 20 3C20.4142 3 20.75 3.33579 20.75 3.75ZM24.25 4.5C24.6642 4.5 25 4.16421 25 3.75C25 3.33579 24.6642 3 24.25 3C23.8358 3 23.5 3.33579 23.5 3.75C23.5 4.16421 23.8358 4.5 24.25 4.5Z"
									fill="#5820F6"
								></path>
							</svg>
							<h4 className="turnkey-begin__item-heading">
								Buy equipment for mining
							</h4>
							<p className="turnkey-begin__item-description">
								Depending on your budget, you need to choose the most efficient
								equipment so that it pays off as quickly as possible and starts
								making a profit.
							</p>
						</li>
						<li className="turnkey-begin__item">
							<svg
								width="38"
								height="36"
								viewBox="0 0 38 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0 1C0 0.447715 0.447715 0 1 0H25C25.5523 0 26 0.447715 26 1V4H30C30.5523 4 31 4.44772 31 5V8H34C35.1046 8 36 8.89543 36 10V17V19.382C35.379 18.9489 34.709 18.5811 34 18.2888V18H33.2108C32.1988 17.6753 31.1199 17.5 30 17.5C28.8801 17.5 27.8012 17.6753 26.7892 18H2V24H20.2888C20.0259 24.6375 19.824 25.3066 19.6902 26H2V32H20.2888C20.5811 32.709 20.9489 33.379 21.382 34H2C0.895433 34 0 33.1046 0 32V25V17V10C0 8.89543 0.89543 8 2 8H29V6H25H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H24V2H1C0.447715 2 0 1.55228 0 1ZM22.5 20V20.6515C21.8748 21.2895 21.3304 22.0069 20.8833 22.7872C20.6499 22.6042 20.5 22.3196 20.5 22V20C20.5 19.4477 20.9477 19 21.5 19C22.0523 19 22.5 19.4477 22.5 20ZM34 10V16H2V10H30H34ZM5 12C5 11.4477 4.55228 11 4 11C3.44772 11 3 11.4477 3 12V14C3 14.5523 3.44772 15 4 15C4.55228 15 5 14.5523 5 14V12ZM7.5 11C8.05229 11 8.5 11.4477 8.5 12V14C8.5 14.5523 8.05229 15 7.5 15C6.94772 15 6.5 14.5523 6.5 14V12C6.5 11.4477 6.94772 11 7.5 11ZM15.5 12C15.5 11.4477 15.0523 11 14.5 11C13.9477 11 13.5 11.4477 13.5 12V14C13.5 14.5523 13.9477 15 14.5 15C15.0523 15 15.5 14.5523 15.5 14V12ZM18 11C18.5523 11 19 11.4477 19 12V14C19 14.5523 18.5523 15 18 15C17.4477 15 17 14.5523 17 14V12C17 11.4477 17.4477 11 18 11ZM22.5 12C22.5 11.4477 22.0523 11 21.5 11C20.9477 11 20.5 11.4477 20.5 12V14C20.5 14.5523 20.9477 15 21.5 15C22.0523 15 22.5 14.5523 22.5 14V12ZM25 11C25.5523 11 26 11.4477 26 12V14C26 14.5523 25.5523 15 25 15C24.4477 15 24 14.5523 24 14V12C24 11.4477 24.4477 11 25 11ZM29.5 12C29.5 11.4477 29.0523 11 28.5 11C27.9477 11 27.5 11.4477 27.5 12V14C27.5 14.5523 27.9477 15 28.5 15C29.0523 15 29.5 14.5523 29.5 14V12ZM32 11C32.5523 11 33 11.4477 33 12V14C33 14.5523 32.5523 15 32 15C31.4477 15 31 14.5523 31 14V12C31 11.4477 31.4477 11 32 11ZM12 12C12 11.4477 11.5523 11 11 11C10.4477 11 10 11.4477 10 12V14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14V12ZM4 19C4.55228 19 5 19.4477 5 20V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V20C3 19.4477 3.44772 19 4 19ZM8.5 20C8.5 19.4477 8.05229 19 7.5 19C6.94772 19 6.5 19.4477 6.5 20V22C6.5 22.5523 6.94772 23 7.5 23C8.05229 23 8.5 22.5523 8.5 22V20ZM14.5 19C15.0523 19 15.5 19.4477 15.5 20V22C15.5 22.5523 15.0523 23 14.5 23C13.9477 23 13.5 22.5523 13.5 22V20C13.5 19.4477 13.9477 19 14.5 19ZM19 20C19 19.4477 18.5523 19 18 19C17.4477 19 17 19.4477 17 20V22C17 22.5523 17.4477 23 18 23C18.5523 23 19 22.5523 19 22V20ZM11 19C11.5523 19 12 19.4477 12 20V22C12 22.5523 11.5523 23 11 23C10.4477 23 10 22.5523 10 22V20C10 19.4477 10.4477 19 11 19ZM5 28C5 27.4477 4.55228 27 4 27C3.44772 27 3 27.4477 3 28V30C3 30.5523 3.44772 31 4 31C4.55228 31 5 30.5523 5 30V28ZM7.5 27C8.05229 27 8.5 27.4477 8.5 28V30C8.5 30.5523 8.05229 31 7.5 31C6.94772 31 6.5 30.5523 6.5 30V28C6.5 27.4477 6.94772 27 7.5 27ZM15.5 28C15.5 27.4477 15.0523 27 14.5 27C13.9477 27 13.5 27.4477 13.5 28V30C13.5 30.5523 13.9477 31 14.5 31C15.0523 31 15.5 30.5523 15.5 30V28ZM18 27C18.5523 27 19 27.4477 19 28V30C19 30.5523 18.5523 31 18 31C17.4477 31 17 30.5523 17 30V28C17 27.4477 17.4477 27 18 27ZM12 28C12 27.4477 11.5523 27 11 27C10.4477 27 10 27.4477 10 28V30C10 30.5523 10.4477 31 11 31C11.5523 31 12 30.5523 12 30V28ZM28.0278 25.7393C26.8226 25.419 25.536 25.4847 24.3642 25.9366C24.8006 24.745 25.6041 23.7305 26.6377 23.0299C27.6851 23.4243 28.4799 24.2334 28.8824 25.2151C28.5676 25.3415 28.2792 25.5198 28.0278 25.7393ZM27.0298 27.5757C25.9784 27.4333 24.8803 27.7168 24.0149 28.4264C24.106 29.7239 24.6096 30.9075 25.3955 31.8471C25.5903 30.6073 26.1764 29.4612 27.0557 28.5782C27.0191 28.3911 27 28.1978 27 28C27 27.856 27.0102 27.7143 27.0298 27.5757ZM28.1476 30.36C27.4982 31.1996 27.1946 32.293 27.3768 33.3977C28.1693 33.7835 29.0593 34 30 34C30.3512 34 30.6954 33.9698 31.03 33.9119C30.0535 33.1233 29.3537 32.0425 29.0285 30.8392C28.7068 30.7291 28.4096 30.5659 28.1476 30.36ZM31.1178 30.7848C31.5201 31.7666 32.3147 32.5757 33.3619 32.9704C34.3957 32.2698 35.1993 31.2551 35.6358 30.0634C34.4639 30.5154 33.1773 30.5812 31.972 30.2608C31.7207 30.4802 31.4324 30.6584 31.1178 30.7848ZM32.9702 28.4245C34.0215 28.5669 35.1196 28.2832 35.9851 27.5736C35.894 26.2762 35.3904 25.0926 34.6047 24.1531C34.4099 25.393 33.8238 26.5393 32.9444 27.4223C32.9809 27.6092 33 27.8024 33 28C33 28.1441 32.9898 28.2858 32.9702 28.4245ZM31.8527 25.6403C32.5021 24.8006 32.8056 23.7071 32.6232 22.6023C31.8307 22.2165 30.9407 22 30 22C29.6487 22 29.3045 22.0302 28.9698 22.0881C29.9465 22.8767 30.6465 23.9575 30.9717 25.1609C31.2935 25.271 31.5907 25.4343 31.8527 25.6403ZM30 20C25.5817 20 22 23.5817 22 28C22 32.4183 25.5817 36 30 36C34.4183 36 38 32.4183 38 28C38 23.5817 34.4183 20 30 20ZM31 28C31 28.5523 30.5523 29 30 29C29.4477 29 29 28.5523 29 28C29 27.4477 29.4477 27 30 27C30.5523 27 31 27.4477 31 28Z"
									fill="#5820F6"
								></path>
							</svg>
							<h4 className="turnkey-begin__item-heading">Place equipment</h4>
							<p className="turnkey-begin__item-description">
								Mining machines require a well-ventilated room with access to
								cheap electricity and the necessary cooling to keep the
								equipment running stably. It is also desirable to provide the
								facility with security, since the equipment is expensive.
							</p>
						</li>
						<li className="turnkey-begin__item">
							<svg
								width="44"
								height="36"
								viewBox="0 0 44 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M15.7162 2.81533C15.9936 2.87954 16.2305 3.05902 16.3675 3.30872C16.7315 3.97253 17.5465 4.2695 18.2625 3.97295C18.9782 3.67648 19.3446 2.89047 19.1329 2.16383C19.0533 1.8904 19.094 1.59598 19.2449 1.35444C19.3958 1.11289 19.6425 0.947131 19.9231 0.898737C21.3199 0.657882 22.724 0.666341 24.0782 0.900233C24.3587 0.948683 24.6052 1.11439 24.7561 1.35582C24.9069 1.59725 24.9477 1.89151 24.8682 2.16486C24.657 2.89133 25.0233 3.67695 25.7388 3.97334C26.4543 4.26971 27.2688 3.97329 27.6331 3.31035C27.7703 3.06088 28.0072 2.88167 28.2846 2.81764C28.5619 2.75361 28.8535 2.81082 29.0861 2.97495C30.2091 3.76742 31.208 4.75464 32.0253 5.91306C32.1894 6.14567 32.2466 6.4372 32.1826 6.71458C32.1185 6.99196 31.9393 7.22889 31.6898 7.36597C31.0267 7.7303 30.7302 8.54484 31.0266 9.26039C31.323 9.97593 32.1086 10.3423 32.8351 10.131C33.1084 10.0515 33.4027 10.0923 33.6441 10.2432C33.8856 10.394 34.0513 10.6406 34.0997 10.9211C34.3409 12.3184 34.3326 13.7229 34.0988 15.0776C34.0504 15.3581 33.8847 15.6047 33.6432 15.7555C33.4018 15.9064 33.1075 15.9472 32.8342 15.8677C32.1077 15.6565 31.3221 16.0228 31.0257 16.7383C30.7294 17.4539 31.0258 18.2684 31.6889 18.6328C31.9384 18.7698 32.1176 19.0068 32.1817 19.2841C32.2458 19.5615 32.1886 19.853 32.0245 20.0857C31.2324 21.2084 30.2456 22.207 29.0878 23.0243C28.8551 23.1885 28.5635 23.2457 28.286 23.1816C28.0085 23.1175 27.7715 22.9381 27.6345 22.6884C27.2703 22.025 26.4555 21.7282 25.7397 22.0247C25.0238 22.3212 24.6575 23.1075 24.8695 23.8344C24.9492 24.1078 24.9086 24.4022 24.7578 24.6438C24.607 24.8854 24.3604 25.0513 24.0798 25.0998C22.6822 25.3413 21.2772 25.3332 19.9222 25.0994C19.6416 25.0509 19.3949 24.8852 19.2441 24.6436C19.0932 24.402 19.0525 24.1076 19.1322 23.8342C19.3439 23.1075 18.9776 22.3214 18.2618 22.0249C17.5459 21.7284 16.7309 22.0253 16.3669 22.689C16.2299 22.9387 15.993 23.1182 15.7155 23.1823C15.4381 23.2465 15.1464 23.1894 14.9137 23.0252C13.7903 22.2327 12.7911 21.2453 11.9735 20.0867C11.8092 19.8539 11.7521 19.5621 11.8164 19.2845C11.8807 19.0069 12.0604 18.7699 12.3103 18.6331C12.9747 18.2692 13.272 17.4538 12.9753 16.7376C12.6787 16.0213 11.8918 15.655 11.1647 15.8676C10.8912 15.9475 10.5966 15.907 10.3549 15.7562C10.1131 15.6054 9.94716 15.3587 9.89869 15.0779C9.65745 13.6803 9.66582 12.2753 9.89987 10.9204C9.94835 10.6397 10.1142 10.3931 10.3558 10.2423C10.5974 10.0915 10.8918 10.0509 11.1653 10.1306C11.8921 10.3426 12.6784 9.97625 12.9749 9.26032C13.2714 8.54449 12.9746 7.72959 12.311 7.36548C12.0613 7.22848 11.8819 6.99151 11.8177 6.71403C11.7535 6.43654 11.8108 6.14487 11.975 5.91218C12.7677 4.78884 13.7554 3.78976 14.9143 2.97238C15.147 2.80823 15.4387 2.75111 15.7162 2.81533ZM14.1809 6.3285C15.0626 7.3017 15.3586 8.73181 14.8227 10.0257C14.2866 11.3198 13.0657 12.1218 11.7538 12.1862C11.7107 12.7236 11.7098 13.267 11.7531 13.8116C13.0654 13.8756 14.2869 14.6777 14.8231 15.9722C15.3593 17.2667 15.0628 18.6976 14.1801 19.6708C14.5345 20.0864 14.9193 20.4699 15.3296 20.8192C16.3028 19.9373 17.7331 19.6411 19.0272 20.1772C20.321 20.7131 21.123 21.9336 21.1877 23.2452C21.7253 23.2882 22.2689 23.289 22.8138 23.2456C22.8783 21.9337 23.6803 20.7129 24.9744 20.1769C26.268 19.6411 27.6979 19.9369 28.671 20.8182C29.0864 20.4639 29.4697 20.0793 29.8188 19.6692C28.9378 18.696 28.6422 17.2664 29.178 15.973C29.7137 14.6796 30.9336 13.8777 32.2447 13.8125C32.2878 13.2749 32.2887 12.7312 32.2453 12.1862C30.9343 12.1209 29.7146 11.3191 29.1788 10.0258C28.6431 8.73242 28.9386 7.30297 29.8195 6.32979C29.4649 5.91387 29.08 5.53011 28.6694 5.1805C27.6962 6.06131 26.2668 6.35681 24.9735 5.8211C23.68 5.28533 22.8781 4.0654 22.813 2.75426C22.2759 2.71112 21.7327 2.71017 21.1883 2.75338C21.1234 4.0647 20.3215 5.28487 19.0278 5.82071C17.7338 6.35672 16.3035 6.06058 15.3303 5.17862C14.9143 5.53311 14.5306 5.918 14.1809 6.3285ZM20.9461 10.4502C19.5387 11.0332 18.8703 12.6467 19.4533 14.0542C20.0363 15.4617 21.6498 16.13 23.0573 15.547C24.4648 14.9641 25.1332 13.3505 24.5502 11.943C23.9672 10.5355 22.3536 9.86717 20.9461 10.4502ZM17.6055 14.8196C16.5998 12.3916 17.7528 9.6081 20.1807 8.60241C22.6087 7.59671 25.3922 8.74969 26.3979 11.1776C27.4036 13.6056 26.2506 16.3891 23.8227 17.3948C21.3947 18.4005 18.6112 17.2475 17.6055 14.8196ZM5.49999 6.49997C4.94771 6.49997 4.49999 6.94768 4.49999 7.49997V29H1C0.639728 29 0.307306 29.1938 0.1298 29.5073C-0.0477054 29.8208 -0.0428512 30.2056 0.142507 30.5145L1.9773 33.5725C2.88091 35.0785 4.50845 36 6.26476 36H37.7352C39.4916 36 41.1191 35.0785 42.0227 33.5725L43.8575 30.5145C44.0429 30.2056 44.0477 29.8208 43.8702 29.5073C43.6927 29.1938 43.3603 29 43 29H39.5V7.49997C39.5 6.94768 39.0523 6.49997 38.5 6.49997H35C34.4477 6.49997 34 6.94768 34 7.49997C34 8.05225 34.4477 8.49997 35 8.49997H37.5V29H6.49999V8.49997H8.99999C9.55228 8.49997 9.99999 8.05225 9.99999 7.49997C9.99999 6.94768 9.55228 6.49997 8.99999 6.49997H5.49999ZM3.69228 32.5435L2.76619 31H41.2338L40.3077 32.5435C39.7655 33.4471 38.789 34 37.7352 34H6.26476C5.21097 34 4.23445 33.4471 3.69228 32.5435Z"
									fill="#5820F6"
								></path>
							</svg>
							<h4 className="turnkey-begin__item-heading">
								Configure the equipment
							</h4>
							<p className="turnkey-begin__item-description">
								It's not enough to just connect the machines to the network. It
								is also necessary to choose a profitable pool, install the
								firmware to increase profits, and configure the machines
								themselves to bring in as much profit as possible.
							</p>
						</li>
						<li className="turnkey-begin__item">
							<svg
								width="36"
								height="35"
								viewBox="0 0 36 35"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M16.0906 9.95089L18.1167 11.977L16.7025 13.3913L14.2288 10.9176C13.9435 10.6322 13.8576 10.2033 14.0112 9.83003C14.8313 7.83656 14.4301 5.46196 12.8133 3.84524C11.6063 2.63818 9.97675 2.10866 8.3988 2.25914L11.0456 4.9059C11.4361 5.29643 11.4361 5.92959 11.0456 6.32011L7.51003 9.85565C7.11951 10.2462 6.48634 10.2462 6.09582 9.85565L3.44905 7.20888C3.29858 8.78683 3.8281 10.4164 5.03516 11.6234C6.65188 13.2401 9.02648 13.6414 11.0199 12.8212C11.3932 12.6677 11.8221 12.7535 12.1075 13.0389L13.167 14.0984L11.7528 15.5126L11.1408 14.9006C8.57099 15.6932 5.65702 15.0737 3.62094 13.0376C1.4137 10.8304 0.87127 7.59144 1.98775 4.87768C2.11498 4.56843 2.38837 4.34324 2.71627 4.2776C3.04418 4.21197 3.38318 4.31459 3.61964 4.55105L6.80292 7.73433L8.92424 5.61301L5.74096 2.42973C5.5045 2.19327 5.40189 1.85426 5.46752 1.52636C5.53315 1.19846 5.75834 0.925061 6.0676 0.797829C8.78136 -0.318647 12.0203 0.223785 14.2275 2.43103C16.2636 4.4671 16.8831 7.38107 16.0906 9.95089ZM23.7736 17.6339L22.3594 19.0481L24.8329 21.5217C25.1183 21.8071 25.5473 21.8929 25.9205 21.7394C27.914 20.9192 30.2886 21.3205 31.9053 22.9372C33.1124 24.1443 33.6419 25.7738 33.4914 27.3517L30.8446 24.705C30.4541 24.3144 29.8209 24.3144 29.4304 24.705L25.8949 28.2405C25.5044 28.631 25.5044 29.2642 25.8949 29.6547L28.5417 32.3015C26.9637 32.452 25.3342 31.9224 24.1271 30.7154C22.5104 29.0987 22.1092 26.7241 22.9293 24.7306C23.0828 24.3574 22.997 23.9284 22.7116 23.643L21.6522 22.5837L20.238 23.9979L20.8499 24.6097C20.0574 27.1795 20.6768 30.0935 22.7129 32.1296C24.9201 34.3368 28.1591 34.8793 30.8729 33.7628C31.1821 33.6356 31.4073 33.3622 31.4729 33.0343C31.5386 32.7064 31.436 32.3674 31.1995 32.1309L28.0162 28.9476L30.1375 26.8263L33.3208 30.0096C33.5573 30.246 33.8963 30.3486 34.2242 30.283C34.5521 30.2174 34.8255 29.9922 34.9527 29.6829C36.0692 26.9692 35.5267 23.7302 33.3195 21.523C31.2834 19.4869 28.3695 18.8675 25.7996 19.66L23.7736 17.6339ZM31.7213 0.526793C32.1167 0.275161 32.6338 0.331928 32.9652 0.663348L35.0866 2.78467C35.418 3.11609 35.4747 3.63323 35.2231 4.02865L32.7482 7.91774C32.6402 8.08751 32.4835 8.22074 32.2985 8.30001L30.0006 9.28481L19.8838 19.4017L20.9444 20.4623C21.3349 20.8529 21.3349 21.486 20.9444 21.8766L8.2165 34.6045C7.82598 34.995 7.19281 34.995 6.80229 34.6045L1.14543 28.9476C0.754909 28.5571 0.754909 27.9239 1.14543 27.5334L13.8734 14.8055C14.2639 14.415 14.897 14.415 15.2876 14.8055L16.3482 15.8661L26.4651 5.74927L27.4499 3.45141C27.5292 3.26645 27.6624 3.1097 27.8322 3.00167L31.7213 0.526793ZM28.7226 7.73442L18.4695 17.9875L17.7624 17.2804L28.0155 7.02731C28.1054 6.93735 28.1774 6.83105 28.2275 6.71412L29.1665 4.52316L32.1182 2.64478L33.1051 3.63166L31.2267 6.58339L29.0358 7.52238C28.9189 7.57249 28.8126 7.64446 28.7226 7.73442ZM17.7624 20.1088L15.6411 17.9875L14.5805 16.9268L3.26675 28.2405L7.50939 32.4832L18.8231 21.1694L17.7624 20.1088ZM15.6411 21.523C16.0316 21.1325 16.0316 20.4993 15.6411 20.1088C15.2506 19.7183 14.6174 19.7183 14.2269 20.1088L6.44873 27.887C6.05821 28.2775 6.05821 28.9106 6.44873 29.3012C6.83926 29.6917 7.47242 29.6917 7.86295 29.3012L15.6411 21.523Z"
									fill="#5820F6"
								></path>
							</svg>
							<h4 className="turnkey-begin__item-heading">
								Ensure uninterrupted operation
							</h4>
							<p className="turnkey-begin__item-description">
								Mining machines are high-tech equipment. They require constant
								supervision: cleaning from dust, monitoring of indicators,
								timely repair and troubleshooting. It is important for the
								equipment to work continuously, so that you can make a profit
								all the time.
							</p>
						</li>
					</ul>
				</div>
			</section>
			<section>
				<div className="wrapper">
					<div className="turnkey-info">
						<h2 className="turnkey-begin__heading">Turnkey Mining</h2>
						<ul className="turnkey-info__list">
							<li className="turnkey-info__item">
								<Image
									src="/image/turnkey-mining/item1.png"
									alt=""
									className="tunkey-info__img"
									width={200}
									height={260}
								/>
								<div className="turnkey-info__block">
									<a href="#">
										<span className="tunkey-info__item-heading">
											Catalog with all devices
										</span>
										<p className="turnkey-info__item-description">
											In our company you can buy absolutely any ASIC-mainers in
											the quantity you need. Our managers will be happy to tell
											you which equipment is suitable for your needs and goals,
											calculate the cost and payback period.
										</p>
									</a>
								</div>
							</li>
							<li className="turnkey-info__item">
								<Image
									src="/image/turnkey-mining/item2.png"
									alt=""
									className="tunkey-info__img"
									width={200}
									height={260}
								/>
								<div className="turnkey-info__block">
									<a href="#">
										<span className="tunkey-info__item-heading">
											Own data center
										</span>
										<p className="turnkey-info__item-description">
											The equipment can be housed in our own data center, which
											was designed and built specifically for our clients'
											needs. Thanks to the arrangement with local companies, we
											get cheap electricity.
										</p>
									</a>
								</div>
							</li>
							<li className="turnkey-info__item">
								<Image
									src="/image/turnkey-mining/item3.png"
									alt=""
									className="tunkey-info__img"
									width={200}
									height={260}
								/>
								<div className="turnkey-info__block">
									<a href="#">
										<span className="tunkey-info__item-heading">
											Independently connect all equipment to the mining pool
										</span>
										<p className="turnkey-info__item-description">
											As a rule, we use ViaBTC for work - it supports most of
											the cryptocurrencies, there is hashrate control, hourly
											income sending, reliable data and auto withdrawal without
											commission.
										</p>
									</a>
								</div>
							</li>
							<li className="turnkey-info__item">
								<Image
									src="/image/turnkey-mining/item4.png"
									alt=""
									className="tunkey-info__img"
									width={200}
									height={260}
								/>
								<div className="turnkey-info__block">
									<a href="#">
										<span className="tunkey-info__item-heading">
											Monitoring 24/7
										</span>
										<p className="turnkey-info__item-description">
											Thanks to the service, our customers can monitor the
											performance of their equipment around the clock. Technical
											support is also provided around the clock to ensure that
											equipment is not idle.
										</p>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="investment-we">
				<div className="wrapper">
					<h3 className="investment-we__heading">Why are we</h3>
					<div className="investment-we__description-pos">
						<p className="investment-we__description">
							Over 7 years we have helped tens of thousands of our clients to
							start earning money on cryptocurrency mining. Our infrastructure
							allows us to place the brought equipment in our own data center,
							monitor its condition, maintain and upgrade it. And highly
							qualified technical support specialists are available 24 hours a
							day and 7 days a week to help at the first request.
						</p>
					</div>
					<ul className="investment-we__list">
						<li className="investment-we__item">
							<span className="investment-we__number"> 1000</span>
							<p className="investment-we__list-text">
								Successful mining projects have been launched by our company.
							</p>
						</li>
						<li className="investment-we__item">
							<span className="investment-we__number">$40 million</span>
							<p className="investment-we__list-text">
								Earned by our clients from mining in 2022
							</p>
						</li>
						<li className="investment-we__item">
							<span className="investment-we__number">10 months</span>
							<p className="investment-we__list-text">
								Average payback period of our customers' investments{' '}
							</p>
						</li>
					</ul>
				</div>
			</section>
			<section className="investment-step">
				<div className="wrapper">
					<div className="investment-step__content">
						<Image
							src="/image/investment/process.png"
							alt=""
							className="investment-step__image"
							width={530}
							height={530}
						/>
						<div className="investment-step__right">
							<h3 className="investment-step__heading">
								How will the process be structured
							</h3>
							<ul className="investment-step__list">
								<li className="investment-step__item">
									<span className="investment-step__number">1</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Matching equipment to your needs and budget
										</h5>
										<p className="investment-step__item-description">
											Depending on your goals and budget, our specialists will
											advise you which equipment is ideal for you.
										</p>
									</div>
								</li>
								<li className="investment-step__item">
									<span className="investment-step__number">2</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Signing the contract
										</h5>
										<p className="investment-step__item-description">
											We work openly and for the safety of our customers we have
											a contract.
										</p>
									</div>
								</li>
								<li className="investment-step__item">
									<span className="investment-step__number">3</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Equipment insurance
										</h5>
										<p className="investment-step__item-description">
											All the equipment we bring is fully insured. Therefore,
											your funds will be safe.
										</p>
									</div>
								</li>
								<li className="investment-step__item">
									<span className="investment-step__number">4</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Accommodation in the data center
										</h5>
										<p className="investment-step__item-description">
											The company's own data center allows you to place devices
											in a special-equipped room with round-the-clock security,
											cheap power and specialists who will monitor the devices
											around the clock.
										</p>
									</div>
								</li>
								<li className="investment-step__item">
									<span className="investment-step__number">5</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Connecting to the pool
										</h5>
										<p className="investment-step__item-description">
											Our specialists will connect your equipment to the mining
											pool, set up all the processes and do all the technical
											work.
										</p>
									</div>
								</li>
								<li className="investment-step__item">
									<span className="investment-step__number">6</span>
									<div className="investment-step__text">
										<h5 className="investment-step__item-heading">
											Providing technical support
										</h5>
										<p className="investment-step__item-description">
											In case of any malfunctions or questions during the
											operation of the equipment, our 24-hour technical support
											service will help you at any time.
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default TurnkeyMining