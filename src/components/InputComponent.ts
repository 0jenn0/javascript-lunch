type InputProps = {
  type: 'text' | 'url';
  name?: string;
  id?: string;
  required?: boolean;
  className?: string;
};

export default function InputComponent({ type, name, id, required, className }: InputProps) {
  const getTemplate = () => {
    const template = document.createElement('template');
    template.innerHTML = `
        <input 
          type="${type}"
          ${name ? `name="${name}"` : ''}
          ${id ? `id="${id}"` : ''}
          ${required ? 'required' : ''}
          ${className ? `class="${className}"` : ''}
        >
      `;
    return template.content;
  };

  return { getTemplate };
}
