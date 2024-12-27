"use client"
import Image from "next/image";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Header } from "./components/header";
import { SliderSection } from "./components/slider_section";
import { MapSection } from "./components/section_map";
import { FormSection } from "./components/section_form";
import { Footer } from "./components/footer";
import { useState } from "react";
import { CN } from "./utils";
import { FormSubmit } from "./utils/formSubmit";
export const Home = ()=>{
  const [isModalOpen, SetIsModalOpen] = useState(false)
  const toggle = () => SetIsModalOpen(!isModalOpen);
  return (
    <div className="flex flex-column container-fluild min-h-screen">
      <Header onBtnClick={()=> SetIsModalOpen(true)} className="z-10"/>
      <SliderSection onBtnClick={()=> SetIsModalOpen(true)} className="mt-[-6rem] pt-24 mb-[140px]"/>
      <MapSection className="mb-[140px]"/>
      <FormSection className="mb-[140px]"/>
      <Footer/>

      <Modal className="w-[760px]" isOpen={isModalOpen} toggle={toggle}>
        {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
        <ModalBody className="p-0">
          <div className={CN("flex", "h-48", "justify-end", "bg-[url('/modal_bg.png')] bg-cover bg-center", "p-2")}>
            <button onClick={toggle} className="rounded-full w-10 h-10 bg-accent_2_300 text-bg_1_100 text-2xl">
              X
            </button>
          </div>
          <div className={CN("flex", "bg-bg_1_100", "flex-col", "self-center", "items-center", "pl-12 pr-12")}>
            <h2 className={CN( "text-[32px] font-extrabold font-Gilroy text-accent_2_700")}>Обратный звонок</h2>
            <span className={CN( "text-[16px] text-center font-normal font-Helvetica text-accent_2_700 mb-6")}>Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.</span>
            <Form className="w-full mb-8" onSubmit={FormSubmit}>
              <FormGroup>
                <Label className="text-lg" for="phone" sm={3} >
                  Телефон <span className="text-red-600">*</span>
                </Label>
                <Col sm={12}>
                  <Input
                    required
                    id="phone"
                    name="phone"
                    placeholder="+375 (99) 999-99-99"
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup >
                <Label for="comment" sm={3} >
                  Комментарий
                </Label>
                <Col sm={12} className="mb-8">
                  <Input
                    id="comment"
                    name="comment"
                    placeholder="Ваш комментарий"
                    type="textarea"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <div className={CN("flex", "flex-row", "items-center")}>
                  <Input required type="checkbox" className="mr-2"/>
                  <Label check>
                  Согласие на обработку персональных данных
                  </Label>  
                </div>
              </FormGroup>
              <FormGroup className="flex flex-row justify-center">
                <button type="submit" className="w-[231px] h-[52px] font-Gilroy text-xl font-extrabold text-bg_1_100 bg-accent_500">Отправить</button>
              </FormGroup>
            </Form>            
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}