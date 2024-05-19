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
        scale: 2, // Mejora la calidad de la imagen
        useCORS: true,
      }).then((canvas) => {
        const pageWidth = 210; // Ancho de página A4 en mm
        const pageHeight = 297; // Altura de página A4 en mm
        let imgWidth = 210; // Ajusta este valor si es necesario, hasta 210 para A4
        let imgHeight = (canvas.height * imgWidth) / canvas.width;

        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        // Calcular el margen para centrar si es necesario
        const margin = (pageWidth - imgWidth) / 2;
        const verticalMargin = (pageHeight - imgHeight) / 2;

        // Asegurarse de que la altura de la imagen no sea mayor que la página
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

        // Crear un objeto Blob del PDF
        const pdfBlob = pdf.output('blob');

        // Crear una URL del Blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Abrir el PDF en una nueva pestaña
        window.open(pdfUrl, '_blank');
      });
    }
  }
}
