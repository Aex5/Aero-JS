class Router {
    constructor(){
        this.routes = [];
    }

    get(url, handler) {
        this.routes.push({method: 'GET', url, handler});
    }

    post(url, handler){
        this.routes.push({method: 'POST', url, handler});
    }
}

module.exports = Router;