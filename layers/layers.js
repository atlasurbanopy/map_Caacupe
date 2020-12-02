var wms_layers = [];

var format_U_03_01_BL_05_20_12_01_0 = new ol.format.GeoJSON();
var features_U_03_01_BL_05_20_12_01_0 = format_U_03_01_BL_05_20_12_01_0.readFeatures(json_U_03_01_BL_05_20_12_01_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_BL_05_20_12_01_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_BL_05_20_12_01_0.addFeatures(features_U_03_01_BL_05_20_12_01_0);
var lyr_U_03_01_BL_05_20_12_01_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_BL_05_20_12_01_0, 
                style: style_U_03_01_BL_05_20_12_01_0,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_BL_05_20_12_01_0.png" /> U_03_01_BL_05_20_12_01'
            });
var format_U_03_01_BL_04_20_12_01_1 = new ol.format.GeoJSON();
var features_U_03_01_BL_04_20_12_01_1 = format_U_03_01_BL_04_20_12_01_1.readFeatures(json_U_03_01_BL_04_20_12_01_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_BL_04_20_12_01_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_BL_04_20_12_01_1.addFeatures(features_U_03_01_BL_04_20_12_01_1);
var lyr_U_03_01_BL_04_20_12_01_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_BL_04_20_12_01_1, 
                style: style_U_03_01_BL_04_20_12_01_1,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_BL_04_20_12_01_1.png" /> U_03_01_BL_04_20_12_01'
            });
var format_U_03_01_BL_03_20_12_01_2 = new ol.format.GeoJSON();
var features_U_03_01_BL_03_20_12_01_2 = format_U_03_01_BL_03_20_12_01_2.readFeatures(json_U_03_01_BL_03_20_12_01_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_BL_03_20_12_01_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_BL_03_20_12_01_2.addFeatures(features_U_03_01_BL_03_20_12_01_2);
var lyr_U_03_01_BL_03_20_12_01_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_BL_03_20_12_01_2, 
                style: style_U_03_01_BL_03_20_12_01_2,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_BL_03_20_12_01_2.png" /> U_03_01_BL_03_20_12_01'
            });
var format_U_03_01_BL_02_20_12_01_3 = new ol.format.GeoJSON();
var features_U_03_01_BL_02_20_12_01_3 = format_U_03_01_BL_02_20_12_01_3.readFeatures(json_U_03_01_BL_02_20_12_01_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_BL_02_20_12_01_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_BL_02_20_12_01_3.addFeatures(features_U_03_01_BL_02_20_12_01_3);
var lyr_U_03_01_BL_02_20_12_01_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_BL_02_20_12_01_3, 
                style: style_U_03_01_BL_02_20_12_01_3,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_BL_02_20_12_01_3.png" /> U_03_01_BL_02_20_12_01'
            });
var format_U_03_01_BL_01_20_12_01_4 = new ol.format.GeoJSON();
var features_U_03_01_BL_01_20_12_01_4 = format_U_03_01_BL_01_20_12_01_4.readFeatures(json_U_03_01_BL_01_20_12_01_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_BL_01_20_12_01_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_BL_01_20_12_01_4.addFeatures(features_U_03_01_BL_01_20_12_01_4);
var lyr_U_03_01_BL_01_20_12_01_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_BL_01_20_12_01_4, 
                style: style_U_03_01_BL_01_20_12_01_4,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_BL_01_20_12_01_4.png" /> U_03_01_BL_01_20_12_01'
            });
var format_U_03_01_B_YES_20_12_01_5 = new ol.format.GeoJSON();
var features_U_03_01_B_YES_20_12_01_5 = format_U_03_01_B_YES_20_12_01_5.readFeatures(json_U_03_01_B_YES_20_12_01_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_B_YES_20_12_01_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_B_YES_20_12_01_5.addFeatures(features_U_03_01_B_YES_20_12_01_5);
var lyr_U_03_01_B_YES_20_12_01_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_B_YES_20_12_01_5, 
                style: style_U_03_01_B_YES_20_12_01_5,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_B_YES_20_12_01_5.png" /> U_03_01_B_YES_20_12_01'
            });
var format_U_03_01_BU_UNK_20_12_01_6 = new ol.format.GeoJSON();
var features_U_03_01_BU_UNK_20_12_01_6 = format_U_03_01_BU_UNK_20_12_01_6.readFeatures(json_U_03_01_BU_UNK_20_12_01_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_BU_UNK_20_12_01_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_BU_UNK_20_12_01_6.addFeatures(features_U_03_01_BU_UNK_20_12_01_6);
var lyr_U_03_01_BU_UNK_20_12_01_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_BU_UNK_20_12_01_6, 
                style: style_U_03_01_BU_UNK_20_12_01_6,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_BU_UNK_20_12_01_6.png" /> U_03_01_BU_UNK_20_12_01'
            });
