import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RodapeComponent } from './rodape';

describe('RodapeComponent', () => {
  let component: RodapeComponent;
  let fixture: ComponentFixture<RodapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RodapeComponent] });
    fixture = TestBed.createComponent(RodapeComponent);
    component = fixture.componentInstance;
  });

  it('deveria ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deveria definir alt e src', () => {
    expect(component.alt).toBeDefined();
    expect(component.src).toBeDefined();
  });

  it('deveria renderizar o conteúdo baseado nas propriedades src e alt', () => {
    fixture.componentRef.setInput('src', 'https://example.com/test-image.jpg');
    fixture.componentRef.setInput('alt', 'Imagem teste');
    fixture.detectChanges();

    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');

    expect(img.src).toContain('https://example.com/test-image.jpg');
    expect(img.alt).toBe('Imagem teste');
  });
});
