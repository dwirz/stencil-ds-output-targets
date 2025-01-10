import Button from './Button/Button';
import { MyComponent, MyRadioGroup, MyRange } from './components';
import Input from './Input/Input';
import { ToggleableContent } from './ToggleableContent/ToggleableContent';

export default function Home() {
  return (
    <>
      <Input />
      <hr />
      <Button />
      <hr />
      <MyComponent
        first="Stencil"
        last="'Don't call me a framework' JS"
        className="my-8"
        favoriteKidName="foobar"
      />
      <hr />
      <MyRange name="myRange">Hello World</MyRange>
      <hr />
      <MyRadioGroup name="myRadioGroup" value="two">
        <input type="radio" name="myRadioGroup" value="one" />
        <input type="radio" name="myRadioGroup" value="two" />
        <input type="radio" name="myRadioGroup" value="three" />
      </MyRadioGroup>
      <ToggleableContent />
    </>
  );
}
