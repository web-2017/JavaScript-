const car = {
	weels: 4,

	init() {
		console.log(`I nave ${this.weels} weels, my master is ${this.owner}`)
	}
}

const carWithOwer = Object.create(car, {
	owner: {
		value: 'Alex'
	}
})

console.log(carWithOwer.__proto__ === car)

carWithOwer.init()
