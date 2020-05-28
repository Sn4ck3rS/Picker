import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDranddrop]'
})
export class DragndropDirective {

@HostBinding('class.fileover') fileOver: boolean;

  constructor() { }

    //Dragover Listener
    @HostListener('dragover', ['$event']) onDragOver(evt){
      evt.preventDefault();
      evt.stopPropagation();
  
      console.log('Drag Over');
    }
  
    //DragLeaveListener
    @HostListener('dragleave', ['$event']) public onDragLeave(evt){
      evt.preventDefault();
      evt.stopPropagation();
  
      console.log('Drag Leave');
    }
  
    //DropListener
  
    @HostListener('drop', ['$event']) public onDrop(evt){
      evt.preventDefault();
      evt.stopPropagation();
      this.fileOver = false;
      const files = evt.dataTransfer.files;
      if(files.length > 0){
        console.log('You dropped some files here')
      }
    }
}
