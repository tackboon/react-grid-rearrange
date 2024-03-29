import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { GridCallbackProps, GridContainer, BlockWrapper } from "../dist";
import "./index.css";

const getColor = (i: number) => {
  const colors = [
    "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
    "linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)",
  ];

  return colors[i % 4];
};

const App = () => {
  const [toggleDrag, setToggleDrag] = React.useState(true);
  const [products, setProducts] = React.useState(
    "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
      .split(",")
      .map(product => ({
        id: product,
        value: product,
      }))
  );

  const bgColors = products.map((_, i) => getColor(i));
  const callback = ({
    isDragging,
    order,
    lastMovingIndex,
    isClick,
  }: GridCallbackProps) => {
    if (isClick && !isDragging) {
      console.log("clicked item " + lastMovingIndex);
    }
    if (lastMovingIndex !== -1 && !isDragging) {
      const newOrder = order.map(o => products[o]);
      console.log(newOrder);
    }
  };

  const handleAddItem = React.useCallback(() => {
    setProducts(prev => [
      ...prev,
      {
        id: `${prev.length}`,
        value: `${prev.length}`,
      },
    ]);
  }, []);

  return (
    <div className="App">
      <button className="toggle" onClick={() => setToggleDrag(prev => !prev)}>
        togggle drag
      </button>
      <button className="add" onClick={handleAddItem}>
        add item
      </button>
      <p>drag status: {toggleDrag.toString()}</p>

      <div className="test-wrapper">
        <GridContainer
          totalItem={products.length}
          itemHeight={100}
          itemWidth={100}
          colGap={10}
          rowGap={20}
          cb={callback}
          disableDrag={!toggleDrag}
          disableInitialAnimation={false}
        >
          {styles =>
            styles.map((style, i) => {
              return (
                <BlockWrapper index={i} animationStyle={style} key={i}>
                  <div
                    style={{
                      background: bgColors[i],
                      width: "100px",
                      height: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {products[i].value}
                  </div>
                </BlockWrapper>
              );
            })
          }
        </GridContainer>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
