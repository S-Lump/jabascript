var ford = Object.create({
    calculateDistancePerYear: function() {
        Object.defineProperty(this, 'distancePerYear', {
            value: Math.ceil(this.dist / this.age),
            enumerable: true,
            writable: false,
            configurable: false,
        })
    }
}, {
    name: {
        value: 'Ford',
        enumerable:true,
        writable: false,
        configurable: false,
    },
    model: {
        value: 'Focus',
        enumerable:true,
        writable: false,
        configurable: false,
    },
    year: {
        value: 2015,
        enumerable:true,
        writable: false,
        configurable: false,
    },
    dist: {
        value: 390000,
        enumerable:true,
        writable: true,
        configurable: false,
    },
    age: {
        enumerable: true,
        get: function() {
            return new Date().getFullYear() - this.year;
        },
        set: function() {

        }
    }
});

// ford.calculateDistancePerYear();

for (var key in ford) {
    if (ford.hasOwnProperty(key)) {
        console.log(key, ford[key])
    }
}