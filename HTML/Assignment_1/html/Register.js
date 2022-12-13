
class Register {
    Name;
    Emp_id;
    Email;
    Password;
    Address;
    // Designation
    // Gender
    // Langange
    DOB;

    constructor(n, id, eml, p, a, d, g, l, dob) {
        this.Name = n;
        this.Emp_id = id;
        this.Email = eml;
        this.Password = p;
        this.Address = a;
        // this.Designation = d;
        // this.Gender = g;
        // this.Langange = l;
        this.DOB = dob;

    }
}


// var info = []
function getData() {
    // read the data
    n = document.getElementById("emp_name");
    id = document.getElementById("emp_id");
    eml = document.getElementById("email");
    p = document.getElementById("pswrd");
    a = document.getElementById("add");
    // d = document.getElementById("desig");
    // g = document.getElementById("G1");
    // l = document.getElementById("lan1");
    dob = document.getElementById("dob");

    // //create obj of class
    // obj1 = new Register(n, id, eml, p, a, d, g, l, dob)

    // //pushobj in array
    // info.push(obj1)

}

showData()
{
    console.log("First name: ", n)
    console.log("Employee id: ", id)
    console.log("Email: ", eml)
    console.log("password: ", p)
    console.log("Address: ", add)
    console.log("DOB: ", dob)
}



// function registerPage(){
//     var n1 = document.getElementById("emp_name").value ;
//     console.log(n1);
    

// }

function displayData(){
    var obj = new registerPage();
    obj.getData();
}


