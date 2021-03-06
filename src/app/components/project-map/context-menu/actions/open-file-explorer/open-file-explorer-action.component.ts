import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../../../../cartography/models/node';
import { Server } from '../../../../../models/server';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'app-open-file-explorer-action',
  templateUrl: './open-file-explorer-action.component.html'
})
export class OpenFileExplorerActionComponent implements OnInit {
  @Input() server: Server;
  @Input() node: Node;

  constructor(
    private electronService: ElectronService
  ) {}

  ngOnInit() {}

  open() {
    this.electronService.shell.openPath(this.node.node_directory);
  }
}
