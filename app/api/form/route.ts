import axios from "axios"

const token = "7850134207:AAEEPBn8GUrRhjdyuuQ0Yr2SzJs1XTCBI6I"
const chatId = -4665714040
export async function POST(request: Request) {
  const data = await request.formData()
  try {
    const phone = data.get("phone")?.toString()!
    const comment = data.get("comment")?.toString()!
    let msg = `Поступила заявка на обратную связь\nНомер телефона: ${phone}\nКомментарий:${comment}`
    // msg = encodeURI(msg)
    const res = await axios.post(`https://api.telegram.org/bot${token}/sendMessage`,{
      chat_id:chatId,
      text:msg,

    })
    console.log(data);
    return Response.json({msg:"OK", data:res.data}, {status:201})
  } catch(err){
    console.log(err);
    
    return Response.json({msg:"Err when get form data"}, {status:501})
  }
  
}