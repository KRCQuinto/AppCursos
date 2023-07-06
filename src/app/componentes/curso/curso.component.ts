import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ServicioService } from 'src/app/servicio.service';






@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
})
export class CursoComponent  implements OnInit {

  
  constructor(public servis : ServicioService, private sanitizer: DomSanitizer) { }
  cursos:any;

  async ngOnInit() {

    this.servis.getDatosCursos()
    .subscribe((data:any)=>{
      console.log(data)
      console.log('RECIBIDO')
      this.cursos=data.results;
    })
  }

  getVideoId(url: string): string {
    if (!url) {
      return '';
    }
    const regex = /[?&]v=([^?&]+)/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : '';
  }
  
  
  getVideoUrl(url: string): SafeResourceUrl {
    const videoId = this.getVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
  

  openVideo(url: string) {
    window.open(url, '_system');
  }

}
