var wms_layers = [];

var format_Lvil_boundary_0 = new ol.format.GeoJSON();
var features_Lvil_boundary_0 = format_Lvil_boundary_0.readFeatures(json_Lvil_boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lvil_boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lvil_boundary_0.addFeatures(features_Lvil_boundary_0);
var lyr_Lvil_boundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lvil_boundary_0, 
                style: style_Lvil_boundary_0,
                interactive: true,
                title: '<img src="styles/legend/Lvil_boundary_0.png" /> Lvil_boundary'
            });
var format_landuse_boundary_1 = new ol.format.GeoJSON();
var features_landuse_boundary_1 = format_landuse_boundary_1.readFeatures(json_landuse_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_boundary_1.addFeatures(features_landuse_boundary_1);
var lyr_landuse_boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_landuse_boundary_1, 
                style: style_landuse_boundary_1,
                interactive: true,
                title: '<img src="styles/legend/landuse_boundary_1.png" /> landuse_boundary'
            });
var format_flood_hazardboundary_2 = new ol.format.GeoJSON();
var features_flood_hazardboundary_2 = format_flood_hazardboundary_2.readFeatures(json_flood_hazardboundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flood_hazardboundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flood_hazardboundary_2.addFeatures(features_flood_hazardboundary_2);
var lyr_flood_hazardboundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_flood_hazardboundary_2, 
                style: style_flood_hazardboundary_2,
                interactive: true,
                title: '<img src="styles/legend/flood_hazardboundary_2.png" /> flood_hazardboundary'
            });
var format_floodriskzone_boundary_3 = new ol.format.GeoJSON();
var features_floodriskzone_boundary_3 = format_floodriskzone_boundary_3.readFeatures(json_floodriskzone_boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_floodriskzone_boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_floodriskzone_boundary_3.addFeatures(features_floodriskzone_boundary_3);
var lyr_floodriskzone_boundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_floodriskzone_boundary_3, 
                style: style_floodriskzone_boundary_3,
                interactive: true,
                title: '<img src="styles/legend/floodriskzone_boundary_3.png" /> floodriskzone_boundary'
            });
var format_boundary_district_4 = new ol.format.GeoJSON();
var features_boundary_district_4 = format_boundary_district_4.readFeatures(json_boundary_district_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_district_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_district_4.addFeatures(features_boundary_district_4);
var lyr_boundary_district_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_district_4, 
                style: style_boundary_district_4,
                interactive: true,
                title: '<img src="styles/legend/boundary_district_4.png" /> boundary_district'
            });
var format_boundary_tehsil_5 = new ol.format.GeoJSON();
var features_boundary_tehsil_5 = format_boundary_tehsil_5.readFeatures(json_boundary_tehsil_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_tehsil_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_tehsil_5.addFeatures(features_boundary_tehsil_5);
var lyr_boundary_tehsil_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_tehsil_5, 
                style: style_boundary_tehsil_5,
                interactive: true,
                title: '<img src="styles/legend/boundary_tehsil_5.png" /> boundary_tehsil'
            });
var format_floodarea_area_6 = new ol.format.GeoJSON();
var features_floodarea_area_6 = format_floodarea_area_6.readFeatures(json_floodarea_area_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_floodarea_area_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_floodarea_area_6.addFeatures(features_floodarea_area_6);
var lyr_floodarea_area_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_floodarea_area_6, 
                style: style_floodarea_area_6,
                interactive: true,
    title: 'floodarea_area<br />\
    <img src="styles/legend/floodarea_area_6_0.png" /> 3 - 238<br />\
    <img src="styles/legend/floodarea_area_6_1.png" /> 238 - 381<br />\
    <img src="styles/legend/floodarea_area_6_2.png" /> 381 - 577<br />\
    <img src="styles/legend/floodarea_area_6_3.png" /> 577 - 909<br />\
    <img src="styles/legend/floodarea_area_6_4.png" /> 909 - 2868<br />'
        });
var format_floodprone_area_7 = new ol.format.GeoJSON();
var features_floodprone_area_7 = format_floodprone_area_7.readFeatures(json_floodprone_area_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_floodprone_area_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_floodprone_area_7.addFeatures(features_floodprone_area_7);cluster_floodprone_area_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_floodprone_area_7
});
var lyr_floodprone_area_7 = new ol.layer.Vector({
                declutter: true,
                source:cluster_floodprone_area_7, 
                style: style_floodprone_area_7,
                interactive: true,
                title: '<img src="styles/legend/floodprone_area_7.png" /> floodprone_area'
            });

lyr_Lvil_boundary_0.setVisible(true);lyr_landuse_boundary_1.setVisible(true);lyr_flood_hazardboundary_2.setVisible(true);lyr_floodriskzone_boundary_3.setVisible(true);lyr_boundary_district_4.setVisible(true);lyr_boundary_tehsil_5.setVisible(true);lyr_floodarea_area_6.setVisible(true);lyr_floodprone_area_7.setVisible(true);
var layersList = [lyr_Lvil_boundary_0,lyr_landuse_boundary_1,lyr_flood_hazardboundary_2,lyr_floodriskzone_boundary_3,lyr_boundary_district_4,lyr_boundary_tehsil_5,lyr_floodarea_area_6,lyr_floodprone_area_7];
lyr_Lvil_boundary_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Village': 'Village', });
lyr_landuse_boundary_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_flood_hazardboundary_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Flood_Haza': 'Flood_Haza', });
lyr_floodriskzone_boundary_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Flood_Haza': 'Flood_Haza', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_boundary_district_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_boundary_tehsil_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Tehsil': 'Tehsil', 'Population': 'Population', });
lyr_floodarea_area_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Area1': 'Area1', 'Population': 'Population', 'Populati_1': 'Populati_1', 'Children1': 'Children1', 'Pregnant_W': 'Pregnant_W', 'Literacy1': 'Literacy1', 'Non_Workin': 'Non_Workin', });
lyr_floodprone_area_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Villages_N': 'Villages_N', 'TEST': 'TEST', });
lyr_Lvil_boundary_0.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Village': 'TextEdit', });
lyr_landuse_boundary_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_flood_hazardboundary_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Flood_Haza': 'TextEdit', });
lyr_floodriskzone_boundary_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Flood_Haza': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_boundary_district_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_boundary_tehsil_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Tehsil': 'TextEdit', 'Population': 'TextEdit', });
lyr_floodarea_area_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Area1': 'Range', 'Population': 'Range', 'Populati_1': 'Range', 'Children1': 'Range', 'Pregnant_W': 'Range', 'Literacy1': 'Range', 'Non_Workin': 'Range', });
lyr_floodprone_area_7.set('fieldImages', {'OBJECTID': '', 'Villages_N': '', 'TEST': '', });
lyr_Lvil_boundary_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', 'Village': 'no label', });
lyr_landuse_boundary_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_flood_hazardboundary_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', 'Flood_Haza': 'no label', });
lyr_floodriskzone_boundary_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Flood_Haza': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_boundary_district_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_boundary_tehsil_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'header label', 'OBJECTID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', 'Tehsil': 'no label', 'Population': 'no label', });
lyr_floodarea_area_6.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Area1': 'inline label', 'Population': 'inline label', 'Populati_1': 'inline label', 'Children1': 'inline label', 'Pregnant_W': 'inline label', 'Literacy1': 'inline label', 'Non_Workin': 'inline label', });
lyr_floodprone_area_7.set('fieldLabels', {'OBJECTID': 'no label', 'Villages_N': 'no label', 'TEST': 'no label', });
lyr_floodprone_area_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});