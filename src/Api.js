// а.1 реализуем запрос в АПИ на получение списка всех треков
export default async function getAllTracks() {
    const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/");
    if (!response.ok) {
      throw new Error("Ошибка загрузки треков с сервера");
    }
    const data = await response.json();
    return data;
}