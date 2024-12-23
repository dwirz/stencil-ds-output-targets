import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import type { IMyComponent } from '../helpers';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The age
   */
  @Prop() age: number;

  /**
   * The array of child names
   */
  @Prop() kidsNames: string[];

  /**
   * The favorite kid
   */
  @Prop() favoriteKidName: string;

  /**
   * Testing an event without value
   */
  @Event() myCustomEvent: EventEmitter<IMyComponent.someVar>;

  /**
   * Testing with nested namespaces
   */
  @Event() myCustomNestedEvent: EventEmitter<IMyComponent.SomeMoreComplexType.SubType>;

  emitCustomEvent() {
    this.myCustomEvent.emit(5);
  }

  private getText(): string {
    return `${this.first} ${this.middle} ${this.last}`;
  }

  render() {
    return (
      <div onClick={this.emitCustomEvent.bind(this)}>
        Hello, World! I'm {this.getText()}
        <p>Age: {this.age}</p>
        <p>Kids: {this.kidsNames?.join(', ')}</p>
        <p>Favorite kid: {this.favoriteKidName}</p>
      </div>
    );
  }
}
