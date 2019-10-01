// Конструктор дизайн паттерн
class SimpleMembership {
	constructor(name) {
		this.name = name
		this.cost = 50
	}
}
class StandartMembership {
	constructor(name) {
		this.name = name
		this.cost = 150
	}
}
class PremiumMembership {
	constructor(name) {
		this.name = name
		this.cost = 250
	}
}

// Creactr factory
class MemberFactory {
	static list = {
		simple: SimpleMembership,
		standard: StandartMembership,
		premium: PremiumMembership
	}

	create(name, type = 'simple') {
		const Membership = MemberFactory.list[type] || MemberFactory.list.simple
		const member = new Membership(name)
		member.type = type
		member.define = function() {
			console.log(`${this.name} (${this.type}): ${this.cost}`)
		}
		return member
	}
}

const factory = new MemberFactory()

const members = [
	factory.create('Vladilen', 'simple'),
	factory.create('Elena', 'premium'),
	factory.create('Vasilisa', 'standard'),
	factory.create('Ivan', 'premium'),
	factory.create('Petr')
]

members.forEach(member => {
	member.define()
})
