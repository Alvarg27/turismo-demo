import * as Icons from "react-icons/fa";

const FontAwesome = ({ name, className, style }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.FaBeer style={style} className={className} />;
  }
  return <IconComponent style={style} className={className} />;
};

export default FontAwesome;
