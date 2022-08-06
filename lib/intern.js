class Intern {

  constructor(name, id, email, school) {
    this.role = "Intern";
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }


  // saludar() {
  //   console.log(` Hola mi nombre es ${this.name}, mi ID es ${this.id} puedes contactarme en ${this.email} acutalmente estudio en ${this.school}`)
  // }

  internHTML() {
    return `
    <div class="col-md-3 py-2">
      <div class="card h-100 bg-light shadow">
        <div class="card-block">
          <div class="card-header bg-primary text-white">
            <h3 id="name">${this.name}</h3>
            <h4><i class="fas fa-user-graduate"></i> ${this.role}</h4>
          </div>
          <div class="card-body bg-light">
            <ul class="list-group">
              <li class="list-group-item">ID: ${this.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
              <li class="list-group-item">School: ${this.school}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
`
}
}

module.exports = Intern;