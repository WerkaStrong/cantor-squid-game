import Container from "./Container";
import Form from "./Form";
import Header from "./Header";

function App() {
  return (
      <Container>
        <section className="calculatorField">
          <Header 
          title= "통화를 변환"/>
          <Form />
        </section>
    </Container>
  );
}

export default App;
