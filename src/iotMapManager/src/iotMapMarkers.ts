/*
* Software Name : IotMapManager
* Version: 0.5.11
* SPDX-FileCopyrightText: Copyright (c) 2020 Orange
* SPDX-License-Identifier: MIT
*
* This software is distributed under the MIT License,
* the text of which is available at https://github.com/Orange-OpenSource/IOT-Map-Component/blob/master/LICENSE
* or see the "license.txt" file for more details.
*
* Author: S. Gateau
* Software description: provide markers, tabs, clusters and paths dedicated to iot projects using mapping
*/

import * as L from 'leaflet';
import {IotMapManagerConfig} from './iotMapManagerConfig';
import {IotMarker, ShapeType} from './iotMapManagerTypes';
import {IotMapCommonSvg} from './iotMapCommonSvg';


export class IotMapMarkers {
  private config: IotMapManagerConfig = IotMapManagerConfig.getConfig();

  public getMarkerIcon(marker: IotMarker, selected = false): L.DivIcon {
    let html: string;

    // default values
    if (!marker.shape) {
      marker.shape = JSON.parse(JSON.stringify(this.config.markers.default.shape));
    }
    if (marker.shape.type === undefined) {
      marker.shape.type = this.config.markers.default.shape.type;
    }
    if (marker.shape.plain === undefined) {
      marker.shape.plain = this.config.markers.default.shape.plain;
    }
    if (marker.shape.anchored === undefined) {
      marker.shape.anchored = this.config.markers.default.shape.anchored;
    }
    if (marker.shape.color === undefined) {
      marker.shape.color = this.config.markers.default.shape.color;
    }

    // is template valid ?
    if (marker.template !== undefined) {
      const template = this.config.markerTemplates[marker.template];
      if (template === undefined) {
        marker.template = undefined;
      } else {  // update marker with template info
        if (template.layer !== undefined) {
          marker.layer = template.layer;
        }
        if (template.popup !== undefined) {
          if (!marker.popup !== undefined) {
            marker.popup = {};
          }
          if (template.popup.title !== undefined) {
            marker.popup.title = template.popup.title;
          }
          if (template.popup.body !== undefined) {
            marker.popup.body = template.popup.body;
          }
        }
        if (template.shape !== undefined) {
          if (template.shape.type !== undefined) {
            marker.shape.type = template.shape.type;
          }
          if (template.shape.anchored !== undefined) {
            marker.shape.anchored = template.shape.anchored;
          }
          if (template.shape.plain !== undefined) {
            marker.shape.plain = template.shape.plain;
          }
          if (template.shape.color !== undefined) {
            marker.shape.color = template.shape.color;
          }
          if (template.shape.percent !== undefined) {
            marker.shape.percent = template.shape.percent;
          }
          if (template.shape.accuracy !== undefined) {
            marker.shape.accuracy = template.shape.accuracy;
          }
        }
        if (template.inner !== undefined) {
          if (marker.inner === undefined) {
            marker.inner = {};
          }
          if (template.inner.color !== undefined) {
            marker.inner.color = template.inner.color;
          }
          if (template.inner.icon !== undefined) {
            marker.inner.icon = template.inner.icon;
          } else if (template.inner.label !== undefined) {
            marker.inner.label = template.inner.label;
          }
        }
      }
    }

    // is status valid ?
    if (marker.status !== undefined) {
      const status = this.config.markerStatus[marker.status];
      if (status === undefined) {
        marker.status = undefined;
      } else {  // update marker with status info
        if (status.layer !== undefined) {
          marker.layer = status.layer;
        }
        if (status.popup !== undefined) {
          if (marker.popup === undefined) {
            marker.popup = {};
          }
          if (status.popup.title !== undefined) {
            marker.popup.title = status.popup.title;
          }
          if (status.popup.body !== undefined) {
            marker.popup.body = status.popup.body;
          }
        }
        if (status.shape !== undefined) {
          if (status.shape.type !== undefined) {
            marker.shape.type = status.shape.type;
          }
          if (status.shape.anchored !== undefined) {
            marker.shape.anchored = status.shape.anchored;
          }
          if (status.shape.plain !== undefined) {
            marker.shape.plain = status.shape.plain;
          }
          if (status.shape.color !== undefined) {
            marker.shape.color = status.shape.color;
          }
          if (status.shape.percent !== undefined) {
            marker.shape.percent = status.shape.percent;
          }
          if (status.shape.accuracy !== undefined) {
            marker.shape.accuracy = status.shape.accuracy;
          }
        }
        if (status.inner !== undefined) {
          if (marker.inner === undefined) {
            marker.inner = {};
          }
          if (status.inner.color !== undefined) {
            marker.inner.color = status.inner.color;
          }
          if (status.inner.icon !== undefined) {
            marker.inner.icon = status.inner.icon;
          } else if (status.inner.label !== undefined) {
            marker.inner.label = status.inner.label;
          }
        }
      }
    }

    html = this.getSvg(marker, selected);

    // sizing
    const size = this.config.markers.size;
    const markerSize = (selected)
      ? size.selected
      : ((marker.shape.type === ShapeType.circle) ? size.unselectedCircle : size.unselectedSquare);
    const iconSize: L.Point = L.point(size.fullSvgWidth, size.fullSvgHeight);

    let iconAnchor: L.Point = L.point(size.fullSvgWidth / 2, size.fullSvgHeight / 2); // by default = center
    if (marker.shape.anchored || selected) {
      const height = (size.fullSvgHeight + markerSize.svgHeight) / 2 + markerSize.anchoredHeight;
      iconAnchor = L.point(size.fullSvgWidth / 2, height);
    }

    // creating icon
    return new L.DivIcon({
        className: 'my-custom-pin',
        iconSize:     iconSize, // size of the icon
        iconAnchor:   iconAnchor, // point of the icon which will correspond to marker's location
        html: html
      });
  }

