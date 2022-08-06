class Engineer {

  constructor(name, id, email, github) {
    this.role = "Engineer";
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }


  // saludar() {
  //   console.log(` Hola mi nombre es ${this.name}, mi ID es ${this.id} puedes contactarme en ${this.email} o seguirme en ${this.github}`)
  // }

  engineerHTML() {
    return `
    <div class="col-md-3 py-2">
      <div class="card h-100 bg-light shadow">
        <div class="card-block">
          <div class="card-header bg-primary text-white">
            <h3 id="name">${this.name}</h3>
            <h4><i class="fas fa-glasses"></i> ${this.role}</h4>
          </div>
          <div class="card-body bg-light">
            <ul class="list-group">
              <li class="list-group-item">ID: ${this.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
              <li class="list-group-item">Github:<a target='_blank' href="https://github.com/${this.github}">${this.github}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    `
}

}

module.exports = Engineer;