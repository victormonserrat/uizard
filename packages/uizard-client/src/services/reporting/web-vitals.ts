// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reportWebVitals = (onPerfEntry?: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFCP, onFID, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onFCP(onPerfEntry)
      onFID(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
