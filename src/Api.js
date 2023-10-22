// а.1 реализуем запрос в АПИ на получение списка всех треков
export async function getAllTracks() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
  )
  if (!response.ok) {
    throw new Error('Ошибка загрузки треков с сервера')
  }
  const data = await response.json()
  return data
}

// б.1 реализуем запрос в АПИ на получение списка всех подборок
export async function getSelection() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/selection',
  )
  if (!response.ok) {
    throw new Error('Ошибка загрузки подборок')
  }
  const data = await response.json()
  return data
}

// в.1 реализуем запрос в АПИ на получение списка треков подборки по ID
export async function getSelectionFromId(id) {
  const response = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/selection/${id}/`,
  )
  if (!response.ok) {
    throw new Error('Ошибка загрузки плейлиста')
  }
  const data = await response.json()
  return data
}
