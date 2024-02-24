document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(this);
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const emailLink = 'mailto:dmune8965@gmail.com' + '?subject=' + encodeURIComponent('Message from ' + email) + '&body=' + encodeURIComponent('Phone Number: ' + phone + '\n\nMessage: ' + message);
    window.location.href = emailLink;
});
function viewTopics() {
  alert("Topics will be displayed here!");
  // You can add more functionality here to display topics dynamically
}
