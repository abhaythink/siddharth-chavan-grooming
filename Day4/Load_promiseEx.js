function load(url) {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status == 200) {
					resolve(this.response);
				} else {
					reject(this.status);
				}
			}
		};
		request.open("GET", url, true);
		request.send();
	});
}

const url = "https://dummyjson.com/products";
const btn = document.querySelector("#btnGet");
const msg = document.querySelector("#message");

btn.addEventListener("click", () => {
	load(url)
		.then((response) => {
			const result = JSON.parse(response);
            setTimeout(()=>{
                msg.innerHTML = "First product: " 
                + result.products[0].title;},2000)
		})

		.catch((error) => {
			msg.innerHTML = `Error getting the data: ${error}`;
		});
});
