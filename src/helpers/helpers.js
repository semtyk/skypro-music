export default function toMMSS(sec) {
  let minutes = Math.floor(sec / 60)
  let seconds = Math.floor(sec - minutes * 60)

  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  return `${minutes}:${seconds}`
}
