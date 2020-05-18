import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from './CheckoutForm';


test("tests that the labels are in the contact form", () => {
  const { getByLabelText } = render(<CheckoutForm />);

  const firstNameLabel = getByLabelText(/first name/i)
  const lastNameLabel = getByLabelText(/last name/i)
  const addressLabel = getByLabelText(/address/i)
  const cityLabel = getByLabelText(/city/i)
  const stateLabel = getByLabelText(/state/i)
  const zipLabel = getByLabelText(/zip/i)

  expect(firstNameLabel).toBeInTheDocument();
  expect(lastNameLabel).toBeInTheDocument();
  expect(addressLabel).toBeInTheDocument();
  expect(cityLabel).toBeInTheDocument();
  expect(stateLabel).toBeInTheDocument();
  expect(zipLabel).toBeInTheDocument();

});

test("tests the inputs on the form", () => {
  const { getByLabelText } = render(<CheckoutForm />);

  const firstNameInput = getByLabelText(/first name/i)
  const lastNameInput = getByLabelText(/last name/i)
  const addressInput = getByLabelText(/address/i)
  const cityInput = getByLabelText(/city/i)
  const stateInput = getByLabelText(/state/i)
  const zipInput = getByLabelText(/zip/i)

  fireEvent.change( firstNameInput, {target: {value: "Joel"}})
  fireEvent.change( lastNameInput, {target: {value: "Gonzalez"}})
  fireEvent.change( addressInput, {target: {value: "4364 Verona st"}})
  fireEvent.change( cityInput, {target: {value: "Los Angeles"}})
  fireEvent.change( stateInput, {target: {value: "CA"}})
  fireEvent.change( zipInput, {target: {value: "90023"}})

  expect(firstNameInput.value).toBe("Joel")
  expect(lastNameInput.value).toBe("Gonzalez")
  expect(addressInput.value).toBe("4364 Verona St")
  expect(cityInput.value).toBe("Los Angeles")
  expect(stateInput.value).toBe("CA")
  expect(zipInput.value).toBe("90023")
  
})