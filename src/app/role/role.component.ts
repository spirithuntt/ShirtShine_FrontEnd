import { Component } from '@angular/core';
import { RoleResponseDTO } from '../models/role/role-response-dto';
import { RoleService } from '../services/role/role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  roles: RoleResponseDTO[] = [];

  constructor(
    private roleService: RoleService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.roles = data['roles']; // Access roles data from resolver
    });
  }
}
