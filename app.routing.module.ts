import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ClaimComponent} from "./claim/claim.component";
import {AssessorComponent} from "./assessor/assessor.component";
import {PaymentComponent} from "./payment/payment.component";
import {ClaimApprovalComponent} from "./claim/claim.claimapprovalcomponent";

const routes:Routes=[{
    path: 'Claim_Intimation',
    component: ClaimComponent
},
    {
        path: 'Assessor_Report',
        component: AssessorComponent
    },
    {
        path: 'Payment',
        component: PaymentComponent
    },

    {
        path: 'Claim_Approval',
        component: ClaimApprovalComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule
{
}
