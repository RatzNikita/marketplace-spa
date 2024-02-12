import styled, {css} from "styled-components";
import React, {useState} from "react";
import {ReactComponent as ExpandMore} from "shared/images/expand-more.svg";
import {ReactComponent as Close} from "shared/images/close.svg";
import {UseFormRegisterReturn} from "react-hook-form";


const SelectContainer = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

const SelectLabel = styled.p`
  font-weight: 400;
  margin: 0;
  color: var(--midgrey)
`

const SelectLabelButton = styled.button<{open: boolean}>`
  padding: 0.3rem 0.5rem;
  text-align: start;
  min-width: 12rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: end;
  box-sizing: border-box;
  border: ${p => p.open ? '1px solid dodgerblue' : '1px solid var(--lightgrey)'};
  cursor: pointer;
  transition: 0.3s ease;
  
  &:hover {
    background-color: #dedede;
  }
`;

const SelectLabelArrow = styled(ExpandMore)<{ open: boolean }>`
  transition: all 0.2s;
  ${(p) =>
    p.open && css`
            transform: rotateX(180deg);
          `}
`

const CloseButton = styled(Close)`
  transition: all .2s;
  display: block;
  margin-left: auto;
  opacity: 0.6;

  & :hover {
    color: dodgerblue;
    opacity: 1;
  }
`

const DropdownStyle = styled.div<{ isVisible: boolean }>`
  position: absolute;
  z-index: 5;
  top: 100%;
  right: 0;
  max-height: 20vmax;
  min-width: 12rem;
  max-width: 17rem;
  overflow-x: hidden;
  overflow-y: scroll;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  color: var(--darkgrey);
  background-color: #f1f1f1;
  box-sizing: border-box;
  transition: max-height 0.2s ease;

  &::-webkit-scrollbar {
    opacity: 1;
  }

  &::-webkit-scrollbar-track {
    background-color: #e8e8e8;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b4b4b4;
  }

  ${(p) =>
          p.isVisible !== true &&
          css`
            max-height: 40px;
            visibility: hidden;
          `}

`;

const Overlay = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  cursor: default;
  display: ${p => p.isVisible ? 'block' : 'none'};
`

const DropdownItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 0.4rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--darkgrey);
  cursor: pointer;

  ${(p) =>
    p.active &&
    css`
            color: dodgerblue;
            font-weight: 500;
          `}
  &:hover, :focus, :focus:hover {
    background-color: dodgerblue;
    outline: none;
  }
`;

interface Props {
    label: string,
    values: string[],
    onChange: (value: string | null) => void,
}


function Select({label, values, onChange}: Readonly<Props>) {
    const [currentValue, setCurrentValue] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (value: string) => {
        setCurrentValue(value)
        onChange(value);
        handleClose();
    };

    const handleClean = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation()
        setCurrentValue('')
        onChange(null)
    }


    return (
        <>
            <SelectContainer>
                <SelectLabel>{label}</SelectLabel>
                <SelectLabelButton open={open} onClick={handleOpen}>
                    {currentValue !== "" ? currentValue : ''}
                    {currentValue && <CloseButton onClick={handleClean}/>}
                    <SelectLabelArrow open={open}/>
                </SelectLabelButton>
                <DropdownStyle isVisible={open}>
                    {values.map((value, index) => (
                        <DropdownItem
                            onClick={() => handleChange(value)}
                            active={value === currentValue}
                            key={value}
                        >
                            {value}
                        </DropdownItem>
                    ))}
                </DropdownStyle>
            </SelectContainer>
            <Overlay onClick={handleClose} isVisible={open}/>
        </>
    );
}


export default Select;