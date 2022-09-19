import React from "react";

import {
  Column,
  Img,
  Row,
  Text,
  Input,
  Button,
  List,
  RadioGroup,
  Radio,
  Stack,
  Switch,
} from "components";

const EditrulePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center mx-[auto] w-[100%]">
        <Img
          src="images/img_header.svg"
          className="lg:h-[39px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[60px] w-[100%]"
          alt="header"
        />
        <Row className="items-center justify-evenly w-[100%]">
          <Column className="bg-gray_100 border border-gray_300 border-solid lg:py-[12px] xl:py-[14px] 2xl:py-[15px] 3xl:py-[18px] w-[13%]">
            <Text className="font-semibold xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
              举手规则库(RPA)
            </Text>
            <Input
              className="font-semibold p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] placeholder:text-white_A700 text-white_A700 w-[100%]"
              wrapClassName="2xl:mt-[16px] 3xl:mt-[19px] flex lg:mt-[12px] w-[100%] xl:mt-[14px]"
              name="rulelist"
              placeholder="规则列表"
              prefix={
                <Img
                  src="images/img_menu.svg"
                  className="lg:w-[9px] lg:ml-[5px] lg:mr-[6px] xl:w-[10px] xl:ml-[6px] xl:mr-[7px] 2xl:w-[12px] 2xl:ml-[6px] 2xl:mr-[8px] 3xl:w-[14px] 3xl:ml-[8px] 3xl:mr-[9px] my-[auto]"
                  alt="menu"
                />
              }
            ></Input>
            <Column className="items-center lg:mb-[486px] xl:mb-[556px] 2xl:mb-[625px] 3xl:mb-[751px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[35%]">
              <Row className="items-center w-[98%]">
                <Img
                  src="images/img_vector.svg"
                  className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] w-[18%]"
                  alt="Vector"
                />
                <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                  举手记录
                </Text>
              </Row>
              <Row className="items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] pl-[1px] py-[1px] w-[100%]">
                <Img
                  src="images/img_trash.svg"
                  className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mb-[1px] ml-[1px] xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"
                  alt="trash"
                />
                <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                  灰度测试
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_100 items-center lg:pb-[51px] xl:pb-[58px] 2xl:pb-[66px] 3xl:pb-[79px] w-[87%]">
            <Row className="border border-gray_300 border-solid justify-end lg:p-[5px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
              <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                OCR事件经理举手规则
              </Text>
              <Img
                src="images/img_edit.svg"
                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                alt="edit"
              />
              <Text className="font-medium lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                备注：-
              </Text>
              <Img
                src="images/img_edit_16X16.svg"
                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                alt="edit One"
              />
              <Button className="font-normal mb-[1px] lg:ml-[598px] xl:ml-[684px] 2xl:ml-[770px] 3xl:ml-[923px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[4%]">
                保存
              </Button>
              <Button
                className="font-normal mb-[1px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[6%]"
                variant="OutlineYellow900"
              >
                保存并灰度
              </Button>
              <Button
                className="font-normal mb-[1px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center w-[4%]"
                variant="OutlineBluegray100"
              >
                取消
              </Button>
            </Row>
            <Row className="xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
              <Img
                src="images/img_ticket.svg"
                className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] w-[1%]"
                alt="ticket"
              />
              <Img
                src="images/img_ticket_15X18.svg"
                className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mt-[1px] w-[1%]"
                alt="ticket One"
              />
              <Img
                src="images/img_computer.svg"
                className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"
                alt="computer"
              />
              <Img
                src="images/img_bookmark.svg"
                className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                alt="bookmark"
              />
              <Img
                src="images/img_download.svg"
                className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] mt-[1px] xl:w-[10px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px]"
                alt="download"
              />
              <Img
                src="images/img_trash_17X17.svg"
                className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                alt="trash One"
              />
              <Row
                className="bg-cover bg-repeat items-center lg:ml-[64px] xl:ml-[73px] 2xl:ml-[82px] 3xl:ml-[99px] lg:mt-[108px] xl:mt-[124px] 2xl:mt-[139px] 3xl:mt-[167px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[30%]"
                style={{ backgroundImage: "url('images/img_group49.svg')" }}
              >
                <Img
                  src="images/img_offer.svg"
                  className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] w-[4%]"
                  alt="offer"
                />
                <Text className="font-semibold xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                  TSS四级归档初筛：
                </Text>
                <Text className="font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] my-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                  AI应用产品中心...
                </Text>
                <div className="bg-light_blue_A700 lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] ml-[4px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"></div>
              </Row>
              <Row className="justify-between lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[45%]">
                <Text className="font-semibold lg:mt-[61px] xl:mt-[70px] 2xl:mt-[78px] 3xl:mt-[94px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                  AND
                </Text>
                <Img
                  src="images/img_vector1.svg"
                  className="xl:h-[104px] 2xl:h-[117px] 3xl:h-[140px] lg:h-[91px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[2%]"
                  alt="VectorOne"
                />
                <Column className="items-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] w-[10%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      AND
                    </Text>
                    <Img
                      src="images/img_vector2.svg"
                      className="lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] w-[24%]"
                      alt="VectorTwo"
                    />
                  </Row>
                  <Row className="justify-between ml-[auto] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] w-[90%]">
                    <Text className="font-semibold lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      OR
                    </Text>
                    <Img
                      src="images/img_vector3.svg"
                      className="3xl:h-[108px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] w-[26%]"
                      alt="VectorThree"
                    />
                  </Row>
                </Column>
                <Column className="w-[76%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:my-[14px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[22px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius12 w-[98%]">
                      <Text className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        客户UIN
                      </Text>
                      <RadioGroup
                        className="flex lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[1px] w-[76%]"
                        name="radiogroupone"
                      >
                        <Radio
                          value="undefined"
                          className="font-semibold mb-[2px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                          inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                          checked={false}
                          name="radiogroupone"
                          label="undefined"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="undefined1"
                          className="font-semibold ml-[3px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                          inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                          checked={false}
                          name="radiogroupone"
                          label="undefined1"
                        ></Radio>
                        <Radio
                          value="undefined2"
                          className="font-semibold ml-[3px] mt-[2px] xl:pl-[10px] 2xl:pl-[11px] 3xl:pl-[13px] lg:pl-[8px] pt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                          inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                          checked={false}
                          name="radiogroupone"
                          label="undefined2"
                          size="sm"
                        ></Radio>
                      </RadioGroup>
                      <div className="bg-light_blue_A700 lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] ml-[2px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"></div>
                    </Row>
                    <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:my-[14px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[22px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius12 w-[100%]">
                      <Text className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        工单状态
                      </Text>
                      <RadioGroup
                        className="flex ml-[4px] mt-[1px] w-[75%]"
                        name="radiogroupfour"
                      >
                        <Radio
                          value="undefined"
                          className="font-semibold mb-[2px] 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                          inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                          checked={false}
                          name="radiogroupfour"
                          label="undefined"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="undefined1"
                          className="font-semibold ml-[3px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                          inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                          checked={false}
                          name="radiogroupfour"
                          label="undefined1"
                        ></Radio>
                        <Radio
                          value="undefined"
                          className="font-semibold ml-[3px] xl:pl-[10px] 2xl:pl-[11px] 3xl:pl-[13px] lg:pl-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                          inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                          checked={false}
                          name="radiogroupfour"
                          label="  "
                        ></Radio>
                      </RadioGroup>
                      <div className="bg-light_blue_A700 lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"></div>
                    </Row>
                    <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:mr-[102px] xl:mr-[117px] 2xl:mr-[132px] 3xl:mr-[158px] lg:my-[14px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[22px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius12 w-[62%]">
                      <Text className="font-semibold lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        一键投诉
                      </Text>
                      <RadioGroup
                        className="ml-[4px] mt-[1px] w-[60%]"
                        name="radiogroupeight"
                      >
                        <Radio
                          value="undefined"
                          className="font-semibold 3xl:mr-[103px] lg:mr-[67px] xl:mr-[76px] 2xl:mr-[86px] 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                          inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                          checked={false}
                          name="radiogroupeight"
                          label="undefined"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="undefined1"
                          className="font-semibold lg:ml-[29px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[45px] lg:mr-[40px] xl:mr-[46px] 2xl:mr-[51px] 3xl:mr-[62px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] pt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                          inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                          checked={false}
                          name="radiogroupeight"
                          label="undefined1"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="true"
                          className="font-semibold mb-[1px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[87px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                          inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                          checked={false}
                          name="radiogroupeight"
                          label="true"
                        ></Radio>
                      </RadioGroup>
                      <div className="bg-light_blue_A700 lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] ml-[3px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"></div>
                    </Row>
                  </List>
                  <Row className="lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[81%]">
                    <Text className="font-semibold lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      AND
                    </Text>
                    <Img
                      src="images/img_vector2.svg"
                      className="lg:h-[51px] xl:h-[58px] 2xl:h-[65px] 3xl:h-[78px] lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] w-[4%]"
                      alt="VectorFour"
                    />
                    <List
                      className="gap-[0] min-h-[auto] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[81%]"
                      orientation="vertical"
                    >
                      <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:mr-[18px] xl:mr-[20px] 2xl:mr-[23px] 3xl:mr-[27px] lg:my-[14px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[22px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius12 w-[90%]">
                        <Text className="font-semibold lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                          处理时长
                        </Text>
                        <RadioGroup
                          className="ml-[4px] mt-[1px] w-[58%]"
                          name="radiogroupeleven"
                        >
                          <Radio
                            value="undefined"
                            className="font-semibold lg:mr-[60px] xl:mr-[68px] 2xl:mr-[77px] 3xl:mr-[92px] 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] 2xl:pl-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                            inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                            checked={false}
                            name="radiogroupeleven"
                            label="undefined"
                            size="sm"
                          ></Radio>
                          <Radio
                            value="undefined1"
                            className="font-semibold lg:ml-[29px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[45px] lg:mr-[33px] xl:mr-[38px] 2xl:mr-[42px] 3xl:mr-[51px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] pt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                            inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                            checked={false}
                            name="radiogroupeleven"
                            label="undefined1"
                            size="sm"
                          ></Radio>
                          <Radio
                            value="h"
                            className="font-semibold mb-[1px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[87px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                            inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                            checked={false}
                            name="radiogroupeleven"
                            label="h"
                            size="sm"
                          ></Radio>
                        </RadioGroup>
                        <div className="bg-light_blue_A700 lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] ml-[4px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"></div>
                      </Row>
                      <Row className="bg-white_A700 border border-gray_300 border-solid items-center lg:my-[14px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[22px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius12 w-[100%]">
                        <Text className="font-semibold lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                          客户有情绪
                        </Text>
                        <RadioGroup
                          className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] mt-[1px] w-[56%]"
                          name="radiogroupfourteen"
                        >
                          <Radio
                            value="undefined"
                            className="font-semibold 3xl:mr-[103px] lg:mr-[67px] xl:mr-[76px] 2xl:mr-[86px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                            inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                            checked={false}
                            name="radiogroupfourteen"
                            label="undefined"
                            size="sm"
                          ></Radio>
                          <Radio
                            value="undefined1"
                            className="font-semibold lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] lg:mr-[40px] xl:mr-[46px] 2xl:mr-[51px] 3xl:mr-[62px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] pt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                            inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                            checked={false}
                            name="radiogroupfourteen"
                            label="undefined1"
                            size="sm"
                          ></Radio>
                          <Radio
                            value="true"
                            className="font-semibold mb-[1px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[8px] xl:pl-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900"
                            inputClassName="h-[17.5px] mr-[5px] w-[17.5px]"
                            checked={false}
                            name="radiogroupfourteen"
                            label="true"
                          ></Radio>
                        </RadioGroup>
                        <div className="bg-light_blue_A700 lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] ml-[3px] rounded-radius50 xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"></div>
                      </Row>
                    </List>
                  </Row>
                </Column>
              </Row>
            </Row>
            <Stack className="lg:h-[167px] xl:h-[191px] 2xl:h-[214px] 3xl:h-[257px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[85px] xl:mt-[98px] w-[74%]">
              <div className="absolute bg-gray_500 lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] left-[0] rounded-radius8 top-[0] w-[18%]"></div>
              <Column
                className="absolute bg-cover bg-repeat lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[100%]"
                style={{ backgroundImage: "url('images/img_group1.svg')" }}
              >
                <Row className="items-center ml-[3px] w-[16%]">
                  <Img
                    src="images/img_file.svg"
                    className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] w-[8%]"
                    alt="file"
                  />
                  <Text className="font-medium ml-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    功能升级
                  </Text>
                  <Img
                    src="images/img_checkmark.svg"
                    className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[8%]"
                    alt="checkmark"
                  />
                  <Text className="font-medium ml-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    结构升级
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[20%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                    事件经理：
                  </Text>
                  <Row className="items-end justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] rounded-radius8 w-[50%]">
                    <Img
                      src="images/img_image1.png"
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius50 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                      alt="imageOne"
                    />
                    <Text className="font-semibold mb-[1px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      fisherhhyu
                    </Text>
                  </Row>
                  <Img
                    src="images/img_edit.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                    alt="edit Two"
                  />
                </Row>
                <Row className="ml-[2px] lg:mr-[10px] xl:mr-[12px] 2xl:mr-[13px] 3xl:mr-[16px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
                  <Img
                    src="images/img_info.svg"
                    className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                    alt="info"
                  />
                  <Text className="font-medium ml-[3px] mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                    话 术：
                  </Text>
                  <Column className="border border-gray_300 border-solid justify-end lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[90%]">
                    <Text className="font-semibold lg:leading-[12px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[90%]">
                      {
                        "工单{tid}处理情况已经满足“举手求助”场景规则，请及时寻求专项事件经理队列负责人{manager}协助。"
                      }
                      <br />
                      <br />
                      {"命中规则名称：{rname}"}
                      <br />
                      OCR“举手求助”场景规则详见链接：https://doc.weixin.qq.com/sheet/e3_AAIAGAZgACkQapz0TFzQ2SEGCHK3K?scode=AJEAIQdfAAoQqzFCs0AFEAWgbdAFw
                    </Text>
                  </Column>
                </Row>
                <Row className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[42%]">
                  <Text className="font-medium mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                    通知渠道：
                  </Text>
                  <Text className="font-semibold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                    企微通知
                  </Text>
                  <Switch
                    value={true}
                    className="xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[7%]"
                  />
                  <Text className="font-semibold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                    邮件通知
                  </Text>
                  <Switch
                    value={true}
                    className="xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[7%]"
                  />
                  <Text className="font-semibold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                    电话通知
                  </Text>
                  <Switch
                    value={false}
                    className="xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[7%]"
                  />
                </Row>
                <Row className="items-center mb-[2px] lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[31%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                    通知接受人：
                  </Text>
                  <Row className="items-end justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] rounded-radius8 w-[33%]">
                    <Img
                      src="images/img_image1.png"
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius50 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                      alt="imageOne One"
                    />
                    <Text className="font-semibold mb-[1px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      fisherhhyu
                    </Text>
                  </Row>
                  <Row className="items-end justify-center 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] rounded-radius8 w-[29%]">
                    <Img
                      src="images/img_futureliu.png"
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] rounded-radius50 lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                      alt="futureliu"
                    />
                    <Text className="font-semibold mb-[4px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      futureliu
                    </Text>
                  </Row>
                  <Img
                    src="images/img_edit.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                    alt="edit Three"
                  />
                </Row>
              </Column>
            </Stack>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EditrulePage;
