(() => {
  "use strict";
  const e = {
    name: "Nolbu",
    age: 30,
    changeAge: function () {
      return "".concat(this.name, " - ").concat(this.age)
    }
  };
  console.log("index.js");
  var n = document.getElementById("app"),
    t = document.createElement("h3"),
    c = "Name : ".concat("Library A10", ", Age : ").concat(100, " / ").concat(e.name, " - ").concat(e.age, " / ").concat(e.changeAge()),
    a = document.createTextNode(c);
  t.appendChild(a), n.appendChild(t), document.getElementById("btn").addEventListener("click", (function (e) {
    alert("click event")
  }))
})();

