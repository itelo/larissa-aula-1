import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { useEffect, useState } from "react";

// fetch
// https://pokeapi.co/api/v2/pokemon/ditto
// const get = (url: string) => fetch(url).then(r => r.json());
// get("https://pokeapi.co/api/v2/pokemon/ditto").then()
// const a = [null, 2, 34, ['d']];

function App() {
  const [matriz, setMatriz] = useState([
    ["x", "", "o"],
    ["", "x", ""],
    ["", "o", ""]
  ]);

  const [count, setCount] = useState(0);
  const handleAdd = () => setCount(count + 1);

  const primeiraLinha = matriz[0];

  return (
    <>
      <div style={{ flex: 1, display: "flex" }}>
        <button style={{ minWidth: 20, minHeight: 20 }} onClick={handleAdd}>
          {primeiraLinha[0]}
          {/* [x, , o] */}
        </button>
        <button style={{ minWidth: 20, minHeight: 20 }} onClick={handleAdd}>
          {primeiraLinha[1]}
        </button>
        <button style={{ minWidth: 20, minHeight: 20 }} onClick={handleAdd}>
          {primeiraLinha[2]}
        </button>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <button style={{ minWidth: 20, minHeight: 20 }} onClick={handleAdd}>
          {matriz[1][0]}
        </button>
        <button style={{ minWidth: 20, minHeight: 20 }} onClick={handleAdd}>
          {matriz[1][1]}
        </button>
        <button style={{ minWidth: 20, minHeight: 20 }} onClick={handleAdd}>
          {matriz[1][2]}
        </button>
      </div>
      <div style={{ flex: 1, display: "flex" }}>
        <button style={{ minWidth: 20, minHeight: 20 }} onClick={handleAdd}>
          {matriz[2][0]}
        </button>
        <button style={{ minWidth: 20, minHeight: 20 }} onClick={handleAdd}>
          {matriz[2][1]}
        </button>
        <button style={{ minWidth: 20, minHeight: 20 }} onClick={handleAdd}>
          {matriz[2][2]}
        </button>
      </div>
      <div> </div>
    </>
  );
}

export default App;
