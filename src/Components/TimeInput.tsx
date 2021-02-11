import styled from "styled-components";

export default function TimeInput(props: {
  minutes: number;
  running: boolean;
  setMinutes: Function;
}) {
  const { minutes, setMinutes, running } = props;

  return (
    <>
      <StyleTimeInput
        type="number"
        min={0}
        max={120}
        value={minutes}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
        disabled={running}
      />
      <h4>minutes</h4>
    </>
  );
}

const StyleTimeInput = styled.input`
  border: 1px dashed #ccff33;
  font-size: 2em;
  text-align: center;
  outline: none;
  background: transparent;
  color: white;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:disabled {
    color: gray;
  }
`;
