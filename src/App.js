import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import details from "./data.json";

export default function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {details.map((value, index) => {
            return <Card key={index} data={value} />;
          })}
        </div>
      </div>
    </section>
  );
}
