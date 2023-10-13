class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          bangs={4}
          img="https://images.unsplash.com/photo-1696580436068-f19c26850e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
