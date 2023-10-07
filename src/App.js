import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { BubbleSort } from './algorithms/BubbleSort';
import { QuickSort } from './algorithms/QuickSort';
import { InsertionSort } from './components/InsertionSort';

import { useState } from 'react';

function App() {
  const [algorithm, setAlgorithm] = useState("");

  // Define a component map for dynamically rendering algorithms
  const components = {
    BubbleSort: BubbleSort,
    QuickSort: QuickSort,
    // InsertionSort: InsertionSort,
  };

  // Render the selected component based on sort state
  const SortComponent = components[algorithm];
  return (
    <div className="App">
      <header className="App-header">
        <Navbar setAlgorithm={setAlgorithm} />
        {SortComponent && <SortComponent />}
        Main -- {algorithm}
        <Footer />
      </header>
    </div>
  );
}

export default App;
