document.addEventListener("DOMContentLoaded", function (e) {
  const formSubmit = document.getElementById("regist-ticket-submit");
  const btnSubmit = document.querySelector("#registration-button-group button")
  const btnLoading = document.querySelector("#registration-button-group .loading");

  formSubmit.addEventListener("submit", async function (e) {
    e.preventDefault();

    const ticketName = document.getElementById("ticketName").value
    const ticketEmail = document.getElementById("ticketEmail").value
    const ticketKonser = document.getElementById("ticketKonser").value

    btnLoading.style.display = "block"
    btnSubmit.classList.add("d-none")

    await new Promise(r => setTimeout(r, 2000));

    btnLoading.style.display = "none"
    btnSubmit.classList.remove("d-none")
    Swal.fire({
      title: "Ticket Registration Successful!",
      html: `
        <div>
          <small class="text-muted text-center">Thank you for registering your ticket. <br>Here is your registration information.</small>
          <table class="table table-bordered text-start mt-3" style="font-size: 1rem;">
            <tr>
              <th class="text-start fw-normal">Name</th>
              <td>${ticketName}</td>
            </tr>
            <tr>
              <th class="text-start fw-normal">Email</th>
              <td>${ticketEmail}</td>
            </tr>
            <tr>
              <th class="text-start fw-normal">Konser</th>
              <td>${ticketKonser}</td>
            </tr>
          </table>
        </div>
      `,
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
        popup: 'rounded-3',  // Add rounded corners to the popup
        title: 'fs-3',       // Set font size for title
        content: 'fs-5'      // Set font size for content
      }
    }).then(res => {
      window.location.reload();
    });
  })
})