var format_U_03_01_B_MIX_20_12_01_7 = new ol.format.GeoJSON();
var features_U_03_01_B_MIX_20_12_01_7 = format_U_03_01_B_MIX_20_12_01_7.readFeatures(json_U_03_01_B_MIX_20_12_01_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_B_MIX_20_12_01_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_B_MIX_20_12_01_7.addFeatures(features_U_03_01_B_MIX_20_12_01_7);
var lyr_U_03_01_B_MIX_20_12_01_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_B_MIX_20_12_01_7, 
                style: style_U_03_01_B_MIX_20_12_01_7,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_B_MIX_20_12_01_7.png" /> U_03_01_B_MIX_20_12_01'
            });
var format_U_03_01_B_IND_20_12_01_8 = new ol.format.GeoJSON();
var features_U_03_01_B_IND_20_12_01_8 = format_U_03_01_B_IND_20_12_01_8.readFeatures(json_U_03_01_B_IND_20_12_01_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_B_IND_20_12_01_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_B_IND_20_12_01_8.addFeatures(features_U_03_01_B_IND_20_12_01_8);
var lyr_U_03_01_B_IND_20_12_01_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_B_IND_20_12_01_8, 
                style: style_U_03_01_B_IND_20_12_01_8,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_B_IND_20_12_01_8.png" /> U_03_01_B_IND_20_12_01'
            });
var format_U_03_01_B_GPR_20_12_01_9 = new ol.format.GeoJSON();
var features_U_03_01_B_GPR_20_12_01_9 = format_U_03_01_B_GPR_20_12_01_9.readFeatures(json_U_03_01_B_GPR_20_12_01_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_B_GPR_20_12_01_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_B_GPR_20_12_01_9.addFeatures(features_U_03_01_B_GPR_20_12_01_9);
var lyr_U_03_01_B_GPR_20_12_01_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_B_GPR_20_12_01_9, 
                style: style_U_03_01_B_GPR_20_12_01_9,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_B_GPR_20_12_01_9.png" /> U_03_01_B_GPR_20_12_01'
            });
var format_U_03_01_B_GPU_20_12_01_10 = new ol.format.GeoJSON();
var features_U_03_01_B_GPU_20_12_01_10 = format_U_03_01_B_GPU_20_12_01_10.readFeatures(json_U_03_01_B_GPU_20_12_01_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_B_GPU_20_12_01_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_B_GPU_20_12_01_10.addFeatures(features_U_03_01_B_GPU_20_12_01_10);
var lyr_U_03_01_B_GPU_20_12_01_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_B_GPU_20_12_01_10, 
                style: style_U_03_01_B_GPU_20_12_01_10,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_B_GPU_20_12_01_10.png" /> U_03_01_B_GPU_20_12_01'
            });
var format_U_03_01_B_COM_20_12_01_11 = new ol.format.GeoJSON();
var features_U_03_01_B_COM_20_12_01_11 = format_U_03_01_B_COM_20_12_01_11.readFeatures(json_U_03_01_B_COM_20_12_01_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_B_COM_20_12_01_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_B_COM_20_12_01_11.addFeatures(features_U_03_01_B_COM_20_12_01_11);
var lyr_U_03_01_B_COM_20_12_01_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_B_COM_20_12_01_11, 
                style: style_U_03_01_B_COM_20_12_01_11,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_B_COM_20_12_01_11.png" /> U_03_01_B_COM_20_12_01'
            });
var format_U_03_01_B_RES_20_12_01_12 = new ol.format.GeoJSON();
var features_U_03_01_B_RES_20_12_01_12 = format_U_03_01_B_RES_20_12_01_12.readFeatures(json_U_03_01_B_RES_20_12_01_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_U_03_01_B_RES_20_12_01_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_U_03_01_B_RES_20_12_01_12.addFeatures(features_U_03_01_B_RES_20_12_01_12);
var lyr_U_03_01_B_RES_20_12_01_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_U_03_01_B_RES_20_12_01_12, 
                style: style_U_03_01_B_RES_20_12_01_12,
                interactive: true,
                title: '<img src="styles/legend/U_03_01_B_RES_20_12_01_12.png" /> U_03_01_B_RES_20_12_01'
            });

