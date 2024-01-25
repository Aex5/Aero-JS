class Middleware {
    constructor(){
        this.middleware = [];
    }

    use(handler){
        this.middleware.push(handler);
    }
}

module.exports = Middleware;