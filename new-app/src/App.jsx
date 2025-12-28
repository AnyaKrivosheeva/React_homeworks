import React, { lazy, Suspense, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import RenderCounter from "./RenderCounter"
import UserForm from "./UserForm"
import useWindowSize from "./useWindowSize";
import withLoading from "./withLoading";

const BigComponent = lazy(() => import('./BigComponent'));

const UserFormWithLoading = withLoading(UserForm);

function App() {
  const buttonRef = useRef(null);
  const windowSize = useWindowSize();

  const [showBigComponent, setShowBigComponent] = useState(false);

  const toggleBigComponent = () => {
    setShowBigComponent(prev => !prev);
  };

  return (
    <>
      <UserFormWithLoading />
      <RenderCounter />
      <CustomButton ref={buttonRef} onClick={toggleBigComponent}>Нажми меня</CustomButton>
      {
        showBigComponent && (
          <Suspense fallback={<p>Загрузка...</p>}>
            <BigComponent />
          </Suspense>
        )
      }
      <div style={{ marginTop: '20px' }}>
        Размеры экрана: ширина - {windowSize.width} px, высота - {windowSize.height} px.
      </div>
    </>
  )
}

export default App
