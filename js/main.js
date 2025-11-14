/* burger menu during adaptation */
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__list');
const btn = document.querySelector('.header__box-buttons');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	btn.classList.toggle('active');
});

/*  */
const cardsArea = document.querySelector('.trades-scroll-container');
const range = document.getElementById('trackRange');
const info = document.getElementById('trackInfo');

function updateRangeLimits() {
	const maxScroll = Math.max(0, cardsArea.scrollWidth - cardsArea.clientWidth);
	range.dataset.maxScroll = maxScroll;
	range.disabled = maxScroll === 0;
	setRangeFromScroll();
}

function setRangeFromScroll() {
	const maxScroll = Number(range.dataset.maxScroll || 0);
	const pct = maxScroll ? (cardsArea.scrollLeft / maxScroll) * 100 : 0;
	range.value = pct;
	info.textContent = Math.round(pct) + '%';
	range.style.background = `linear-gradient(90deg, var(--color-accent-1) ${pct}%, rgba(255,255,255,0.08) ${pct}%)`;
}

function onRangeInput() {
	const maxScroll = Number(range.dataset.maxScroll || 0);
	const pct = Number(range.value);
	cardsArea.scrollLeft = (pct / 100) * maxScroll;
	info.textContent = Math.round(pct) + '%';
	range.style.background = `linear-gradient(90deg, var(--color-accent-1) ${pct}%, rgba(255,255,255,0.08) ${pct}%)`;
}

cardsArea.addEventListener('scroll', setRangeFromScroll);
range.addEventListener('input', onRangeInput);
window.addEventListener('resize', updateRangeLimits);

updateRangeLimits();

/* card switching */
document.querySelectorAll('.tariffs__card').forEach((card) => {
	card.addEventListener('click', () => {
		document.querySelectorAll('.tariffs__card').forEach((c) => c.classList.remove('active'));
		card.classList.add('active');
	});
});

/* question block - switching*/
document.querySelectorAll('.question').forEach((question) => {
	const quest = question.querySelector('.question__btn');

	quest.addEventListener('click', () => {
		quest.classList.toggle('active');
	});
});
