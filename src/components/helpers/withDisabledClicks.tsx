import React from "react";

type WithDisabledClicksProps = {
  disableClicks: boolean;
};

const withDisabledClicks = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const ComponentWithDisabledClicks: React.FC<P & WithDisabledClicksProps> = ({
    disableClicks,
    ...props
  }) => {
    return (
      <div style={{ pointerEvents: disableClicks ? "none" : "auto" }}>
        <WrappedComponent {...(props as P)} />
      </div>
    );
  };

  return ComponentWithDisabledClicks;
};

export default withDisabledClicks;
