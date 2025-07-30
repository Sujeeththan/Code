function submitform(event) {
       event.preventDefault(); //stop page refresh

       const fullname = document.getElementById("name").value;
       const age = document.getElementById("age").value;
       const email = document.getElementById("email").value;
       const gender = document.querySelector("input[name = gender  ]:checked").value;

          
       alert(fullname)
       console.log(fullname);
       

    
       document.getElementById("output").innerHTML = 
       `
       <h2>Student List</h2>
       <p>
          Name:<b>${fullname}</b>
          <br>
          Age:<b>${age}</b>
          <br>
          Email:<b>${email}</b>
          <br>
          Gender:<b>${gender}</b>
          </p>
       `;

}

