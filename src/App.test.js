import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

const mockHouses = [
  {
    id: 180523003,
    title: "House 1",
    photos: ["photo1.jpg", "photo2.jpg"],
    professional: { name: "Agent 1" }
  },
  {
    id: 181484417,
    title: "House 2",
    photos: ["photo3.jpg", "photo4.jpg"],
    professional: { name: "Agent 2" }
  },
  {
    id: 183550007,
    title: "House 3",
    photos: ["photo5.jpg", "photo6.jpg"],
    professional: { name: "Agent 3" }
  }
];

jest.mock("./pages/Search", () => () => (
  <div data-testid="search-page">Mocked Search Page</div>
));

test("renders learn react link", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
  
  const linkElement = screen.getByText(/React Immo/i);
  expect(linkElement).toBeInTheDocument();

  const housesList = screen.queryByTestId('houses-list');
  expect(housesList).not.toBeInTheDocument();
});
