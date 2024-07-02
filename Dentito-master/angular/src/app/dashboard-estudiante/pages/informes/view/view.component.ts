import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleComponent } from '../../../../shared/title/title.component';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import InformesService from '../../../../services/paciente/informes.service';
import { InformesInterface } from '../../../../interfaces/informes.interface';

@Component({
  standalone: true,
  imports: [TitleComponent, ReactiveFormsModule],
  templateUrl: './view.component.html',
  styles: ``,
})
export default class ViewComponent implements OnInit {
  paciente: any;
  isLoading = true;
  notesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, // Use Router instead of ActivatedRoute
    private informesService: InformesService,
    private route: ActivatedRoute
  ) {
    this.notesForm = this.formBuilder.group({
      noteInput: '',
    });
  }

  ngOnInit(): void {
    console.log('State recibido:', history.state.paciente);
    this.paciente = history.state.paciente;
  }

  generatePDF() {
    const data = document.getElementById('contentToConvert');
    if (data) {
      html2canvas(data, {
        scale: 2,
        useCORS: true,
      }).then((canvas) => {
        const pageWidth = 210;
        const pageHeight = 297;
        let imgWidth = 210;
        let imgHeight = (canvas.height * imgWidth) / canvas.width;

        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const margin = (pageWidth - imgWidth) / 2;
        const verticalMargin = (pageHeight - imgHeight) / 2;

        if (imgHeight > pageHeight) {
          imgHeight = pageHeight;
          imgWidth = (canvas.width * imgHeight) / canvas.height;
        }

        pdf.addImage(
          contentDataURL,
          'PNG',
          margin,
          verticalMargin > 0 ? verticalMargin : 0,
          imgWidth,
          imgHeight
        );

        const pdfBlob = pdf.output('blob');

        const pdfUrl = URL.createObjectURL(pdfBlob);

        window.open(pdfUrl, '_blank');
      });
    }
  }

  downloadPDF() {
    const data = document.getElementById('contentToConvert');
    if (data) {
      html2canvas(data, {
        scale: 2,
        useCORS: true,
      }).then((canvas) => {
        const pageWidth = 210;
        const pageHeight = 297;
        let imgWidth = 210;
        let imgHeight = (canvas.height * imgWidth) / canvas.width;

        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const margin = (pageWidth - imgWidth) / 2;
        const verticalMargin = (pageHeight - imgHeight) / 2;

        if (imgHeight > pageHeight) {
          imgHeight = pageHeight;
          imgWidth = (canvas.width * imgHeight) / canvas.height;
        }

        pdf.addImage(
          contentDataURL,
          'PNG',
          margin,
          verticalMargin > 0 ? verticalMargin : 0,
          imgWidth,
          imgHeight
        );
        pdf.save('informe.pdf');
      });
    }
  }

  sendEmail() {
    const pdfFileName = 'informe.pdf';
    const email = 'correo@ejemplo.com';
    const subject = 'Informe';
    const body = 'Adjunto encontrará el informe solicitado.';

    const emailURL = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(emailURL, '_self');
  }

  addNote() {
    const notesSection = document.getElementById('notesSection');
    const noteParagraph = document.createElement('p');
    noteParagraph.textContent = this.notesForm.get('noteInput')!.value;
    notesSection!.appendChild(noteParagraph);

    this.notesForm.reset();

    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
      submitButton.style.display = 'none';
    }
  }

  showForm() {
    const notesForm = document.getElementById('notesForm');
    notesForm!.style.display = 'block';
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imagePreviewUrl = e.target.result;
        // console.log('Vista previa de la imagen:', imagePreviewUrl);

        // Creando img con vista previa
        // const imgElement = document.createElement('img');
        const imgElement = new Image();
        imgElement.src = imagePreviewUrl;

        document.getElementById('appendImage')?.appendChild(imgElement);
      };
      reader.readAsDataURL(file);
    }
  }
  onEyeClick(paciente: any) {
    this.router.navigate(['/dashboard-estudiante/view'], {
      state: { paciente }, // Pass paciente as state
    });
  }
}