  private getSvg(marker: IotMarker, selected: boolean): string {
    // shape
    let svgShape: string;
    let svgBG: string;
    let svgBorder: string;
    let svgGauge: string;
    let shadowFile = './assets/img/';

    const commonSvg = (marker.shape.type === ShapeType.circle) ? IotMapCommonSvg.circle : IotMapCommonSvg.square;
    if (marker.shape.color === undefined) {
      marker.shape.color = this.config.markers.default.shape.color;
    }
    const funColor = (marker.shape.percent !== undefined) ? 'white' : marker.shape.color;

    // shape
    if (selected) {   // Only anchored markers can be selected
      if (marker.shape.type === ShapeType.poi || marker.shape.plain) {  // STD
        svgShape = commonSvg.selStdColour + ` fill='` + funColor + `'/>`;
      } else {  // FUN
        svgShape = commonSvg.selFunColour + ` fill='` + funColor + `'/>`;
        svgBG = commonSvg.selFunBg;
      }
      shadowFile += commonSvg.selShadow;
    } else if (marker.shape.type === ShapeType.poi || marker.shape.plain) {  // STD
      if (marker.shape.anchored) {
        svgBorder = commonSvg.pinBorder;
        svgShape = commonSvg.pinStdColour + ` fill='` + funColor + `'/>`;
        shadowFile += commonSvg.pinShadow;
      } else { // FUN
        svgBorder = commonSvg.border;
        svgShape = commonSvg.stdColour + ` fill='` + funColor + `'/>`;
        shadowFile += commonSvg.shadow;
      }
    } else {  // FUN
      if (marker.shape.anchored) {
        svgBorder = commonSvg.pinBorder;
        svgShape = commonSvg.pinFunColour + ` fill='` + funColor + `'/>`;
        svgBG = commonSvg.pinFunBg;
        shadowFile += commonSvg.pinShadow;
      } else {
        svgBorder = commonSvg.border;
        svgShape = commonSvg.funColour + funColor + `'/>`;
        shadowFile += commonSvg.shadow;
        svgBG = commonSvg.funBg;
      }
    }

    // inner
    let innerDesign = '';
    const conf = (selected)
      ? this.config.markers.size.selected
      : ((marker.shape.type === ShapeType.circle)
            ? this.config.markers.size.unselectedCircle
            : this.config.markers.size.unselectedSquare);

    if (marker.inner) {
      const innerColor = (marker.inner.color !== undefined) ? marker.inner.color : this.config.markers.default.inner.color;

      if (marker.inner.icon) {  // icon
        innerDesign = `<span class='` + marker.inner.icon + ((selected) ? ' iconSelected' : ' iconUnselected')
          + ` ' style='color: ` + innerColor + `' />`;

      } else if (marker.inner.label) {  // label
        innerDesign = `<span class='` + ((selected) ? ' labelSelected' : ' labelUnselected')
          + ` ' style='color: ` + innerColor
          + `; font-family: ` + this.config.markers.font.family
          + `; font-weight: ` + this.config.markers.font.weight
          + `' >` + marker.inner.label[0] + `</span>`;
      }
    }

    // state / gauge
    if (marker.shape.percent && marker.shape.type === ShapeType.circle) {
      const gaugeColor = marker.shape.color;

      const perimeter = 2 * 3.14 * conf.gaugeRadius;
      const arc = marker.shape.percent * perimeter / 100;
      svgGauge = commonSvg.gauge
        + ` r=` + conf.gaugeRadius
        + ` stroke-width=` + conf.gaugeWidth
        + ` stroke='` + gaugeColor
        + `' stroke-dasharray='` + arc + `, ` + perimeter
        + `' transform='rotate(-90 50 50)'/>`;
    }

    // shadow
    const imgShadow = `<img class='` + ((selected) ? 'shadowSelected' : 'shadowUnselected')
      + `' src='` + shadowFile + `'/>`;

    // popup
    let popup = `<div class='popup'>`;
    if (marker.popup) {
      if (marker.popup.title) {
        popup += `<div class='pop-up-title'>` + marker.popup.title + `</div>`;
      }
      if (marker.popup.body) {
        popup += `<div class='pop-up-body'>` + marker.popup.body + `</div>`;
      }
    } else {
      popup += `<div class='pop-up-title'>` + marker.id + `</div>`;
    }
    popup += `</div>`;

    // result
    const markerSelectionClass = selected ? 'marker-selected' : 'marker-unselected';
    return  `<div class='markericon ` + markerSelectionClass + `'>`
              + popup
              + imgShadow
              + `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'>`
                + svgBorder + svgShape + svgBG + svgGauge
              + `</svg>`
              + innerDesign
            + `</div>`      ;

  }
}
