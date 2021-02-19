/*
* Software Name : IotMapManager
* Version: 1.0.2
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

import * as L from 'leaflet'
import { IotMapManagerConfig } from './iot-map-manager-config'
import { IotMarker, ShapeType, TabType } from './iot-map-manager-types'
import { IotMapCommonSvg } from './iot-map-common-svg'

/* eslint-disable quotes */
export class IotMapMarkers {
  private config: IotMapManagerConfig = IotMapManagerConfig.getConfig()

  public getMarkerIcon (marker: IotMarker, selected = false): L.DivIcon {
    // default values
    if (!marker.shape) {
      marker.shape = JSON.parse(JSON.stringify(this.config.markers.default.shape))
    }
    marker.shape.type = marker.shape.type ?? this.config.markers.default.shape.type
    marker.shape.plain = marker.shape.plain ?? this.config.markers.default.shape.plain
    marker.shape.anchored = marker.shape.anchored ?? this.config.markers.default.shape.anchored
    marker.shape.color = marker.shape.color ?? this.config.markers.default.shape.color
    marker.layer = marker.layer ?? 'default'

    // is template valid ?
    if (marker.template !== undefined) {
      const template = this.config.markerTemplates[marker.template]
      if (template === undefined) {
        marker.template = undefined
      } else { // update marker with template info
        if (template.layer !== undefined) {
          marker.layer = template.layer
        }
        if (template.popup !== undefined) {
          if (!marker.popup !== undefined) {
            marker.popup = {}
          }
          marker.popup.title = template.popup.title ?? marker.popup.title
          marker.popup.body = template.popup.body ?? marker.popup.body
        }
        if (template.tab !== undefined) {
          marker.tab = {
            content: template.tab.content,
            type: template.tab.type ?? TabType.normal
          }
        }
        if (template.shape !== undefined) {
          marker.shape.type = template.shape.type ?? marker.shape.type
          marker.shape.anchored = template.shape.anchored ?? marker.shape.anchored
          marker.shape.plain = template.shape.plain ?? marker.shape.plain
          marker.shape.color = template.shape.color ?? marker.shape.color
          marker.shape.percent = template.shape.percent ?? marker.shape.percent
          marker.shape.accuracy = template.shape.accuracy ?? marker.shape.accuracy
        }
        if (template.inner !== undefined) {
          if (marker.inner === undefined) {
            marker.inner = {}
          }
          marker.inner.color = template.inner.color ?? marker.inner.color

          if (template.inner.icon !== undefined) {
            marker.inner.icon = template.inner.icon
          } else if (template.inner.label !== undefined) {
            marker.inner.label = template.inner.label
            marker.inner.icon = undefined
          }
        }
      }
    }

    // is status valid ?
    if (marker.status !== undefined) {
      const status = this.config.markerStatus[marker.status]
      if (status === undefined) {
        marker.status = undefined
      } else { // update marker with status info
        if (status.layer !== undefined) {
          marker.layer = status.layer
        }
        if (status.popup !== undefined) {
          if (marker.popup === undefined) {
            marker.popup = {}
          }
          marker.popup.title = status.popup.title ?? marker.popup.title
          marker.popup.body = status.popup.body ?? marker.popup.body
        }
        if (status.tab !== undefined) {
          marker.tab = {
            content: status.tab.content,
            type: status.tab.type ?? TabType.normal
          }
        }
        if (status.shape !== undefined) {
          marker.shape.type = status.shape.type ?? marker.shape.type
          marker.shape.anchored = status.shape.anchored ?? marker.shape.anchored
          marker.shape.plain = status.shape.plain ?? marker.shape.plain
          marker.shape.color = status.shape.color ?? marker.shape.color
          marker.shape.percent = status.shape.percent ?? marker.shape.percent
          marker.shape.accuracy = status.shape.accuracy ?? marker.shape.accuracy
        }
        if (status.inner !== undefined) {
          if (marker.inner === undefined) {
            marker.inner = {}
          }
          marker.inner.color = status.inner.color ?? marker.inner.color
          if (status.inner.icon !== undefined) {
            marker.inner.icon = status.inner.icon
          } else if (status.inner.label !== undefined) {
            marker.inner.label = status.inner.label
            marker.inner.icon = undefined
          }
        }
      }
    }

    return this.getDivIcon(marker, selected)
  }

