﻿

define("itmeric/scripts/helpers",
  function () {
	var exports = {};

	exports.serializeImage = function(image, cropperData) {
	  return ({
		  id: image.id ? image.id : new Date().getTime().toString(),
		  contentLink: image.contentLink,
		  contentReferenceId: image.contentGuid,
		  publicUrl: image.publicUrl,
		  cropDetails: cropperData
	  });
	}

	exports.getImageUrl = function (item, imageWidth) {
	  var imageUrl = item.publicUrl;

	  if (item.cropDetails != null)
		  imageUrl += "?crop=" +
			  item.cropDetails.x +
			  "," +
			  item.cropDetails.y +
			  "," +
			  (item.cropDetails.x + item.cropDetails.width) +
			  "," +
			  (item.cropDetails.y + item.cropDetails.height) +
			  "&width=" +
			  imageWidth;
	  else
		  imageUrl += "?width=" + imageWidth;

	  return imageUrl;
	}

	exports.preloadImage = function(url, callback) {

		var img = new Image();
		
		img.onload = callback;
		img.src = url;
	}

	return exports;
  });