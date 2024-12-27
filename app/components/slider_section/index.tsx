import { CN } from "@/app/utils"
import UpRight  from "@/public/icons/24/up_right.svg" 
import { useState } from "react"
interface SliderSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  onBtnClick: ()=> void
}
export const SliderSection = (props: SliderSectionProps) => {
  let [currentSlide, SetCurrentSlide ] = useState(1)
  return <div className={CN(props.className,"h-[7 50px] md:h-[1000px]","bg-[url('/slider_section_bg.png')]", "bg-cover",  "flex", "border-b border-bg_1_50", "bg-grey")}>
    <div className={CN("container", "flex", "flex-col", "pt-6 md:pt-36 pb-16")}>
      <div className={CN("flex", "flex-col md:flex-row")}>
        <div className={CN("md:w-1/2", "flex", "flex-col", "justify-between")}>
          <div className={CN("flex", "flex-col", "w-full", "h-[100%] justify-between")}>
            <div className={CN("flex", "flex-row", "")}>
              <div className={CN("flex", "flex-col", "items-start", currentSlide != 1 && "d-none")}>
                <h1 className={CN("mb-4 ", " md:w-[747px]", "text-[28px] md:text-[64px] font-medium font-Involve text-bg_1_100")}>
                Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией
                </h1>
                <span className="font-Helvetica text-[26px] font-normal text-bg_1_100">Без головной боли и отклонений от сметы строительства</span>
                <button onClick={props.onBtnClick} className="w-[231px] h-[52px] font-Gilroy text-xl font-extrabold text-bg_1_100 bg-accent_500 mt-8">Узнать стоимость</button>
              </div>
              <div className={CN("flex", "flex-col", "items-start", currentSlide != 2 && "d-none")}>
                <h1 className={CN("mb-4", "md:w-[747px]", "text-[28px] md:text-[64px] font-medium font-Involve text-bg_1_100")}>
                Мы создаем надежные и современные дома для вашего уютного проживания
                </h1>
                <span className="font-Helvetica text-[26px] font-normal text-bg_1_100">В своей работе мы применяем современные технологии и специализированное строительное оборудование</span>
                <button onClick={props.onBtnClick} className="w-[231px] h-[52px] font-Gilroy text-xl font-extrabold text-bg_1_100 bg-accent_500 mt-8">Узнать стоимость</button>
              </div>
              <div className={CN("flex", "flex-col", "items-start", currentSlide != 3 && "d-none")}>
                <h1 className={CN("mb-4 ", "md:w-[747px]", "text-[28px] md:text-[64px] font-medium  font-Involve text-bg_1_100")}>
                В нашей команде работают квалифицированные сотрудники с опытом работы от 5 лет</h1>
                <span className="font-Helvetica text-[26px] font-normal text-bg_1_100">Мы оперативно выполняем весь спектр строительных работ</span>
                <button onClick={props.onBtnClick} className="w-[231px] h-[52px] font-Gilroy text-xl font-extrabold text-bg_1_100 bg-accent_500 mt-8">Узнать стоимость</button>
              </div>
            </div>
            
          </div>
        </div>
        <div className={CN("md:w-1/2 mt-6 md:mt-0", "flex", "sm:flex-row md:flex-col overflow-hidden", "items-end")}>
          <div className={CN("flex", "flex-row")}>
            <div className={CN("w-[276px] md:w-[272px]", "h-[276px] md:h-[272px]", "bg-accent_2_600", "md:p-6 p-4", "flex", "flex-col", "justify-between")}>
              <h5 className={CN("mb-0 font-Gilroy font-extrabold text-xl md:text-[22px] text-bg_1_100")}>Оформление рассрочки по ставке от 15% годовых</h5>
              <div className={CN("flex", "flex-row", "mt-8 md:mt-0")}>
                <a href="#" className={CN("flex", "flex-row", "mr-1", "leading-5", "text-lg", "text-bg_1_100", "font-normal", "no-underline")}>
                Подробнее
                </a> 
                <UpRight className={CN("text-accent_500")}/>            
              </div>
            </div>
            <div className={CN("w-[272px]", "h-[272px]", "bg-[url('/barn.png')]", "bg-cover", "p-6")}>
              <h5 className={CN("mb-0 font-Gilroy font-extrabold text-xl md:text-[22px] text-bg_1_100")}>Барнхаусы</h5>
            </div>
          </div>
          <div className={CN("flex", "flex-row")}>
          <div className={CN("w-[272px]", "h-[272px]", "bg-[url('/town.png')]", "bg-cover", "p-6")}>
              <h5 className={CN("mb-0 font-Gilroy font-extrabold text-xl md:text-[22px] text-bg_1_100")}>Таунхаусы</h5>
            </div>
            <div className={CN("w-[272px]", "h-[272px]", "bg-accent_2_600", "p-6", "flex", "flex-col", "justify-between")}>
              <h5 className={CN("mb-0 font-Gilroy font-extrabold text-xl md:text-[22px] text-bg_1_100")}>Скидка до 5% при полной предоплате за проект</h5>
              <div className={CN("flex", "flex-row")}>
                <a href="#" className={CN("flex", "flex-row", "mr-1", "leading-5", "text-lg", "text-bg_1_100", "font-normal", "no-underline")}>
                Подробнее
                </a> 
                <UpRight className={CN("text-accent_500")}/>            
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={CN("flex self-center  mt-6 md:mt-12")}>
        <button onClick={()=>SetCurrentSlide(1)} type="button" className={CN("w-3 h-3", "mr-3", "rounded-full", "bg-bg_1_100", currentSlide == 1 && "w-7 h-3 bg-accent_500")}/>
        <button onClick={()=>SetCurrentSlide(2)} type="button" className={CN("w-3 h-3", "mr-3", "rounded-full", "bg-bg_1_100", currentSlide == 2 && "w-7 h-3 bg-accent_500")}/>
        <button onClick={()=>SetCurrentSlide(3)} type="button" className={CN("w-3 h-3", "rounded-full", "bg-bg_1_100", currentSlide == 3 && "w-7 h-3 bg-accent_500")}/>
      </div>
    </div>

  </div>
}