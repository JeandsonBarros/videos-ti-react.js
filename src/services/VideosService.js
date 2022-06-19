class VideoService {

    async getAll(page) {

        let response = await fetch("http://localhost:8080/videos?page=" + page);
        let data = await response.json();

        return data;

    }

    async postVideo(videoObject) {
        let fetchData = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(videoObject)
        }

        let response = await fetch('http://localhost:8080/videos', fetchData)
        let data = await response.json()

        return ({ message: data, status: response.status === 201 ? "success" : "error" })

    }

    async findBy(key, content, page) {

        let response = await fetch(`http://localhost:8080/videos/find-by/${key}/${content}?page=${page}`)
        let data = await response.json()

        return data

    }

    async putVideo(videoObject, idVideo) {

        let fetchData = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(videoObject)
        }

        let response = await fetch(`http://localhost:8080/videos/${idVideo}`, fetchData)
        let data = await response.json()

        return ({ message: data, status: response.status === 201 ? "success" : "error" })

    }
    
    async deleteVideo(idVideo){
        let fetchData = {
            method: 'DELETE',
        }

        let response = await fetch(`http://localhost:8080/videos/${idVideo}`, fetchData)
        
        let data = await response.json()

        return ({ message: data, status: response.status === 201 ? "success" : "error" })
    }

}

export default new VideoService();