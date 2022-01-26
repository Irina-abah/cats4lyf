export class CatsApi {
  constructor({address, headers}) {
    this._address = address;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
        return res.json()
    }

    return Promise.reject(`Error ${res.status}`)
  }

  getCatImage() {
    return fetch(`${this._address}`, {
        headers: this._headers
    })
    .then((res) => {
        return this._checkResponse(res)
    })
  }

}

const allCatsApi = new CatsApi({
  address: "https://api.thecatapi.com/v1/images/search",
  headers: {
    "Content-Type": "application/json"
  }
});

export default allCatsApi;