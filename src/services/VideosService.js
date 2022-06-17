class VideoService {

    async getAll(page) {

        let response = await fetch("http://localhost:8080/videos?page=" + page);
        let data = await response.json();

        return data;

    }

    async findBy(key, content, page) {
        
        let response = await fetch(`http://localhost:8080/videos/find-by/${key}/${content}?page=${page}`)
        let data = await response.json()

        return data

    }

}

export default new VideoService();