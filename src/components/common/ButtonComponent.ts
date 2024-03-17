type Props = {
  id: string;
  text: string;
  variant: 'primary' | 'secondary';
  type?: 'button';
  isDisabled?: boolean;
};

const ButtonComponent = ({ id, text, variant, type, isDisabled = false }: Props) => {
  const button = document.createElement('button');
  if (type) {
    button.type = type;
  }
  button.classList.add('button', `button--${variant}`, 'text-caption');
  button.textContent = text;
  button.id = id;

  if (isDisabled === true) {
    button.disabled = true;
  }

  const create = () => button;

  return {
    create
  };
};

export default ButtonComponent;
