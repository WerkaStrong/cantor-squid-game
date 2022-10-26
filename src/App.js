import Container from "./Container";
import Form from "./Form";

function App() {
  return (
      <Container>
        <section className="calculatorField">
          <header className="calculatorField_header">통화를 변환</header>
          <Form />
        </section>
    </Container>
  );
}

export default App;
