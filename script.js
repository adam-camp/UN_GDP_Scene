require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Legend",
      "esri/widgets/LayerList",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Legend, LayerList, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"7f77e1ca2dc64f528776e54a4f72eee1" 
        }
      });
      
      var camera = new Camera({
        position: [
          35, // lon
          15, // lat
          20000000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera
    });
  
    view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer = scene.layers.getItemAt(0);

        var legend = new Legend({
          view: view,
          style: "cards",
          layerInfos: [{
            layer: featureLayer,
            title: "G.D.P. in $ USD"
          }]
         }); 
       
   view.ui.add(legend, "bottom-left");
      
      var layerList = new LayerList({
  view: view
});
      view.ui.add(layerList, "bottom-right");
      
   });
   
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-right");
    
    [v1, v2, v3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    v1.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 15, //lon
          y: 32, //lat
          z: 5000000
        },
        tilt: 20,
        heading: 0
      });
    });
      
     v2.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 117.75, //lon
          y: 26.5, //lat
          z: 5000000
        },
        tilt: 20,
        heading: 0
      });
    });
   

    
     v3.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 250, //lon
          y: 18.25, //lat
          z: 10000000
        },
        tilt: 10,
        heading: 0
      });
    });

  

     });
