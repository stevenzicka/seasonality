
let selectedIngredient = '';

function getValue() {
  let selectedValue = document.getElementById("ingredients").value;
  selectedIngredient = selectedValue;
}

function changeSelected() {
  let selectedValue = document.getElementById("ingredients").value;
  selectedIngredient = selectedValue;
}

document.getElementById("checkSeason").onclick = function() {getValue(), getSeason()};
document.getElementById("ingredients").onchange = function() {changeSelected()};
document.getElementById("btnID").onclick = function() {displayImg()};
document.getElementById("btnID2").onclick = function() {hideImg()};
document.getElementById("btnList").onclick = function() {addToList()};
document.getElementById("btnDelete").onclick = function() {deleteList()};
document.getElementById("btnChart").onclick = function() {showChart()};


function getSeason(event) {
  const currentMonth = getMonth()
  let ingArray = ingredients[selectedIngredient].season;
  let inSeason = 'False'
  for (let i = 0; i < 12; i++) {
    if(ingArray[i] === currentMonth) {
      inSeason = 'True'
      break
    }
  };
  let seasonCheck = '';
  if (inSeason === 'True') {
    seasonCheck = selectedIngredient + ' is in season!';
    alert(seasonCheck);
  }
  else {
    seasonCheck = selectedIngredient + ' is not in season :(';
    alert(seasonCheck);
  };
  event.preventDefault();
}

function getMonth() {
  var today = new Date();
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  today = mm
  return today
};

function addToList() {
  let list = document.getElementById('yourList');
  let ingredient = String(selectedIngredient);
  let listItem = document.createElement('li');
  let newItem = document.createTextNode(ingredient);
  listItem.appendChild(newItem);
  listItem.className = 'listItems';
  //let btn = document.createElement('button');
  //btn.innerHTML = 'x'
  //btn.id = 'btnDelete'
  //listItem.appendChild(btn);
  list.appendChild(listItem);
}

function displayImg() {
  let source = ingredients[selectedIngredient].image_src;
  let image = document.getElementById("image");
  image.src = '/images/' + source;
  let selectedText = ingredients[selectedIngredient].description;
  let text = document.getElementById("text");
  text.innerHTML = selectedText;
}

function hideImg() {
  document.getElementById("image").src = "";
  document.getElementById("chart").src = "";
  let text = document.getElementById("text");
  text.innerHTML = '';
}

function showChart() {
  let image = document.getElementById("chart");
  image.src = '/images/seasonality_chart_OR.PNG';
}

let chart = document.getElementById("chart");
if (chart.src == "") {
  chart.style.display = 'None';
};

function deleteList() {
  let confirmAction = confirm("Are you sure you want to delete all items?")
  if (confirmAction) {
    document.getElementById('yourList').innerHTML = '';
    return;
  }
  else {
    return;
  };
}

const ingredients = {    
  Apple: {
      season: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      type: 'Fruit',
      image_src: 'apple.jpg',
      description: 'Worldwide, there are more than 7,500 known varieties, 100 of which are grown commercially in the US. They all differ in shape, size, color, texture, aroma and flavor.'
  },

  Basil: {
      season: ['06', '07', '08', '09', '10', '11'],
      type: 'Herb',
      image_src: 'basil.jpg',
      description: 'For all varieties, choose fresh basil leaves that are rich in color. If pre-packaged, leaves should be vibrant and lacking dark spots or wilting, signs that the basil is less than fresh.'    
  },

  Carrot: {
      season: ['06', '07', '08', '09', '10', '11', '12'],
      type: 'Vegetable',
      image_src: `carrot.jpg`,
      description: 'Carrots come in all shades of purple, red, white, yellow and of course, orange. If they have the greens attached, look for feathery, perky leaves with no wilting, black spots or yellowing.'
  },

  Celery: {
      season: ['05', '06', '07', '08', '09', '10', '11'],
      type: 'Vegetable',
      image_src: 'celery.jpg',
      description: 'Pascal celery, the most readily found in the US, has tall, light green stalks that are thick and very crisp. It\'s commonly sold with few leaves, but if you find it with the flavorful leaves intact, they can be used as an herb.'
  },

  Fennel: {
      season: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      type: 'Vegetable',
      image_src: 'fennel.jpg',
      description: 'Fennel bulbs should be whitish-green, firm and heavy for their size, with no brown or mushy spots. If the feathery green fronds are still attached, they should have no signs of wilting or dryness.'
  },

  Garlic: {
      season: ['01', '02', '03', '04', '05', '07', '08', '09', '10', '11', '12'],
      type: 'Vegetable',
      image_src: 'garlic.jpg',
      description: 'Mature garlic heads should have a paper-like skin that covers all the cloves, which ideally are firm and free of mold or bruises. Green garlic has a light green stalk and white bulb at the base with darker green tops.'
  },

  Kale: {
      season: ['01', '02', '05', '06', '07', '08', '09', '10', '11', '12'],
      type: 'Vegetable',
      image_src: 'kale.jpg',
      description: 'When shopping for kale, stay clear of wilted or browning leaves. Leaves and stalks should be firm and dry instead of wilted and mushy.'
  },

  Leek: {
      season: ['01', '02', '03', '09', '10', '11', '12'],
      type: 'Vegetable',
      image_src: 'leeks.jpg',
      description: 'Common leeks look like giant scallions and have a mild onion-y, sweet flavor. Look for leeks on the smaller side, 1-2" in stem diameter with very dark greens that have no yellowing or wilted spots.'
  },

  Mushroom: {
      season: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      type: 'Vegetable',
      image_src: 'mushrooms.jpg',
      description: 'There are several varieties of mushrooms and they can be purchased fresh or dried. Look for fresh mushrooms without slimy, moldy or black spots.'
  },

  Pumpkin: {
      season: ['10'],
      type: 'Vegetable',
      image_src: 'pumpkin.jpg',
      description: 'While pumpkins come in a variety of types, sizes and colors - you should always choose a pumpkin that feels heavy for its weight and pass on those with any black or mushy spots.'
  },

  Spinach: {
      season: ['05', '06', '07', '08', '09', '10', '11', '12'],
      type: 'Vegetable',
      image_src: 'spinach.jpg',
      description: 'Fresh spinach leaves can be sold as loose leaves or still attached to the stem. Look for perky, evenly colored leaves with no mushy spots. Smaller leaves will be the most tender while larger leaves can be stringy in texture.'
  },

  Watermelon: {
      season: ['07', '08', '09'],
      type: 'Fruit',
      image_src: 'watermelon.jpg',
      description: 'When choosing a watermelon, look for darker green melons that feel heavy and sound hollow when tapped.'
  },

  Zucchini: {
      season: ['06', '07', '08', '09', '10'],
      type: 'Vegetable',
      image_src: 'zucchini.jpg',
      description: 'Like other kinds of summer squash, smaller zucchini have a better flavor and texture for most cooking, while large zuchinni are best saved for baking or stuffing.'
  }
};