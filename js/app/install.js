define(["require","jquery","install"],function(e){function r(e,t){function n(){req1=navigator.mozApps.getSelf(),req1.onsuccess=function(){req1.result===null?r():e(req1.result)},req1.onerror=function(){r()}}function r(){req2=navigator.mozApps.getInstalled(),req2.onsuccess=function(){var t=null,n=window.location.protocol+"//"+window.location.host;req2.result!==null&&req2.result.forEach(function(e){e.origin==n&&(t=e)}),e(t)},req2.onerror=t}n()}function i(){t(function(){var e=t(".install-btn");n.state=="uninstalled"?e.show():(n.state=="installed"||n.state=="unsupported")&&e.hide(),t(".uninstall-btn").hide(),r(function(e){e===null?t(".uninstall-btn").hide():(t(".uninstall-btn").show(),t(".install-btn").hide())})})}function s(){t(".install-error").html("UNINSTALL ERROR: retry later.")}function o(){n.state="uninstalled",i(),t(".install-error").html("UNINSTALL: app removed.")}function u(){return r(function(e){var t=e.uninstall();t.onsuccess=o,t.onerror=s},s),!1}var t=e("jquery"),n=e("install");t(function(){t(".install-btn").click(n),t(".uninstall-btn").click(u),i()}),n.on("change",i),n.on("error",function(e,n){t(".install-error").text(n.toString()).show()}),n.on("showiOSInstall",function(){var e=t(".install-ios-msg");e.show(),setTimeout(function(){e.hide()},8e3)})})