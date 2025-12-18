import { useRef } from "react";
import CustomButton from "./CustomButton";
import RenderCounter from "./RenderCounter"
import UserForm from "./UserForm"

function App() {
  const buttonRef = useRef(null);

  return (
    <>
      <UserForm />
      <RenderCounter />
      <CustomButton ref={buttonRef}> Нажми меня </CustomButton>
    </>
  )
}

export default App
