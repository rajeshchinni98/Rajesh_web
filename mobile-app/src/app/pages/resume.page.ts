import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss']
})
export class ResumePage {
  pdfUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    // Use a trusted resource URL so the iframe can load the PDF
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Rajesh_Mylipilli_Resume.pdf');
  }
}
