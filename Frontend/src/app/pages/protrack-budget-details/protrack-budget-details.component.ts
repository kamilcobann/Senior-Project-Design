import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProtrackBudgetService} from "../../services/protrack-budget.service";
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {Budget} from "../../models/Budget";
import {
  ProtrackTicketInfoDialogComponent
} from "../../shared/components/protrack-ticket-info-dialog/protrack-ticket-info-dialog.component";
import {
  ProtrackDeleteBudgetDialogComponent
} from "../../shared/components/protrack-delete-budget-dialog/protrack-delete-budget-dialog.component";

@Component({
  selector: 'app-protrack-budget-details',
  templateUrl: './protrack-budget-details.component.html',
  styleUrls: ['./protrack-budget-details.component.scss']
})
export class ProtrackBudgetDetailsComponent implements OnInit{

  budgetId!:string;
  projectId!:string;
  budgets!:Budget[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private budgetService:ProtrackBudgetService,
    public dialog:MatDialog,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.budgetId = this.route.snapshot.paramMap.get('budgetId')!
    this.projectId = this.route.snapshot.paramMap.get('id')!

    this.budgetService.getAllBudgetsOfProject(String(this.route.snapshot.paramMap.get('id'))).subscribe( res =>{
        this.budgets = res.budgets
      }

    )
  }

  openDeleteBudgetDialog(enterAnimationDuration:string,exitAnimationDuration: string, budget:Budget):void{
    const dialogRef = this.dialog.open(ProtrackDeleteBudgetDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { budget: budget}
    });

    dialogRef.componentInstance.budgetDeleted.subscribe(() => {
      this.budgetService.getAllBudgetsOfProject(String(this.route.snapshot.paramMap.get('id'))).subscribe( res =>{
          this.budgets = res.budgets
        }

      )
    });
  }

}
