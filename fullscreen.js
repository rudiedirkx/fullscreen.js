
for ( var V = document.querySelectorAll('video'), L = V.length, i=0; i<L; i++ ) {
	if ( !V[i].fullscreened ) {
		V[i].addEventListener('dblclick', function(e) {
//			if ( !this.totallyFullscreen ) {
				this.webkitRequestFullScreen && this.webkitRequestFullScreen()
				this.totallyFullscreen = true
//			}
//			else {
//				this.webkitExitFullScreen && this.webkitExitFullScreen()
//				this.totallyFullscreen = false
//			}
		})
		V[i].fullscreened = true
	}
}
