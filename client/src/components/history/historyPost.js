import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Tab from "../@commons/tab";
import { FlexCenter } from "../shared/flexContainer";
import { useNavigate } from "react-router-dom";
import { ADD_BOARD } from "../../redux/actionType";
import useInput from "../../hooks/useinput";
import { validateText } from "../../validations/plan";

const HistoryPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [files, setFiles] = useState("");
  const [imgBase64, setImgBase64] = useState("");
  const { text, setText } = useInput(validateText);

  const handleUpload = (e) => {
    e.preventDefault();
    const img = e.target.files[0];

    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setFiles(e.target.files[0]);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("게시글 등록");
    let formData = new FormData();
    formData.append("text ", text);
    formData.append("image", files);
    dispatch({
      type: ADD_BOARD,
      data: formData,
    });
  };

  return (
    <PostWrapper>
      <Tab>
        <TabBack onClick={() => navigate("/")}>뒤로가기</TabBack>
        <TabTitle>글 작성 </TabTitle>
      </Tab>
      <form onSubmit={onSubmit}>
        <FileUploadContainer>
          <Label>
            <LabelText>+</LabelText>
            <InputElement
              type="file"
              accept="image/*"
              onChange={handleUpload}
            />
          </Label>
        </FileUploadContainer>
        <PreviewImageContainer>
          {!!files && <PreviewImage src={files} alt="preview-img" />}
        </PreviewImageContainer>
        <TextInput
          tpye="text"
          placeholder="글자를 입력하세요"
          onChange={setText}
        />

        <RegisterButton type="submit">등록</RegisterButton>
      </form>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  width: 90%;
  height: 90%;
  margin: 1rem auto 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem 1rem 0 0;
`;

const TabTitle = styled(FlexCenter)`
  height: 100%;
  cursor: pointer;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const TabBack = styled.button`
  position: absolute;
  top: 10px;
  left: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  padding: 0.3rem;
  cursor: pointer;
`;

// const PostForm = styled.form``;

const FileUploadContainer = styled.div`
  margin: 1rem;
  min-height: 120px;
  display: flex;
`;

const PreviewImageContainer = styled.div`
  display: flex;
  height: 120px;
`;

const PreviewImage = styled.img`
  width: 120px;
  height: 100%;
  margin: 0 5px;
`;

const Label = styled.label`
  display: block;
  width: 120px;
  height: 120px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: wheat;
  background-color: #f6f8fa;
  cursor: pointer;
`;

const LabelText = styled.span``;

const InputElement = styled.input`
  display: none;
  width: 100%;
  height: 100%;
`;

const TextInput = styled.input`
  width: 60%;
  height: 3.375rem;
  padding: 0px 19px;
  margin: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  ::placeholder {
    color: #8492a6;
  }
`;

const RegisterButton = styled.button`
  padding: 0.3rem;
  margin: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  cursor: pointer;
`;

export default HistoryPost;
