function renderFilmerCards(movieObject) {
    const baseCard = document.createElement("div");
    //Image in this space

    const baseCardInfoBox = document.createElement("div"); //Wrapper for the info


    const infoBoxTitle = document.createElement("div");
    const movieTitle = document.createTextNode(movieObject, "title");
    infoBoxTitle.appendChild(movieTitle);
    baseCardInfoBox.appendChild(infoBoxTitle)
    
    const infoBoxLength = document.createElement("div");
    const moviePlayTime = document.createTextNode(movieObject,+ "length");
    infoBoxLength.appendChild(moviePlayTime);
    baseCardInfoBox.appendChild(infoBoxLength)
    
    const infoBoxDescription = document.createElement("div");
    const movieDescription = document.createTextNode(movieObject, "description");
    infoBoxDescription.appendChild(movieDescription);
    baseCardInfoBox.appendChild(infoBoxDescription)
    
    const infoBoxBooking = document.createElement("div");
    const bookingButton = document.createTextNode("Boka här");
    infoBoxBooking.appendChild(bookingButton);
    baseCardInfoBox.appendChild(infoBoxBooking)

    baseCard.appendChild(baseCardInfoBox);
    return baseCard;

}
document.querySelector(".testbox").appendChild(renderFilmerCards("test"))