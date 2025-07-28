class UserStorage {
	constructor() {
		this.storage = {
			0: { id: 0, firstName: "Hans", lastName: "Joachim", eMail: "hans2991@gmail.com", birthday: "1992-08-21", bio: "Ich bin Hans und ich mag Autos." },
			1: { id: 1, firstName: "Anna", lastName: "Schmidt", eMail: "anna.schmidt@example.com", birthday: "1990-05-14", bio: "Anna liebt Bücher und Katzen." },
			2: { id: 2, firstName: "Peter", lastName: "Müller", eMail: "peter.mueller@example.com", birthday: "1985-11-30", bio: "Peter fährt gerne Fahrrad." },
			3: { id: 3, firstName: "Julia", lastName: "Fischer", eMail: "julia.fischer@example.com", birthday: "1993-03-22", bio: "Julia kocht leidenschaftlich gern." },
			4: { id: 4, firstName: "Lukas", lastName: "Weber", eMail: "lukas.weber@example.com", birthday: "1988-07-19", bio: "Lukas spielt Fußball im Verein." },
			5: { id: 5, firstName: "Sophie", lastName: "Klein", eMail: "sophie.klein@example.com", birthday: "1995-12-02", bio: "Sophie reist gerne um die Welt." },
			6: { id: 6, firstName: "Max", lastName: "Wolf", eMail: "max.wolf@example.com", birthday: "1991-09-10", bio: "Max ist ein begeisterter Gamer." },
			7: { id: 7, firstName: "Laura", lastName: "Neumann", eMail: "laura.neumann@example.com", birthday: "1989-04-27", bio: "Laura malt und zeichnet in ihrer Freizeit." },
			8: { id: 8, firstName: "Tim", lastName: "Schneider", eMail: "tim.schneider@example.com", birthday: "1994-06-15", bio: "Tim liebt es zu wandern." },
			9: { id: 9, firstName: "Marie", lastName: "Zimmermann", eMail: "marie.zimmermann@example.com", birthday: "1996-01-08", bio: "Marie spielt Klavier." },
			10: { id: 10, firstName: "Felix", lastName: "Hartmann", eMail: "felix.hartmann@example.com", birthday: "1992-10-05", bio: "Felix interessiert sich für Fotografie." }
		};
		this.id = 11
	}

	addUser({ firstName, lastName, eMail, birthday, bio }) {
		const id = this.id
		this.storage[ id ] = { id, firstName, lastName, eMail, birthday, bio }
		this.id++
	}

	getUsers() {
		return Object.values(this.storage)
	}

	getUser(id) {
		return this.storage[ id ]
	}

	updateUser(id, { firstName, lastName, eMail, birthday, bio }) {
		this.storage[ id ] = { id, firstName, lastName, eMail, birthday, bio }
	}

	deleteUser(id) {
		delete this.storage[ id ]
	}
}

module.exports = new UserStorage()