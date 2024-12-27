import { CN } from "@/app/utils"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { Button } from "reactstrap"

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Header = (props: HeaderProps) => {
  return <div className={CN(props.className, "flex", "border-b border-bg_1_50 h-24" )}>
    <div className={CN("container", "flex", "flex-row", "items-center", "")}>
      <div className={CN("flex", "w-full", "logo", "justify-self-start")}>
        <div className={CN("flex")}>
          <img className={CN("w-[64px] h-[64px]")} src="/icons/logo.svg" alt="dots icon"/>
          <div className={CN("flex", "flex-column")}>
            <span className="font-Helvetica text-[16px] font-normal text-bg_1_100">Строительные решения</span>
            <span className="font-Helvetica text-[12px] font-normal text-bg_1_100">Строительные решения</span>
          </div>
        </div>
      </div>
      <div className={CN("flex", "flex-column", "w-[18%]", "adress", "mr-16", "justify-self-end")}>
        <h6 className="font-Helvetica text-[18px] font-normal text-bg_1_100 mb-[4px] leading-[23.4px]">Адрес офиса:</h6>
        <span className="font-Helvetica text-[16px] font-normal text-bg_1_50 leading-[22.4px]">РБ, г. Минск, ул. Ленина, 1</span>      
      </div>
      <div className={CN("flex", "flex-column", "w-[30%]", "phone", "mr-16", "justify-self-end")}>
        <h6 className="font-Helvetica text-[18px] font-normal text-bg_1_100 mb-[4px] leading-[23.4px]">+375 99 999 99 99</h6>
        <span className="font-Helvetica text-[16px] font-normal text-bg_1_50 leading-[22.4px] mb-[4px]">пн – пт: с 09:00 до 18:00</span>
        <span className="font-Helvetica text-[16px] font-normal text-bg_1_50 leading-[22.4px]">сб – вс: с 10:00 до 16:00</span>      
      </div>
      <div className={CN("flex", "w-[30%]", "h-14", "p-0", "btn", "justify-self-end")}>
        <button className="w-100 h-100 border-2 border-accent_500 bg-transparent">
          <span className="font-Gilroy text-[20px] font-extrabold text-bg_1_100 leading-[22.4px]">
            Заказать звонок
          </span>
        </button>
      </div>
    </div>
  </div>
}
