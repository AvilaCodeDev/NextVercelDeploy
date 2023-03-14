import { FC } from "react";

export const DarkLayout: FC = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'red',
        padding: '10px',
        borderRadious: '5px',
    }}>
        <h3>Dark Layout</h3>
        { children }
    </div>
  );
}

