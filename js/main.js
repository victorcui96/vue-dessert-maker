console.info('Dessert maker');

new Vue({
    el: '#container',
    methods: {
    	setFruit (f) {
    		this.currentFruit = f;
    	},
    	setDessert (d) {
    		this.currentDessert = d;
    	},
    	// reset: function() {}
    	reset () {
    		this.currentFruit = null;
    		this.currentDessert = null;
    	}
    },
    data: {
        currentFruit: null,
        currentDessert: null,
        images: {
            fruits: {
                apple: 'img/Apple.jpg',
                orange: 'img/Orange.jpg',
                banana: 'img/Banana.jpg'
            },
            desserts: {
                icecream: 'img/IceCream.jpg',
                cake: 'img/Cake.jpg',
                pie: 'img/Pie.jpg'
            },
            mixes: {
                apple: {
                    icecream: 'img/AppleIceCream.jpg',
                    cake: 'img/AppleCake.jpg',
                    pie: 'img/ApplePie.jpg'
                },
                orange: {
                    icecream: 'img/OrangeIceCream.jpg',
                    cake: 'img/OrangeCake.jpg',
                    pie: 'img/OrangePie.jpg'
                },
                banana: {
                    icecream: 'img/BananaIceCream.jpg',
                    cake: 'img/BananaCake.jpg',
                    pie: 'img/BananaPie.jpg'
                }
            }
        }
    },

});
