import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oneclick',
  templateUrl: './oneclick.component.html',
  styleUrls: ['./oneclick.component.css']
})
export class OneclickComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {} 
  
  redirectToOneclick(){
    this.router.navigate(['oneclick']).then(()=>{
    window.location.reload();
    });

  }

}