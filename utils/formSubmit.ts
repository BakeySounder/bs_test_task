import axios from "axios";
import { FormEvent } from "react";

export const FormSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  event.stopPropagation();

  const data = new FormData(event.currentTarget)

  axios.post("api/form",data).then(res =>{
    const code = res.status
    try{ 
      const msg = res.data["msg"]
      if(code == 501) {
        alert(`err: ${msg}`)
        return
      }
      alert(msg)

    }catch(err) {
      alert(`err: ${err}`)
    }
  })
}