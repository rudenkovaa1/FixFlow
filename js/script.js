	/*модальное окно*/
    const modal = document.getElementById("modal");
	const btn = document.getElementById("open__modal");
	const closeBtn = document.querySelector(".modal__close");
	console.log(modal);
	console.log(btn);
	console.log(closeBtn);

	btn.addEventListener("click", function () {
		modal.classList.add("modal_active");

		closeBtn.addEventListener("click", closeModal);

		function closeModal() {
			modal.classList.remove("modal_active");

			closeBtn.removeEventListener("click", closeModal);

			modal.removeEventListener("click", hideModal);
		}

		modal.addEventListener("click", hideModal);

		//Закрытие при клике вне зоны модального окна
		function hideModal(event) {
			if (event.target === modal) {
				closeModal();
			}
		}
	});

	/*аккордион*/

	const accordion = () => {
		const btns = document.querySelectorAll(".accordion-head");
		btns.forEach((btn) => {
			btn.addEventListener("click", function () {
				this.classList.toggle("active-style");
				//Следующий элемент
				this.nextElementSibling.classList.toggle("active-content");
				if (this.classList.contains("active-style")) {
					this.nextElementSibling.style.maxHeight =
						this.nextElementSibling.scrollHeight + 500 + "px";
				} else {
					this.nextElementSibling.style.maxHeight = "0px";
				}
			});
		});
		const blocks = document.querySelectorAll(".accordion-block");

		blocks.forEach((block) => {
		block.classList.add("animate__animated", "animate__bounceInUp");
		});
		btns.forEach((btn) => {
		btn.addEventListener("click", function () {
			if (!this.classList.contains("active-p")) {
				btns.forEach((btn) => {
					btn.classList.remove("active-p", "active-style");
					});
					this.classList.add("active-p", "active-style");
				} else {
					btns.forEach((btn) => {
						btn.classList.remove("active-p", "active-style");
					});
				}
			});
		});
	};
	accordion();

	/*фильтрация*/

	const nav = document.querySelector('.filter-nav'),
    content = document.querySelectorAll('.cont'),
    navLis = document.querySelectorAll('.li')

	function filter() {
		nav.addEventListener('click', event =>{
			const targetId = event.target.dataset.id
			const target = event.target
			
			if (target.classList.contains('id')){
				navLis.forEach(navLi => navLi.classList.remove('active'))
				target.classList.add('active')
			}

			switch(targetId){
				case 'all':
					getItems('cont')
					break
				case 'Starter':
					getItems(targetId)
					break
				case 'Premium':
					getItems(targetId)
					break    
			}
		})
	}
	filter()
	function getItems(className){
		content.forEach(item =>{
			if (item.classList.contains(className)){
				item.style.display = 'block'
			} else{
				item.style.display = 'none'
			}
		})
	}

/*табы*/
	let tab = function(){
		let tabNav = document.querySelectorAll('.item'),
			tabContent = document.querySelectorAll('.tab'),
			tabName;
		tabNav.forEach(item => {item.addEventListener('click', selectTabNav)})
		function selectTabNav(){
			tabNav.forEach(item => {
				item.classList.remove('is-active');
			});
			this.classList.add('is-active');
			tabName = this.getAttribute('data-tab-name');
			selectTabContent(tabName);
		}
		function selectTabContent(tabName){
			tabContent.forEach(item =>{
				item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
			})
		}
	}
	tab();

/*слайдер*/
	let slideIndex = 1,
    slides = document.querySelectorAll('.slider-card'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
// Принимала аргумент номер слайда, который нужно показать
function showSlides (n) {
// дополнительно делаем проверку чтобы индекс не вышел за пределы
    if (n > slides.length) {
    // Возвращаемся к первому слайду
        slideIndex = 1;
    }
    if (n < 1) {
    // Возвращаемся к последнему слайду
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
// for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
// }
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');

    }
	function plusSlides(n) {
		showSlides(slideIndex += n); 
	}
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function() {
		plusSlides(-1);
	});

	next.addEventListener('click', function() {
		plusSlides(1);
	});
	//Создаем событие клика на родителя, используя делегирование событий
	dotsWrap.addEventListener('click', function(event) {
	// перебираем все dot и узнаем на какую именно кликнули
		for (let i = 0; i < dots.length + 1; i++) {
		// проверяем элемент на соответствие и узнаем номер точки
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});

/*бургер меню*/
	document.getElementById("burger").addEventListener('click', function(){
		document.querySelector("header").classList.toggle("open")
	})