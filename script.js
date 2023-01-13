// Set launch date
const launchDate = new Date("April 01, 2023 00:00:00").getTime();

// Update countdown every 1 second
setInterval(() => {
  // Get current date and time
  const currentDate = new Date().getTime();

  // Distance from current date to launch date
  const distance = launchDate - currentDate;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display countdown
  document.getElementById("days").innerHTML = `${days} days`;
  document.getElementById("hours").innerHTML = `${hours} hours`;
  document.getElementById("minutes").innerHTML = `${minutes} minutes`;
  document.getElementById("seconds").innerHTML = `${seconds} seconds`;
}, 1000);

// Notify me button event listener
document.getElementById("notify-me").addEventListener("click", e => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    // Send email to server for notification
    // Replace with your own server-side code
    // A simple example of displaying a message
    document.getElementById("response").innerHTML = `Thanks! We'll notify you at ${email} when we launch.`;
  }
});
