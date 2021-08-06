import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arange - render component
    render(<CheckoutForm/>)

    //act - find the header
    const header = screen.queryByText(/checkout form/i)
    //assert - verify that header is on the screen
    expect(header).toBeTruthy()
});

test("form shows success message on submit with form details", () => {
    //arange - render component
    render(<CheckoutForm/>)

    //act - fill out the form and checkout

    //first name input
    const firstNameInput = screen.getByLabelText(/first Name:/i)

    //types into the input
    userEvent.type(firstNameInput, 'christine')

    //last name input
    const lastNameInput = screen.getByLabelText(/last Name:/i)
    userEvent.type(lastNameInput, 'nguyen')

    //address input
    const addressInput = screen.getByLabelText(/address:/i)
    userEvent.type(addressInput, '0000 a street')
    
    //city input
    const cityInput = screen.getByLabelText(/city:/i)
    userEvent.type(cityInput, 'Las Vegas')
    
    //state input
    const stateInput = screen.getByLabelText(/state:/i)
    userEvent.type(stateInput, 'Nevada')
    
    //zip input 
    const zipInput = screen.getByLabelText(/zip:/i)
    userEvent.type(zipInput, '00000')
    
    //checkout button
    const checkoutButton = screen.getByRole('button')
    userEvent.click(checkoutButton)

    //assert - verify the success pops up on the screen with the details
    const successPopUp = screen.queryByDisplayValue('christine')
    expect(successPopUp).toBeInTheDocument()
});
