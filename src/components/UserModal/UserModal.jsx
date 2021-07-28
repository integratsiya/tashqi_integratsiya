import React from "react";
import {
  ModalFlexBox,
  ModalFlexBoxInsideBox,
  ModalFlexBoxInsideTitle,
  ModalUserImage,
  ModalUserLicense,
  ModalUserNameCont,
  ModalUserNameContainer,
  UserModalContainer,
  UserModalHeader,
} from "./StyledUserModal";

const UserModal = () => {
  return (
    <div>
      <UserModalHeader>
        <UserModalContainer>
          <ModalUserNameContainer>
            <ModalUserImage></ModalUserImage>
            <ModalUserNameCont>
              Муҳаммаджонов Муҳаммаджон Муҳаммаджонивич
              <ModalUserLicense>
                Лицензияга эга шахс (адвокат мақомисиз)
              </ModalUserLicense>
            </ModalUserNameCont>
          </ModalUserNameContainer>
          <ModalFlexBox>
            <div>
              <ModalFlexBoxInsideBox>
                <ModalFlexBoxInsideTitle color="#878C99">
                LITSENZIYA RAQAMI
                </ModalFlexBoxInsideTitle>
                <ModalFlexBoxInsideTitle color="#4F4F4F" margin="8px 0 24px 0" fontSize="16px">
                SI 1244353
                </ModalFlexBoxInsideTitle>
              </ModalFlexBoxInsideBox>
              {/* ----------------------- */}
              <ModalFlexBoxInsideBox>
                <ModalFlexBoxInsideTitle color="#878C99">
                GUVOHNOMA RAQAMI
                </ModalFlexBoxInsideTitle>
                <ModalFlexBoxInsideTitle color="#4F4F4F" margin="8px 0 24px 0" fontSize="16px">
                SI 1244353
                </ModalFlexBoxInsideTitle>
              </ModalFlexBoxInsideBox>
              {/* ----------------------- */}
              <ModalFlexBoxInsideBox>
                <ModalFlexBoxInsideTitle color="#878C99">
                ADVOKATLIK TUZILMASI NOMI
                </ModalFlexBoxInsideTitle>
                <ModalFlexBoxInsideTitle color="#4F4F4F" margin="8px 0 24px 0" fontSize="16px">
                “SIYAVUSH HIMOYASI” адвокатлик фирмаси 
                </ModalFlexBoxInsideTitle>
              </ModalFlexBoxInsideBox>
              {/* ----------------------- */}
              <ModalFlexBoxInsideBox>
                <ModalFlexBoxInsideTitle color="#878C99">
                MANZIL
                </ModalFlexBoxInsideTitle>
                <ModalFlexBoxInsideTitle color="#4F4F4F" margin="8px 0 24px 0" fontSize="16px">
                Тошкент вилояти, Келес Йўли кўчаси, 59-уй
                </ModalFlexBoxInsideTitle>
              </ModalFlexBoxInsideBox>
            </div>
            <div>
              <ModalFlexBoxInsideBox>
                <ModalFlexBoxInsideTitle color="#878C99">
                LITSENZIYA BERILGAN SANA
                </ModalFlexBoxInsideTitle>
                <ModalFlexBoxInsideTitle color="#4F4F4F" margin="8px 0 24px 0" fontSize="16px">
                21.06.21
                </ModalFlexBoxInsideTitle>
              </ModalFlexBoxInsideBox>
              {/* ----------------------- */}
              <ModalFlexBoxInsideBox>
                <ModalFlexBoxInsideTitle color="#878C99">
                MAQOMI
                </ModalFlexBoxInsideTitle>
                <ModalFlexBoxInsideTitle color="#4F4F4F" margin="8px 0 24px 0" fontSize="16px">
                Фаолият юритаётган
                </ModalFlexBoxInsideTitle>
              </ModalFlexBoxInsideBox>
              {/* ----------------------- */}
              <ModalFlexBoxInsideBox>
                <ModalFlexBoxInsideTitle color="#878C99">
                YO‘NALISHI
                </ModalFlexBoxInsideTitle>
                <ModalFlexBoxInsideTitle color="#4F4F4F" margin="8px 0 24px 0" fontSize="16px">
                Фуқаролик ва иқтисодий, маъмурий ва жиноий 
                </ModalFlexBoxInsideTitle>
              </ModalFlexBoxInsideBox>
              {/* ----------------------- */}
              <ModalFlexBoxInsideBox>
                <ModalFlexBoxInsideTitle color="#878C99">
                TELEFON RAQAM
                </ModalFlexBoxInsideTitle>
                <ModalFlexBoxInsideTitle color="#4F4F4F" margin="8px 0 24px 0" fontSize="16px">
                8(94) 000 00 00
                </ModalFlexBoxInsideTitle>
              </ModalFlexBoxInsideBox>
            </div>
            <div>
              <ModalFlexBoxInsideBox>
                <ModalFlexBoxInsideTitle color="#878C99">
                KIM TOMONIDAN BERILGAN
                </ModalFlexBoxInsideTitle>
                <ModalFlexBoxInsideTitle color="#4F4F4F" margin="8px 0 24px 0" fontSize="16px">
                Тошкент вилояти
                </ModalFlexBoxInsideTitle>
              </ModalFlexBoxInsideBox>
              {/* ----------------------- */}
              <ModalFlexBoxInsideBox>
                <ModalFlexBoxInsideTitle color="#878C99">
                KIM TOMONIDAN BERILGAN
                </ModalFlexBoxInsideTitle>
                <ModalFlexBoxInsideTitle color="#4F4F4F" margin="8px 0 24px 0" fontSize="16px">
                SI 1244353
                </ModalFlexBoxInsideTitle>
              </ModalFlexBoxInsideBox>
            </div>
          </ModalFlexBox>
        </UserModalContainer>
      </UserModalHeader>
    </div>
  );
};

export default UserModal;
