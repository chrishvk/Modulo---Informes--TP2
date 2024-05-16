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
}
