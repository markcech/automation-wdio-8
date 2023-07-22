class RegPage {
  
get userName() { return $(".navbar-right").$('[data-toggle="dropdown"]'); }

async getUser () { 
  return await this.userName.getText();
}
}

export default RegPage;