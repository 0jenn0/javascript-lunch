import restaurantAPI from '../domain/restaurantAPI';
import { CategoryValues, RestaurantInfo } from '../types/types';
import FormItemComponent from './FormItemComponent';
import InputComponent from './InputComponent';
import TextareaComponent from './TextareaComponent';
import SelectComponent from './common/SelectComponent';

export function ModalComponent() {
  const getTemplate = () => {
    const template = document.createElement('template');
    template.innerHTML = /*html*/ `
      <div class="modal">
        <div class="modal-backdrop"></div>
        <div class="modal-container">
          <h2 class="modal-title text-title">새로운 음식점</h2>
          <form>
            ${
              FormItemComponent({
                labelText: '카테고리',
                label: 'category',
                children: SelectComponent({
                  name: 'category',
                  id: 'category',
                  required: true,
                  className: 'custom-select',
                  options: [
                    { value: '', label: '선택해 주세요' },
                    { value: '한식', label: '한식' },
                    { value: '중식', label: '중식' },
                    { value: '일식', label: '일식' },
                    { value: '양식', label: '양식' },
                    { value: '아시안', label: '아시안' },
                    { value: '기타', label: '기타' }
                  ]
                }).getTemplate()
              }).getTemplate().firstElementChild!.outerHTML
            }

            ${
              FormItemComponent({
                labelText: '이름',
                label: 'name',
                children: InputComponent({
                  type: 'text',
                  name: 'name',
                  id: 'name',
                  required: true,
                  className: 'custom-input'
                }).getTemplate()
              }).getTemplate().firstElementChild!.outerHTML
            }

            ${
              FormItemComponent({
                labelText: '거리(도보 이동 시간)',
                label: 'distance',
                children: SelectComponent({
                  name: 'distance',
                  id: 'distance',
                  required: true,
                  className: 'custom-select',
                  options: [
                    { value: '', label: '선택해 주세요' },
                    { value: '5', label: '5분 내' },
                    { value: '10', label: '10분 내' },
                    { value: '15', label: '15분 내' },
                    { value: '20', label: '20분 내' },
                    { value: '30', label: '30분 내' }
                  ]
                }).getTemplate()
              }).getTemplate().firstElementChild!.outerHTML
            }

            ${
              FormItemComponent({
                labelText: '설명',
                label: 'description',
                children: TextareaComponent({
                  name: 'description',
                  id: 'description',
                  cols: 30,
                  rows: 5,
                  className: 'custom-textarea'
                }).getTemplate()
              }).getTemplate().firstElementChild!.outerHTML
            }

            ${
              FormItemComponent({
                labelText: '참고 링크',
                label: 'link',
                children: InputComponent({
                  type: 'text',
                  name: 'link',
                  id: 'link',
                  className: 'custom-input'
                }).getTemplate()
              }).getTemplate().firstElementChild!.outerHTML
            }

            <div class="button-container">
              <button type="button" class="button button--secondary text-caption">취소하기</button>
              <button class="button button--primary text-caption">추가하기</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const node = template.content;
    console.log('아좀!!', node);
    return node;
  };

  const setEvent = (): void => {
    const addButton = document.querySelector('.button--primary') as HTMLButtonElement;
    addButton.addEventListener('click', getValue);
  };

  const getValue = (): RestaurantInfo => {
    const categoryValue = (document.getElementById('category') as HTMLSelectElement).value;
    const nameValue = (document.getElementById('name') as HTMLInputElement).value;
    const distanceValue = (document.getElementById('distance') as HTMLSelectElement).value;
    const descriptionValue = (document.getElementById('description') as HTMLTextAreaElement).value;
    const linkValue = (document.getElementById('link') as HTMLInputElement).value;

    const modalValues: RestaurantInfo = {
      category: categoryValue as CategoryValues,
      name: nameValue,
      distance: Number(distanceValue),
      description: descriptionValue,
      link: linkValue
    };
    restaurantAPI.save(modalValues);
    return modalValues;
  };

  return {
    getTemplate,
    setEvent,
    getValue
  };
}
