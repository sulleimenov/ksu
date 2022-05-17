import { $ } from 'jquery'
import { gsap, Power2 } from 'gsap'
import { Fancybox } from "@fancyapps/ui"
import { Swiper, Pagination, Navigation, Autoplay } from 'swiper'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import mixitup from 'mixitup'

window.jQuery = $
window.$ = $

Swiper.use([Navigation, Pagination, Autoplay])

//import vendor plugin example (not module)
// require('~/app/libs/owl-carousel/owl.carousel.min.js')

document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger)
	gsap.config({ nullTargetWarn: false })
	// Анимация блоков на главной странице
	function navigation() {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.content-nav',
			},
		})
		tl.from('.content-nav .content-nav__item', {
			y: 100,
			opacity: 0,
			duration: 0.5,
		})

		const secMenuTitle = gsap.timeline({
			scrollTrigger: {
				trigger: '.sec-menu__title',
			},
		})
		const secMenuTitleL = gsap.timeline({
			scrollTrigger: {
				trigger: '.sec-menu__title-left',
			},
		})
		const secMenuTitleR = gsap.timeline({
			scrollTrigger: {
				trigger: '.sec-menu__title-right',
			},
		})
		secMenuTitle.from('.sec-menu__title', { y: 100, opacity: 0, duration: 0.5 })
		secMenuTitleL.from('.sec-menu__title-left', {
			x: -100,
			opacity: 0,
			duration: 0.5,
		})
		secMenuTitleR.from('.sec-menu__title-right', {
			x: 100,
			opacity: 0,
			duration: 0.5,
		})

		const infographic = gsap.timeline({
			scrollTrigger: {
				trigger: '.infographic',
			},
		})
		infographic.from('.infographic__item', {
			y: 100,
			opacity: 0,
			duration: 0.5,
		})
	}

	const mixitupContainer = document?.querySelector('.news__body')
	let mixer = mixitup(mixitupContainer, {
		"animation": {
			"duration": 100,
			"nudge": false,
			"reverseOut": false,
			"effects": ""
		}
	});

	const tourBtn = document?.querySelectorAll('[data-role="tab"]');
  const tourVisualBtn = document?.querySelectorAll(".tour__visual-item");

	tourBtn.forEach((tab) => {
		tab.addEventListener("click", () => {
			const target = document.querySelector(tab.dataset.target);
			console.log(target);
			tourVisualBtn.forEach((tc) => {
				tc.classList.remove("active");
			});
			target.classList.add("active");

			tourBtn.forEach((t) => {
				t.classList.remove("active");
			});
			tab.classList.add("active");
		});
	});

	// Скрытие анимации popup call center
	function popupCallCenter() {
		setTimeout(() => {
			document.querySelector('.popup-call').classList.remove('show')
		}, 20000);
	}

	// Дис совет - показ документов
	function dissertationBoardDocs() {
		const buttonDocs = document.querySelectorAll('.announcements-dissertation__button-docs');
		const buttonDocsContent = document.querySelectorAll('.announcements-dissertation__docs');
		
		buttonDocs.forEach(item => {
			item.addEventListener('click', (event) => {
				let prevElement = item.previousElementSibling
				let prev = prevElement.previousElementSibling
				if (!prev.classList.contains('show')) {
					let docsHeight = prev.clientHeight
				}
				
				prev.classList.toggle('show')

				setTimeout(() => {
					prev.style.height = docsHeight + 'px'
					prev.style.display = ''
				}, 1)
			})
		});
	}

	const swiperAbout = new Swiper('.swiper-about', {
		loop: false,
		preloadImages: false,
		lazy: true,

		pagination: {
			el: '.swiper-pagination',
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	const swiperOffer = new Swiper('.swiper-offer', {
		loop: false,
		preloadImages: false,
		autoHeight: true,
		allowTouchMove: false,
		speed: 500,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},
		lazy: {
			loadOnTransitionStart: false,
			loadPrevNext: false,
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	
	let offerTitle = document.querySelectorAll('.offer__title')
	let offerSubTitle = document.querySelectorAll('.offer__subtitle')
	let offerButtonFirst = document.querySelectorAll('.offer__buttons-first')
	let offerButtonSecond = document.querySelectorAll('.offer__buttons-second')
	let offerButtonThree = document.querySelectorAll('.offer__buttons-three')

	swiperOffer.on('slideChange', function () {
		gsap.to(offerTitle, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			onComplete: function () {
				gsap.to(offerTitle, .1, {
					force3D: true,
					y: 10
				})
			}
		})
		gsap.to(offerTitle, .2, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: .3
		})

		gsap.to(offerSubTitle, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeOut,
			onComplete: function () {
				gsap.to(offerSubTitle, .1, {
					force3D: true,
					y: 10
				})
			}
		})
		gsap.to(offerSubTitle, .2, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: 1
		})

		gsap.to(offerButtonFirst, 0, {
			force3D: true,
			y: 20,
			opacity: 0,
		})
		gsap.to(offerButtonFirst, .4, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: .7
		})
		gsap.to(offerButtonSecond, 0, {
			force3D: true,
			y: 20,
			opacity: 0,
		})
		gsap.to(offerButtonSecond, .4, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: .8
		})
		gsap.to(offerButtonThree, 0, {
			force3D: true,
			y: 20,
			opacity: 0,
		})
		gsap.to(offerButtonThree, .4, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeOut,
			delay: .9
		})
	})

	function accardions() {
		const $accardions = document.querySelectorAll('.burger-content-menu__item')
		$accardions.forEach((item) => {
			item.addEventListener('click', function () {
				if (this.classList.contains('active')) {
					this.classList.remove('active')
				} else {
					$accardions.forEach((link) => {
						link.classList.remove('active')
					})
					this.classList.add('active')
				}
			})
		})
	}

	function burgerButton() {
		const $burgerBtn = document.querySelector('.header-top__burger-menu')
		const $burgerContent = document.querySelector('.burger-content')
		$burgerBtn.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active')
				$burgerContent.classList.remove('active')
			} else {
				this.classList.add('active')
				$burgerContent.classList.add('active')
			}
		})
	}

	function searchButton() {
		const searchBtn = document.querySelector('.search')
		const searchMobileBtn = document.querySelector('.header-top__nav-item--search')
		const searchContent = document.querySelector('.search-box')
		const searchInput = document.querySelector('.search-form__input')

		searchBtn.addEventListener('click', function () {
			searchContent.classList.toggle('show')
			this.toggle('search--close')
			searchInput.focus()
		})
		searchMobileBtn.addEventListener('click', function () {
			searchContent.classList.toggle('show')
			searchInput.focus()
		})
	}

	function infographics() {
		let target_block = document.querySelector('.infographic') // Ищем блок

		if (target_block.length === 0) {
			return
		}

		// запоминаем начальные значения
		let textt1 = document.querySelector('.count1').textContent
		let textt2 = document.querySelector('.count2').textContent
		let textt3 = document.querySelector('.count3').textContent
		let textt4 = document.querySelector('.count4').textContent

		let blockStatus = true

		window.addEventListener('scroll', function () {
			let targetTop = target_block.offsetTop
			let targetBottom = targetTop + target_block.offsetHeight
			console.log(target_block.offsetHeight);
			let screenTop = window.offsetTop
			let screenBottom = screenTop + window.innerHeight

			let onScreen = false
			if (screenBottom > targetTop && screenTop < targetBottom) {
				onScreen = true
			}

			if (onScreen && blockStatus) {
				blockStatus = false // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

				$({ numberValue: 0 }).animate(
					{ numberValue: textt1 },
					{
						duration: 900, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
						easing: 'linear',
						step: function (val) {
							$('.count1').html(Math.ceil(val)) // Блок, где необходимо сделать анимацию
						},
					}
				)

				$({ numberValue: 0 }).animate(
					{ numberValue: textt2 },
					{
						duration: 900, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
						easing: 'linear',
						step: function (val) {
							$('.count2').html(Math.ceil(val)) // Блок, где необходимо сделать анимацию
						},
					}
				)

				$({ numberValue: 0 }).animate(
					{ numberValue: textt3 },
					{
						duration: 900, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
						easing: 'linear',
						step: function (val) {
							$('.count3').html(Math.ceil(val)) // Блок, где необходимо сделать анимацию
						},
					}
				)

				$({ numberValue: 0 }).animate(
					{ numberValue: textt4 },
					{
						duration: 900, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
						easing: 'linear',
						step: function (val) {
							$('.count4').html(Math.ceil(val)) // Блок, где необходимо сделать анимацию
						},
					}
				)
			}
			if (!onScreen) {
				blockStatus = true
			}
		})
	}

	function accardionMain() {
		var Accordion = function (el, multiple) {
			this.el = el || {}
			this.multiple = multiple || false

			// Variables privadas
			var links = this.el.find('.link')
			// Evento
			links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
		};

		Accordion.prototype.dropdown = function (e) {
			var $el = e.data.el;
			let $this;
			let $next;
			($this = $(this)), ($next = $this.next())

			$next.slideToggle()
			$this.parent().toggleClass('open')

			if (!e.data.multiple) {
				$el.find('.submenu').not($next).slideUp().parent().removeClass('open')
			}
		};

		var accordion = new Accordion($('#accordion'), false);
	}

	function records() {
		Fancybox.bind("[data-fancybox]", {
			autoFocus: false
		});
	}

	// init

	// popupCallCenter()
	navigation()
	dissertationBoardDocs()
	accardions()
	burgerButton()
	searchButton()
	// infographics()
	accardionMain()
	records()

	$('img').parent().addClass('img-link')

	$('.header__burger').click(function () {
		$('.menu').toggleClass('active')
		$('.header__burger').toggleClass('active')
		$('body').toggleClass('lock')
	})

	$('.sidebar__list>p>a').click(function () {
		$('html, body').animate(
			{
				scrollTop: $($(this).attr('href')).offset().top + 'px',
			},
			{
				duration: 600,
				easing: 'swing',
			}
		)
		return false
	})
})
