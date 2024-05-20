import { Component } from '@angular/core';
import { TitleComponent } from '../../../../shared/title/title.component';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './view.component.html',
  styles: ``,
})
export default class EditComponent {
  generatePDF() {
    const data = document.getElementById('contentToConvert');
    if (data) {
      html2canvas(data, {
        scale: 2,
        useCORS: true,
      }).then((canvas) => {
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'p',
          unit: 'mm',
          format: 'a4',
        });

        const margin = 0;
        pdf.addImage(
          contentDataURL,
          'PNG',
          margin,
          margin,
          imgWidth - 2 * margin,
          imgHeight
        );
        pdf.save('informe.pdf');
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
}
