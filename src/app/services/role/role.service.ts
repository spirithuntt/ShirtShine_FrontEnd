import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleResponseDTO } from 'src/app/models/role/role-response-dto';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = "http://localhost:8080/api/v1/role";

  constructor(private http: HttpClient) {}

getAllRoles(): Observable<RoleResponseDTO[]> {
  const token = sessionStorage.getItem('auth-user');
  const headers = {
    Authorization: `Bearer ${token}`
  };

  return this.http.get<RoleResponseDTO[]>(`${this.apiUrl}`, { headers });
}

  saveRole(roleToSave: any): Observable<RoleResponseDTO> {
    return this.http.post<RoleResponseDTO>(`${this.apiUrl}`, roleToSave);
  }

  grantAuthorities(rolesAuthorities: any): Observable<RoleResponseDTO> {
    return this.http.put<RoleResponseDTO>(
      `${this.apiUrl}/grant_authorities`,
      rolesAuthorities
    );
  }

  revokeAuthorities(rolesAuthorities: any): Observable<RoleResponseDTO> {
    return this.http.put<RoleResponseDTO>(
      `${this.apiUrl}/revoke_authorities`,
      rolesAuthorities
    );
  }

  grantRoleToUser(grantRoleToUserRequestDto: any): Observable<RoleResponseDTO> {
    return this.http.post<RoleResponseDTO>(
      `${this.apiUrl}/grant_role_to_user`,
      grantRoleToUserRequestDto
    );
  }

  deleteRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
