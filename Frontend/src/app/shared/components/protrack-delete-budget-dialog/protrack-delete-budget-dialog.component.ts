import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProtrackKanbanService} from "../../../services/protrack-kanban.service";
import {Kanban} from "../../../models/Kanban";
import {Project} from "../../../models/Project";
import {ProtrackBudgetService} from "../../../services/protrack-budget.service";
import {Budget} from "../../../models/Budget";

@Component({
  selector: 'app-protrack-delete-budget-dialog',
  templateUrl: './protrack-delete-budget-dialog.component.html',
  styleUrls: ['./protrack-delete-budget-dialog.component.scss']
})
export class ProtrackDeleteBudgetDialogComponent implements OnInit {

  @Output() budgetDeleted: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {

  }

  constructor(
    public dialogRef: MatDialogRef<ProtrackDeleteBudgetDialogComponent>,
    private budgetService: ProtrackBudgetService,
    @Inject(MAT_DIALOG_DATA) public data: {budget: Budget}

  ) {}

  deleteBudget(id: String) {
    this.budgetService.deleteBudget(id).subscribe(res=>{
      this.budgetDeleted.emit();
      this.dialogRef.close();
    })
  }
}
