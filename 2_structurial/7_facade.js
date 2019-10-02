class Complaints {
	constructor() {
		this.complaints = []
	}

	reply(complaint) {}
	add(complaint) {
		this.complaints.push(complaint)
		return this.reply(complaint)
	}
}

class ProductComplaints extends Complaints {
	reply({ id, costomer, details }) {
		return `Product: ${id}: ${costomer} (${details})`
	}
}
class ServiceComplaints extends Complaints {
	reply({ id, costomer, details }) {
		return `Service: ${id}: ${costomer} (${details})`
	}
}

// facade
class ComplaintRegistry {
	register(costomer, type, details) {
		const id = Date.now()
		let complaint

		if (type == 'service') {
			complaint = new ServiceComplaints()
		} else {
			complaint = new ProductComplaints()
		}

		return complaint.add({ id, costomer, details })
	}
}

const registery = new ComplaintRegistry()
console.log(registery.register('Mario', 'service', 'не доступен'))
console.log(registery.register('Елена', 'product', 'ошибка'))
