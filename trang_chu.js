
/* xây dựng hàm slide ảnh bằng js thuần */

var index=1;
function changeimage() {
	var images=["anh9.png","anh11.png","anh12.png","anh13.png"];
	document.getElementById('img').src=images[index];
	index++;
	if (index==4) 
	{
		index=0;
	}
}	
setInterval(changeimage,3000);
