Vue.component('hero-list', {
	
	template: '<div><hero v-for="hero in heroes">{{ hero.name }}</hero></div>',
	
	data() {
		return {
			heroes: [
				{ name: 'Batman', comic: 'dc' },
				{ name: 'Superman', comic: 'dc' },
				{ name: 'Wonder Woman', comic: 'dc' },
				{ name: 'Aquaman', comic: 'dc' },
				{ name: 'Flash', comic: 'dc' },
				{ name: 'Cyborg', comic: 'dc' },
				{ name: 'Captain America', comic: 'marvel' },
				{ name: 'Black Widow', comic: 'marvel' },
				{ name: 'Flacon', comic: 'marvel' },
				{ name: 'Antman', comic: 'marvel' },
				{ name: 'Hawkeye', comic: 'marvel' },
				{ name: 'Scarlet Witch', comic: 'marvel' }
			]
		};
	}	
});


Vue.component('hero', {
	
	// template: '<li>heroName</li>'
	template: '<li><slot></slot></li>'
	
});

var vm = new Vue({
	
	el: '#main'
	
});