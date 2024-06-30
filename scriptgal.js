// ***script for albums*** //

// selecting all required elements
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{ //pag naopen na yung window
	for (let i = 0; i < gallery.length; i++){
		totalImg.textContent = gallery.length; //passing value
		let newIndex = i; //pinapasa yung value ni i kay newIndex
		let clickImgIndex;
		gallery[i].onclick = ()=>{
			clickImgIndex = newIndex; //passing value
			console.log(i);
			function preview(){
				currentImg.textContent = newIndex + 1; //passing value
				let selectedImgUrl = gallery[newIndex].querySelector("img").src; //pangkuha ng url ng img kung ano man i-click ni user
				previewImg.src = selectedImgUrl; //pinapasa yung url kay previewImg
			}
			
			// prev and next btn
			const prevBtn = document.querySelector(".prev");
			const nextBtn = document.querySelector(".next");
			if (newIndex == 0){
				prevBtn.style.display = "none";
			}
			if (newIndex >= gallery.length - 1){
				nextBtn.style.display = "none";
			}
			prevBtn.onclick = ()=>{
				newIndex--; //decrement value
				if (newIndex == 0){
					preview();
					prevBtn.style.display = "none";
				}
				else{
					preview(); //calling again abve func para ma-update ung img
					nextBtn.style.display = "block";
				}
			}
			nextBtn.onclick = ()=>{
				newIndex++; //increment value
				if (newIndex >= gallery.length - 1){
					preview();
					nextBtn.style.display = "none";
				}
				else{
					preview(); //calling again abve func para ma-update ung img
					prevBtn.style.display = "block";
				}
			}
			
			preview(); //callng abpve function
			previewBox.classList.add("show");
			shadow.style.display = "block";
			document.querySelector("body").style.overflow = "hidden";
			
			closeIcon.onclick = ()=>{
				newIndex = clickImgIndex;
				prevBtn.style.display = "block";
				nextBtn.style.display = "block";
				previewBox.classList.remove("show");
				shadow.style.display = "none";
				document.querySelector("body").style.overflow = "auto";
			}
		}
	}
}