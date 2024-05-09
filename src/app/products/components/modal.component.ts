import { Component, Input, inject } from "@angular/core";
import { NgbActiveModal,  NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from '../../material.module';
@Component({
	selector: 'ngbd-modal-content',
	standalone: true,
  templateUrl: './modal.component.html',
  imports: [MaterialModule],
  styleUrl: './modal.component.css'
})
export class NgbdModalContent {
	activeModal = inject(NgbActiveModal);

	@Input() title!: string;
  @Input() description!: string;
  @Input() category!: string;
  @Input() id!: number;
  @Input() image!: string;
  @Input() rating!: number;
  @Input() price!: number;
}
