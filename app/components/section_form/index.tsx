import { CN } from "@/app/utils"
import { Button, Col, Form, FormGroup, FormText, Input, Label } from "reactstrap"

interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {

}

export const FormSection = (props: FormSectionProps) => {
  return <div className={CN("container", "flex", "flex-col", "md:flex-row", props.className)}>
    <img width={"660px"} height={"428px"} src="/form.jpg" alt="" />
    <div className={CN("md:w-[660px]", "flex", "flex-col", "ml-5")}>
      <h2 className={CN( "text-[48px] font-extrabold leading-[62.4px] font-Gilroy text-accent_2_700")}>Остались вопросы?</h2>
      <span className={CN( "text-[18px] font-normal leading-[25.2px] font-Helvetica text-accent_2_700 mb-6")}>Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.</span>
      <Form>
        <FormGroup row>
          <Label for="phone" sm={3} >
            Телефон <span className="text-red-600">*</span>
          </Label>
          <Col sm={9}>
            <Input
              required
              id="phone"
              name="phone"
              placeholder="+375 (99) 999-99-99"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row >
          <Label for="comment" sm={3} >
            Комментарий
          </Label>
          <Col sm={9} className="mb-8">
            <Input
              id="comment"
              name="comment"
              placeholder="Ваш комментарий"
              type="textarea"
            />
          </Col>
        </FormGroup>
        <FormGroup
            check
          >
            <div className={CN("flex", "flex-row", "justify-between", "items-center")}>
            <Input required type="checkbox" />
            <Label check>
            Согласие на обработку персональных данных
            </Label>
            <button type="submit" className="w-[231px] h-[52px] font-Gilroy text-xl font-extrabold text-bg_1_100 bg-accent_500">Отправить</button>
            </div>
          </FormGroup>
        <FormGroup row inline>
          
        </FormGroup>
      </Form>
    </div>
  </div>
}