document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let date = document.getElementById("date").value;
  let tickets = document.getElementById("tickets").value;

  let error = document.getElementById("error");
  let output = document.getElementById("output");

  if (name === "" || email === "" || from === "" || to === "" || date === "" || tickets === "") {
    error.innerHTML = "Please fill all fields";
    return;
  }

  error.innerHTML = "";

  output.innerHTML = `
    Name: ${name} <br>
    Email: ${email} <br>
    From: ${from} <br>
    To: ${to} <br>
    Date: ${date} <br>
    Tickets: ${tickets} <br>
    <b>Booking Confirmed ✅</b>
  `;
});