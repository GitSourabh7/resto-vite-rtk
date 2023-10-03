import styled from "styled-components";

// Styled components
export const Container = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin: 1rem;
  }
`;

export const Section = styled.div`
  margin: 1rem 2rem 0.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const SubHeading = styled.h2`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: #007bff;
  }
`;

export const AddressContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

export const AddressTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const AddressText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
`;
