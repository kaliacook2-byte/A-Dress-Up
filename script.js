console.log("A Dress Up! is running.");

const dressUpButton = document.getElementById("dress-up-btn");
const closetButton = document.getElementById("closet-btn");
const memorialButton = document.getElementById("memorial-btn");

const content = document.getElementById("content");

   content.innerHTML = `
    dressUpButton.addEventListener("click", function() {
  setActiveButton(dressUpButton);

  content.innerHTML = `
    <div class="character-select">

      <h2>Character Select</h2>

      <div class="character-cards">

        <div class="character-card new-doll">
          <div class="doll-window">
            <p>Doll goes here ♡</p>
          </div>
          <div class="card-label">New Doll!</div>
        </div>

        <div class="character-card locked">
          <div class="doll-window"></div>
          <div class="ribbon vertical"></div>
          <div class="ribbon horizontal"></div>
          <div class="card-label">Locked!</div>
        </div>

        <div class="character-card locked">
          <div class="doll-window"></div>
          <div class="ribbon vertical"></div>
          <div class="ribbon horizontal"></div>
          <div class="card-label">Locked!</div>
        </div>

      </div>

      <div class="info-girl-area">
        <div class="info-girl-picture"></div>

        <div class="info-girl-message">
          <span class="info-name">INFO GIRL</span>
          <p>Pick a doll to start dressing up! ♡</p>
        </div>
      </div>

    </div>
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
