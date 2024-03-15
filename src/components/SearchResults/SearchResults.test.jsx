import { getAllByRole, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import data from "@/data/fakeBookings.json";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";

describe("Search Results", () => {
  it("should have a test, please write one", () => {
    return true;
  });

  test("renders a search Results Table", () => {
    render(<SearchResults />);
    const searchResults = screen.getByRole("table");
    expect(searchResults).toBeInTheDocument();
  });

  it("should render a table with column for each booking attribute", () => {
    const { getByText } = render(<SearchResults results={data} />);

    expect(getByText("ID")).toBeInTheDocument();
    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("First Name")).toBeInTheDocument();
    expect(getByText("Sur Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Room ID")).toBeInTheDocument();
    expect(getByText("Check In Date")).toBeInTheDocument();
    expect(getByText("Check Out Date")).toBeInTheDocument();
  });

  it("The table can show more than one booking.", () => {
   
    const user = [
      {
        id: 1,
        title: "Mr",
        firstName: "John",
        surname: "Doe",
        email: "johndoe@doe.com",
        roomId: 2,
        checkInDate: "2017-11-21",
        checkOutDate: "2017-11-23",
      },
      {
        id: 2,
        title: "Doctor",
        firstName: "Sadia",
        surname: "Begum",
        email: "begum_sadia@sadia.org",
        roomId: 1,
        checkInDate: "2018-02-15",
        checkOutDate: "2018-02-28",
      }
    ];
    render(<SearchResults results={user} />);

    const rows = screen.getAllByRole("row");

    expect(rows).toHaveLength(3);
  });
});
