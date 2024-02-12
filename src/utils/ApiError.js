class ApiError extends Error {
    constructor( 
      statusCode,
      message="Something is wrong with the server",
      errors=[],
      statck=""){
          super(message);
          this.statusCode = statusCode;
          this.data = null;
          this.success= false,
          this.errors = errors;
          if(statck){
              this.stack = statck;
          }else{
              Error.captureStackTrace(this, this.constructor);
          }
    }
  }
  
  export  {ApiError}
  