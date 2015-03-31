var galleryDiv = document.getElementById("photogallery");
var $gallery = $(".gallery");

// populates gallery given as argument according to the length specified in the gallery object
function populateGallery(gallery) {
	$('#photogallery').hide();
	$('#selectgallery').append('<div class="throbber">Loading...</div>');
	for (var project in galleries) {
		if (galleries[project].name == gallery) {
			galleryDiv.innerHTML = '<h3>' + galleries[project].name + '</h3>';
			galleryDiv.innerHTML += '<p>' + galleries[project].description + '</p>';
			var leng = galleries[project].images;
				for (i=1; i<=leng; i++) {
					galleryDiv.innerHTML += '<a href="img/gallery/' + gallery + '/'+ i + '.jpg" data-lightbox="1" data-title="'+ galleries[project].name + '"><img src="img/gallery/' + gallery + '/' + i + 'tn.jpg" /></a>';
				}
			break;
		} else {
				galleryDiv.innerHTML = "<h3>Gallery not found</h3>";
		}
	}
	$('#photogallery img').load(function(){
		$(".throbber").remove();
		$('#photogallery').fadeIn(500);
	})
}

$gallery.click(function() {
	populateGallery($(this).attr('id'));
	return false;
});

// $zambia.click(function() {
// 	populateGallery('Zambia');
// 	return false;
// });

// '#photogallery img'