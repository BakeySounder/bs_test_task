"use client"
import { CN } from "@/utils"

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {

}

export default function Footer(props: FooterProps) {
  return <div className={CN("bg-accent_2_600 pt-16 pb-16")}>
    <div className={CN("container", "flex", "flex-col md:flex-row", "gap-9 md:gap-48 md:justify-start justify-center")}>
      <div>
        <div className={CN("flex", "flex-row")}>
          <img className={CN("w-[64px] h-[64px]")} src="/icons/logo.svg" alt="dots icon"/>
          <div className={CN("flex", "flex-column", "self-end")}>
            <span className="font-Helvetica text-[16px] font-normal text-bg_1_100">Строительные решения</span>
            <span className="font-Helvetica text-[12px] font-normal text-bg_1_100">Строительные решения</span>
          </div>
        </div>
        <span className="mt-4 font-Helvetica text-[16px] font-normal text-bg_1_100">© 2024 ООО “Строительные решения”</span>
      </div>
      <div className={CN("flex", "flex-column")}>
        <h6 className="font-Helvetica text-[18px] font-normal text-bg_1_100 mb-[4px] leading-[23.4px]">Адрес офиса:</h6>
        <span className="font-Helvetica text-[16px] font-normal text-bg_1_50 leading-[22.4px]">РБ, г. Минск, ул. Ленина, 1</span>      
        <span className="font-Helvetica text-[16px] font-normal text-bg_1_50 leading-[22.4px] mb-[4px]">пн – пт: с 09:00 до 18:00</span>
        <span className="font-Helvetica text-[16px] font-normal text-bg_1_50 leading-[22.4px]">сб – вс: с 10:00 до 16:00</span>      
      </div>
      <div className={CN("flex", "flex-column")}>
        <span className="font-Helvetica text-[16px] font-normal text-bg_1_50 leading-[22.4px]">ООО “Строительные решения” <br /> Юридический адрес: РБ, г. Минск, ул. Ленина, 1 <br /> УНП: 111111111</span>          
        <div className="flex flex-row items-center">
          <span className="font-Helvetica text-[16px] mr-1 font-normal text-bg_1_100 leading-[22.4px]">Разработка сайта: </span><h6 className="text-accent_500 text-lg mb-0">Web-space.by</h6>
        </div>          

      </div>
    </div>
  </div>
}