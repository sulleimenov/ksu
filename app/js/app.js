import { $ } from 'jquery'
import { gsap, Power2 } from 'gsap'
import { Fancybox } from "@fancyapps/ui"
import { Swiper, Pagination, Navigation, Autoplay } from 'swiper'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

window.jQuery = $
window.$ = $

Swiper.use([Navigation, Pagination, Autoplay])

//import vendor plugin example (not module)
// require('~/app/libs/owl-carousel/owl.carousel.min.js')

document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger)
	gsap.config({ nullTargetWarn: false })
	console.log($);
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

		searchBtn.addEventListener('click', function (e) {
			$('.search-box').toggleClass('show')
			$(this).toggleClass('search--close')
			$('.search-form__input').focus()
		})
		searchMobileBtn.addEventListener('click', function (e) {
			$('.search-box').toggleClass('show')
			$('.search-form__input').focus()
		})
	}

	function infographics() {
		let target_block = document.querySelector('.infographic') // Ищем блок

		if (target_block.length === 0) {
			return
		}

		// запоминаем начальные значения
		var textt1 = document.querySelector('.count1').text()
		var textt2 = document.querySelector('.count2').text()
		var textt3 = document.querySelector('.count3').text()
		var textt4 = document.querySelector('.count4').text()

		var blockStatus = true

		$(window).scroll(function () {
			var targetTop = target_block.offset().top
			var targetBottom = targetTop + target_block.outerHeight()
			var screenTop = $(window).scrollTop()
			var screenBottom = screenTop + $(window).innerHeight()

			var onScreen = false
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
			
		});
	}

	// init

	// popupCallCenter()
	navigation()
	dissertationBoardDocs()
	accardions()
	burgerButton()
	searchButton()
	infographics()
	accardionMain()
	records()

	$('img').parent().addClass('img-link')

	$('.header__burger').click(function () {
		$('.menu').toggleClass('active')
		$('.header__burger').toggleClass('active')
		$('body').toggleClass('lock')
	})

	$('.sidebar-button').click(function () {
		$('.sidebar').toggleClass('sidebar--is-active')
		$('.sidebar-button').toggleClass('sidebar-button--close')
	})

	$('.header__video').click(function () {
		$('.video').addClass('video--is-active')
	})
	$('.video__close').click(function () {
		$('.video').removeClass('video--is-active')
	})
	$('.video__close--md').click(function () {
		$('.video').removeClass('video--is-active')
	})

	$('.header-nav__item_search').click(function () {
		$('.modal-search_wrapper').toggleClass('modal-search_wrapper--active')
		$('.modal-search').toggleClass('modal-search_wrapper--active')
	})

	$('.modal-search_close, .modal-search').click(function () {
		$('.modal-search_wrapper').removeClass('modal-search_wrapper--active')
		$('.modal-search').removeClass('modal-search_wrapper--active')
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
