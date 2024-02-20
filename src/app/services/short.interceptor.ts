import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const shortInterceptor: HttpInterceptorFn = (req, next) => {
  
  const TOKEN = '96557a71404852406fca53fed6faec8812749de0';

  const authReq = req.clone({
    setHeaders: { Authorization: 'Bearer ' + TOKEN }
  });
  // codigo comentado si se quiere manipular el error, tambien se puede en el servicio o el componenete
  return next(authReq)/*.pipe(catchError((error: HttpErrorResponse) =>{
    console.log(error);
    return throwError(error);
  }))*/;
};
