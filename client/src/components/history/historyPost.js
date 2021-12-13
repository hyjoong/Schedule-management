import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Form, Input } from "antd";
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
  const [files, setFiles] = useState([]);
  const { text, setText } = useInput(validateText);

  const handleUpload = (e) => {
    e.preventDefault();
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("image", img);
    const file = e.target.files[0];
    setFiles([...files, { uploadedFile: file }]);
    console.log("파일은:", files);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // formData.append("text", text);
      // console.log("전달되는 formData = ", formData);
      dispatch({
        type: ADD_BOARD,
        //   data: formData,
      });
    },
    [dispatch, text, files]
  );

  return (
    <PostWrapper>
      <Tab>
        <TabBack onClick={() => navigate("/")}>뒤로가기</TabBack>
        <TabTitle>글 작성 </TabTitle>
      </Tab>
      <Form onSubmit={onSubmit}>
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
          {!!files.length &&
            files.map((img, index) => (
              <PreviewImage
                src={img}
                alt="preview-img"
                key={`preview-image-${index + 1}`}
              />
            ))}
        </PreviewImageContainer>
        <TextInput
          tpye="text"
          placeholder="글자를 입력하세요"
          onChange={setText}
        />
        <Form.Item>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <RegisterButton type="submit" onClick={onSubmit}>
          등록
        </RegisterButton>
      </Form>
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
