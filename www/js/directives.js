///*
angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(43.07493, -89.381388),
          zoom: 13,
		  disableDefaultUI: true
          //mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);
  
        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});
//*/

/* globals define, document */
/*
angular.module('starter.directives', [])
define([
  'app'
], function (app) {
  'use strict';

  app.directive('map', [
    function () {
      return {
        scope: {
			onCreate: '&'
        },
        restrict: 'E',
        link: function (scope, element) {
          function initialize() {
			var mapOptions = {
			  center: new google.maps.LatLng(43.07493, -89.381388),
			  zoom: 13,
			  //mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map($element[0], mapOptions);
	  
			$scope.onCreate({map: map});

			// Stop the side bar from dragging when mousedown/tapdown on the map
			google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
			  e.preventDefault();
			  return false;
			});
		  }

          function makeMapAndMarkers() {
            var mapOptions = {
                zoom: 13,
                disableDefaultUI: true
            };
            if (!map) {
              map = new $window.google.maps.Map(element[0], mapOptions);
            }
          }

          //load google maps api script async, avoiding 'document.write' error
          function injectGoogle() {
            var cbId,
                wf,
                s,
                apiKey;

            //callback id
            cbId = '_gmap_' + counter;
            $window[cbId] = makeMapAndMarkers;
            apiKey = 'key=' + "AlzaSyDGIUKbsMFHqsED0eQB53RL-jMopHVgJPo" + '&';
            wf = document.createElement('script');
            wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
                 '://maps.googleapis.com/maps/api/js?' + apiKey + 'v=3&sensor=true&callback=' + cbId;
            wf.type = 'text/javascript';
            wf.async = 'true';
            document.body.appendChild(wf);
          }

          if (!$window.google) {
            counter += 1;
            injectGoogle();
          } else {
            makeMapAndMarkers();
          }
        }
      };
    }
  ]);
});
*/