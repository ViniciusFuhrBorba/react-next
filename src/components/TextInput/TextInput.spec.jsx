import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe("<TextInput/>", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"Testando"} />);
    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("Testando");
  });
  it("should call handleChange funtion on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const value = "o valor";

    userEvent.type(input, value);

    expect(fn).toHaveBeenCalledTimes(value.length);
    expect(input.value).toBe(value);
  });
  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);
    expect(container).toMatchSnapshot();
  });
});
