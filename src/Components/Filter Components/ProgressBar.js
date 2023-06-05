import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  ${"" /* padding: 0 16px; */}
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;

  :before {
    content: "";
    position: absolute;
    background: #5d8b2f33;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: "";
    position: absolute;
    background: #5d8b2f;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid
    ${({ step }) => (step === "completed" ? "#5D8B2F" : "#5d8b2f33")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 19px;
  color: #5d8b2f;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  width: max-content;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 19px;
  color: #5d8b2f;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 60px !important;
`;

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #5d8b2f;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  border-radius: 12px !important;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #5d8b2f33;
    color: #000000;
    cursor: not-allowed;
  }
`;

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #5d8b2f;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`;

const steps = [
  {
    label: "0-3km",
    step: 1,
  },
  {
    label: "0-8km",
    step: 2,
  },
  {
    label: "0-15km",
    step: 3,
  },
  {
    label: "0-25km",
    step: 4,
  },
  {
    label: "0-50km",
    step: 5,
  },
];

const ProgressSteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={activeStep >= step ? "completed" : "incomplete"}>
              {activeStep > step ? (
                <CheckMark>L</CheckMark>
              ) : (
                <StepCount>{step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
      <ButtonsContainer>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
          Previous
        </ButtonStyle>
        <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
          Next
        </ButtonStyle>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default ProgressSteps;
