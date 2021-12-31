function data(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
  this.printName = function () {
    console.log(this.name());
  };
}
var val = 0;
let data = new Teacher("img_", val++);

data.name = function () {
  return this.firstName + " " + this.lastName;
};

data.printName();
