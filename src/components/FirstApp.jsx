//Declarar tipo a las props {title} es como ts
import PropTypes from "prop-types";

export const FirstApp = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};

//Esto sirve para dar un valor default a las props
// FirstApp.defaultProps = {
//   title: "Hello Tapia",
// };
