import React from 'react';
import { it, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasicComponent from './BasicComponent';

//  This test does not even involve React
it('First test using it()', () => {
	expect(1 + 1).toBe(2);
});

// Nor does this one
test('First test using test()', () => {
	expect(1 + 1).toBe(2);
});

/*
 * We will prefer using it() for test calls
 *
 * This test succeeds or fails based on:
 * Can BasicComponent render without an error?
 * Can we find the "Apples" bullet point in BasicComponent?
 * Can we find the "Bananas" bullet point in BasicComponent?
 *
 */

it('should render the BasicComponent component', () => {
	render(<BasicComponent />);

	/*
	Find an element by its text, error/failure if not found
	screen.getByText('Apples')
	expect().not -> Negates the next matcher
	toBeNull() -> Checks for nullity
	*/

	expect(screen.getByText('Apples')).not.toBeNull();
	expect(screen.getByText('Bananas')).toBeInTheDocument();
});

/*
 * Access the component in several ways
 *
 * Using getByText() exactly at first
 * Then using getByText enabling a partial match
 * Then using getByText with a regular expression
 *
 */
it('should access content in the component in several ways', () => {
	render(<BasicComponent />);

	// Plain text, must be exact, case sensitive
	expect(screen.getByText('Apples')).not.toBeNull();

	// Inexact match, and case-insensitive
	expect(screen.getByText('App', { exact: false })).not.toBeNull();

	// Regular expression match (case-insensitive matching the string 'ban')
	expect(screen.getByText(/ban/i));
});

/*
	This may be necessary sometimes, but it goes against the philosophy of
	testing library
*/
it('should allow access to the underlying DOM', () => {
	// The nearest element wrapper around this component
	const { container } = render(<BasicComponent />);

	let secondListItem = container.querySelector('li:nth-child(2)');
	expect(secondListItem).not.toBeNull();
	expect(secondListItem.textContent).toEqual('Bananas');
});

// Look at BasicComponent.jsx and look for the element with the attribute 'data-testid'
it('should allow access via a test id', () => {
	render(<BasicComponent />);
	expect(screen.getByTestId('oranges')).not.toBeNull();
});

it("should access a form field via the field's label", () => {
	render(<BasicComponent />);
	let formField = screen.getByLabelText(/favorite/i);
	expect(formField).toBeInTheDocument();
	expect(formField).toBeVisible();
});

/*
 * Event handling!
 * Uses the 'user-event' library from Testing Library to fire an event and test results
 *
 */

it('should respond to content typed into a form field', async () => {
	const { container } = render(<BasicComponent />);
	let formField = screen.getByLabelText(/favorite/i);
	expect(formField).toHaveValue('');

	let lastItem = container.querySelector('li:last-child');
	expect(lastItem).toHaveTextContent('');

	let fruit = 'Lemons';
	await userEvent.type(formField, fruit);
	expect(formField).toHaveValue(fruit);
	expect(lastItem).toHaveTextContent(fruit);
	expect(screen.getByText(fruit)).toBeInTheDocument();
});
