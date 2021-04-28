import { Component, OnInit } from '@angular/core';
/*
import {ButtonLayoutDisplay, ButtonMaker, DialogLayoutDisplay, EvolveConfirmBox, EvolveDialog} from 'evolve-dialog';
import {PageLoaderComponent} from '../../library/snippet/page-loader/page-loader.component';
*/


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
/*  confirmBox(): void {
    
    const dialogPopup = new EvolveConfirmBox();
    
    dialogPopup.createConfirmBox$().subscribe(resp => {
    
    });
  }
  
  dialog() {
    const dialogPopup = new EvolveDialog(PageLoaderComponent);
    dialogPopup.setCustomData('custom string');
    dialogPopup.setDialogConfig({
      Height: '500px',
      // DisplayLoader: false,
      LayoutType: DialogLayoutDisplay.INFO,
      // LoaderComponent: SpecialSecondAppLoaderComponent
    });
    // dialogPopup.setLoaderComponent(SpecialSecondAppLoaderComponent);
    dialogPopup.setButtons([new ButtonMaker('Ok', 'ok', ButtonLayoutDisplay.PRIMARY)
      , new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)]);
    dialogPopup.createDialog$().subscribe(resp => {
    });
  }
  
  dialog2() {
    console.log('boop');
    
    const dialogPopup = new EvolveDialog(PageLoaderComponent);
    dialogPopup.setCustomData('custom string');
    dialogPopup.setDialogConfig({
      Width     : '300px',
      LayoutType: DialogLayoutDisplay.DANGER
    });
    dialogPopup.setButtons([new ButtonMaker('Ok', 'ok', ButtonLayoutDisplay.PRIMARY)
      , new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)]);
    
    dialogPopup.createDialog$().subscribe(resp => {
    
    });
  }
  */
}
