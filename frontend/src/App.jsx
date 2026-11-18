import Button from './components/Button'
import Input from './components/Input'
function App(){
   function Saved(){
        console.log("Saved Successfully");
    }
    function Cancel(){
        console.log("Cancelled");
    }
  return(
    <>
    <h1>Biit Parent Appointment System</h1>
    <Button children={"Save"} variant={"primary"} onClick={Saved}/>
    <Button children={"Cancel"} variant={"outline"} onClick={Cancel} />
    <Input label={"Email"} type={"email"} placeholder={"enter email"} name={"email"} />
    </>
  )
}
export default App;