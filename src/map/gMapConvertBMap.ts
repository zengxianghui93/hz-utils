type geoType = {
  lng: string | number
  lat: string | number
}
/**
 * 高德坐标转百度
 * @param {geo} Object { lng: 123.25, lat: 43.65}
 * @returns { lng: number, lat: number }
 */
const gMapConvertBMap = (geo: geoType) => {
  const X_PI = Math.PI * 3000.0 / 180.0
  const x = +geo.lng
  const y = +geo.lat
  const z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * X_PI)
  const theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * X_PI)
  const bdLng = (z * Math.cos(theta) + 0.0065).toFixed(8)
  const bdLat = (z * Math.sin(theta) + 0.006).toFixed(8)
  return { lng: bdLng, lat: bdLat }
}

export default gMapConvertBMap