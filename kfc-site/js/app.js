let num = 0;
let secretNav = document.querySelector('section');
let secretNavBtn = document.querySelector('#responsiveMenu');
secretNavBtn.addEventListener('mouseover', function() {
	secretNav.style.display = 'block';
	secretNavBtn.classList = 'fas fa-times';
});
secretNavBtn.addEventListener('click', function() {
	secretNav.style.display = 'none';
	secretNavBtn.classList = 'fas fa-bars';
});
document.querySelector('#cart').addEventListener('click', function() {
	document.querySelector('.bigBasket').style.display = 'block';
	document.querySelector('#closeCart').style.display = 'block';
});
document.querySelector('#closeCart').onclick = function() {
	document.querySelector('.bigBasket').style.display = 'none';
	document.querySelector('#closeCart').style.display = 'none';
};
document.getElementById('responsiveMenu').addEventListener('click', function() {
	document.getElementById('secretNav').style = 'height: 200px;';

});
let cards = document.querySelectorAll('.cards');
let counter = document.querySelector('.counter');
for (var i = 0; i < cards.length; i++) {
	cards[i].addEventListener('click', function() {
		num += 1;
		counter.innerHTML = num;
		document.querySelector('#img1').style.display = 'block';
	});
}

const App = {
	data(){
		return{
			sun: true,
			moon: false
		}
	},
	methods: {
		light: function() {
			let body = document.body;
			this.sun = true;
			this.moon = false;
			body.className = 'light';
			document.querySelector('header').style = 'background: #fff'
			document.querySelector('.logo-unit').style = 'background: #fff'
		},
		dark: function() {
			let body = document.body;
			this.sun = false;
			this.moon = true;
			body.className = 'dark';
			document.querySelector('header').style = 'background: #555'
			document.querySelector('.logo-unit').style = 'background: #555'
		}
	}
}
Vue.createApp(App).mount('#app');