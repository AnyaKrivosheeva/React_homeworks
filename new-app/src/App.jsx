import { useRef } from "react";
import CustomButton from "./CustomButton";
import RenderCounter from "./RenderCounter"
import UserForm from "./UserForm"
import useWindowSize from "./useWindowSize";
import withLoading from "./withLoading";

const UserFormWithLoading = withLoading(UserForm);

function App() {
  const buttonRef = useRef(null);
  const windowSize = useWindowSize();


  return (
    <>
      <UserFormWithLoading />
      <RenderCounter />
      <CustomButton ref={buttonRef}> Нажми меня </CustomButton>
      <div style={{ marginTop: '20px' }}>
        Размеры экрана: ширина - {windowSize.width} px, высота - {windowSize.height} px.
      </div>
    </>
  )
}

export default App
