interface ErrorResponse {
  data: {
    status: string;
    message: string;
    type: string;
    errors: Errors;
  };
  status: number;
  statusText: string;
}

interface ErrorDetail {
  type: string;
  message: string;
}

interface Errors {
  [key: string]: ErrorDetail;
}

export default ErrorResponse;
