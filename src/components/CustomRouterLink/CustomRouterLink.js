import React, { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <RouterLink {...props} />
  </div>
));

export default CustomRouterLink;