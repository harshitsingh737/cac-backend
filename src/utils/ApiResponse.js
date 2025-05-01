class ApiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode =statusCode
        this.date = this.date
        this.message = message
        this.success = statusCode < 400
    }
}