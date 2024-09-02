const addCursor = (props: CProps) => {
  if (props) {
    const contextCursor = document.createElement("div");
    contextCursor.setAttribute(
      "style",
      `transform: translate(-200px, -200px); height: ${props.radius}px; width: ${props.radius}px; pointer-events: none; z-index: 9999;`
    );
    contextCursor.setAttribute("class", "c-cursor");
    document.body.prepend(contextCursor);
    return contextCursor;
  }
};

export default addCursor;
