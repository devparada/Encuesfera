import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

const BarProgress = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { className = "", value = 0, indicatorClassName = "", ...rest } = props;
  
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}
      {...rest}
    >
      <ProgressPrimitive.Indicator
        className={`h-full bg-blue-500 transition-all ${indicatorClassName}`}
        style={{ width: `${value}%` }}
      />
    </ProgressPrimitive.Root>
  );
});

BarProgress.displayName = "BarProgreso";

export { BarProgress };
