type geoType = {
  lng: string | number
  lat: string | number
}
/**
 * 百度坐标转高德
 * @param {geo} Object { lng: 123.25, lat: 43.65}
 * @returns { lng: number, lat: number }
 */
const bMapConvertGMap = (geo: geoType) => {
  const X_PI = Math.PI * 3000.0 / 180.0
  const x = +geo.lng - 0.0065
  const y = +geo.lat - 0.006
  var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * X_PI)
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * X_PI)
  const ggLng = z * Math.cos(theta)
  const ggLat = z * Math.sin(theta)
  return { lng: ggLng, lat: ggLat }
}

export default bMapConvertGMap