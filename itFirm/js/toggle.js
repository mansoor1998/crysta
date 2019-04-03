// toggle all the questions.

let toggleList = [false, false, false];
window.onload = function () {

	for (let i = 1; i <= 3; i++) {
		document.getElementById("content-btn" + i).onclick = createThread(i, false);
	}

}


function createThread(index, isToggle) {

	return function () {
		if (!toggleList[index - 1]) {
			for (let i = 0; i < 3; i++) {
				if (i !== index - 1) {
					new Promise((resolve, reject) => {
						document.getElementById("content-p" + (i + 1)).style.height = "0px";
					}).then((value) => { document.getElementById("content-p" + (i + 1)).style.display = "none"; });
					toggleList[i] = false;
				}
			}
			new Promise((resolve, reject) => {
				document.getElementById("content-p" + index).style.display = "block";
				resolve(1);
			}).then((value) => { document.getElementById("content-p" + index).style.height = "80px"; });
		}
		else {
			new Promise((resolve, reject) => {
				document.getElementById("content-p" + index).style.height = "0px";
			}).then((value) => { document.getElementById("content-p" + index).style.display = "none"; });
		}
		toggleList[index - 1] = !toggleList[index - 1];
	}


}


/*Will do this later*/

let reviews = [true, false, false];
// Sets the current height of all those elements who give review



let blockIndex = 1;

/*setInterval(function () {
	if (blockIndex === 1) {
		document.getElementById('review-2').style.left = "0px";
		document.getElementById('review-2').style.right = "0px";
		document.getElementById('review-1').style.right = "1000px";
		document.getElementById('review-1').style.left = "-1000px";
		document.getElementById('review-3').style.left = "1000px";
		document.getElementById('review-3').style.right = "-1000px";



		blockIndex++;
	}
	else if (blockIndex === 2) {
		document.getElementById('review-1').style.right = "2000px";
		document.getElementById('review-1').style.left = "-2000px";
		document.getElementById('review-2').style.left = "-1000px";
		document.getElementById('review-2').style.right = "1000px";
		document.getElementById('review-3').style.right = "0px";
		document.getElementById('review-3').style.left = "0px";

		blockIndex++;
	}
	else if (blockIndex === 3) {
		document.getElementById('review-1').style.right = "0px";
		document.getElementById('review-1').style.left = "0px";
		document.getElementById('review-2').style.left = "1000px";
		document.getElementById('review-2').style.right = "-1000px";
		document.getElementById('review-3').style.right = "2000px";
		document.getElementById('review-3').style.left = "-2000px";

		blockIndex = 1;
	}
}, 3000);*/

document.getElementById('bullet-1').onclick = function () {
	new Promise((res, rej) => {
		document.getElementById('review-1').style.right = "0px";
		document.getElementById('review-1').style.left = "0px";
		document.getElementById('review-2').style.left = "1000px";
		document.getElementById('review-2').style.right = "-1000px";
		document.getElementById('review-3').style.right = "-2000px";
		document.getElementById('review-3').style.left = "2000px";
		document.getElementById('bullet-1').style.backgroundColor = "#4d79ff";
		document.getElementById('bullet-2').style.backgroundColor = "#fff";
		document.getElementById('bullet-3').style.backgroundColor = "#fff";
		res(1);
	})
}

document.getElementById('bullet-2').onclick = function () {
	new Promise((res, rej) => {
		document.getElementById('review-2').style.left = "0px";
		document.getElementById('review-2').style.right = "0px";
		document.getElementById('review-1').style.right = "1000px";
		document.getElementById('review-1').style.left = "-1000px";
		document.getElementById('review-3').style.left = "1000px";
		document.getElementById('review-3').style.right = "-1000px";
		document.getElementById('bullet-1').style.backgroundColor = "#fff";
		document.getElementById('bullet-2').style.backgroundColor = "#4d79ff";
		document.getElementById('bullet-3').style.backgroundColor = "#fff";
		res(1);
	})


};

document.getElementById('bullet-3').onclick = function () {
	new Promise((res, rej) => {
		document.getElementById('review-1').style.right = "2000px";
		document.getElementById('review-1').style.left = "-2000px";
		document.getElementById('review-2').style.left = "-1000px";
		document.getElementById('review-2').style.right = "1000px";
		document.getElementById('review-3').style.right = "0px";
		document.getElementById('review-3').style.left = "0px";
		document.getElementById('bullet-1').style.backgroundColor = "#fff";
		document.getElementById('bullet-2').style.backgroundColor = "#fff";
		document.getElementById('bullet-3').style.backgroundColor = "#4d79ff";
		res(1);
	})
}

// show: it means that if it is currently showing or not;
/*function createReviewThread(index, show) {
	return function () {
		let value = reviews.slice(0, index - 1).find(review => review === true);
		let a = reviews.slice(0, index - 1);
		let pos = reviews.slice(0, index - 1).indexOf(true);
		reviews.slice(reviews.slice(0, index), reviews.length);
		if (value) {
			document.getElementById('review-' + index - 1).style.left = "0px";
			document.getElementById('review-' + pos).style.right = "1000px";
			document.getElementById('review-' + index).style.left = "1000px";
		}
		console.log(index);
	}
}*/