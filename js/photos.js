var galleryDiv = document.getElementById("gallery");


function populateGallery(album) {
	galleryDiv.innerHTML = "";
	var gallery_name = album;
	for (var project in galleries) {
		if (gallery_name == galleries[project].name) {
			console.log("gallery " + gallery_name + " found.");
			for (var image=0; image < galleries[project].images; image++) {
				var caption = galleries[project].captions[image];
				galleryDiv.innerHTML += '<a href="img/gallery/' + gallery_name + '/' + image + '.jpg" data-jgallery-album-title="' + 
				gallery_name + '"><img src="img/gallery/' + gallery_name + '/' + image + 'tn.jpg" alt="' + caption + '" /></a>';
			}
			$( "#gallery" ).jGallery( {
        "transitionCols":"1",
        "transitionRows":"1",
        "thumbnailsPosition":"left",
        "thumbType":"image",
        "backgroundColor":"34282C",
        "textColor":"FFFFFF",
        "mode":"standard",
        "width":"95%",
        "titleExpanded":true
		    } );
		} else {

		}
		}
	}
		
$('.gallery').click(function() {
	console.log("clicked");
	populateGallery($(this).attr('id'));
	return false;
});






