import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { BubbleSort } from './algorithms/BubbleSort';
import { QuickSort } from './algorithms/QuickSort';
import { InsertionSort } from './components/InsertionSort';

import { useState } from 'react';

function App() {
  const [sort, setSort] = useState("QuickSort");

  // Define a component map for dynamically rendering algorithms
  const components = {
    BubbleSort: BubbleSort,
    QuickSort: QuickSort,
    InsertionSort: InsertionSort,
  };

  // Render the selected component based on sort state
  const SortComponent = components[sort];
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Footer />
        {SortComponent && <SortComponent />}
      </header>
    </div>
  );
}

export default App;
