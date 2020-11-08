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

  it("should check an invalid URL shows the error message", () => {
    // test here
  });  

  it("should check to see if a valid URL shows the link", () => {
      // test here
  });    
});