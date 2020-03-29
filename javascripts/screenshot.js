
// Random File Name by Date and Time
function randomizeFileName() {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    return "puzzle-solver" + '_' + date + '_' + time;
    //return Math.floor((Math.random() * 1000000) + 1);
}

// Generate Screenshot
function generateScreenshot() {
    // Rename file
    var renameFile = randomizeFileName() + ".png";

    // html2canvas
	html2canvas(document.getElementById('areaScreenshot'), {
		onrendered: function(canvas) {
			$('#previewScreenshot').html("");
			$('#previewScreenshot').append(canvas);

			if (navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) {
				var blob = canvas.msToBlob();
				window.navigator.msSaveBlob(blob, renameFile);
			} else {
				$('#captureScreenshot').attr('href', canvas.toDataURL("image/png"));
				$('#captureScreenshot').attr('download', renameFile);
				$('#captureScreenshot')[0].click();
			}
		}
	});
}
