import {Component, Input, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
	selector: 'app-work-card',
	templateUrl: './work-card.component.html',
	styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent implements OnInit {

	@Input() workTitle : string = "WORK TITLE";
	@Input() workAuthor : string = "WORK AUTHOR";
	@Input() workCoverThumbnail : string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAFACAYAAABKhBuFAAAAAXNSR0IArs4c6QAAE9VJREFUeF7tnYey4zYSALnOOeecc/7/T3A555xzznmvWlXQwThKHOm98eidG1Vbrl1BANmYBoYgKZ968sknT08WCUigjMApJSxjb8cSWBFQQgNBAsUElLB4AOxeAkpoDEigmIASFg+A3UtACY0BCRQTUMLiAbB7CSihMSCBYgJKWDwAdi8BJTQGJFBMQAmLB8DuJaCExoAEigkoYfEA2L0ElNAYkEAxASUsHgC7l4ASGgMSKCaghMUDYPcSUEJjQALFBJSweADsXgJKaAxIoJiAEhYPgN1LQAmNAQkUE1DC4gGwewkooTEggWICSlg8AHYvASU0BiRQTEAJiwfA7iWghMaABIoJKGHxANi9BJTQGJBAMQElLB4Au5eAEhoDEigmoITFA2D3ElBCY0ACxQSUsHgA7F4CSmgMSKCYgBIWD4DdS0AJjQEJFBNQwuIBsHsJKKExIIFiAkpYPAB2LwElNAYkUExACYsHwO4loITGgASKCShh8QDYvQSU0BiQQDEBJSweALuXgBIaAxIoJqCExQNg9xJQQmNAAsUElLB4AOxeAkpoDEigmIASFg+A3UtACY0BCRQTUMLiAbB7CSihMSCBYgJKWDwAdi8BJTQGJFBMQAmLB8DuJaCExoAEigkoYfEA2L0ElNAYkEAxASUsHgC7l4ASGgMSKCaghMUDYPcSUEJjQALFBJSweADsXgJKaAxIoJiAEhYPgN1LQAmNAQkUE1DC4gGwewkooTEggWICSlg8AHYvASU0BiRQTEAJiwfA7iWghMaABIoJKGHxANi9BJTQGJBAMQElLB4Au5eAEhoDEigmoITFA2D3ElBCY0ACxQSUsHgA7F4CSmgMSKCYgBIWD4DdS0AJjQEJFBNQwuIBsHsJKKExIIFiAkpYPAB2LwElNAYkUExACYsHwO4loITGgASKCShh8QDYvQSU0BiQQDEBJSweALuXgBIaAxIoJqCExQNg9xJQQmNAAsUElLB4AOxeAkpoDEigmIASFg+A3UtACY0BCRQTUMLiAbB7CSihMSCBYgJKWDwAdi8BJTQGJFBMQAmLB8DuJaCExoAEigkoYfEA2L0ElNAYkEAxASUsHgC7l4ASGgMSKCaghMUDYPcSUEJjQALFBJSweADsXgJKaAxIoJiAEhYPgN1LQAmNAQkUE1DC4gGwewkooTEggWICSlg8AHYvASU0BiRQTEAJiwfA7iWghMaABIoJKGHxANi9BJTQGJBAMQElLB4Au5eAEhoDEigmoITFA2D3ElBCY0ACxQSUsHgA7F4CSmgMSKCYgBIWD4DdS0AJjQEJFBNQwuIBsHsJKKExIIFiAkpYPAB2LwElNAYkUExACYsHwO4loITGgASKCShh8QDYvQSU0BiQQDGBUgnvvvvu6ZJLLlkj+O2336YXX3xx+uuvv3bGcs8990wXX3zx6ntffvnl9M477+zcxiF84YILLlidB3/OOeec6ayzzlr9OX369PTnn39Ov/766/TLL79M33333fTtt9/uxeoQztNj+C+Bg5KQw/r000+nDz74YOcxOukSXnrppdP1118/XXjhheFzR8rPP/98+uSTT1aCWk4mgYOTkBn/lVdemX766aediJ5UCc8444zp9ttvny677LKdzrevTAbx9ttvTz/88MPebfjFOgIHJyEofvzxx5WIu5STKOHZZ589kZKff/75fzvV33//ffrmm2+m77//fkKwP/74Yzp16tREfdLVyy+//H9WTFL4N954Y/Udy8kicDASsvIRYK289957q1QrWk6ahEh17733/k0mRProo49W5710XXzRRRdNt95663TeeeetEZGSvvTSSytxLSeHwMFI+OGHH05cFxFcFAKKTRpWhUg5aRLedNNN07XXXrs+NVY7VjKygGghlWUlbcz4Hps1tGM5OQQORsKPP/54+vrrr6f7779/lXpRvvrqq9W1TqTsIyG7jldeeeVqJ5KU8Mwzz5wIbIRAflI70sLjvtZi1/Ohhx5anyfn99prr+2VSnIODzzwwCpVpXBNzWrIDuqmAt8rrrhitTNN9kEbnDsTH+fORIDMnDvtjYXvME6t7LqZduONN07XXXfd+vsc788//zx7uGxUkX4zRpwjx9ofJ7vExM3ccfYN3nLLLdPVV1+9+ifGFd6Uq666avXvZBSM/a4ZWCQ2l+ocjIRtIMcBev3111fb8UtlVwnZiSQQAL9UGDRueRxXmnfzzTdP11xzzbrbzz77bHr//feXDmPj5wQSUhGM/EGkTYUNIPpnIlgq3A559913ZyeHBx98cJ0Kw+X5559fam79ORPQueeeu/o78iHhWBAOcSIbVkw4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";
	@Input() workCoverAlt : string = "No Cover Image";
	@Input() lastChapterReleased : number = 0;
	@Input() lastChapterRead : number = 0;

	@Input() isUpToDate : boolean = false;

	constructor() {
	}

	ngOnInit(): void {
	}

	getLastChapterButtonColor() : ThemePalette{
		if (this.lastChapterReleased === this.lastChapterRead) {
			return 'primary'
		} else {
			return 'accent'
		}
	}
}
