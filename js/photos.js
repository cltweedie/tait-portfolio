var galleryDiv = document.getElementById("photogallery");
var $gallery = $(".gallery");

// populates gallery given as argument according to the length specified in the gallery object
function populateGallery(gallery) {
	$('#photogallery').hide();
	for (var project in galleries) {
		if (galleries[project].name == gallery) {
			galleryDiv.innerHTML = '<h3>' + galleries[project].name + '</h3>';
			galleryDiv.innerHTML += '<p>' + galleries[project].description + '</p>';
			var leng = galleries[project].images;
				for (i=1; i<=leng; i++) {
					galleryDiv.innerHTML += '<a href="img/gallery/' + gallery + '/'+ i + '.jpg" data-lightbox="1" data-title="'+ galleries[project].captions[i-1] + '"><img src="img/gallery/' + gallery + '/' + i + 'tn.jpg" /></a>';
				}
			break;
		} else {
				galleryDiv.innerHTML = "<h3>Gallery not found</h3>";
		}
	}
	$('#photogallery img').load(function(){
		$('#photogallery').fadeIn(1000);
	})
}

$gallery.click(function() {
	populateGallery($(this).attr('id'));
	return false;
});

