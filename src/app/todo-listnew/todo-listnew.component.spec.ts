import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListnewComponent } from './todo-listnew.component';

describe('TodoListnewComponent', () => {
  let component: TodoListnewComponent;
  let fixture: ComponentFixture<TodoListnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
