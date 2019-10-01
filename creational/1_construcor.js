// Старый вариант создания конструктора
// https://www.youtube.com/watch?v=YJVj4XNASDk
// function Server(name, ip) {
// 	this.name = name
// 	this.ip = ip
// }

// Server.prototype.getUrl = function() {
// 	return `https://${this.ip}:80`
// }
// Новый вариант создания конструктора
class Server {
	constructor(name, ip) {
		this.name = name
		this.ip = ip
	}
	getUrl() {
		return `https://${this.ip}:80`
	}
}

const aws = new Server('AWS German', '82.21.21.32')
console.log(aws.getUrl())
