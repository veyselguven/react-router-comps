// import Link from "./components/Link";
import SideBar from "./components/SideBar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPages from "./pages/CounterPages";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      {/* <Link to="/accordion"> Go to Accordion</Link>
      <Link to="/dropdown"> Go to Dropdown</Link> */}
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPages initialCount={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;
