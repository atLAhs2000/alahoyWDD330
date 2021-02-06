export default class HikesContianer {
	constructor(data, imgBasePath){
		this.myData = data;
		this.imgBasePath = imgBasePath;
	}

	showHikeList(listContainer) {
	  listContainer.innerHTML = "";
	  this.renderHikeList(this.myData, listContainer);
	}

	renderHikeList(hikes, parent) {
	  hikes.forEach(hike => {
	    parent.appendChild(this.renderOneHike(hike));
	  });
	}
	renderOneHike(hike) {
	  const item = document.createElement("li");

	  item.innerHTML = ` <h2>${hike.name}</h2>
	    <div class="hike-info">
	        <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
	        <div>
	                <div>
	                    <h3>Distance</h3>
	                    <p>${hike.distance}</p>
	                </div>
	                <div>
	                    <h3>Difficulty</h3>
	                    <p>${hike.difficulty}</p>
	                </div>
	        </div>
	    </div>`;

	  return item;
	}

	showHikeDetails(list, container, listItem) {
		list.classList.toggle('hidden');
		const details = this.createDetails(listItem.getElementsByTagName('h2')[0].textContent);
		container.appendChild(details);
	}

	createDetails(itemName) {
		const itemData = this.myData.find(x => x.name === itemName);
		const item = document.createElement("div");
		item.innerHTML = `<h2>${itemData.name}</h2>
	    <div class="hike-info">
	        <div class="image"><img src="${this.imgBasePath}${itemData.imgSrc}" alt="${itemData.imgAlt}"></div>
	        <div>
	                <div>
	                    <h3>Distance</h3>
	                    <p>${itemData.distance}</p>
	                </div>
	                <div>
	                    <h3>Difficulty</h3>
	                    <p>${itemData.difficulty}</p>
	                </div>
	        </div>
	        <div>
	        		<div>
	        		<h3>Description</h3>
	        		<p>${itemData.description}</p>
	        		</div>
	        		<div>	
	        		<h3>Directons</h3>
	        		<p>${itemData.directions}</p>
	        		</div>
	        </div>`;
	        return item;
	}
}