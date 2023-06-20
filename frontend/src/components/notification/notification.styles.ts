import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 0 32px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 16px 24px 16px 24px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    width: 100%;
    gap: 8px;
`;

export const MessageDescription = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    word-wrap: anywhere;
`;

export const Title = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`;

export const MessageLink = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`;

export const CloseAction = styled.div`
    align-self: baseline;
    cursor: pointer;
    margin-top: 4px;
    width: 16px;
    height: 16px;
`;
