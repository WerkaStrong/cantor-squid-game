import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";

function App() {

  return (
    <Container>
      <section className="calculatorField">
      <Clock />
        <Header
          title="통화를 변환" />
        <Form/>
      </section>
    </Container>
  );
}

export default App;
