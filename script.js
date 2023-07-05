const instruments = [
    {
      type: "Guitar",
      image: "guitar.jpeg",
      models: [
        { name: "Acoustic", price: 1000 },
      ]
    },
    {
      type: "Drums",
      image: "drums.jpeg",
      models: [
        { name: "Rock", price: 800 },
      ]
    },
    {
      type: "Piano",
      image: "piano.jpeg",
      models: [
        { name: "Grand", price: 5000 },
      ]
    },
    {
      type: "Flute",
      image: "flute.jpeg",
      models: [
        { name: "Classic", price: 600 },
      ]
    },
    {
      type: "Saxophone",
      image: "saxophone.jpeg",
      models: [
        { name: "Alto", price: 1200 },
      ]
    },
    {
      type: "Mandolin",
      image: "mandolin.jpeg",
      models: [
        { name: "F-style", price: 1500 },
      ]
    },
    {
        type: "Chimes",
        image: "chimes.jpeg",
        models: [
          { name: "Chimes", price: 1500 },
        ]
      },
      {
        type: "Clarinet",
        image: "clarinet.jpeg",
        models: [
          { name: "Clarinet", price: 2000 },
        ]
      },
      {
        type: "Cajon",
        image: "cajon.jpeg",
        models: [
          { name: "Cajon", price: 150 },
        ]
      },
      {
        type: "Violin",
        image: "violin.jpeg",
        models: [
          { name: "Violin", price: 1500 },
        ]
      },
      {
        type: "Ukelele",
        image: "ukelele.jpeg",
        models: [
          { name: "Ukelele", price: 1500 },
        ]
      },
      {
        type: "Congo",
        image: "congo.jpeg",
        models: [
          { name: "Congo", price: 1500 },
        ]
      }  
  ];
  
  const instrumentList = document.getElementById("instrument-list");
  
  // Loop through the instruments array and create HTML elements for each instrument
  instruments.forEach(instrument => {
    const instrumentDiv = document.createElement("div");
    instrumentDiv.classList.add("instrument");
  
    const instrumentType = document.createElement("h2");
    instrumentType.textContent = instrument.type;
  
    const instrumentImage = document.createElement("img");
    instrumentImage.src = instrument.image;
    instrumentImage.alt = instrument.type;
  
    instrumentDiv.appendChild(instrumentType);
    instrumentDiv.appendChild(instrumentImage);
  
    const modelsList = document.createElement("ul");
    instrument.models.forEach(model => {
      const modelItem = document.createElement("li");
      modelItem.textContent = `${model.name}: $${model.price}`;
      modelsList.appendChild(modelItem);
    });
  
    instrumentDiv.appendChild(modelsList);
    instrumentList.appendChild(instrumentDiv);
  });

  
  
  