import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import About from "../pages/About";
import Home from "../pages/Home";
import Ourwork from "../pages/Ourwork";
import { Page } from '../../../node_modules/csstype/index.d';

// helper function to wrap the comment in a router for testing Link
const renderWithRouter = (component) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

// Our Work Testing Here
describe("Ourwork Component Unit Tests", () => {
  test('renders the main heading "Our Work"', () => {
    renderWithRouter(<Ourwork />);
    const headingElement = screen.getByRole("heading", { name: /Our Work/ });
    expect(headingElement).toBeInTheDocument();
  });

  test("renders all 3 service cards with correct titles", () => {
    renderWithRouter(<Ourwork />);

    // Check if the titles are present
    expect(screen.getByText("SaaS Products")).toBeInTheDocument();
    expect(screen.getByText("WordPress Plugin Development")).toBeInTheDocument();
    expect(screen.getByText("React Native")).toBeInTheDocument();

    // Check if exactly 3 cards/links are rendered
    const exploreButtons = screen.getAllByRole("link", { name: /Explore Work/ });
    expect(exploreButtons).toHaveLength(3);
  });

  test("generates correct dynamic link paths for each card", () => {
    renderWithRouter(<Ourwork />);

    // Find all 'Explore Work' links
    // Basically getAllByRole is indicating the role od this button
    const exploreLinks = screen.getAllByRole("link", { name: /Explore Work/ });

    // Test the first link (SaaS Products)
    // The link should be: /our-work/saas-products
    // We can accessing the first index(0) from the explore links
    // Checking the have attribute is present or not, because to is basically working as href
    expect(exploreLinks[0]).toHaveAttribute("href", "/our-work/saas-products");

    // Test the second link (WordPress Plugin Development)
    // The link should be: /our-work/wordpress-plugin-development
    // This is also same like first one
    expect(exploreLinks[1]).toHaveAttribute("href", "/our-work/wordpress-plugin-development");

    // Test the third link (React Native)
    // The link should be: /our-work/react-native
    // This is also same for second one.
    expect(exploreLinks[2]).toHaveAttribute("href", "/our-work/react-native");
  });
});

// Another components will be test htmlDecodeTree

// Home page testing will be go here
describe("Home Component Unit Tests", () => {
  test('render the main heading "Grow Your Business with Our SaaS Platform"', () => {
    renderWithRouter(<Home />);
    const headingElement = screen.getByRole("heading", { name: /Grow Your Business with Our SaaS Platform/ });
    expect(headingElement).toBeInTheDocument();
  });

  // Button test
  test('render the get start button "Get Started"', () => {
    renderWithRouter(<Home />);
    const getStartLink = screen.getByRole("link", { name: /Get Started/i });
    expect(getStartLink).toBeInTheDocument();
    expect(getStartLink).toHaveAttribute("href", "/getstart");
  });
});

// Counter state and value testing of count from About us components



describe("About Us Counter State Testing", () => {
  // Increment button
  test('render the increment counter button is clicked "Increment"', () => {
    renderWithRouter(<About />);
    const countElement = screen.getByTestId("count");
    const button = screen.getByRole("button", { name: /increment/i });
    // initial count
    expect(countElement).toHaveTextContent(0);
    //  Onclick the increment button
    fireEvent.click(button)

    expect(countElement).toHaveTextContent(1)

  });

  //Decrement button 
  test('render the decrement counter button is clicked "Decrement"',()=>{
    renderWithRouter(<About/>);
    const countElement = screen.getByTestId("count")
    const button = screen.getByRole("button",{name:/decrement/i});

    expect(countElement).toHaveTextContent(0);
    fireEvent.click(button);
    expect(countElement).toHaveTextContent(-1);
  })
});

// Testing image from Home Page
test('render the image from the Home page,"img"',()=>{
  renderWithRouter(<Home/>);
  const img = screen.getByRole("img",{name:/hero-image/i})
  expect(img).toBeInTheDocument()
})
