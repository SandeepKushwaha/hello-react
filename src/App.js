import "./App.css";

function App() {
  const currentTime = new Date().getHours();
  let message = "";
  let textColor = "";
  let backgroundColor = "";

  if (currentTime < 12) {
    message = "Breakfast Time!";
    textColor = "black";
    backgroundColor = "yellow";
  } else if (currentTime >= 12 && currentTime < 18) {
    message = "Lunch Time!";
    textColor = "blue";
    backgroundColor = "pink";
  } else {
    message = "Dinner Time!";
    textColor = "red";
    backgroundColor = "black";
  }

  const styles = {
    color: textColor,
    backgroundColor: backgroundColor,
    textAlign: "center",
    padding: "20px",
    fontSize: "24px",
    fontWeight: "700",
    borderRadius: "6px"
  };

  return (
    <div>
      <header>
        <p className="page-title">
          Hello World: <span className="project-name">Lunchtime</span>
        </p>
      </header>
      <div style={styles}>{message}</div>
    </div>
  );
}

export default App;
