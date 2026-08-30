console.log("A Dress Up! is running.");

const dressUpButton = document.getElementById("dress-up-btn");
const closetButton = document.getElementById("closet-btn");
const memorialButton = document.getElementById("memorial-btn");

const content = document.getElementById("content");

dressUpButton.addEventListener("click", function() {
  content.innerHTML = `
    <h2>Dress Up</h2>
    <p>Let's make something cute! ♡</p>
  `;
});

closetButton.addEventListener("click", function() {
  content.innerHTML = `
    <h2>My Closet</h2>
    <p>Your saved outfits will appear here! ♡</p>
  `;
});

memorialButton.addEventListener("click", function() {
  content.innerHTML = `
    <h2>Memorial</h2>
    <p>In loving memory of Kiona "Cucu" Brown ♡</p>
  `;
});
