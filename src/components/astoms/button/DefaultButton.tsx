import React from 'react';
import useStyles from './styles';

type ButtonProps = {
  text: string,
  small?: string,
  onClick?:(e:React.MouseEvent) => void,
}

const DefaultButon: React.FC<ButtonProps> = ({
  text,
  onClick,
  small = ''
}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${small}`} onClick={onClick}>{text}</div>
  );
};

export default DefaultButon;
