import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public selectedEmployee: Employee;
  employees: Employee[];

  readonly baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  createEmployee(employee: any): Observable<Employee> {
    return this.http
      .post<Employee>(this.baseUrl, employee)
      .pipe(catchError(throwError));
  }

  list(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(catchError(throwError));
  }
  delete(id: string): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}`).pipe(catchError(throwError));
  }
  getEmployee(id: any): Observable<Employee> {
    return this.http
      .get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(throwError));
  }
  update(id: string, emp: Employee[]): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/${id}`, emp)
      .pipe(catchError(throwError));
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
