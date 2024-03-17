type Props = {
  labelText: string;
  label: string;
  children: HTMLElement;
  isRequired?: boolean;
  description?: string;
};

// export default function FormItemComponent({
//   labelText,
//   label,
//   children,
//   isRequired = true
// }: Props) {
//   const getTemplate = () => {
//     const template = document.createElement('template');
//     const childrenHTML = children.firstElementChild?.outerHTML || '';
//     template.innerHTML = `
//         <div class="form-item ${isRequired ? 'form-item--required' : ''}">
//           <label for="${label}" class="text-caption">${labelText}</label>
//           ${childrenHTML}
//         </div>
//       `;
//     return template.content;
//   };

//   return { getTemplate };
// }

const FormItemComponent = ({ labelText, label, children, isRequired = true }: Props) => {
  const containerDiv = document.createElement('div');
  containerDiv.className = `form-item ${isRequired ? 'form-item--required' : ''}`;

  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', label);
  labelElement.className = 'text-caption';
  labelElement.textContent = labelText;

  containerDiv.appendChild(labelElement);
  containerDiv.appendChild(children);

  const create = () => containerDiv;

  return {
    create
  };
};

export default FormItemComponent;
