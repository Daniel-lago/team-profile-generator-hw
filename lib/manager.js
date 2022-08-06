class Manager {

  constructor(name, email, id, officeNumber) {
    this.role = "Manager";
    this.name = name;
		this.email = email;
    this.id = id;
    this.officeNumber = officeNumber
  }

  // saludar() {
  //   console.log(` Hola mi nombre es ${this.name}, mi ID es ${this.id} puedes encontrarme en la oficina ${this.officeNumber} acutalmente estudio en ${this.school}`)
  // }

  managerHTML() {
    return `
    <div class="col-md-3 py-2">
			<div class="card h-100 bg-light shadow">
				<div class="card-block">
					<div class="card-header bg-primary text-white">
						<h3 id="name">${this.name}</h3>
						<h4><i class="fas fa-mug-hot"></i> ${this.role}</h4>
					</div>
					<div class="card-body bg-light">
						<ul class="list-group">
							<li class="list-group-item">ID: ${this.id}</li>
							<li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
							<li class="list-group-item">Office Number: ${this.officeNumber}</li>
						</ul>
					</div>
				</div>
			</div>
    </div>
    `;
	}

}

module.exports = Manager;