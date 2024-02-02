async function fetchInformationAPI() {
  const jsonUrl = "informationFeed.json";
  const response = await fetch(jsonUrl);
  const data = await response.json();

  const newsArray = data.news;
  const eventsArray = data.events;
  const combinedArray = [];
  const maxLength = newsArray.length + eventsArray.length;

  // Alternates between news and events to make the feed look more varied
  for (let i = 0; i < maxLength; i++) {
    if (i < newsArray.length) {
      combinedArray.push(newsArray[i]);
    }
    if (i < eventsArray.length) {
      combinedArray.push(eventsArray[i]);
    }
  }

  // create an if statement for a filter that determines how many
  // combinedArray is a placeholder for now without filters
  for (let i = 0; i < combinedArray.length; i++) {
    const info = createInfoContainer(combinedArray[i]);
    document.querySelector(".news__container").appendChild(info);
  }
}

fetchInformationAPI();

function truncate(text) {
  const maxCharacters = 90;
  if (text.length < maxCharacters) {
    return text;
  }
  // Find the last instance of a white space within the character limit
  const lastWhiteSpace = text.lastIndexOf(" ", maxCharacters);
  return text.slice(0, lastWhiteSpace) + "...";
}

function createInfoContainer(informationFeed) {
  const card = document.createElement("div");
  card.classList.add("news__containerCard");

  const picture = document.createElement("img");
  picture.src = informationFeed.image;
  picture.classList.add("news__containerCard--image");
  card.appendChild(picture);

  const box = document.createElement("div");
  box.classList.add("news__containerCardBox");
  card.appendChild(box);

  const title = document.createElement("h3");
  title.textContent = informationFeed.title;
  title.classList.add("news__containerCardBox--title");
  box.appendChild(title);

  const published = document.createElement("small");
  published.textContent = informationFeed.published;
  published.classList.add("news__containerCardBox--published");
  box.appendChild(published);

  const content = document.createElement("p");
  content.textContent = truncate(informationFeed.content);
  content.classList.add("news__containerCardBox--content");
  box.appendChild(content);

  const viewMore = document.createElement("button");
  viewMore.textContent = "Läs mer";
  viewMore.classList.add("news__containerCardBox--newsButton");
  box.appendChild(viewMore);
  viewMore.addEventListener("click", function () {
    openModal(informationFeed);
  });

  return card;
}

function openModal(informationFeed) {
  document.querySelector("html").classList.add("html--overflowHidden");
  const overlay = document.createElement("div");
  overlay.classList.add("newsOverlay");
  document.body.appendChild(overlay);
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeModal();
    }
  });

  const modal = document.createElement("div");
  modal.classList.add("newsOverlay__modal");
  overlay.appendChild(modal);

  const exitButton = document.createElement("button");
  exitButton.classList.add("newsOverlay__modal--exitButton");
  modal.appendChild(exitButton);
  exitButton.addEventListener("click", function () {
    closeModal();
  });

  const picture = document.createElement("img");
  picture.src = informationFeed.image;
  picture.classList.add("newsOverlay__modal--image");
  modal.appendChild(picture);

  const title = document.createElement("h3");
  title.textContent = informationFeed.title;
  title.classList.add("newsOverlay__modal--title");
  modal.appendChild(title);

  const published = document.createElement("small");
  published.textContent = informationFeed.published;
  published.classList.add("newsOverlay__modal--published");
  modal.appendChild(published);

  const content = document.createElement("p");
  content.textContent = informationFeed.content;
  content.classList.add("newsOverlay__modal--content");
  modal.appendChild(content);
  return overlay;
}

function closeModal() {
  document.querySelector("html").classList.remove("html--overflowHidden");
  const overlay = document.querySelector(".newsOverlay");
  if (overlay) {
    overlay.remove();
  }
}
