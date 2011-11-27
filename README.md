# fullscreen.js

On a website with a cool HTML 5 video, but the fuckers didn't
make a fullscreen option? I hate that!

No more. Add a <a href="javascript:(function(s){s.src='http://cloud.github.com/downloads/rudiedirkx/fullscreen.js/fullscreen.js';document.head.appendChild(s);})(document.createElement('script'));void(0);">bookmarklet with the following URL</a>:

    javascript:(function(s){s.src='http://cloud.github.com/downloads/rudiedirkx/fullscreen.js/fullscreen.js';document.head.appendChild(s);})(document.createElement('script'));void(0);

Add this bookmarklet and turn every HTML 5 video into fullscreen.

Not using Chrome 15+? SUCKS!

## Known issues

* For some reason the `video.webkitExitFullScreen()` doesn't work.
  Don't know why, but for now it's commented out. Chrome 15+ has
  a native ESC escape from fullscreen video, so it's not really
  necessary anyway.
