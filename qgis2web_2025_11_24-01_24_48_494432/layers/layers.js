var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '国土地理院標準地図',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
            })
        });
var format_map_1 = new ol.format.GeoJSON();
var features_map_1 = format_map_1.readFeatures(json_map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_map_1.addFeatures(features_map_1);
var lyr_map_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_map_1, 
                style: style_map_1,
                popuplayertitle: '旧仙台市町丁map',
                interactive: true,
                title: '<img src="styles/legend/map_1.png" /> 旧仙台市町丁map'
            });

lyr__0.setVisible(true);lyr_map_1.setVisible(true);
var layersList = [lyr__0,lyr_map_1];
lyr_map_1.set('fieldAliases', {'tyoutyou': 'tyoutyou', 'number': 'number', });
lyr_map_1.set('fieldImages', {'tyoutyou': 'TextEdit', 'number': '', });
lyr_map_1.set('fieldLabels', {'tyoutyou': 'no label', 'number': 'hidden field', });
lyr_map_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});