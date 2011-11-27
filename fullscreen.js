
for ( var V = document.querySelectorAll('video'), L = V.length, i=0; i<L; i++ ) {
	if ( !V[i].fullscreened ) {
		V[i].addEventListener('dblclick', function(e) {
//console.log(document.webkitIsFullScreen)
			if ( !document.webkitIsFullScreen ) {
				this.webkitRequestFullScreen && this.webkitRequestFullScreen()
			}
			else {
//console.log(document.webkitCancelFullScreen)
				document.webkitCancelFullScreen && document.webkitCancelFullScreen()
			}
		})
		V[i].fullscreened = true
	}
}