lyr_U_03_01_BL_05_20_12_01_0.setVisible(true);lyr_U_03_01_BL_04_20_12_01_1.setVisible(true);lyr_U_03_01_BL_03_20_12_01_2.setVisible(true);lyr_U_03_01_BL_02_20_12_01_3.setVisible(true);lyr_U_03_01_BL_01_20_12_01_4.setVisible(true);lyr_U_03_01_B_YES_20_12_01_5.setVisible(true);lyr_U_03_01_BU_UNK_20_12_01_6.setVisible(true);lyr_U_03_01_B_MIX_20_12_01_7.setVisible(true);lyr_U_03_01_B_IND_20_12_01_8.setVisible(true);lyr_U_03_01_B_GPR_20_12_01_9.setVisible(true);lyr_U_03_01_B_GPU_20_12_01_10.setVisible(true);lyr_U_03_01_B_COM_20_12_01_11.setVisible(true);lyr_U_03_01_B_RES_20_12_01_12.setVisible(true);
var layersList = [lyr_U_03_01_BL_05_20_12_01_0,lyr_U_03_01_BL_04_20_12_01_1,lyr_U_03_01_BL_03_20_12_01_2,lyr_U_03_01_BL_02_20_12_01_3,lyr_U_03_01_BL_01_20_12_01_4,lyr_U_03_01_B_YES_20_12_01_5,lyr_U_03_01_BU_UNK_20_12_01_6,lyr_U_03_01_B_MIX_20_12_01_7,lyr_U_03_01_B_IND_20_12_01_8,lyr_U_03_01_B_GPR_20_12_01_9,lyr_U_03_01_B_GPU_20_12_01_10,lyr_U_03_01_B_COM_20_12_01_11,lyr_U_03_01_B_RES_20_12_01_12];
lyr_U_03_01_BL_05_20_12_01_0.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'tourism': 'tourism', });
lyr_U_03_01_BL_04_20_12_01_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', 'name': 'name', 'shop': 'shop', 'amenity': 'amenity', });
lyr_U_03_01_BL_03_20_12_01_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'amenity': 'amenity', 'name': 'name', 'tourism': 'tourism', 'building_u': 'building_u', });
lyr_U_03_01_BL_02_20_12_01_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'amenity': 'amenity', 'name': 'name', 'building_u': 'building_u', 'leisure': 'leisure', 'tourism': 'tourism', 'dispensing': 'dispensing', 'healthcare': 'healthcare', 'government': 'government', 'office': 'office', });
lyr_U_03_01_BL_01_20_12_01_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', 'denominati': 'denominati', 'religion': 'religion', 'name': 'name', 'shop': 'shop', 'dispensing': 'dispensing', 'healthcare': 'healthcare', });
lyr_U_03_01_B_YES_20_12_01_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'addr_house': 'addr_house', 'leisure': 'leisure', 'name': 'name', 'sport': 'sport', 'amenity': 'amenity', 'building_u': 'building_u', 'religion': 'religion', 'shop': 'shop', 'man_made': 'man_made', 'building_l': 'building_l', 'denominati': 'denominati', 'tourism': 'tourism', 'dispensing': 'dispensing', 'healthcare': 'healthcare', 'operator': 'operator', 'fuente': 'fuente', 'landuse': 'landuse', 'place': 'place', });
lyr_U_03_01_BU_UNK_20_12_01_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', });
lyr_U_03_01_B_MIX_20_12_01_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'amenity': 'amenity', 'name': 'name', 'building_u': 'building_u', });
lyr_U_03_01_B_IND_20_12_01_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'building_l': 'building_l', });
lyr_U_03_01_B_GPR_20_12_01_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'denominati': 'denominati', 'name': 'name', 'building_l': 'building_l', 'amenity': 'amenity', 'leisure': 'leisure', 'tourism': 'tourism', 'religion': 'religion', });
lyr_U_03_01_B_GPU_20_12_01_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', 'denominati': 'denominati', 'religion': 'religion', 'name': 'name', 'government': 'government', 'office': 'office', });
lyr_U_03_01_B_COM_20_12_01_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', 'name': 'name', 'shop': 'shop', 'amenity': 'amenity', 'dispensing': 'dispensing', 'healthcare': 'healthcare', });
lyr_U_03_01_B_RES_20_12_01_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'building_u': 'building_u', });
lyr_U_03_01_BL_05_20_12_01_0.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'tourism': 'TextEdit', });
lyr_U_03_01_BL_04_20_12_01_1.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_u': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', 'amenity': 'TextEdit', });
lyr_U_03_01_BL_03_20_12_01_2.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'tourism': 'TextEdit', 'building_u': 'TextEdit', });
lyr_U_03_01_BL_02_20_12_01_3.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'building_u': 'TextEdit', 'leisure': 'TextEdit', 'tourism': 'TextEdit', 'dispensing': 'TextEdit', 'healthcare': 'TextEdit', 'government': 'TextEdit', 'office': 'TextEdit', });
lyr_U_03_01_BL_01_20_12_01_4.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_u': 'TextEdit', 'denominati': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', 'dispensing': 'TextEdit', 'healthcare': 'TextEdit', });
lyr_U_03_01_B_YES_20_12_01_5.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'type': 'TextEdit', 'addr_house': 'TextEdit', 'leisure': 'TextEdit', 'name': 'TextEdit', 'sport': 'TextEdit', 'amenity': 'TextEdit', 'building_u': 'TextEdit', 'religion': 'TextEdit', 'shop': 'TextEdit', 'man_made': 'TextEdit', 'building_l': 'TextEdit', 'denominati': 'TextEdit', 'tourism': 'TextEdit', 'dispensing': 'TextEdit', 'healthcare': 'TextEdit', 'operator': 'TextEdit', 'fuente': 'TextEdit', 'landuse': 'TextEdit', 'place': 'TextEdit', });
lyr_U_03_01_BU_UNK_20_12_01_6.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_u': 'TextEdit', });
lyr_U_03_01_B_MIX_20_12_01_7.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'building_u': 'TextEdit', });
lyr_U_03_01_B_IND_20_12_01_8.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'building_l': 'TextEdit', });
lyr_U_03_01_B_GPR_20_12_01_9.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'denominati': 'TextEdit', 'name': 'TextEdit', 'building_l': 'TextEdit', 'amenity': 'TextEdit', 'leisure': 'TextEdit', 'tourism': 'TextEdit', 'religion': 'TextEdit', });
lyr_U_03_01_B_GPU_20_12_01_10.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_u': 'TextEdit', 'denominati': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'government': 'TextEdit', 'office': 'TextEdit', });
lyr_U_03_01_B_COM_20_12_01_11.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_u': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', 'amenity': 'TextEdit', 'dispensing': 'TextEdit', 'healthcare': 'TextEdit', });
lyr_U_03_01_B_RES_20_12_01_12.set('fieldImages', {'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_u': 'TextEdit', });
lyr_U_03_01_BL_05_20_12_01_0.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'tourism': 'no label', });
lyr_U_03_01_BL_04_20_12_01_1.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', 'name': 'no label', 'shop': 'no label', 'amenity': 'no label', });
lyr_U_03_01_BL_03_20_12_01_2.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'amenity': 'no label', 'name': 'no label', 'tourism': 'no label', 'building_u': 'no label', });
lyr_U_03_01_BL_02_20_12_01_3.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'amenity': 'no label', 'name': 'no label', 'building_u': 'no label', 'leisure': 'no label', 'tourism': 'no label', 'dispensing': 'no label', 'healthcare': 'no label', 'government': 'no label', 'office': 'no label', });
lyr_U_03_01_BL_01_20_12_01_4.set('fieldLabels', {'osm_type': 'no label', 'amenity': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', 'denominati': 'no label', 'religion': 'no label', 'name': 'no label', 'shop': 'no label', 'dispensing': 'no label', 'healthcare': 'no label', });
lyr_U_03_01_B_YES_20_12_01_5.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'addr_house': 'no label', 'leisure': 'no label', 'name': 'no label', 'sport': 'no label', 'amenity': 'no label', 'building_u': 'no label', 'religion': 'no label', 'shop': 'no label', 'man_made': 'no label', 'building_l': 'no label', 'denominati': 'no label', 'tourism': 'no label', 'dispensing': 'no label', 'healthcare': 'no label', 'operator': 'no label', 'fuente': 'no label', 'landuse': 'no label', 'place': 'no label', });
lyr_U_03_01_BU_UNK_20_12_01_6.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', });
lyr_U_03_01_B_MIX_20_12_01_7.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'amenity': 'no label', 'name': 'no label', 'building_u': 'no label', });
lyr_U_03_01_B_IND_20_12_01_8.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'building_l': 'no label', });
lyr_U_03_01_B_GPR_20_12_01_9.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'denominati': 'no label', 'name': 'no label', 'building_l': 'no label', 'amenity': 'no label', 'leisure': 'no label', 'tourism': 'no label', 'religion': 'no label', });
lyr_U_03_01_B_GPU_20_12_01_10.set('fieldLabels', {'osm_type': 'no label', 'amenity': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', 'denominati': 'no label', 'religion': 'no label', 'name': 'no label', 'government': 'no label', 'office': 'no label', });
lyr_U_03_01_B_COM_20_12_01_11.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', 'name': 'no label', 'shop': 'no label', 'amenity': 'no label', 'dispensing': 'no label', 'healthcare': 'no label', });
lyr_U_03_01_B_RES_20_12_01_12.set('fieldLabels', {'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_u': 'no label', });
lyr_U_03_01_B_RES_20_12_01_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});