import HikesContainer from './HikesContainer.js';

const imgBasePath = "../../examples/";
const list = document.getElementById("hikes");
const container = list.parentElement;
const controller = {
  //on load grab the array and insert it into the page
  load() {
    this.hikes = new HikesContainer(data, imgBasePath);
    let that = this;
    window.addEventListener("load", () => {
      that.hikes.showHikeList(list);
    });
    list.addEventListener('touchend', (event) => {
      that.hikes.showHikeDetails(list, container, event.target.closest("li"));
    });
  }
}

controller.load();


// function showHikeList() {
//   const hikeListElement = document.getElementById("hikes");
//   hikeListElement.innerHTML = "";
//   renderHikeList(hikeList, hikeListElement);
// }

// function renderHikeList(hikes, parent) {
//   hikes.forEach(hike => {
//     parent.appendChild(renderOneHike(hike));
//   });
// }
// function renderOneHike(hike) {
//   const item = document.createElement("li");

//   item.innerHTML = ` <h2>${hike.name}</h2>
//     <div class="hike-info">
//         <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
//         <div>
//                 <div>
//                     <h3>Distance</h3>
//                     <p>${hike.distance}</p>
//                 </div>
//                 <div>
//                     <h3>Difficulty</h3>
//                     <p>${hike.difficulty}</p>
//                 </div>
//         </div>
//     </div>`;

//   return item;
// }
