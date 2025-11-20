import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import About from '../pages/About';
import ContactPage from '../pages/Contact';
import Home from '../pages/Home';
import Introduction from '../pages/Myself/Introduction';
import Myself from '../pages/Myself/Myself';
import Ourwork from '../pages/Ourwork';

// helper function to wrap the comment in a router for testing Link
const renderWithRouter = (component) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

// Our Work Testing Here
describe('Ourwork Component Unit Tests', () => {
  test('renders the main heading "Our Work"', () => {
    renderWithRouter(<Ourwork />);
    const headingElement = screen.getByRole('heading', { name: /Our Work/ });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders all 3 service cards with correct titles', () => {
    renderWithRouter(<Ourwork />);

    expect(screen.getByText('SaaS Products')).toBeInTheDocument();
    expect(
      screen.getByText('WordPress Plugin Development'),
    ).toBeInTheDocument();
    expect(screen.getByText('React Native')).toBeInTheDocument();

    const exploreButtons = screen.getAllByRole('link', {
      name: /Explore Work/,
    });
    expect(exploreButtons).toHaveLength(3);
  });

  test('generates correct dynamic link paths for each card', () => {
    renderWithRouter(<Ourwork />);

    const exploreLinks = screen.getAllByRole('link', { name: /Explore Work/ });

    expect(exploreLinks[0]).toHaveAttribute('href', '/our-work/saas-products');
    expect(exploreLinks[1]).toHaveAttribute(
      'href',
      '/our-work/wordpress-plugin-development',
    );
    expect(exploreLinks[2]).toHaveAttribute('href', '/our-work/react-native');
  });
});

// Home page testing
describe('Home Component Unit Tests', () => {
  test('render the main heading "Grow Your Business with Our SaaS Platform"', () => {
    renderWithRouter(<Home />);
    const headingElement = screen.getByRole('heading', {
      name: /Grow Your Business with Our SaaS Platform/,
    });
    expect(headingElement).toBeInTheDocument();
  });

  test('render the get start button "Get Started"', () => {
    renderWithRouter(<Home />);
    const getStartLink = screen.getByRole('link', { name: /Get Started/i });
    expect(getStartLink).toHaveAttribute('href', '/getstart');
  });
});

// About Counter test
describe('About Us Counter State Testing', () => {
  test('increment button click updates count', () => {
    renderWithRouter(<About />);
    const countElement = screen.getByTestId('count');
    const button = screen.getByRole('button', { name: /increment/i });

    expect(countElement).toHaveTextContent(0);
    fireEvent.click(button);
    expect(countElement).toHaveTextContent(1);
  });

  test('decrement button click updates count', () => {
    renderWithRouter(<About />);
    const countElement = screen.getByTestId('count');
    const button = screen.getByRole('button', { name: /decrement/i });

    expect(countElement).toHaveTextContent(0);
    fireEvent.click(button);
    expect(countElement).toHaveTextContent(-1);
  });
});

// Home Page Image Test
test('render the image from the Home page', () => {
  renderWithRouter(<Home />);
  const img = screen.getByRole('img', { name: /hero-image/i });
  expect(img).toBeInTheDocument();
});

// Introduction component tests
describe('Introduction components testing ', () => {
  test('render the introduction components', () => {
    renderWithRouter(<Introduction />);

    expect(screen.getByText(/Name: Jesmin Chakma/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Designation: Frontend Developer/i),
    ).toBeInTheDocument();
  });
});

// Myself component tests
describe('Myself components testing here', () => {
  test('render myself component', () => {
    const mySelfMockData = {
      name: 'Jesmin Chakma',
      designation: 'Frontend Developer',
    };
    renderWithRouter(<Myself aboutMe={mySelfMockData} />);

    expect(screen.getByText(/Name: Jesmin Chakma/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Designation: Frontend Developer/i),
    ).toBeInTheDocument();
  });
});

// Contact form test
describe('Contact form testing', () => {
  test('User can fill the form and submits', () => {
    renderWithRouter(<ContactPage />);

    fireEvent.change(screen.getByPlaceholderText('John Doe'), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByPlaceholderText('john@example.com'), {
      target: { value: 'test@gmail.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('How can we help you?'), {
      target: { value: 'Test Subject' },
    });
    fireEvent.change(
      screen.getByPlaceholderText('Tell us more about your inquiry...'),
      {
        target: { value: 'Test Message' },
      },
    );

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.getByText(/message sent!/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Thank you for reaching out. We'll get Back to you soon/i),
    ).toBeInTheDocument();
  });
});
