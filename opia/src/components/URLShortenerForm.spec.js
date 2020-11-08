import URLShortenerForm from "./URLShortenerForm";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";

describe("URLShortenerForm", () => {
  let component;

  beforeEach(() => {
    component = shallowMount(URLShortenerForm);
  });

  it("should render a form container on mount", () => {
    expect(component.find('.FormContainer').exists()).to.be.true;
  });
});