  private getDivIcon (marker: IotMarker, selected: boolean): L.DivIcon {
    // shape
    let svgShape: string = ``
    let svgBG: string = ``
    let svgBorder: string = ``
    let svgGauge: string = ``
    let shadowFile = './assets/img/'

    const markerConfig = (selected)
      ? this.config.markers.size.selected
      : ((marker.shape.type === ShapeType.circle)
          ? this.config.markers.size.unselectedCircle
          : this.config.markers.size.unselectedSquare
        )

    const commonSvg = (marker.shape.type === ShapeType.circle) ? IotMapCommonSvg.circle : IotMapCommonSvg.square
    if (marker.shape.color === undefined) {
      marker.shape.color = this.config.markers.default.shape.color
    }
    const funColor = (marker.shape.percent !== undefined) ? 'white' : marker.shape.color

    // shape
    if (selected) { // Only anchored markers can be selected
      if (marker.shape.plain) { // STD
        svgShape = `<path ${commonSvg.selStdColour}  fill='${funColor}'/>`
      } else { // FUN
        svgShape = `<path ${commonSvg.selFunColour} fill='${funColor}'/>`
        svgBG = commonSvg.selFunBg
      }
      shadowFile += commonSvg.selShadow
    } else if (marker.shape.type === ShapeType.circle) {
      if (marker.shape.anchored) {
        svgBorder = commonSvg.pinBorder
        svgShape = `<path ${commonSvg.pinStdColour} fill='${funColor}'/>`
        shadowFile += commonSvg.pinShadow
      } else {
        svgBorder = commonSvg.border
        svgShape = `<circle ${commonSvg.stdColour} fill='${funColor}'/>`
        shadowFile += commonSvg.shadow
      }
    } else if (marker.shape.type === ShapeType.square) {
      if (marker.shape.anchored) {
        if (marker.shape.plain) {
          svgBorder = commonSvg.pinBorder
          svgShape = `<path ${commonSvg.pinStdColour} fill='${funColor}'/>`
          shadowFile += commonSvg.pinShadow
        } else {
          svgBorder = commonSvg.pinBorder
          svgShape = `<path ${commonSvg.pinFunColour} fill='${funColor}'/>`
          svgBG = commonSvg.pinFunBg
          shadowFile += commonSvg.pinShadow
        }
      } else {
        if (marker.shape.plain) {
          svgBorder = commonSvg.border
          svgShape = `<rect ${commonSvg.stdColour} fill='${funColor}'/>`
          shadowFile += commonSvg.shadow
        } else {
          svgBorder = commonSvg.border
          svgShape = `<rect ${commonSvg.funColour} fill='${funColor}'/>`
          shadowFile += commonSvg.shadow
          svgBG = commonSvg.funBg
        }
      }
    }

    // inner
    let innerDesign = ''
    if (marker.inner) {
      const innerColor = (marker.inner.color !== undefined) ? marker.inner.color : this.config.markers.default.inner.color

      if (marker.inner.icon) { // icon
        innerDesign = `<span class='innerspan ${marker.inner.icon} ${((selected) ? ' iconSelected' : ' iconUnselected')}'
                             style='color: ${innerColor}'></span>`
      } else if (marker.inner.label) { // label
        innerDesign = `<span class='innerspan ${((selected) ? ' labelSelected' : ' labelUnselected')}'
                             style='color: ${innerColor}'>${marker.inner.label[0]}</span>`
      }
    }

    // state / gauge
    if (marker.shape.percent && marker.shape.type === ShapeType.circle) {
      const gaugeColor = marker.shape.color
      const perimeter = 2 * 3.14 * markerConfig.origin.gauge.radius
      const arc = marker.shape.percent * perimeter / 100

      svgGauge = `<circle ${commonSvg.gauge}
        r='${markerConfig.origin.gauge.radius}'
        stroke-width='${markerConfig.origin.gauge.width}'
        stroke='${gaugeColor}'
        stroke-dasharray='${arc}, ${perimeter}'
        transform='rotate(${markerConfig.origin.gauge.startAngle}
                          ${markerConfig.origin.fullWidth / 2}
                          ${markerConfig.origin.fullHeight / 2})'/>`
    }

    // shadow
    const imgShadow = `<img class='${((selected) ? 'shadowSelected' : 'shadowUnselected')}' src='${shadowFile}'/>`

    // tabs
    let tab = ``
    if (marker.tab !== undefined) {
      // color
      if (marker.tab.type === TabType.normal || marker.tab.type === undefined) {
        tab = `<span class='tab-top'>${marker.tab.content}</span>`
      } else {
        tab = `<span class='tab-top-big'>${marker.tab.content}</span>`
        tab += `<span class='tab-top-big-left'></span>`
        tab += `<span class='tab-top-big-right'></span>`
      }
    }

    // popup
    let popup: string = ''
    if (marker.popup !== undefined) {
      popup = `<div class='marker-popup'>`
      if (marker.popup.title) {
        popup += `<span class='pop-up-title'>${marker.popup.title}</span><br>`
      }
      if (marker.popup.body) {
        popup += `<span class='pop-up-body'>${marker.popup.body}</span><br>`
      }
      popup += `</div>`
    }

    // calculate ViewBox
    const x = (markerConfig.origin.fullWidth - markerConfig.origin.width) / 2
    const y = (markerConfig.origin.fullHeight - markerConfig.origin.height) / 2
    const w = markerConfig.origin.width
    const h = markerConfig.origin.height + ((marker.shape.anchored || selected) ? markerConfig.origin.anchorHeight : 0)

    // result
    const markerSelectionClass = selected ? 'marker-selected' : 'marker-unselected'

    const html = `<div class='markericon ${markerSelectionClass}'>
                    ${imgShadow}
                    ${popup}
                    <svg xmlns='http://www.w3.org/2000/svg'
                         width='${markerConfig.width}'
                         height='${markerConfig.height + ((marker.shape.anchored || selected) ? markerConfig.anchorHeight : 0)}'
                         viewBox='${x} ${y} ${w} ${h}'>
                      ${svgBorder} ${svgShape} ${svgBG} ${svgGauge}
                    </svg>
                    ${innerDesign}
                    ${tab}
                  </div>`

    const iconSize : L.Point = L.point(markerConfig.width, markerConfig.height + ((marker.shape.anchored || selected) ? markerConfig.anchorHeight : 0))
    const iconAnchor : L.Point = L.point(iconSize.x / 2, (!(marker.shape.anchored || selected)) ? iconSize.y / 2 : iconSize.y)

    // creating icon
    return new L.DivIcon({
      className: 'my-custom-pin',
      iconSize: iconSize, // size of the icon
      iconAnchor: iconAnchor, // point of the icon which will correspond to marker's location
      html: html
    })
  }
}
/* eslint-ensable quotes */
