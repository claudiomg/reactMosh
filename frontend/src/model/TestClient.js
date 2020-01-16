import {JSON_HEADERS} from "./constants";

export default function TestClient() {

    let host = 'http://localhost:9093';

    return {
        getTest() {
            return fetch(host + '/test/curso', {
                method: 'GET',
                headers: JSON_HEADERS
            })
        }
    }
}