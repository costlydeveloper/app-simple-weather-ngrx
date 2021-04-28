/* tslint:disable */
import {Component, OnInit} from '@angular/core';

@Component({
	selector   : 'app-header',
	templateUrl: './header.component.html',
	styleUrls  : ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {

	}

	clickMenu(): void {
		const element: HTMLElement | null = document.getElementById('topnav');
		if (element && 'topnav' === element.className) {
			element.className += ' responsive';
		} else if (element) {
			element.className = 'topnav';
		}
	}

}
